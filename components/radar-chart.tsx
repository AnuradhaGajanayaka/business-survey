"use client"

import type { CategoryScore } from "@/lib/assessment-data"
import {
  ResponsiveContainer,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from "recharts"

interface RadarChartProps {
  data: CategoryScore[]
}

export function RadarChart({ data }: RadarChartProps) {
  const chartData = data.map((item) => ({
    subject: item.category,
    score: item.score,
    fullMark: 5,
  }))

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsRadarChart
        cx="50%"
        cy="50%"
        outerRadius="65%"
        data={chartData}
        margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
      >
        <PolarGrid stroke="#9ca3af" />
        <PolarAngleAxis
          dataKey="subject"
          stroke="#6b7280"
          tickLine={false}
          style={{ fontSize: "12px" }}
          // Wrap long category names to prevent cutoff
          tickFormatter={(value) => {
            // If the category name is too long, add a line break
            if (value.length > 15) {
              const midpoint = Math.floor(value.length / 2)
              const breakIndex = value.indexOf(" ", midpoint - 5) > 0 ? value.indexOf(" ", midpoint - 5) : midpoint
              return [value.substring(0, breakIndex), value.substring(breakIndex + 1)]
            }
            return value
          }}
        />
        <PolarRadiusAxis angle={30} domain={[0, 5]} stroke="#6b7280" />
        <Radar name="Score" dataKey="score" stroke="#0D9488" fill="#0D9488" fillOpacity={0.6} />
        <Tooltip formatter={(value: number) => [`${value.toFixed(1)}/5.0`, "Score"]} />
      </RechartsRadarChart>
    </ResponsiveContainer>
  )
}

