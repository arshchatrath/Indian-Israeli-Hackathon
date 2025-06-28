"use client"

import { motion, useInView } from "framer-motion"
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

const problemStatements = [
  {
    id: "PS1",
    title: "AI-Powered Early Disease Detection",
    partner: "Healthcare Innovation Lab",
    description: "Develop AI algorithms for early detection of diseases using medical imaging and patient data patterns.",
    icon: BrainCircuit,
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50",
    tags: ["AI/ML", "Medical Imaging", "Diagnostics"],
  },
  {
    id: "PS2",
    title: "Telemedicine Platform for Remote Care",
    partner: "Digital Health Consortium",
    description: "Create a comprehensive telemedicine solution enabling remote consultations and care coordination.",
    icon: Video,
    color: "from-emerald-500 to-teal-600",
    bgColor: "from-emerald-50 to-teal-50",
    tags: ["Telemedicine", "Remote Care", "Digital Health"],
  },
  {
    id: "PS3",
    title: "Wearable Health Monitoring System",
    partner: "MedTech Innovations",
    description: "Design smart wearable devices for continuous health monitoring with real-time alerts and analytics.",
    icon: Activity,
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-50 to-pink-50",
    tags: ["IoT", "Wearables", "Real-time Monitoring"],
  },
  {
    id: "PS4",
    title: "AR/VR Medical Training Simulator",
    partner: "VRSteps",
    description: "Build immersive AR/VR training platforms for medical professionals to practice procedures safely.",
    icon: Eye,
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-50 to-red-50",
    tags: ["AR/VR", "Medical Training", "Simulation"],
  },
  {
    id: "PS5",
    title: "Healthcare Data Analytics Platform",
    partner: "DataHealth Solutions",
    description: "Develop advanced analytics tools for healthcare data to improve patient outcomes and efficiency.",
    icon: BarChart3,
    color: "from-cyan-500 to-blue-600",
    bgColor: "from-cyan-50 to-blue-50",
    tags: ["Data Analytics", "Healthcare", "Business Intelligence"],
  },
  {
    id: "PS6",
    title: "Digital Therapeutics Solution",
    partner: "Therapeutic Tech",
    description: "Create evidence-based digital interventions for managing chronic diseases and mental health.",
    icon: Stethoscope,
    color: "from-indigo-500 to-purple-600",
    bgColor: "from-indigo-50 to-purple-50",
    tags: ["Digital Therapeutics", "Chronic Care", "Mental Health"],
  },
  {
    id: "PS7",
    title: "Open Innovation Challenge",
    partner: "Open Category",
    description: "Propose your own innovative healthcare solution addressing unmet medical needs or improving systems.",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-600",
    bgColor: "from-yellow-50 to-orange-50",
    tags: ["Innovation", "Open Challenge", "Healthcare"],
    isSpecial: true,
  },
]

const PROBLEM_STATEMENTS_DOC_URL =
  "https://docs.google.com/document/d/1Y7J2x-8U0FXWcMgQLFgoc6MHTjbRe94AE_M2pq8Onfs/edit?tab=t.0"

