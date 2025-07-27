"use client"

import { useActionState, useState } from "react" // Import useState
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { sendContactEmail } from "@/app/actions/send-contact-email"
import { courseCategories } from "./popular-topics" // Import course data
import { trackEvent } from "@/components/seo/google-analytics"

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, null)
  const [selectedCourseCategoryTitle, setSelectedCourseCategoryTitle] = useState<string | undefined>(undefined) // State for selected main course

  // Filter out Japanese course for contact form
  const contactFormCourseCategories = courseCategories.filter(category => category.titleEn !== "Japanese Course")

  // Find the selected course category to get its sub-courses
  const selectedCategory = contactFormCourseCategories.find((category) => category.title === selectedCourseCategoryTitle)
  const subCourses = selectedCategory ? selectedCategory.courses : []

  // Handle course selection tracking
  const handleCourseSelection = (value: string) => {
    setSelectedCourseCategoryTitle(value)
    trackEvent('course_select', 'contact_form', value)
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold mb-2">お問い合わせ</p>
          <h2 className="text-3xl font-bold text-gray-900">お問い合わせフォーム</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            ご質問やご要望がございましたら、以下のフォームにご記入ください。
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form action={formAction} className="space-y-6">
            <div>
              <Label htmlFor="name">お名前</Label>
              <Input id="name" name="name" type="text" placeholder="お名前" required disabled={isPending} />
              {state?.errors?.name && <p className="text-red-500 text-sm mt-1">{state.errors.name}</p>}
            </div>

            <div>
              <Label htmlFor="email">メールアドレス</Label>
              <Input id="email" name="email" type="email" placeholder="メールアドレス" required disabled={isPending} />
              {state?.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="course">選択コース</Label>
              <Select
                name="course"
                disabled={isPending}
                onValueChange={handleCourseSelection} // Update state on change
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="コースを選択してください" />
                </SelectTrigger>
                <SelectContent>
                  {contactFormCourseCategories.map((category) => (
                    <SelectItem key={category.titleEn} value={category.title}>
                      {category.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {state?.errors?.course && <p className="text-red-500 text-sm mt-1">{state.errors.course}</p>}
            </div>

            {/* New Sub-Course Dropdown */}
            <div>
              <Label htmlFor="subCourse">詳細コース</Label>
              {/* Disable the Select until a main course is chosen.
                 Ensure every SelectItem has a non-empty value to satisfy Radix/ shadcn validation. */}
              <Select name="subCourse" disabled={isPending || !selectedCourseCategoryTitle}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="詳細コースを選択してください" />
                </SelectTrigger>
                <SelectContent>
                  {subCourses.length > 0 ? (
                    subCourses.map((subCourse, index) => (
                      <SelectItem key={index} value={subCourse}>
                        {subCourse}
                      </SelectItem>
                    ))
                  ) : (
                    /* Provide a non-empty dummy value so the component validates,
                       but keep it disabled so users can’t select it. */
                    <SelectItem value="placeholder" disabled>
                      まずコースを選択してください
                    </SelectItem>
                  )}
                </SelectContent>
              </Select>
              {state?.errors?.subCourse && <p className="text-red-500 text-sm mt-1">{state.errors.subCourse}</p>}
            </div>

            <div>
              <Label htmlFor="memo">メモ</Label>
              <Textarea id="memo" name="memo" placeholder="ご質問やご要望など" rows={5} disabled={isPending} />
              {state?.errors?.memo && <p className="text-red-500 text-sm mt-1">{state.errors.memo}</p>}
            </div>

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isPending}>
              {isPending ? "送信中..." : "送信"}
            </Button>

            {state?.message && (
              <p className={`mt-4 text-center ${state.success ? "text-green-600" : "text-red-600"}`}>{state.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
