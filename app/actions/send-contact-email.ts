"use server"

import { z } from "zod"

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

  // In a real application, you would integrate an email sending service here.
  // For example, using Resend:
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // try {
  //   await resend.emails.send({
  //     from: 'onboarding@resend.dev', // Your verified sender email
  //     to: 'your-designated-email@example.com', // The email address you want to receive the form content
  //     subject: '新しいお問い合わせフォームの送信',
  //     html: `
  //       <p><strong>名前:</strong> ${name}</p>
  //       <p><strong>メールアドレス:</strong> ${email}</p>
  //       <p><strong>選択コース:</strong> ${course}</p>
  //       ${subCourse ? `<p><strong>詳細コース:</strong> ${subCourse}</p>` : ''}
  //       <p><strong>メモ:</strong> ${memo || 'なし'}</p>
  //     `,
  //   });
  //   console.log('Email sent successfully!');
  //   return { success: true, message: 'お問い合わせが正常に送信されました。' };
  // } catch (error) {
  //   console.error('Failed to send email:', error);
  //   return { success: false, message: 'メールの送信に失敗しました。' };
  // }

  // For demonstration, we'll just log the data and simulate success.
  console.log("お問い合わせフォームの内容:")
  console.log(`名前: ${name}`)
  console.log(`メールアドレス: ${email}`)
  console.log(`選択コース: ${course}`)
  console.log(`詳細コース: ${subCourse || "なし"}`) // Log the new field
  console.log(`メモ: ${memo || "なし"}`)

  // Simulate a delay for network request
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { success: true, message: "お問い合わせが正常に送信されました。" }
}