export default function Themes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleViewDetails = () => {
    window.open(PROBLEM_STATEMENTS_DOC_URL, "_blank", "noopener,noreferrer")
  }

  const renderProblemCard = (problem, index) => (
    <motion.div
      key={problem.id}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.08 * index,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className="group relative"
    >
      {/* Card Background */}
      <div
        className={`
          relative bg-gradient-to-br ${problem.bgColor} rounded-2xl overflow-hidden 
          shadow-lg hover:shadow-xl transition-all duration-400 border border-white/60
          backdrop-blur-sm h-full ${problem.isSpecial ? "ring-1 ring-yellow-400/40" : ""}
        `}
      >
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
        </div>

        {/* Special Badge for Open Innovation */}
        {problem.isSpecial && (
          <motion.div
            className="absolute top-3 right-3 z-20"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
              <Sparkles className="w-3 h-3" />
              <span>OPEN</span>
            </div>
          </motion.div>
        )}

        {/* Compact Header Section */}
        <div className={`bg-gradient-to-r ${problem.color} p-5 relative overflow-hidden`}>
          {/* Animated Background Elements */}
          <motion.div
            className="absolute top-0 right-0 w-16 h-16 bg-white/8 rounded-full -mr-8 -mt-8"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <motion.div
                  className="p-1.5 bg-white/20 rounded-lg backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <problem.icon className="h-5 w-5 text-white" />
                </motion.div>
                <span className="text-white/90 text-xs font-semibold tracking-wide">{problem.id}</span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white leading-tight mb-2">{problem.title}</h3>
            <div className="flex items-center space-x-1">
              <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
              <p className="text-white/90 text-xs font-medium truncate">{problem.partner}</p>
            </div>
          </div>
        </div>

        {/* Compact Content Section */}
        <div className="p-5 space-y-4">
          <p className="text-slate-700 leading-relaxed text-sm font-medium line-clamp-3">{problem.description}</p>

          {/* Compact Tags */}
          <div className="flex flex-wrap gap-1.5">
            {problem.tags.slice(0, 3).map((tag, tagIndex) => (
              <motion.span
                key={tagIndex}
                className="px-2.5 py-1 bg-white/90 text-slate-700 text-xs font-semibold rounded-full border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200"
                whileHover={{ scale: 1.05, y: -1 }}
                transition={{ duration: 0.2 }}
              >
                {tag}
              </motion.span>
            ))}
            {problem.tags.length > 3 && (
              <span className="px-2.5 py-1 bg-slate-100 text-slate-500 text-xs font-medium rounded-full">
                +{problem.tags.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <motion.div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl" />

        {/* Subtle Border Glow on Hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          whileHover={{
            boxShadow: problem.isSpecial
              ? "0 0 25px rgba(251, 191, 36, 0.2), 0 0 50px rgba(251, 191, 36, 0.05)"
              : "0 0 20px rgba(59, 130, 246, 0.15), 0 0 40px rgba(59, 130, 246, 0.05)",
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 relative overflow-hidden">
      {/* Soft Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/8 to-purple-400/8 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-emerald-400/8 to-cyan-400/8 rounded-full blur-3xl"
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
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          {/* <motion.div
            className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200/50 shadow-lg mb-6"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Target className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-bold text-base">Problem Statements</span>
          </motion.div> */}

          <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight">
            Problem Statements
          </h2>
          {/* <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Choose your challenge and develop solutions that will transform healthcare delivery and patient outcomes
            across Israel and India
          </p> */}

          {/* Central CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              onClick={handleViewDetails}
              className="px-6 py-3 text-base font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl border-0 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <span className="relative z-10 flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                View Detailed Problem Statements
                <ExternalLink className="ml-2 h-4 w-4" />
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Problem Statements Grid - 4 cards per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problemStatements.map((problem, index) => renderProblemCard(problem, index))}
        </div>

        {/* Bottom Statistics */}
        {/*
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/80 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Challenge Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                className="text-center group"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-black text-blue-600 mb-2 group-hover:text-blue-700 transition-colors">
                  7
                </div>
                <div className="text-slate-600 font-semibold">Problem Statements</div>
              </motion.div>
              <motion.div
                className="text-center group"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-black text-purple-600 mb-2 group-hover:text-purple-700 transition-colors">
                  6
                </div>
                <div className="text-slate-600 font-semibold">Industry Partners</div>
              </motion.div>
              <motion.div
                className="text-center group"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-black text-emerald-600 mb-2 group-hover:text-emerald-700 transition-colors">
                  Multiple
                </div>
                <div className="text-slate-600 font-semibold">Technology Domains</div>
              </motion.div>
              <motion.div
                className="text-center group"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-black text-orange-600 mb-2 group-hover:text-orange-700 transition-colors">
                  Open
                </div>
                <div className="text-slate-600 font-semibold">Innovation Track</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        */}
      </div>
    </div>
  )
}