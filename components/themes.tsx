"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Building2, Users, Gamepad2, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const themes = [
  {
    title: "AI-Powered Diagnostic Solutions",
    partner: "Reut",
    description: "Develop innovative AI solutions for early disease detection and diagnosis",
    icon: Building2,
    color: "bg-blue-500",
  },
  {
    title: "Digital Health Platforms",
    partner: "Silvergenie",
    description: "Create comprehensive digital health management systems",
    icon: Users,
    color: "bg-green-500",
  },
  {
    title: "VR/AR Healthcare Training",
    partner: "VRSteps",
    description: "Revolutionary virtual reality solutions for medical training",
    icon: Gamepad2,
    color: "bg-purple-500",
  },
  {
    title: "Telemedicine Innovation",
    partner: "HealthTech Partners",
    description: "Next-generation telemedicine and remote care solutions",
    icon: Building2,
    color: "bg-indigo-500",
  },
  {
    title: "Wearable Health Monitoring",
    partner: "MedDevice Corp",
    description: "Smart wearable devices for continuous health monitoring",
    icon: Users,
    color: "bg-red-500",
  },
  {
    title: "Healthcare Data Analytics",
    partner: "DataHealth Solutions",
    description: "Advanced analytics for healthcare data insights",
    icon: Gamepad2,
    color: "bg-yellow-500",
  },
]

const PROBLEM_STATEMENTS_DOC_URL = "https://docs.google.com/document/d/1Y7J2x-8U0FXWcMgQLFgoc6MHTjbRe94AE_M2pq8Onfs/edit?tab=t.0"

export default function Themes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleViewDetails = () => {
    window.open(PROBLEM_STATEMENTS_DOC_URL, '_blank', 'noopener,noreferrer')
  }

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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Themes & Problem Statements</h2>
          <p className="text-xl text-gray-600 mb-6">Choose your challenge and innovate</p>
          
          {/* Central button for detailed descriptions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              onClick={handleViewDetails}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <FileText className="mr-2 h-5 w-5" />
              View All Detailed Problem Statements
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className={`${theme.color} p-4`}>
                <theme.icon className="h-8 w-8 text-white mb-2" />
                <h3 className="text-xl font-bold text-white">{theme.title}</h3>
                <p className="text-white/90 text-sm">Partner: {theme.partner}</p>
              </div>

              <div className="p-6">
                <p className="text-gray-600">{theme.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom reminder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
        </motion.div>
      </div>
    </div>
  )
}