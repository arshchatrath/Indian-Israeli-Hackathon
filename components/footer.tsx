"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, Flag, User } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Timeline", href: "#timeline" },
  { name: "Themes", href: "#themes" },
  { name: "Registration", href: "#registration" },
  { name: "Technical Support", href: "#technical-support" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Facebook, href: "#", color: "hover:text-blue-600" },
  { icon: Twitter, href: "#", color: "hover:text-blue-400" },
  { icon: Linkedin, href: "#", color: "hover:text-blue-700" },
  { icon: Instagram, href: "#", color: "hover:text-pink-600" },
]

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className={`text-gray-300 ${social.color} transition-colors`}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-gray-300 text-sm">contact@israeli-indian-hackathon.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-300 text-sm">+91-93138 89932</span>
              </div>
            </div>
          </div>

          {/* Organizing Credits */}
          <div>
            <h3 className="text-xl font-bold mb-6">Organizing Credits</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Flag className="h-6 w-6 text-blue-400" />
                <span className="font-semibold">Israeli-Indian Hackathon 2025</span>
              </div>
              <p className="text-gray-300 text-sm">
                A collaborative initiative promoting innovation in healthcare technology between Israel and India.
              </p>
              <p className="text-gray-400 text-xs">
                Organized with support from leading academic institutions, industry partners, and government bodies.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Israeli-Indian Hackathon. All rights reserved. | Restorative Health Care Innovation Challenge
            </p>
            
            {/* Enhanced Personal Credit Section */}
            <motion.div 
              className="flex items-center space-x-6 text-sm bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-3 rounded-full shadow-lg"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ color: "#60A5FA" }}
              >
                <User size={14} className="text-blue-400" />
                <span className="font-medium bg-gradient-to-r from-gray-100 to-blue-100 bg-clip-text text-transparent">
                  Developed by Arsh Chatrath
                </span>
              </motion.div>
              
              <div className="h-4 w-px bg-gray-600" /> {/* Vertical Divider */}

              <div className="flex items-center space-x-3">
                <motion.a 
                  href="mailto:achatrath_be23@thapar.edu" 
                  className="flex items-center space-x-2 hover:text-blue-300 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    color: "#93C5FD",
                  }}
                >
                  <Mail size={14} />
                  <span className="font-medium">achatrath_be23@thapar.edu</span>
                </motion.a>

                <motion.a 
                  href="https://linkedin.com/in/arshchatrath" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Linkedin size={16} className="hover:filter hover:brightness-125" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}