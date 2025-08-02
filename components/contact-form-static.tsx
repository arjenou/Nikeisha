"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { courseCategories } from "./popular-topics"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    subCourse: "",
    memo: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [selectedCourseCategoryTitle, setSelectedCourseCategoryTitle] = useState<string | undefined>(undefined)

  // Find the selected course category to get its sub-courses
  const selectedCategory = courseCategories.find((category) => category.title === selectedCourseCategoryTitle)
  const subCourses = selectedCategory ? selectedCategory.courses : []

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    // Basic validation
    if (!formData.name || !formData.email || !formData.course) {
      setMessage({ type: 'error', text: '必須項目を入力してください。' })
      setIsSubmitting(false)
      return
    }

    try {
      // Simulate email sending (replace with actual service like EmailJS)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log("お問い合わせフォームの内容:", formData)
      
      setMessage({ type: 'success', text: 'お問い合わせを受け付けました。後ほどご連絡いたします。' })
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        course: "",
        subCourse: "",
        memo: ""
      })
      setSelectedCourseCategoryTitle(undefined)
      
    } catch (error) {
      setMessage({ type: 'error', text: '送信に失敗しました。再度お試しください。' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleCourseChange = (value: string) => {
    setSelectedCourseCategoryTitle(value)
    handleInputChange('course', value)
    handleInputChange('subCourse', '') // Reset sub-course when main course changes
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
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            お急ぎの場合は、お電話でもお問い合わせいただけます：
            <a href="tel:0366272521" className="text-purple-600 font-semibold hover:text-purple-700 ml-2">
              📞 03-6627-2521
            </a>
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">お名前</Label>
              <Input 
                id="name" 
                type="text" 
                placeholder="お名前" 
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required 
                disabled={isSubmitting} 
              />
            </div>

            <div>
              <Label htmlFor="email">メールアドレス</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="メールアドレス" 
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required 
                disabled={isSubmitting} 
              />
            </div>

            <div>
              <Label htmlFor="course">選択コース</Label>
              <Select
                value={formData.course}
                onValueChange={handleCourseChange}
                disabled={isSubmitting}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="コースを選択してください" />
                </SelectTrigger>
                <SelectContent>
                  {courseCategories.map((category) => (
                    <SelectItem key={category.titleEn} value={category.title}>
                      {category.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="subCourse">詳細コース</Label>
              <Select 
                value={formData.subCourse}
                onValueChange={(value) => handleInputChange('subCourse', value)}
                disabled={isSubmitting || !selectedCourseCategoryTitle}
              >
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
                    <SelectItem value="placeholder" disabled>
                      まずコースを選択してください
                    </SelectItem>
                  )}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="memo">メモ</Label>
              <Textarea 
                id="memo" 
                placeholder="ご質問やご要望など" 
                rows={5} 
                value={formData.memo}
                onChange={(e) => handleInputChange('memo', e.target.value)}
                disabled={isSubmitting} 
              />
            </div>

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
              {isSubmitting ? "送信中..." : "送信"}
            </Button>

            {message && (
              <p className={`mt-4 text-center ${message.type === 'success' ? "text-green-600" : "text-red-600"}`}>
                {message.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
