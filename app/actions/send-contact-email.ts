"use server"

import { z } from "zod"
import { Resend } from 'resend'

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

// Define a schema for validation
const contactFormSchema = z.object({
  name: z.string().min(1, "名前は必須です。"),
  email: z.string().email("有効なメールアドレスを入力してください。"),
  course: z.string().min(1, "コースを選択してください。"),
  subCourse: z.string().optional(), // New field for sub-course
  memo: z.string().optional(),
})

export async function sendContactEmail(prevState: any, formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const course = formData.get("course")
  const subCourse = formData.get("subCourse") // Get the new sub-course field
  const memo = formData.get("memo")

  // Validate input
  const validation = contactFormSchema.safeParse({ name, email, course, subCourse, memo })

  if (!validation.success) {
    return {
      success: false,
      message: "入力内容に誤りがあります。",
      errors: validation.error.flatten().fieldErrors,
    }
  }

  // Send email using Resend
  try {
    // 检查API密钥是否配置
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'your_resend_api_key_here') {
      console.error('RESEND_API_KEY is not properly configured')
      return { success: false, message: 'メール送信の設定に問題があります。管理者にお問い合わせください。' }
    }

    console.log('Sending admin email...')
    // 发送给管理员的邮件（原有功能）
    const adminEmailResult = await resend.emails.send({
      from: 'no-reply@nikeisya.co.jp', // Resend验证的发送域名
      to: 'zhengppp691@gmail.com', // 管理员邮箱
      replyTo: email as string, // 回复时会自动发送给填表人
      subject: `新しいお問い合わせフォームの送信 - ${name} 様より`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #9333ea; border-bottom: 2px solid #9333ea; padding-bottom: 10px;">
            新しいお問い合わせ - ${name} 様より
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">お客様情報</h3>
            <p><strong>お名前:</strong> ${name}</p>
            <p><strong>メールアドレス:</strong> ${email}</p>
            <p style="color: #059669; font-size: 14px;"><em>※ このメールに返信すると、お客様に直接返信されます</em></p>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">コース情報</h3>
            <p><strong>選択コース:</strong> ${course}</p>
            ${subCourse ? `<p><strong>詳細コース:</strong> ${subCourse}</p>` : ''}
          </div>
          
          ${memo ? `
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #92400e; margin-top: 0;">メッセージ</h3>
            <p style="white-space: pre-wrap;">${memo}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>このメールは二継社のお問い合わせフォームから送信されました。</p>
            <p>送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}</p>
          </div>
        </div>
      `,
    })
    
    console.log('Admin email response:', JSON.stringify(adminEmailResult, null, 2))
    
    if (adminEmailResult.data?.id) {
      console.log('✅ Admin email sent successfully with ID:', adminEmailResult.data.id)
    } else {
      console.error('❌ Admin email failed - no ID returned')
      console.error('Admin email error:', adminEmailResult.error)
    }

    console.log('Sending user confirmation email...')
    // 发送给用户的确认邮件
    const userEmailResult = await resend.emails.send({
      from: 'no-reply@nikeisya.co.jp', // Resend验证的发送域名
      to: email as string, // 发送给表单填写者
      subject: 'お問い合わせありがとうございます - 二継社',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #9333ea; border-bottom: 2px solid #9333ea; padding-bottom: 10px;">
            お問い合わせありがとうございます
          </h2>
          
          <p style="font-size: 16px; color: #374151; margin-bottom: 20px;">
            ${name} 様
          </p>
          
          <p style="color: #374151; line-height: 1.6;">
            この度は、二継社にお問い合わせいただき、誠にありがとうございます。<br>
            以下の内容でお問い合わせを承りました。
          </p>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">お問い合わせ内容</h3>
            <p><strong>選択コース:</strong> ${course}</p>
            ${subCourse ? `<p><strong>詳細コース:</strong> ${subCourse}</p>` : ''}
            ${memo ? `<p><strong>メッセージ:</strong></p><p style="white-space: pre-wrap;">${memo}</p>` : ''}
          </div>
          
          <p style="color: #374151; line-height: 1.6;">
            担当者が内容を確認次第、メールにてご連絡いたします。<br>
            通常、1-2営業日以内にご返信いたします。
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>二継社</p>
            <p>この自動配信メールに返信しないでください。</p>
          </div>
        </div>
      `,
    })
    
    console.log('User email response:', JSON.stringify(userEmailResult, null, 2))
    
    if (userEmailResult.data?.id) {
      console.log('✅ User confirmation email sent successfully with ID:', userEmailResult.data.id)
    } else {
      console.error('❌ User confirmation email failed - no ID returned')
      console.error('User email error:', userEmailResult.error)
    }
    
    // 检查两个邮件的发送状态
    const adminSuccess = adminEmailResult.data?.id ? true : false
    const userSuccess = userEmailResult.data?.id ? true : false
    
    console.log('=== EMAIL SENDING SUMMARY ===')
    console.log(`Admin email (${adminEmailResult.data?.id || 'FAILED'}): ${adminSuccess ? '✅ SUCCESS' : '❌ FAILED'}`)
    console.log(`User email (${userEmailResult.data?.id || 'FAILED'}): ${userSuccess ? '✅ SUCCESS' : '❌ FAILED'}`)
    console.log('===============================')
    
    if (adminSuccess && userSuccess) {
      console.log('🎉 Both emails sent successfully!')
      return { success: true, message: 'お問い合わせが正常に送信されました。ありがとうございます！' }
    } else if (userSuccess) {
      console.log('⚠️ User email sent, but admin email failed')
      return { success: true, message: 'お問い合わせを受信しました。管理者への通知に問題がありましたが、お客様への確認メールは送信されました。' }
    } else if (adminSuccess) {
      console.log('⚠️ Admin email sent, but user email failed')
      return { success: true, message: 'お問い合わせを受信しました。確認メールの送信に問題がありましたが、管理者には通知されました。' }
    } else {
      console.log('❌ Both emails failed')
      return { success: false, message: 'メールの送信に失敗しました。しばらくしてから再度お試しください。' }
    }
  } catch (error) {
    console.error('Failed to send email:', error)
    return { success: false, message: 'メールの送信に失敗しました。しばらくしてから再度お試しください。' }
  }
}
