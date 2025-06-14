"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Shield, Heart, Smartphone, DollarSign } from "lucide-react"

const keyPoints = [
  { icon: Brain, label: "AI", color: "text-blue-500" },
  { icon: Shield, label: "Cybersecurity", color: "text-green-500" },
  { icon: Heart, label: "Medtech", color: "text-red-500" },
  { icon: Smartphone, label: "Fintech", color: "text-purple-500" },
  { icon: DollarSign, label: "Healthcare", color: "text-indigo-500" },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Hackathon</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                The Israeli-Indian Hackathon 2025 is a groundbreaking collaboration that brings together the brightest
                minds from both nations to tackle the most pressing challenges in restorative healthcare.
              </p>
              <p>
                This innovative event focuses on developing cutting-edge solutions that bridge technology and
                healthcare, fostering international cooperation and knowledge exchange between Israeli and Indian
                innovators.
              </p>
              <p>
                Participants will work on real-world problems, creating impactful solutions that can transform the
                healthcare landscape and improve lives across both nations and beyond.
              </p>
            </div>
          </motion.div>

          {/* Key Points */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6"
          >
            {keyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-all"
              >
                <point.icon className={`h-12 w-12 mx-auto mb-3 ${point.color}`} />
                <h3 className="font-semibold text-gray-900">{point.label}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
