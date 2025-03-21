export interface Category {
  id: string
  name: string
  description: string
  questions: string[]
}

export interface CategoryScore {
  category: string
  categoryId: string
  score: number
  percentage: number
}

export const categories: Category[] = [
  {
    id: "business-planning",
    name: "Business Planning",
    description:
      "Evaluate your strategic vision, business planning processes, and how well your company defines and pursues its goals.",
    questions: [
      "Our company has a clear, documented business plan with specific goals and timelines.",
      "We regularly review and update our business strategy based on market changes and performance data.",
      "Our leadership team has a shared vision for the company's future and growth trajectory.",
      "We have identified our unique value proposition and competitive advantages in the marketplace.",
      "Our business model is scalable and adaptable to changing market conditions.",
    ],
  },
  {
    id: "operational-efficiency",
    name: "Operational Efficiency",
    description:
      "Assess how well your business processes, systems, and technology infrastructure support your operations and growth.",
    questions: [
      "Our business processes are documented, standardized, and consistently followed.",
      "We regularly analyze and optimize our operations to eliminate bottlenecks and reduce costs.",
      "Our technology infrastructure adequately supports our current operations and future growth plans.",
      "We have effective systems for inventory management, quality control, and supply chain oversight.",
      "Our business measures and tracks key performance indicators (KPIs) across all departments.",
    ],
  },
  {
    id: "financial-management",
    name: "Financial Management",
    description: "Evaluate your financial health, revenue diversity, cash flow management, and funding readiness.",
    questions: [
      "We maintain accurate financial records and regularly review financial statements.",
      "Our business has a diverse revenue stream rather than relying on a single product/service or customer.",
      "We have a clear understanding of our cash flow cycles and actively manage working capital.",
      "Our company has identified appropriate funding sources aligned with our growth stage and needs.",
      "We have a financial forecast that projects revenues, expenses, and capital requirements for the next 3-5 years.",
    ],
  },
  {
    id: "market-position",
    name: "Market Position",
    description:
      "Assess your understanding of customers, marketing effectiveness, and competitive positioning in the marketplace.",
    questions: [
      "We have clearly defined our target market segments and understand their needs and pain points.",
      "Our marketing strategy effectively communicates our value proposition to our target audience.",
      "We have systems in place to gather and act upon customer feedback and market insights.",
      "Our sales process is documented, measurable, and consistently produces predictable results.",
      "We actively monitor market trends and competitive activity to identify new opportunities.",
    ],
  },
  {
    id: "talent-development",
    name: "Talent Development",
    description:
      "Evaluate your organizational structure, team capabilities, recruitment strategies, and company culture.",
    questions: [
      "Our company has a clear organizational structure with defined roles and responsibilities.",
      "We have effective recruitment, onboarding, and retention strategies to attract and keep top talent.",
      "Our team has the necessary skills and expertise to achieve our business objectives.",
      "We have succession plans in place for key positions within the organization.",
      "Our company culture promotes innovation, collaboration, and continuous improvement.",
    ],
  },
]

export function getFeedback(categoryId: string, score: number): string {
  const feedbackMap: Record<string, Record<string, string>> = {
    "business-planning": {
      low: "Your business planning needs significant improvement. Consider developing a formal business plan with clear goals, timelines, and strategies. Work on articulating your unique value proposition and ensuring your leadership team shares a unified vision.",
      medium:
        "Your business has some planning elements in place, but there's room for improvement. Focus on making your business plan more comprehensive and ensure it's regularly reviewed and updated. Work on better defining your competitive advantages.",
      high: "Your business planning is strong. You have a clear vision, documented plans, and understand your market position. To further improve, consider scenario planning for different market conditions and ensure all stakeholders are aligned with your strategic direction.",
    },
    "operational-efficiency": {
      low: "Your operational processes need significant improvement. Start by documenting key processes and implementing standardized procedures. Invest in technology infrastructure that can support your operations and consider implementing KPI tracking across departments.",
      medium:
        "Your operations have some structure, but efficiency could be improved. Focus on identifying and eliminating bottlenecks, optimizing resource allocation, and enhancing your quality control systems. Ensure your KPIs are meaningful and actionable.",
      high: "Your operational efficiency is strong. To further excel, consider advanced process optimization techniques, explore automation opportunities, and implement continuous improvement methodologies like Lean or Six Sigma where appropriate.",
    },
    "financial-management": {
      low: "Your financial management practices need significant improvement. Focus on establishing accurate financial record-keeping, developing cash flow forecasts, and diversifying your revenue streams. Consider working with a financial advisor to create a comprehensive financial strategy.",
      medium:
        "Your financial management has some structure, but there's room for improvement. Work on enhancing your financial forecasting, optimizing working capital management, and exploring appropriate funding options for your growth stage.",
      high: "Your financial management is strong. To further excel, consider implementing more sophisticated financial modeling, exploring strategic investment opportunities, and developing contingency plans for various financial scenarios.",
    },
    "market-position": {
      low: "Your market positioning needs significant improvement. Start by clearly defining your target market segments and understanding their needs. Develop a marketing strategy that effectively communicates your value proposition and implement systems to gather customer feedback.",
      medium:
        "Your market position has some strengths, but there's room for improvement. Focus on refining your marketing strategy, enhancing your sales process, and being more proactive in monitoring market trends and competitive activity.",
      high: "Your market position is strong. To further excel, consider expanding into adjacent markets, developing more sophisticated customer segmentation, and implementing advanced analytics to gain deeper market insights.",
    },
    "talent-development": {
      low: "Your talent development practices need significant improvement. Start by clarifying your organizational structure and defining roles and responsibilities. Develop recruitment and retention strategies and focus on building a positive company culture.",
      medium:
        "Your talent management has some structure, but there's room for improvement. Focus on enhancing your recruitment processes, developing more comprehensive training programs, and creating succession plans for key positions.",
      high: "Your talent development is strong. To further excel, consider implementing more sophisticated performance management systems, creating leadership development programs, and fostering a culture of continuous learning and innovation.",
    },
  }

  if (score < 2.5) return feedbackMap[categoryId].low
  if (score < 4) return feedbackMap[categoryId].medium
  return feedbackMap[categoryId].high
}

