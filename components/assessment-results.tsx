"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type CategoryScore, getFeedback } from "@/lib/assessment-data"
import { RadarChart } from "./radar-chart"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, RotateCcw } from "lucide-react"

interface AssessmentResultsProps {
  scores: CategoryScore[]
  onReset: () => void
  userName: string
}

export function AssessmentResults({ scores, onReset, userName }: AssessmentResultsProps) {
  const overallScore = scores.reduce((sum, item) => sum + item.score, 0) / scores.length
  const overallPercentage = Math.round((overallScore / 5) * 100)

  const getScoreColor = (score: number) => {
    if (score < 2.5) return "text-rose-600 dark:text-rose-500"
    if (score < 3.5) return "text-amber-500"
    if (score < 4.5) return "text-emerald-500"
    return "text-teal-600 dark:text-teal-400"
  }

  const getScoreLabel = (score: number) => {
    if (score < 2.5) return "Needs Improvement"
    if (score < 3.5) return "Developing"
    if (score < 4.5) return "Strong"
    return "Excellent"
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
          {userName ? `${userName}'s Business Growth Assessment Results` : "Your Business Growth Assessment Results"}
        </h1>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          Based on your responses, here's how your business is performing across key dimensions.
        </p>
        <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/30 px-4 py-2 rounded-full mb-6">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Overall Score:</span>
          <Badge variant="outline" className={`text-base font-bold ${getScoreColor(overallScore)}`}>
            {overallScore.toFixed(1)}/5.0 ({overallPercentage}%)
          </Badge>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={onReset}
            className="border-teal-200 text-teal-700 hover:bg-teal-50 dark:border-teal-800 dark:text-teal-400 dark:hover:bg-teal-950/30"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Retake Assessment
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-teal-200 text-teal-700 hover:bg-teal-50 dark:border-teal-800 dark:text-teal-400 dark:hover:bg-teal-950/30"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Results
          </Button>
          <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
            Schedule Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Card className="border-t-4 border-t-teal-600">
          <CardHeader>
            <CardTitle className="text-slate-800 dark:text-white">Performance Visualization</CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-300">
              {userName
                ? `${userName}'s business performance across all five dimensions`
                : "Your business performance across all five dimensions"}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <RadarChart data={scores} />
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-emerald-600">
          <CardHeader>
            <CardTitle className="text-slate-800 dark:text-white">Dimension Breakdown</CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-300">
              Detailed scores for each business dimension
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {scores.map((item) => (
              <div key={item.categoryId} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-800 dark:text-white">{item.category}</span>
                  <Badge variant="outline" className={`${getScoreColor(item.score)}`}>
                    {item.score.toFixed(1)}/5.0
                  </Badge>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 flex justify-between">
                  <span>{getScoreLabel(item.score)}</span>
                  <span>{Math.round(item.percentage)}%</span>
                </div>
                <div className="w-full bg-teal-100 dark:bg-teal-950/30 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8 border-t-4 border-t-amber-600">
        <CardHeader>
          <CardTitle className="text-slate-800 dark:text-white">Detailed Feedback & Recommendations</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-300">
            {userName
              ? `Based on your assessment, here are personalized insights for ${userName}'s business`
              : "Based on your assessment, here are personalized insights for your business"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {scores.map((item) => (
            <div key={item.categoryId} className="space-y-2">
              <h3 className="text-lg font-semibold flex items-center gap-2 text-slate-800 dark:text-white">
                {item.category}
                <Badge variant={item.score < 3 ? "destructive" : item.score >= 4 ? "default" : "outline"}>
                  {getScoreLabel(item.score)}
                </Badge>
              </h3>
              <p className="text-slate-600 dark:text-slate-300">{getFeedback(item.categoryId, item.score)}</p>
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4">
          <Button className="w-full sm:w-auto" variant="outline" onClick={onReset}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Retake Assessment
          </Button>
          <Button className="w-full sm:w-auto" variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download Results
          </Button>
          <Button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white">
            Schedule Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

