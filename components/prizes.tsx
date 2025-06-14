"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, DollarSign, Briefcase, Camera, Award } from "lucide-react"

const prizeFeatures = [
  {
    icon: DollarSign,
    title: "Total Prize Pool",
    value: "₹1,00,000",
    description: "Distributed among winners",
    color: "text-green-500",
  },
  {
    icon: Briefcase,
    title: "Internship Opportunities",
    value: "10+",
    description: "With partner companies",
    color: "text-blue-500",
  },
  {
    icon: Camera,
    title: "Media Coverage",
    value: "National",
    description: "Press and media attention",
    color: "text-purple-500",
  },
  {
    icon: Award,
    title: "Innovation Award",
    value: "Special",
    description: "Recognition certificate",
    color: "text-orange-500",
  },
]

const prizeBreakdown = [
  { position: "1st Place", amount: "₹50,000", color: "bg-yellow-500" },
  { position: "2nd Place", amount: "₹30,000", color: "bg-gray-400" },
  { position: "3rd Place", amount: "₹20,000", color: "bg-orange-600" },
]

export default function Prizes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Prizes & Opportunities</h2>
          <p className="text-xl text-gray-600">Rewarding innovation and excellence</p>
        </motion.div>

        {/* Prize Pool Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 3,
            }}
            className="inline-block"
          >
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-8 rounded-full shadow-2xl">
              <DollarSign className="h-16 w-16 mx-auto mb-2" />
              <div className="text-4xl font-bold">₹1,00,000</div>
              <div className="text-lg">Total Prize Pool</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Prize Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {prizeBreakdown.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className={`${prize.color} p-4 text-center`}>
                <Trophy className="h-12 w-12 text-white mx-auto mb-2" />
                <h3 className="text-xl font-bold text-white">{prize.position}</h3>
              </div>
              <div className="p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{prize.amount}</div>
                <p className="text-gray-600">Cash Prize</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Opportunities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {prizeFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all"
            >
              <feature.icon className={`h-12 w-12 mx-auto mb-4 ${feature.color}`} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">{feature.value}</div>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
