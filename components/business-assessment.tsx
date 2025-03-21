"use client"

import { useState } from "react"
import { AssessmentForm } from "./assessment-form"
import { AssessmentResults } from "./assessment-results"
import { WelcomePage } from "./welcome-page"
import { UserInfoForm } from "./user-info-form"
import { categories, type CategoryScore } from "@/lib/assessment-data"

export function BusinessAssessment() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [showUserInfo, setShowUserInfo] = useState(false)
  const [step, setStep] = useState(0)
  const [scores, setScores] = useState<Record<string, number[]>>(
    Object.fromEntries(categories.map((cat) => [cat.id, Array(5).fill(3)])),
  )
  const [showResults, setShowResults] = useState(false)
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  const handleScoreChange = (categoryId: string, questionIndex: number, score: number) => {
    setScores((prev) => ({
      ...prev,
      [categoryId]: prev[categoryId].map((s, i) => (i === questionIndex ? score : s)),
    }))
  }

  const handleNext = () => {
    if (step < categories.length - 1) {
      setStep(step + 1)
      window.scrollTo(0, 0)
    } else {
      setShowResults(true)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleReset = () => {
    setScores(Object.fromEntries(categories.map((cat) => [cat.id, Array(5).fill(3)])))
    setStep(0)
    setShowResults(false)
    setShowWelcome(true)
    setShowUserInfo(false)
    window.scrollTo(0, 0)
  }

  const handleStart = () => {
    setShowWelcome(false)
    setShowUserInfo(true)
    window.scrollTo(0, 0)
  }

  const handleUserInfoSubmit = (firstName: string, lastName: string, email: string) => {
    setUserInfo({ firstName, lastName, email })
    setShowUserInfo(false)
    window.scrollTo(0, 0)
  }

  const calculateCategoryScores = (): CategoryScore[] => {
    return categories.map((category) => {
      const categoryScores = scores[category.id]
      const total = categoryScores.reduce((sum, score) => sum + score, 0)
      const average = total / categoryScores.length
      const percentage = (average / 5) * 100

      return {
        category: category.name,
        score: average,
        percentage,
        categoryId: category.id,
      }
    })
  }

  if (showWelcome) {
    return <WelcomePage onStart={handleStart} />
  }

  if (showUserInfo) {
    return <UserInfoForm onSubmit={handleUserInfoSubmit} />
  }

  if (showResults) {
    return <AssessmentResults scores={calculateCategoryScores()} onReset={handleReset} userName={userInfo.firstName} />
  }

  return (
    <AssessmentForm
      currentStep={step}
      categories={categories}
      scores={scores}
      onScoreChange={handleScoreChange}
      onNext={handleNext}
      onPrevious={handlePrevious}
    />
  )
}

