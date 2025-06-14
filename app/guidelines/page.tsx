"use client"

import { motion } from "framer-motion"
import { ArrowLeft, AlertTriangle, Clock, Users, FileText, Award, Phone, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function Guidelines() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <span className="text-sm text-gray-600">https://www.israeli-indian-hackathon.org</span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Guidelines for the <span className="text-blue-600">Participants</span>
            </h1>
            <p className="text-lg text-gray-600">Israeli-Indian Hackathon 2025 - Restorative Health Care</p>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          {/* General Instructions */}
          <motion.div variants={itemVariants}>
            <Card className="border-blue-200 shadow-lg">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center text-2xl text-blue-900">
                  <Users className="h-6 w-6 mr-3" />
                  General Instructions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    "Each team must register through the official registration form provided by the organizers.",
                    "Team size should be between 1-6 members (minimum 1, maximum 6 participants per team).",
                    "Teams can have mixed composition of students from different institutions, disciplines, and countries.",
                    "All team members must submit the registration form individually and mention their team name consistently.",
                    "After registration, teams must join the official WhatsApp group for important updates and communications.",
                  ].map((instruction, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Badge variant="outline" className="mt-1 bg-blue-100 text-blue-800 border-blue-300">
                        {index + 1}
                      </Badge>
                      <p className="text-gray-700 leading-relaxed">{instruction}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Presentation Guidelines */}
          <motion.div variants={itemVariants}>
            <Card className="border-orange-200 shadow-lg">
              <CardHeader className="bg-orange-50">
                <CardTitle className="flex items-center text-2xl text-orange-900">
                  <FileText className="h-6 w-6 mr-3" />
                  Presentation / Slide Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {/* AI Warning */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                    <span className="font-semibold text-red-800">Important Warning:</span>
                  </div>
                  <p className="text-red-700 mt-2">
                    <strong>Don't use AI for PPT generation.</strong> All presentations must be original work created by
                    team members.
                  </p>
                </div>

                {/* Guidance Links */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Reference Materials:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {["Link-1", "Link-2", "Link-3", "Link-4", "Link-5"].map((link, index) => (
                      <Button key={index} variant="outline" size="sm" className="justify-start">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {link} - Guidance Material
                      </Button>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Sample PPTs and reference materials available for guidance
                  </p>
                </div>

                {/* Slide Outline */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Required Slide Outline (13 Slides):</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Title Slide - Team name, project title, members",
                      "Problem Statement - Clear definition of the healthcare challenge",
                      "Market Research - Current solutions and gaps",
                      "Target Audience - Who will benefit from your solution",
                      "Proposed Solution - Your innovative approach",
                      "Technology Stack - Tools and technologies used",
                      "Implementation Plan - Step-by-step development approach",
                      "Prototype/Demo - Visual representation or working model",
                      "Business Model - Revenue streams and sustainability",
                      "Impact Assessment - Expected outcomes and benefits",
                      "Challenges & Mitigation - Potential obstacles and solutions",
                      "Future Roadmap - Scaling and enhancement plans",
                      "Thank You - Contact information and acknowledgments",
                    ].map((slide, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                        <Badge className="mt-1 bg-blue-600">{index + 1}</Badge>
                        <p className="text-sm text-gray-700">{slide}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Video Submission */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Optional Video Submission:</h4>
                  <p className="text-blue-800 text-sm">
                    Teams can optionally submit a 1-4 minute YouTube video explaining their solution. This can enhance
                    your presentation and provide additional context to judges.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants}>
            <Card className="border-green-200 shadow-lg">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center text-2xl text-green-900">
                  <Clock className="h-6 w-6 mr-3" />
                  Timeline of the Hackathon
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {[
                    {
                      round: "Round-I",
                      title: "PPT/Idea Submission",
                      description: "Submit your 10-slide presentation with your innovative healthcare solution",
                      details: "Maximum 10 slides only. Focus on problem, solution, and implementation plan.",
                      color: "blue",
                    },
                    {
                      round: "Round-II",
                      title: "Online Presentation",
                      description: "Present your idea to judges via online platform",
                      details: "15 minutes total: 10 minutes presentation + 5 minutes Q&A session",
                      color: "purple",
                    },
                    {
                      round: "Round-III",
                      title: "Offline Evaluation",
                      description: "Final round with in-person presentation and demo",
                      details: "15 minutes total: 10 minutes presentation + 5 minutes Q&A session",
                      color: "green",
                    },
                    {
                      round: "Certificates",
                      title: "Participation Recognition",
                      description: "All participants receive certificates of participation",
                      details: "Digital certificates will be provided to all registered participants",
                      color: "orange",
                    },
                  ].map((phase, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-full bg-${phase.color}-100 border-2 border-${phase.color}-300 flex items-center justify-center`}
                        >
                          <span className={`text-${phase.color}-700 font-bold text-sm`}>{index + 1}</span>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge className={`bg-${phase.color}-600`}>{phase.round}</Badge>
                            <h4 className="font-semibold text-gray-900">{phase.title}</h4>
                          </div>
                          <p className="text-gray-700 mb-1">{phase.description}</p>
                          <p className="text-sm text-gray-600">{phase.details}</p>
                        </div>
                      </div>
                      {index < 3 && <div className="absolute left-6 top-12 w-px h-6 bg-gray-300"></div>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Evaluation Parameters */}
          <motion.div variants={itemVariants}>
            <Card className="border-purple-200 shadow-lg">
              <CardHeader className="bg-purple-50">
                <CardTitle className="flex items-center text-2xl text-purple-900">
                  <Award className="h-6 w-6 mr-3" />
                  Evaluation Parameters
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                  <p className="text-yellow-800 font-medium">
                    <strong>Mandatory Requirement:</strong> All team members must be present during evaluation rounds.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Innovation & Creativity - Uniqueness of the solution",
                    "Technical Feasibility - Practicality of implementation",
                    "Market Potential - Commercial viability and scalability",
                    "Healthcare Impact - Potential to improve patient outcomes",
                    "Presentation Quality - Clarity and professionalism",
                    "Team Collaboration - Evidence of teamwork and coordination",
                  ].map((criteria, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <p className="text-gray-700">{criteria}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Motivational Quote */}
          <motion.div variants={itemVariants}>
            <Card className="border-indigo-200 shadow-lg bg-gradient-to-r from-indigo-50 to-blue-50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-indigo-900 mb-4">Just Remember</h3>
                <blockquote className="text-lg text-indigo-800 italic leading-relaxed">
                  "Whether you win or lose, the most important thing is what you learn from this experience. Every
                  challenge is an opportunity to grow, every setback is a setup for a comeback, and every innovation
                  starts with a single idea. Your journey in this hackathon is not just about the destination, but about
                  the knowledge, skills, and connections you build along the way."
                </blockquote>
                <div className="mt-6 w-16 h-1 bg-indigo-300 mx-auto rounded-full"></div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer Contact */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-6">Hackathon Coordinator</h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a
                  href="mailto:contact@israeli-indian-hackathon.org"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  contact@israeli-indian-hackathon.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <a href="tel:+919313889932" className="text-green-400 hover:text-green-300 transition-colors">
                  +91-9313889932
                </a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-400">© 2025 Israeli-Indian Hackathon. All rights reserved.</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
