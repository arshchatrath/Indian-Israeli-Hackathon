"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Video, Trophy, Award, FileText, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const registrationRounds = [
  {
    round: "Round-I",
    title: "PPT Submission",
    deadline: "28 June 2025",
    description: "Submit your innovative presentation showcasing your solution approach",
    icon: FileText,
    color: "bg-blue-500",
    action: "Submit PPT",
  },
  {
    round: "Round-II",
    title: "Online Presentation",
    date: "19 July 2025",
    description: "Present your solution to our expert panel via Zoom",
    icon: Video,
    color: "bg-indigo-500",
    action: "Join Zoom",
  },
  {
    round: "Round-III",
    title: "Offline Demo",
    date: "1st week of August 2025",
    description: "Demonstrate your working prototype in person",
    icon: Trophy,
    color: "bg-purple-500",
    action: "View Results",
  },
]

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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Registration & Rules</h2>
          <p className="text-xl text-gray-600">Your path to innovation starts here</p>
        </motion.div>

        {/* Registration Rounds */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {registrationRounds.map((round, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div
                    className={`${round.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <round.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{round.round}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-blue-600">{round.title}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{round.description}</p>
                  <p className="font-semibold text-gray-900 mb-4">{round.deadline || round.date}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">{round.action}</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Eligibility & Rules */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-2" />
                  Eligibility & Rules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {eligibilityPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results & Certificates */}
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
  )
}
