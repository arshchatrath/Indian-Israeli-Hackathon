"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Code, Lightbulb, Rocket } from "lucide-react"

const technicalSupporters = [
  {
    name: "Creative Computing Society",
    logo: "https://res.cloudinary.com/dldfnkvlm/image/upload/v1749908612/CCS_twx1np.avif?height=120&width=120",
    description: "Fostering programming culture and competitive coding among students",
    icon: Code,
    color: "bg-indigo-500",
  },
  {
    name: "IEEE Computer Society",
    logo: "https://res.cloudinary.com/dldfnkvlm/image/upload/v1749965530/ieeethapar_logo_rncpvh.avif?height=120&width=120",
    description: "Leading the advancement of technology for humanity through computing and engineering excellence.",
    icon: Code,
    color: "bg-blue-500",
  },
  {
    name: "ACM Student Chapter",
    logo: "https://res.cloudinary.com/dldfnkvlm/image/upload/v1749965524/ACM_ajytyh.avif?height=120&width=120",
    description: "Advancing computing as a science and profession through innovation and collaboration.",
    icon: Lightbulb,
    color: "bg-green-500",
  },
  {
    name: "Google Developer Student Clubs",
    logo: "https://res.cloudinary.com/dldfnkvlm/image/upload/v1749965536/GDSC_vsj29c.avif?height=120&width=120",
    description: "University-based community groups for students interested in Google developer technologies.",
    icon: Rocket,
    color: "bg-red-500",
  },
  {
    name: "Microsoft Learn Student Ambassadors",
    logo: "https://avatars.githubusercontent.com/u/45298983?s=200&v=4?height=120&width=120",
    description: "Student leaders passionate about technology and helping their peers learn new skills.",
    icon: Users,
    color: "bg-purple-500",
  },
  
  // {
  //   name: "Technion Innovation Society",
  //   logo: "/placeholder.svg?height=120&width=120",
  //   description: "Promoting entrepreneurship and innovation in technology among Israeli students.",
  //   icon: Lightbulb,
  //   color: "bg-orange-500",
  // },
  // {
  //   name: "Healthcare Innovation Club",
  //   logo: "/placeholder.svg?height=120&width=120",
  //   description: "Bridging the gap between technology and healthcare through student-led initiatives.",
  //   icon: Rocket,
  //   color: "bg-teal-500",
  // },
  // {
  //   name: "AI & ML Society",
  //   logo: "/placeholder.svg?height=120&width=120",
  //   description: "Advancing artificial intelligence and machine learning research among students.",
  //   icon: Users,
  //   color: "bg-pink-500",
  // },
]

export default function TechnicalSupport() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6"
          >
            <Code className="h-8 w-8 text-blue-600" />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technically Supported By</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowered by leading college societies and student communities driving innovation in technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technicalSupporters.map((supporter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Header with Icon */}
              <div className={`${supporter.color} p-4 relative overflow-hidden`}>
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
                <div className="relative z-10 flex items-center justify-between">
                  <supporter.icon className="h-8 w-8 text-white" />
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                  >
                    <Code className="h-6 w-6 text-white" />
                  </motion.div>
                </div>
              </div>

              {/* Logo Section */}
              <div className="p-6 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative mb-4"
                >
                  <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center overflow-hidden group-hover:bg-gray-50 transition-colors">
                    <img
                      src={supporter.logo || "/placeholder.svg"}
                      alt={supporter.name}
                      className="w-16 h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                </motion.div>

                <motion.h3
                  className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {supporter.name}
                </motion.h3>

                <motion.p
                  className="text-gray-600 text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {supporter.description}
                </motion.p>
              </div>

              {/* Animated Bottom Border */}
              <motion.div
                className={`h-1 ${supporter.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          { <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4"
            >
              <Users className="h-6 w-6 text-blue-600" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Join the Innovation Network</h3>
            <p className="text-gray-600 mb-6">
              These technical communities are driving the future of healthcare technology. Connect with like-minded
              innovators and be part of the change.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Code className="h-5 w-5 mr-2" />
              Explore Communities
            </motion.div>
          </div> }
        </motion.div> */}
      </div>
    </div>
  )
}
