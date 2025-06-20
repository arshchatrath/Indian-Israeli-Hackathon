"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin, Mail, Phone } from "lucide-react"

const spocMembers = [
  {
    name: "Dr. Harpreet Singh",
    designation: "SPOC - India",
    organization: "Asst. Professor, TIET & Visiting Prof., Reichman Univ.",
    image: "/Dr. Harpreet Singh.avif",
    bio: "Academic leader bridging Indian and Israeli innovation in healthcare technology.",
    country: "India",
    email: "harpreet.s@thapar.edu",
    linkedin: "https://www.linkedin.com/in/harpreet-singh-bb3aa89b/",
  },
  {
    name: "Ori Kadvil",
    designation: "SPOC - Israel",
    organization: "Hackathon Organizer",
    image: "/Ori Kadvil.avif",
    bio: "Healthcare technology pioneer leading immersive VR solutions for medical training.",
    country: "Israel",
    email: "orikadvil@israelindiahub.com", 
    linkedin: "https://www.linkedin.com/in/ori-kadvil-66222351/",
  },
]

export default function SPOC() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Single Point of Contact (SPOC)</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your dedicated contacts for seamless coordination between India and Israel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {spocMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Country Flag Header */}
              <div
                className={`h-2 ${member.country === "India" ? "bg-gradient-to-r from-orange-500 via-white to-green-500" : "bg-gradient-to-r from-blue-500 to-white"}`}
              />

              <div className="p-8">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto relative overflow-hidden rounded-full ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div
                    className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      member.country === "India" ? "bg-orange-500" : "bg-blue-500"
                    }`}
                  >
                    {member.country}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-lg font-semibold text-blue-600 mb-2">{member.designation}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.organization}</p>
                  <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-4">
                  {/* Email Button */}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`mailto:${member.email}?subject=Regarding%20Israeli-Indian%20Hackathon&body=Hello%20${member.name.split(' ')[0]},`}
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Contact</span>
                  </motion.a>

                  {/* LinkedIn Button */}
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-100 hover:bg-blue-200 text-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </motion.a>
                </div>
              </div>  

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <div
                  className={`w-16 h-16 rounded-full ${member.country === "India" ? "bg-orange-500" : "bg-blue-500"}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Assistance?</h3>
            <p className="text-gray-600 mb-4">
              Our SPOCs are here to help you with registration, technical queries, and coordination between teams from
              both countries.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>• Registration Support</span>
              <span>• Technical Assistance</span>
              <span>• Team Coordination</span>
              <span>• Event Information</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}