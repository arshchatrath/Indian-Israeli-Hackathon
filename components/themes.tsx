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
  Target,
  Sparkles,
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
    tags: ["AI/ML", "Medical Imaging", "Diagnostics"],
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
    tags: ["Telemedicine", "Remote Care", "Digital Health"],
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
    tags: ["IoT", "Wearables", "Real-time Monitoring"],
  },
  {
    id: "PS004",
    title: "AR/VR Medical Training Simulator",
    partner: "VRSteps",
    description: "Build immersive AR/VR training platforms for medical professionals to practice procedures safely.",
    icon: Eye,
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-50 to-red-50",
    tags: ["AR/VR", "Medical Training", "Simulation"],
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
    tags: ["Data Analytics", "Healthcare", "Business Intelligence"],
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
    tags: ["Digital Therapeutics", "Chronic Care", "Mental Health"],
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
  tags: ["Innovation", "Open Challenge", "Healthcare"],
}

const PROBLEM_STATEMENTS_DOC_URL =
  "https://docs.google.com/document/d/1Y7J2x-8U0FXWcMgQLFgoc6MHTjbRe94AE_M2pq8Onfs/edit?tab=t.0"

export default function Themes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleViewDetails = () => {
    window.open(PROBLEM_STATEMENTS_DOC_URL, "_blank", "noopener,noreferrer")
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
        y: -12,
        scale: 1.03,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={`group relative ${isSpecial ? "lg:col-span-2 xl:col-span-1" : ""}`}
    >
      {/* Card Background with Enhanced Gradient */}
      <div
        className={`
          relative bg-gradient-to-br ${problem.bgColor} rounded-3xl overflow-hidden 
          shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/70
          backdrop-blur-sm h-full ${isSpecial ? "ring-2 ring-yellow-400/60 shadow-yellow-200/50" : ""}
        `}
      >
        {/* Enhanced Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.15)_1px,transparent_1px)] bg-[length:24px_24px]" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:32px_32px]" />
        </div>

        {/* Special Badge for Open Innovation */}
        {isSpecial && (
          <motion.div
            className="absolute top-4 right-4 z-20"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            {/* <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              <Sparkles className="w-3 h-3" />
              <span>FEATURED</span>
            </div> */}
          </motion.div>
        )}

        {/* Enhanced Header Section */}
        <div className={`bg-gradient-to-r ${problem.color} p-8 relative overflow-hidden`}>
          {/* Animated Background Elements */}
          <motion.div
            className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full -ml-8 -mb-8"
            animate={{
              rotate: [360, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                className="p-2 bg-white/20 rounded-xl backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <problem.icon className="h-8 w-8 text-white" />
              </motion.div>
              <span className="text-white/90 text-sm font-semibold tracking-wide">{problem.id}</span>
            </div>
            <h3 className="text-2xl font-bold text-white leading-tight mb-3">{problem.title}</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              <p className="text-white/90 text-sm font-medium">{problem.partner}</p>
            </div>
          </div>
        </div>

        {/* Enhanced Content Section */}
        <div className="p-8 space-y-6">
          <p className="text-slate-700 leading-relaxed text-base font-medium">{problem.description}</p>

          {/* Enhanced Tags */}
          <div className="flex flex-wrap gap-2">
            {problem.tags.map((tag, tagIndex) => (
              <motion.span
                key={tagIndex}
                className="px-4 py-2 bg-white/90 text-slate-700 text-sm font-semibold rounded-full border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Enhanced Hover Effect Overlay */}
        <motion.div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

        {/* Subtle Border Glow on Hover */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          whileHover={{
            boxShadow: isSpecial
              ? "0 0 40px rgba(251, 191, 36, 0.3), 0 0 80px rgba(251, 191, 36, 0.1)"
              : "0 0 30px rgba(59, 130, 246, 0.2), 0 0 60px rgba(59, 130, 246, 0.1)",
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )

  return (
    <div className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 5,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full border border-blue-200/60 shadow-xl mb-8"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Target className="w-6 h-6 text-blue-600" />
            <span className="text-blue-700 font-bold text-lg">Problem Statements</span>
          </motion.div>

          <h2 className="text-6xl font-black bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-8 leading-tight">
            Healthcare Innovation
            <br />
            <span className="text-5xl">Challenges</span>
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            Choose your challenge and develop solutions that will transform healthcare delivery and patient outcomes
            across Israel and India
          </p>

          {/* Enhanced Central CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={handleViewDetails}
              className="w-full sm:w-auto px-4 sm:px-8 py-4 sm:py-5 text-base sm:text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-2xl border-0 relative overflow-hidden group whitespace-normal"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <span className="relative z-10 flex items-center">
                <FileText className="mr-3 h-6 w-6" />
                View Detailed Problem Statements
                <ExternalLink className="ml-3 h-5 w-5" />
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Problem Statements Grid - First 6 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {problemStatements.map((problem, index) => renderProblemCard(problem, index))}
        </div>

        {/* Open Innovation Challenge - Centered and Enhanced */}
        <div className="flex justify-center mb-20">
          <div className="w-full max-w-lg">{renderProblemCard(openInnovationChallenge, 6, true)}</div>
        </div>

        {/* Enhanced Bottom Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/80 max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Challenge Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              <motion.div
                className="text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl font-black text-blue-600 mb-3 group-hover:text-blue-700 transition-colors">
                  7
                </div>
                <div className="text-slate-600 font-semibold text-lg">Problem Statements</div>
              </motion.div>
              <motion.div
                className="text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl font-black text-purple-600 mb-3 group-hover:text-purple-700 transition-colors">
                  6
                </div>
                <div className="text-slate-600 font-semibold text-lg">Industry Partners</div>
              </motion.div>
              <motion.div
                className="text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl font-black text-emerald-600 mb-3 group-hover:text-emerald-700 transition-colors">
                  Multiple
                </div>
                <div className="text-slate-600 font-semibold text-lg">Technology Domains</div>
              </motion.div>
              <motion.div
                className="text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl font-black text-orange-600 mb-3 group-hover:text-orange-700 transition-colors">
                  Open
                </div>
                <div className="text-slate-600 font-semibold text-lg">Innovation Track</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
