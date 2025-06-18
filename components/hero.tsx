"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, FileText, Trophy, Users, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

const stats = [
  {
    label: "Prize Pool",
    value: "₹1,00,000",
    icon: Trophy,
    delay: 0.8,
    color: "from-amber-500 to-orange-500",
  },
  {
    label: "Participants Expected",
    value: "500+",
    icon: Users,
    delay: 1.0,
    color: "from-blue-500 to-indigo-500",
  },
  {
    label: "Countries",
    value: "2",
    icon: Globe,
    delay: 1.2,
    color: "from-emerald-500 to-teal-500",
  },
]

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-100/60 flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced Background Effects with More Evident Grid */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-400/15 to-cyan-400/15 rounded-full blur-3xl"
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 16,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
        />
        {/* More evident grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Logo Section - Bigger COE Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex items-center space-x-4"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-lg"
                  animate={{
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <img
                  src="/coe logo.png"
                  alt="Center of Excellence"
                  className="relative w-32 h-32 object-contain rounded-xl bg-white/95 backdrop-blur-sm shadow-xl border border-white/80"
                />
              </motion.div>

              <div className="space-y-1">
                <motion.p
                  className="text-base font-semibold text-slate-700 tracking-wide"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Thapar Institute Of Engineering & Technology
                </motion.p>
                <motion.p
                  className="text-sm text-blue-600 font-medium tracking-wide"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Presents
                </motion.p>
              </div>
            </motion.div>

            {/* Headlines - Sophisticated Typography */}
            <div className="space-y-6">
              <motion.h1
                className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.span
                  className="block text-slate-900 relative"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  Israeli-Indian
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, delay: 2, ease: "easeOut" }}
                  />
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  Hackathon 2025
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                  Join innovators from Israel and India in developing cutting-edge healthcare solutions that will
                  transform patient care and medical technology across both nations.
                </p>
              </motion.div>
            </div>

            {/* Elegant CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white px-10 py-6 text-xl font-semibold rounded-xl shadow-xl border-0 overflow-hidden group"
                  onClick={() =>
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLScn8F1KEg57rFbDvFhCqqyyHD3TkLKKUFqPR-g39aUe69EhYw/viewform",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                  <span className="relative z-10 flex items-center">
                    Register Now
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-blue-400 hover:text-blue-700 px-10 py-6 text-xl font-semibold rounded-xl bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300"
                  onClick={() => (window.location.href = "/guidelines")}
                >
                  <span className="flex items-center">
                    View Guidelines
                    <FileText className="ml-3 h-5 w-5" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Refined Right Stats */}
          <div className="lg:col-span-5">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/70">
                <motion.div
                  className="text-center mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Event Highlights</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
                </motion.div>

                <div className="space-y-6">
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      className="group relative"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: stat.delay + 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      whileHover={{
                        scale: 1.01,
                        x: 4,
                        transition: { duration: 0.3, ease: "easeOut" },
                      }}
                    >
                      <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative flex items-center space-x-4 p-4 rounded-2xl">
                        <motion.div
                          className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          <stat.icon className="h-8 w-8 text-white" />
                        </motion.div>
                        <div>
                          <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                          <div className="text-sm text-slate-600 font-semibold">{stat.label}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-8 pt-6 border-t border-slate-200/60"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 2.2 }}
                >
                  <div className="text-center">
                    <p className="text-sm text-slate-600 font-medium mb-2">Bridging Innovation Across Nations</p>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-6 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-sm flex items-center justify-center">
                        <span className="text-white text-xs font-bold">IL</span>
                      </div>
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      />
                      <div className="w-6 h-4 bg-gradient-to-r from-orange-500 to-green-500 rounded-sm flex items-center justify-center">
                        <span className="text-white text-xs font-bold">IN</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center cursor-pointer hover:border-blue-400 transition-colors duration-300"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            onClick={() => {
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-1 h-3 bg-slate-400 rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
