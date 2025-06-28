"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1 rounded-full mb-4 shadow-sm tracking-wide text-base">
            We're here to help!
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 bg-gradient-to-r from-blue-700 via-emerald-600 to-blue-400 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about the hackathon? Reach out and we'll get back to you soon.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white/95 rounded-3xl shadow-2xl px-8 py-10 flex flex-col items-center gap-8 w-full border border-blue-100"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full">
            <motion.div
              whileHover={{ scale: 1.08, y: -4, boxShadow: "0 8px 32px 0 rgba(37,99,235,0.10)" }}
              className="flex items-center gap-3 bg-blue-50/60 rounded-xl px-5 py-3 shadow group transition"
            >
              <span className="bg-blue-100 p-3 rounded-full shadow group-hover:scale-110 transition">
                <Mail className="h-6 w-6 text-blue-600" />
              </span>
              <a
                href="mailto:contact@israeli-indian-hackathon.org"
                className="text-blue-700 font-semibold hover:underline text-base"
              >
                contact@israeli-indian-hackathon.org
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.08, y: -4, boxShadow: "0 8px 32px 0 rgba(16,185,129,0.10)" }}
              className="flex items-center gap-3 bg-green-50/60 rounded-xl px-5 py-3 shadow group transition"
            >
              <span className="bg-green-100 p-3 rounded-full shadow group-hover:scale-110 transition">
                <Phone className="h-6 w-6 text-green-600" />
              </span>
              <span className="text-gray-700 font-medium text-base">+91-93138 89932</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.08, y: -4, boxShadow: "0 8px 32px 0 rgba(168,85,247,0.10)" }}
              className="flex items-center gap-3 bg-purple-50/60 rounded-xl px-5 py-3 shadow group transition"
            >
              <span className="bg-purple-100 p-3 rounded-full shadow group-hover:scale-110 transition">
                <MapPin className="h-6 w-6 text-purple-600" />
              </span>
              <span className="text-gray-700 font-medium text-base">Virtual & Physical</span>
            </motion.div>
          </div>
          {/* <motion.a
            href="mailto:contact@israeli-indian-hackathon.org"
            whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 rgba(37,99,235,0.18)" }}
            className="mt-2 inline-flex items-center px-9 py-4 bg-gradient-to-r from-blue-600 to-emerald-500 text-white text-xl font-bold rounded-full shadow-xl hover:from-blue-700 hover:to-emerald-600 transition-all duration-200"
          >
            <Mail className="h-7 w-7 mr-3" />
            Send Email
          </motion.a> */}
        </motion.div>
      </div>
    </div>
  )
}
