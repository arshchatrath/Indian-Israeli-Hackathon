"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Calendar, Presentation, Trophy, ChevronLeft, ChevronRight, Clock, Award, Users } from "lucide-react"

const timelineData = [
  {
    round: "Round-I",
    title: "PPT Submission",
    date: "24 July 2025",
    description:
      "Submit your innovative presentation showcasing your solution approach and technical implementation strategy",
    icon: Calendar,
    color: "from-blue-500 via-blue-600 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50",
    accentColor: "blue",
    details: [
      "13-slide presentation required",
      "Focus on problem definition",
      "Technical feasibility analysis",
      "Innovation and creativity",
    ],
  },
  {
    round: "Round-II",
    title: "Online Presentation",
    date: "31 July 2025",
    description: "Present your solution to our expert panel of judges through an interactive online session",
    icon: Presentation,
    color: "from-purple-500 via-purple-600 to-pink-600",
    bgColor: "from-purple-50 to-pink-50",
    accentColor: "purple",
    details: [
      "10 minutes presentation",
      "5 minutes Q&A session",
      "Live demo preferred",
      "Team coordination evaluation",
    ],
  },
  {
    round: "Round-III",
    title: "Offline Demo",
    date: "2nd week of August 2025",
    description: "Demonstrate your working prototype and compete for the grand prize in the final evaluation",
    icon: Trophy,
    color: "from-emerald-500 via-green-600 to-teal-600",
    bgColor: "from-emerald-50 to-teal-50",
    accentColor: "emerald",
    details: ["Working prototype demo", "In-person presentation", "Final pitch to judges", "Winner announcement"],
  },
]

