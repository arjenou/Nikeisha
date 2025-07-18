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
    await resend.emails.send({
      from: 'onboarding@resend.dev', // 使用Resend验证的发送域名
      to: process.env.CONTACT_EMAIL || 'your-email@example.com', // 您想接收邮件的邮箱地址
      subject: '新しいお問い合わせフォームの送信 - NKS教育',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #9333ea; border-bottom: 2px solid #9333ea; padding-bottom: 10px;">
            新しいお問い合わせ
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">お客様情報</h3>
            <p><strong>お名前:</strong> ${name}</p>
            <p><strong>メールアドレス:</strong> ${email}</p>
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
            <p>このメールはNKS教育のお問い合わせフォームから送信されました。</p>
            <p>送信日時: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}</p>
          </div>
        </div>
      `,
    })
    
    console.log('Email sent successfully!')
    return { success: true, message: 'お問い合わせが正常に送信されました。ありがとうございます！' }
  } catch (error) {
    console.error('Failed to send email:', error)
    return { success: false, message: 'メールの送信に失敗しました。しばらくしてから再度お試しください。' }
  }
}
