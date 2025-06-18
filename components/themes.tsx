"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  ExternalLink,
  FileText,
  BrainCircuit,
  Stethoscope,
  Eye,
  Video,
  Activity,
  BarChart3,
  Lightbulb,
  Users,
  Target,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const problemStatements = [
  {
    id: "PS001",
    title: "AI-Powered Early Disease Detection",
    partner: "Healthcare Innovation Lab",
    description:
      "Develop AI algorithms for early detection of diseases using medical imaging, lab results, and patient data patterns.",
    icon: BrainCircuit,
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50",
    difficulty: "Advanced",
    tags: ["AI/ML", "Medical Imaging", "Diagnostics"],
    impact: "High",
  },
  {
    id: "PS002",
    title: "Telemedicine Platform for Remote Care",
    partner: "Digital Health Consortium",
    description:
      "Create a comprehensive telemedicine solution enabling remote consultations, monitoring, and care coordination.",
    icon: Video,
    color: "from-emerald-500 to-teal-600",
    bgColor: "from-emerald-50 to-teal-50",
    difficulty: "Intermediate",
    tags: ["Telemedicine", "Remote Care", "Digital Health"],
    impact: "High",
  },
  {
    id: "PS003",
    title: "Wearable Health Monitoring System",
    partner: "MedTech Innovations",
    description:
      "Design smart wearable devices for continuous health monitoring with real-time alerts and data analytics.",
    icon: Activity,
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-50 to-pink-50",
    difficulty: "Advanced",
    tags: ["IoT", "Wearables", "Real-time Monitoring"],
    impact: "Medium",
  },
  {
    id: "PS004",
    title: "AR/VR Medical Training Simulator",
    partner: "VRSteps",
    description: "Build immersive AR/VR training platforms for medical professionals to practice procedures safely.",
    icon: Eye,
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-50 to-red-50",
    difficulty: "Advanced",
    tags: ["AR/VR", "Medical Training", "Simulation"],
    impact: "Medium",
  },
  {
    id: "PS005",
    title: "Healthcare Data Analytics Platform",
    partner: "DataHealth Solutions",
    description:
      "Develop advanced analytics tools for healthcare data to improve patient outcomes and operational efficiency.",
    icon: BarChart3,
    color: "from-cyan-500 to-blue-600",
    bgColor: "from-cyan-50 to-blue-50",
    difficulty: "Intermediate",
    tags: ["Data Analytics", "Healthcare", "Business Intelligence"],
    impact: "High",
  },
  {
    id: "PS006",
    title: "Digital Therapeutics Solution",
    partner: "Therapeutic Tech",
    description:
      "Create evidence-based digital interventions for managing chronic diseases and mental health conditions.",
    icon: Stethoscope,
    color: "from-indigo-500 to-purple-600",
    bgColor: "from-indigo-50 to-purple-50",
    difficulty: "Advanced",
    tags: ["Digital Therapeutics", "Chronic Care", "Mental Health"],
    impact: "High",
  },
]

// Separate the Open Innovation Challenge
const openInnovationChallenge = {
  id: "PS007",
  title: "Open Innovation Challenge",
  partner: "Open Category",
  description:
    "Propose your own innovative healthcare solution addressing unmet medical needs or improving existing systems.",
  icon: Lightbulb,
  color: "from-yellow-500 to-orange-600",
  bgColor: "from-yellow-50 to-orange-50",
  difficulty: "Variable",
  tags: ["Innovation", "Open Challenge", "Healthcare"],
  impact: "Variable",
}

const PROBLEM_STATEMENTS_DOC_URL =
  "https://docs.google.com/document/d/1Y7J2x-8U0FXWcMgQLFgoc6MHTjbRe94AE_M2pq8Onfs/edit?tab=t.0"

export default function Themes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleViewDetails = () => {
    window.open(PROBLEM_STATEMENTS_DOC_URL, "_blank", "noopener,noreferrer")
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Advanced":
        return "bg-red-100 text-red-700 border-red-200"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700 border-yellow-200"
      case "Variable":
        return "bg-gray-100 text-gray-700 border-gray-200"
      default:
        return "bg-blue-100 text-blue-700 border-blue-200"
    }
  }

  const getImpactColor = (impact) => {
    switch (impact) {
      case "High":
        return "bg-green-100 text-green-700 border-green-200"
      case "Medium":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "Variable":
        return "bg-gray-100 text-gray-700 border-gray-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const renderProblemCard = (problem, index, isSpecial = false) => (
    <motion.div
      key={problem.id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: 0.1 * index,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={`group relative ${isSpecial ? "lg:col-span-2 xl:col-span-1" : ""}`}
    >
      {/* Card Background with Gradient */}
      <div
        className={`
          relative bg-gradient-to-br ${problem.bgColor} rounded-2xl overflow-hidden 
          shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/60
          backdrop-blur-sm h-full ${isSpecial ? "ring-2 ring-yellow-300/50" : ""}
        `}
      >
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
        </div>

        {/* Special Badge for Open Innovation */}
        {isSpecial && (
          <div className="absolute top-4 right-4 z-20">
            <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
              FEATURED
            </span>
          </div>
        )}

        {/* Header Section */}
        <div className={`bg-gradient-to-r ${problem.color} p-6 relative overflow-hidden`}>
          <motion.div
            className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          <div className="relative z-10 flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-3">
                <problem.icon className="h-7 w-7 text-white" />
                <span className="text-white/90 text-sm font-medium">{problem.id}</span>
              </div>
              <h3 className="text-xl font-bold text-white leading-tight mb-2">{problem.title}</h3>
              <p className="text-white/90 text-sm font-medium">Partner: {problem.partner}</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          <p className="text-slate-700 leading-relaxed text-sm">{problem.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {problem.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 bg-white/80 text-slate-600 text-xs font-medium rounded-full border border-slate-200/50"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Metadata */}
          <div className="flex items-center justify-between pt-4 border-t border-white/50">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Zap className="h-3 w-3 text-slate-500" />
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full border ${getDifficultyColor(problem.difficulty)}`}
                >
                  {problem.difficulty}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-3 w-3 text-slate-500" />
              <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getImpactColor(problem.impact)}`}>
                {problem.impact} Impact
              </span>
            </div>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <motion.div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  )

  return (
    <div className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200/50 shadow-lg mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Target className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Problem Statements</span>
          </motion.div>

          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6">
            Healthcare Innovation Challenges
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Choose your challenge and develop solutions that will transform healthcare delivery and patient outcomes
          </p>

          {/* Central CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={handleViewDetails}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl"
            >
              <FileText className="mr-2 h-5 w-5" />
              View Detailed Problem Statements
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Problem Statements Grid - First 6 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {problemStatements.map((problem, index) => renderProblemCard(problem, index))}
        </div>

        {/* Open Innovation Challenge - Centered */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-md">{renderProblemCard(openInnovationChallenge, 6, true)}</div>
        </div>

        {/* Bottom Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/60 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Challenge Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
                <div className="text-slate-600 font-medium">Problem Statements</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
                <div className="text-slate-600 font-medium">Industry Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">Multiple</div>
                <div className="text-slate-600 font-medium">Technology Domains</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">Open</div>
                <div className="text-slate-600 font-medium">Innovation Track</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
