"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Video, Trophy, Award, FileText, Users, ArrowRight, Scale } from "lucide-react" // Added ArrowRight
import { Button } from "@/components/ui/button" // Added Button import
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// const registrationRounds = [
//   {
//     round: "Round-I",
//     title: "PPT Submission",
//     deadline: "24 July 2025",
//     description: "Submit your innovative presentation showcasing your solution approach",
//     icon: FileText,
//     color: "bg-blue-500",
//   },
//   {
//     round: "Round-II",
//     title: "Online Presentation",
//     date: "31 July 2025",
//     description: "Present your solution to our expert panel via Zoom",
//     icon: Video,
//     color: "bg-indigo-500",
//   },
//   {
//     round: "Round-III",
//     title: "Offline Demo",
//     date: "2nd week of August 2025",
//     description: "Demonstrate your working prototype in person",
//     icon: Trophy,
//     color: "bg-purple-500",
//   },
// ]

const eligibilityPoints = [
  "Open to students and professionals from Israel and India",
  "Teams of 2-5 members allowed",
  "Must have basic technical knowledge in chosen theme",
  "Commitment to participate in all three rounds",
  "Original ideas and solutions only",
]

export default function Registration() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Registration, Rules and Guidelines</h2>
          {/* <p className="text-xl text-gray-600 mb-8">Your path to innovation starts here</p> */}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 hover:from-blue-700 hover:via-purple-600 hover:to-blue-800 text-white px-10 py-4 text-lg font-semibold shadow-2xl rounded-2xl overflow-hidden group border-0"
              onClick={handleRegistration}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center">
                Register Now
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-3 h-6 w-6" />
                </motion.div>
              </span>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="border-3 border-blue-600 text-blue-700 hover:bg-blue-50 hover:border-purple-600 hover:text-purple-700 px-10 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 backdrop-blur-sm bg-white/80"
              onClick={handleGuidelines}
            >
              <span className="flex items-center">
                View Guidelines
                <FileText className="ml-3 h-6 w-6" />
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Rules & Eligibility */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Eligibility & Rules */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span role="img" aria-label="shield">🛡️</span>
                  Eligibility & Rules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2 font-semibold text-blue-700 text-lg">
                    <Users className="h-5 w-5 text-blue-600" />
                    Eligibility
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-base pl-2">
                    <li>Open to undergraduate/graduate students (any discipline) and working professionals currently residing in <b>India</b> or <b>Israel</b>.</li>
                    <li><b>Thapar students</b> must participate offline; others will join online.</li>
                    <li>Teams of <b>2-5 members</b>.</li>
                    <li>Must have basic technical knowledge in chosen domain.</li>
                    <li className="text-green-700 font-semibold">No registration fee.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2 font-semibold text-purple-700 text-lg">
                    <span role="img" aria-label="scroll">📜</span>
                    Rules
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-base pl-2">
                    <li>All ideas must be original and built during the hackathon.</li>
                    <li>Teams must take part in all 3 rounds to stay eligible.</li>
                    <li>Offline teams present at the venue; online teams submit projects digitally.</li>
                    <li>Each participant can join only one team.</li>
                    <li>Maintain a respectful and ethical code of conduct.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right: Evaluation Criteria and Results/Certificates (stacked) */}
          <div className="flex flex-col gap-8 w-full">
            {/* Evaluation Criteria Box */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="h-6 w-6 text-purple-600" />
                    Evaluation Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold text-blue-700 mb-1">Judges will evaluate on:</div>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-base pl-2">
                    <li>Innovation</li>
                    <li>Technical execution</li>
                    <li>Impact</li>
                    <li>UX/UI</li>
                    <li>Pitch</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Results & Certificates Box */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-6 w-6 text-blue-600 mr-2" />
                    Results & Certificates
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Result Announcement</h4>
                    <p className="text-gray-600">
                      Final results will be announced within 48 hours of Round-III completion
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Certificates</h4>
                    <p className="text-gray-600">
                      All participants will receive participation certificates. Winners get special recognition
                      certificates.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Additional Benefits</h4>
                    <p className="text-gray-600">
                      Networking opportunities, mentorship, and potential internship offers for outstanding participants.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
