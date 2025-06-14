"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Presentation, Trophy } from "lucide-react"

const timelineData = [
  {
    round: "Round-I",
    title: "PPT Submission",
    date: "28 June 2025",
    description: "Submit your innovative presentation showcasing your solution",
    icon: Calendar,
    color: "bg-blue-500",
  },
  {
    round: "Round-II",
    title: "Online Presentation",
    date: "19 July 2025",
    description: "Present your solution to our panel of expert judges",
    icon: Presentation,
    color: "bg-indigo-500",
  },
  {
    round: "Round-III",
    title: "Offline Demo",
    date: "1st week of August 2025",
    description: "Demonstrate your working prototype and compete for the grand prize",
    icon: Trophy,
    color: "bg-purple-500",
  },
]

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Timeline</h2>
          <p className="text-xl text-gray-600">Your journey to innovation</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 hidden md:block"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:flex-row`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className={`${item.color} p-3 rounded-full text-white mr-4`}>
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{item.round}</h3>
                        <p className="text-blue-600 font-semibold">{item.title}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <p className="text-sm font-semibold text-gray-800">{item.date}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white border-4 border-blue-500 rounded-full my-4 md:my-0">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                </div>

                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
