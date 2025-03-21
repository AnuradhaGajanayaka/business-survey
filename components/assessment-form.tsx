"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, HelpCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { Category } from "@/lib/assessment-data"

interface AssessmentFormProps {
  currentStep: number
  categories: Category[]
  scores: Record<string, number[]>
  onScoreChange: (categoryId: string, questionIndex: number, score: number) => void
  onNext: () => void
  onPrevious: () => void
}

export function AssessmentForm({
  currentStep,
  categories,
  scores,
  onScoreChange,
  onNext,
  onPrevious,
}: AssessmentFormProps) {
  const category = categories[currentStep]
  const progress = ((currentStep + 1) / categories.length) * 100

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
          Business Growth Assessment
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          Evaluate your business across five critical dimensions to identify growth opportunities.
        </p>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm">
            <span>
              Category {currentStep + 1} of {categories.length}
            </span>
            <span className="mx-2">•</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={onPrevious}
              disabled={currentStep === 0}
              className="border-slate-200 text-slate-700 hover:bg-teal-50 hover:text-teal-700 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-teal-950/30 dark:hover:text-teal-400"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <Button
              size="sm"
              onClick={onNext}
              className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white"
            >
              {currentStep === categories.length - 1 ? "View Results" : "Next"}
              {currentStep !== categories.length - 1 && <ArrowRight className="h-4 w-4 ml-1" />}
            </Button>
          </div>
        </div>
        <Progress value={progress} className="h-2 bg-teal-100 dark:bg-teal-950">
          <div className="h-full bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full"></div>
        </Progress>
      </div>

      <Card className="mb-6 border-t-4 border-t-teal-600">
        <CardHeader>
          <CardTitle className="text-slate-800 dark:text-white flex items-center gap-2">
            {category.name}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 rounded-full p-0 text-slate-400 hover:text-teal-700"
                  >
                    <HelpCircle className="h-4 w-4" />
                    <span className="sr-only">Category Information</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>
                    Rate each statement on a scale of 1-5:
                    <br />1 = Strongly Disagree, 2 = Disagree, 3 = Neutral, 4 = Agree, 5 = Strongly Agree
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-300">{category.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {category.questions.map((question, index) => (
            <div key={index} className="space-y-3">
              <div className="font-medium text-slate-800 dark:text-white">
                {index + 1}. {question}
              </div>
              <RadioGroup
                value={scores[category.id][index].toString()}
                onValueChange={(value) => onScoreChange(category.id, index, Number.parseInt(value))}
                className="flex justify-between space-x-1"
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <div key={value} className="flex flex-col items-center space-y-1">
                    <RadioGroupItem
                      value={value.toString()}
                      id={`${category.id}-q${index}-${value}`}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={`${category.id}-q${index}-${value}`}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-gray-800 p-0 text-center font-medium hover:bg-teal-50 hover:text-teal-700 dark:hover:bg-teal-950/30 dark:hover:text-teal-400 peer-data-[state=checked]:border-teal-600 peer-data-[state=checked]:bg-teal-600 peer-data-[state=checked]:text-white dark:peer-data-[state=checked]:border-teal-600 dark:peer-data-[state=checked]:bg-teal-600"
                    >
                      {value}
                    </Label>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {value === 1
                        ? "Strongly Disagree"
                        : value === 2
                          ? "Disagree"
                          : value === 3
                            ? "Neutral"
                            : value === 4
                              ? "Agree"
                              : "Strongly Agree"}
                    </span>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={currentStep === 0}
            className="border-slate-200 text-slate-700 hover:bg-teal-50 hover:text-teal-700 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-teal-950/30 dark:hover:text-teal-400"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <Button
            onClick={onNext}
            className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white"
          >
            {currentStep === categories.length - 1 ? "View Results" : "Next"}
            {currentStep !== categories.length - 1 && <ArrowRight className="h-4 w-4 ml-2" />}
          </Button>
        </CardFooter>
      </Card>

      {/* Category Navigation */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-white dark:bg-gray-800 rounded-full p-1 shadow-sm">
          {categories.map((cat, index) => (
            <button
              key={cat.id}
              onClick={() => {
                if (index <= currentStep) {
                  // Only allow navigation to current or previous steps
                  for (let i = currentStep; i > index; i--) {
                    onPrevious()
                  }
                }
              }}
              disabled={index > currentStep}
              className={`
                px-3 py-1.5 text-sm rounded-full transition-colors
                ${
                  index === currentStep
                    ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-medium"
                    : index < currentStep
                      ? "text-slate-700 hover:bg-teal-50 hover:text-teal-700 dark:text-slate-300 dark:hover:bg-teal-950/30 dark:hover:text-teal-400"
                      : "text-slate-400 dark:text-slate-600 cursor-not-allowed"
                }
              `}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

