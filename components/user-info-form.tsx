"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, Info } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface UserInfoFormProps {
  onSubmit: (firstName: string, lastName: string, email: string) => void
}

export function UserInfoForm({ onSubmit }: UserInfoFormProps) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [consentChecked, setConsentChecked] = useState(false)
  const [errors, setErrors] = useState({
    firstName: "",
    email: "",
    consent: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Reset errors
    const newErrors = {
      firstName: "",
      email: "",
      consent: "",
    }

    // Validate fields
    let isValid = true

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required"
      isValid = false
    }

    if (!email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address"
      isValid = false
    }

    if (!consentChecked) {
      newErrors.consent = "You must agree to the privacy policy to continue"
      isValid = false
    }

    setErrors(newErrors)

    if (isValid) {
      onSubmit(firstName, lastName, email)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
          Tell Us About Yourself
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          Please provide your information to personalize your assessment results.
        </p>
      </div>

      <Card className="border-t-4 border-t-teal-600">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle className="text-slate-800 dark:text-white">Your Information</CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-300">
              This information will be used to personalize your assessment experience.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-slate-800 dark:text-white">
                  First Name <span className="text-rose-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={errors.firstName ? "border-rose-500" : ""}
                />
                {errors.firstName && <p className="text-sm text-rose-500">{errors.firstName}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-slate-800 dark:text-white">
                  Last Name
                </Label>
                <Input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-800 dark:text-white">
                Email Address <span className="text-rose-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? "border-rose-500" : ""}
              />
              {errors.email && <p className="text-sm text-rose-500">{errors.email}</p>}
            </div>

            <Alert className="bg-teal-50 dark:bg-teal-950/30 border-teal-200 dark:border-teal-800">
              <Info className="h-4 w-4 text-teal-600 dark:text-teal-400" />
              <AlertDescription className="text-sm text-slate-700 dark:text-slate-300">
                Your information is securely stored and will only be used to personalize your assessment experience and
                provide you with relevant insights.
              </AlertDescription>
            </Alert>

            <div className="space-y-2 pt-2">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="consent"
                  checked={consentChecked}
                  onCheckedChange={(checked) => setConsentChecked(checked === true)}
                  className={errors.consent ? "border-rose-500" : ""}
                />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="consent"
                    className="text-sm font-medium leading-none text-slate-700 dark:text-slate-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <a href="#" className="text-teal-600 hover:underline dark:text-teal-400">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-teal-600 hover:underline dark:text-teal-400">
                      Terms of Service
                    </a>{" "}
                    <span className="text-rose-500">*</span>
                  </Label>
                  {errors.consent && <p className="text-sm text-rose-500">{errors.consent}</p>}
                </div>
              </div>
            </div>

            <div className="text-sm text-slate-500 dark:text-slate-400 mt-4">
              <p>
                <span className="text-rose-500">*</span> Required fields
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white"
            >
              Continue to Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <p className="text-xs text-center text-slate-500 dark:text-slate-400">
              By continuing, you acknowledge that your data will be processed in accordance with our Privacy Policy. We
              do not sell or share your personal information with third parties without your explicit consent.
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

