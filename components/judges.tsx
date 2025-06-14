"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown, Award, Target, Users, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

const judges = [
  {
    name: "Dr. Rachel Green",
    title: "Chief Medical Officer",
    company: "HealthTech Innovations",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Mr. Amit Sharma",
    title: "VP of Engineering",
    company: "MedAI Solutions",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Prof. Lisa Thompson",
    title: "Director of Research",
    company: "Digital Health Institute",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Dr. Michael Chen",
    title: "Innovation Lead",
    company: "BioTech Ventures",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Ms. Priya Gupta",
    title: "Healthcare Strategist",
    company: "Future Health Labs",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Dr. James Wilson",
    title: "Chief Technology Officer",
    company: "MedDevice Corp",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const selectionCriteria = [
  {
    icon: Lightbulb,
    title: "Innovation & Creativity",
    description: "Originality and creative approach to problem-solving",
  },
  {
    icon: Target,
    title: "Technical Feasibility",
    description: "Practical implementation and technical soundness",
  },
  {
    icon: Users,
    title: "Impact & Scalability",
    description: "Potential for real-world impact and scalability",
  },
  {
    icon: Award,
    title: "Presentation Quality",
    description: "Clear communication and professional presentation",
  },
]

export default function Judges() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showCriteria, setShowCriteria] = useState(false)

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Judges</h2>
          <p className="text-xl text-gray-600 mb-8">Industry leaders who will evaluate your innovations</p>

          <Button
            onClick={() => setShowCriteria(!showCriteria)}
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Selection Criteria for Judges
            <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showCriteria ? "rotate-180" : ""}`} />
          </Button>
        </motion.div>

        {/* Selection Criteria */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: showCriteria ? 1 : 0,
            height: showCriteria ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden mb-16"
        >
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Selection Criteria</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {selectionCriteria.map((criteria, index) => (
                <div key={index} className="text-center">
                  <criteria.icon className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">{criteria.title}</h4>
                  <p className="text-gray-600 text-sm">{criteria.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Judges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {judges.map((judge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <img src={judge.image || "/placeholder.svg"} alt={judge.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{judge.name}</h3>
                <p className="text-blue-600 font-semibold mb-1">{judge.title}</p>
                <p className="text-gray-600">{judge.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
