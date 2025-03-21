"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart, ClipboardList, LineChart, TrendingUp, Users } from "lucide-react"

interface WelcomePageProps {
  onStart: () => void
}

export function WelcomePage({ onStart }: WelcomePageProps) {
  return (
    <div className="max-w-5xl mx-auto py-10">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
          Business Growth Assessment
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
          Discover your business's strengths and unlock new growth opportunities
        </p>
        <Button
          size="lg"
          onClick={onStart}
          className="gap-2 text-lg px-8 py-6 rounded-full bg-amber-600 hover:bg-amber-700 text-white"
        >
          Start Your Assessment
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Benefits Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-950/30 dark:to-emerald-950/30 rounded-xl p-6 text-center shadow-sm">
          <div className="bg-teal-100 dark:bg-teal-900/50 h-14 w-14 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="h-7 w-7 text-teal-600 dark:text-teal-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">Identify Growth Opportunities</h3>
          <p className="text-slate-600 dark:text-slate-300">
            Discover untapped potential and new avenues for business expansion
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-950/30 dark:to-emerald-950/30 rounded-xl p-6 text-center shadow-sm">
          <div className="bg-teal-100 dark:bg-teal-900/50 h-14 w-14 rounded-full flex items-center justify-center mx-auto mb-4">
            <BarChart className="h-7 w-7 text-teal-600 dark:text-teal-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">Visualize Your Performance</h3>
          <p className="text-slate-600 dark:text-slate-300">
            See how your business measures across five critical dimensions
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-950/30 dark:to-emerald-950/30 rounded-xl p-6 text-center shadow-sm">
          <div className="bg-teal-100 dark:bg-teal-900/50 h-14 w-14 rounded-full flex items-center justify-center mx-auto mb-4">
            <LineChart className="h-7 w-7 text-teal-600 dark:text-teal-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-white">Get Actionable Insights</h3>
          <p className="text-slate-600 dark:text-slate-300">
            Receive personalized recommendations to improve your business
          </p>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950/30 dark:to-emerald-950/30 rounded-2xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-center mb-8 text-slate-800 dark:text-white">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="bg-white dark:bg-gray-800 h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold text-teal-600 shadow-md mb-4">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white">Complete the Assessment</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Answer 25 questions about your business (takes ~10 minutes)
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white dark:bg-gray-800 h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold text-teal-600 shadow-md mb-4">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white">Get Your Results</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Receive an immediate visual breakdown of your performance
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white dark:bg-gray-800 h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold text-teal-600 shadow-md mb-4">
              3
            </div>
            <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white">Take Action</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Use our recommendations to improve your business growth
            </p>
          </div>
        </div>
      </div>

      {/* What You'll Evaluate */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8 text-slate-800 dark:text-white">What You'll Evaluate</h2>

        <div className="grid md:grid-cols-5 gap-4">
          {[
            { icon: <ClipboardList />, title: "Business Planning" },
            { icon: <BarChart />, title: "Operational Efficiency" },
            { icon: <TrendingUp />, title: "Financial Management" },
            { icon: <LineChart />, title: "Market Position" },
            { icon: <Users />, title: "Talent Development" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-teal-100 dark:bg-teal-900/50 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="text-teal-600 dark:text-teal-400">{item.icon}</div>
              </div>
              <h3 className="font-medium text-sm text-slate-800 dark:text-white">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial/Social Proof */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <div className="relative h-64 w-64 rounded-full overflow-hidden border-4 border-teal-100 dark:border-teal-900/50">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Sarah Johnson, CEO of Innovate Solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="text-3xl font-serif text-teal-600 dark:text-teal-400">"</div>
            <p className="text-lg italic mb-4 text-slate-700 dark:text-slate-200">
              This assessment helped us identify critical gaps in our business strategy. The visual results made it easy
              to understand our strengths and weaknesses, and the recommendations were practical and actionable.
            </p>
            <div className="font-semibold text-slate-800 dark:text-white">Sarah Johnson</div>
            <div className="text-sm text-slate-600 dark:text-slate-300">CEO, Innovate Solutions</div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Ready to grow your business?</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Take 10 minutes now to gain insights that could transform your business
        </p>
        <Button
          size="lg"
          onClick={onStart}
          className="gap-2 text-lg px-8 py-6 rounded-full bg-amber-600 hover:bg-amber-700 text-white"
        >
          Start Your Assessment
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
        © 2025 Business Growth Assessment. All rights reserved.
      </div>
    </div>
  )
}

