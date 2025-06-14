"use client"

import { motion } from "framer-motion"
import { ArrowRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const handleRegistration = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScn8F1KEg57rFbDvFhCqqyyHD3TkLKKUFqPR-g39aUe69EhYw/viewform",
      "_blank",
      "noopener,noreferrer",
    )
  }

  const handleGuidelines = () => {
    window.location.href = "/guidelines"
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Israeli-Indian
            <span className="block text-blue-600">Hackathon 2025</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-gray-600 mb-8 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Restorative Health Care Hackathon
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              onClick={handleRegistration}
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
              onClick={handleGuidelines}
            >
              View Guidelines
              <FileText className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-indigo-200 rounded-full opacity-20"
          animate={{
            y: [0, 20, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  )
}
