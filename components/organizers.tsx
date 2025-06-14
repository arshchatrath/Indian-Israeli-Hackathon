"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin, Mail } from "lucide-react"

const organizers = [
  {
    name: "Dr. Sarah Cohen",
    designation: "Director of Innovation",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Leading healthcare innovation expert with 15+ years of experience",
  },
  {
    name: "Prof. Rajesh Kumar",
    designation: "Head of Technology",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Renowned AI researcher and technology evangelist",
  },
  {
    name: "Dr. Maya Patel",
    designation: "Healthcare Strategist",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert in digital health transformation and policy",
  },
  {
    name: "Mr. David Goldstein",
    designation: "Industry Relations",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Connecting startups with industry leaders and investors",
  },
]

export default function Organizers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Organizing Committee</h2>
          <p className="text-xl text-gray-600">Meet the minds behind the hackathon</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {organizers.map((organizer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={organizer.image || "/placeholder.svg"}
                  alt={organizer.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/90 p-2 rounded-full"
                    >
                      <Linkedin className="h-5 w-5 text-blue-600" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/90 p-2 rounded-full"
                    >
                      <Mail className="h-5 w-5 text-gray-600" />
                    </motion.button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{organizer.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{organizer.designation}</p>
                <p className="text-gray-600 text-sm">{organizer.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