const FloatingOrb = ({ delay = 0, duration = 8, className = "" }) => (
  <motion.div
    className={`absolute rounded-full blur-xl ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      x: [0, 30, 0],
      y: [0, -20, 0],
    }}
    transition={{
      duration,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
      delay,
    }}
  />
)

export default function Timeline() {
  const [active, setActive] = useState(1) // Start with middle card
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const cardVariants = {
    left: {
      rotateY: -15,
      scale: 0.9,
      x: -120,
      filter: "blur(1px)",
      zIndex: 1,
      opacity: 0.7,
    },
    center: {
      rotateY: 0,
      scale: 1,
      x: 0,
      filter: "blur(0px)",
      zIndex: 3,
      opacity: 1,
    },
    right: {
      rotateY: 15,
      scale: 0.9,
      x: 120,
      filter: "blur(1px)",
      zIndex: 1,
      opacity: 0.7,
    },
    hidden: {
      opacity: 0,
      scale: 0.8,
      zIndex: 0,
    },
  }

  const getCardPosition = (index) => {
    if (index === active) return "center"
    if (index === active - 1) return "left"
    if (index === active + 1) return "right"
    return "hidden"
  }

  const nextSlide = () => {
    setActive((prev) => Math.min(prev + 1, timelineData.length - 1))
  }

  const prevSlide = () => {
    setActive((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section
      ref={ref}
      className="relative w-full py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 overflow-hidden"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingOrb
          delay={0}
          duration={12}
          className="top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20"
        />
        <FloatingOrb
          delay={4}
          duration={15}
          className="bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200/50 shadow-lg mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Clock className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Event Timeline</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Timeline
          </motion.h2>

          <motion.p
            className="text-xl text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your journey from idea to innovation in three exciting phases
          </motion.p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-xl border border-white/50">
            <div className="flex items-center space-x-4 px-4 py-2">
              {timelineData.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                    index === active
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  whileHover={{ scale: index === active ? 1.4 : 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {index === active && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Progress Line */}
            <motion.div
              className="absolute top-1/2 left-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2"
              initial={{ width: 0 }}
              animate={{
                width: `${(active / (timelineData.length - 1)) * 48}px`,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Carousel Container - Fixed positioning */}
        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            disabled={active === 0}
            className="absolute left-4 z-20 p-4 rounded-full bg-white/90 backdrop-blur-sm shadow-xl border border-white/50 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <ChevronLeft className="w-6 h-6 text-slate-700" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            disabled={active === timelineData.length - 1}
            className="absolute right-4 z-20 p-4 rounded-full bg-white/90 backdrop-blur-sm shadow-xl border border-white/50 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <ChevronRight className="w-6 h-6 text-slate-700" />
          </motion.button>

          {/* Cards Container - Fixed width and positioning */}
          <div className="relative w-full max-w-5xl mx-auto px-20" style={{ perspective: "1200px" }}>
            <div className="relative h-[500px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {timelineData.map((item, index) => {
                  const position = getCardPosition(index)
                  if (position === "hidden") return null

                  return (
                    <motion.div
                      key={index}
                      className="absolute w-80 h-[480px] cursor-pointer"
                      variants={cardVariants}
                      initial="hidden"
                      animate={position}
                      exit="hidden"
                      transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 25,
                        duration: 0.6,
                      }}
                      onClick={() => setActive(index)}
                      style={{
                        transformStyle: "preserve-3d",
                        left: "50%",
                        top: "50%",
                        marginLeft: "-160px", // Half of card width
                        marginTop: "-240px", // Half of card height
                      }}
                    >
                      {/* Card */}
                      <div
                        className={`
                        relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/50
                        bg-gradient-to-br ${item.bgColor} backdrop-blur-xl
                        ${position === "center" ? "ring-4 ring-white/30" : ""}
                      `}
                      >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
                        </div>

                        {/* Gradient Overlay */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5`}
                          animate={{
                            opacity: position === "center" ? [0.05, 0.1, 0.05] : 0.05,
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        />

                        {/* Content */}
                        <div className="relative z-10 p-8 h-full flex flex-col">
                          {/* Header */}
                          <div className="text-center mb-6">
                            <motion.div
                              className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} shadow-xl mb-4`}
                              animate={
                                position === "center"
                                  ? {
                                      rotate: [0, 5, -5, 0],
                                      scale: [1, 1.05, 1],
                                    }
                                  : {}
                              }
                              transition={{
                                duration: 4,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              }}
                            >
                              <item.icon className="w-8 h-8 text-white drop-shadow-lg" />
                            </motion.div>

                            <motion.div
                              className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-bold mb-3 shadow-lg`}
                              whileHover={{ scale: 1.05 }}
                            >
                              {item.round}
                            </motion.div>

                            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>

                            <p
                              className={`text-base font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                            >
                              {item.date}
                            </p>
                          </div>

                          {/* Description */}
                          <div className="flex-grow">
                            <p className="text-slate-700 text-center leading-relaxed text-sm mb-4">
                              {item.description}
                            </p>

                            {/* Details - Only show for center card */}
                            <AnimatePresence>
                              {position === "center" && (
                                <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 20 }}
                                  transition={{ duration: 0.3, delay: 0.1 }}
                                  className="space-y-2"
                                >
                                  {item.details.map((detail, idx) => (
                                    <motion.div
                                      key={idx}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.3, delay: 0.1 + idx * 0.1 }}
                                      className="flex items-center space-x-3 text-xs text-slate-600"
                                    >
                                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color}`} />
                                      <span>{detail}</span>
                                    </motion.div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          {/* Footer */}
                          {position === "center" && (
                            <motion.div
                              className="mt-4 text-center"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              <div className="flex items-center justify-center space-x-4 text-xs text-slate-500">
                                <div className="flex items-center space-x-1">
                                  <Users className="w-3 h-3" />
                                  <span>Team Evaluation</span>
                                </div>
                                <div className="w-1 h-1 bg-slate-400 rounded-full" />
                                <div className="flex items-center space-x-1">
                                  <Award className="w-3 h-3" />
                                  <span>Merit Based</span>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </div>

                        {/* Shine Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                          animate={
                            position === "center"
                              ? {
                                  x: ["-100%", "100%"],
                                }
                              : {}
                          }
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 5,
                            ease: "easeInOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200/50 shadow-lg">
            <Trophy className="w-5 h-5 text-yellow-600" />
            <span className="text-slate-700 font-medium">Winners will be announced after Round-III evaluation</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
