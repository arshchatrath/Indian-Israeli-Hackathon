"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { IndianRupee, Briefcase, Camera, Award, Star, Gift, Target, Zap, Crown, Medal } from "lucide-react"

const prizeBreakdown = [
  {
    position: "1st Place",
    amount: "₹50,000",
    color: "from-yellow-400 to-orange-500",
    bgColor: "from-yellow-50 to-orange-50",
    icon: Crown,
    rank: "🥇",
    description: "Champion's Glory",
    benefits: ["Cash Prize", "Winner's Trophy", "Certificate of Excellence", "Media Coverage"],
  },
  {
    position: "2nd Place",
    amount: "₹30,000",
    color: "from-slate-400 to-slate-600",
    bgColor: "from-slate-50 to-slate-100",
    icon: Medal,
    rank: "🥈",
    description: "Runner-up Recognition",
    benefits: ["Cash Prize", "Silver Trophy", "Achievement Certificate", "Recognition"],
  },
  {
    position: "3rd Place",
    amount: "₹20,000",
    color: "from-amber-600 to-orange-700",
    bgColor: "from-amber-50 to-orange-50",
    icon: Award,
    rank: "🥉",
    description: "Excellence Award",
    benefits: ["Cash Prize", "Bronze Trophy", "Participation Certificate", "Appreciation"],
  },
]

const specialRewards = [
  {
    icon: Briefcase,
    title: "Career Opportunities",
    value: "10+ Internships",
    description: "Exclusive opportunities with leading tech companies and startups",
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50",
  },
  {
    icon: Camera,
    title: "Media Spotlight",
    value: "National Coverage",
    description: "Feature stories in tech publications and social media",
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-50 to-pink-50",
  },
  {
    icon: Gift,
    title: "Participation Rewards",
    value: "For Everyone",
    description: "Digital certificates and exclusive hackathon merchandise",
    color: "from-emerald-500 to-teal-600",
    bgColor: "from-emerald-50 to-teal-50",
  },
  {
    icon: Zap,
    title: "Mentorship Program",
    value: "6 Months",
    description: "Ongoing guidance from industry experts and successful entrepreneurs",
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-50 to-red-50",
  },
]

export default function Prizes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-yellow-400/5 to-orange-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center space-x-3 bg-yellow-50 px-8 py-4 rounded-full border border-yellow-200 shadow-lg mb-8"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Target className="w-6 h-6 text-yellow-600" />
            <span className="text-yellow-700 font-bold text-lg">Rewards & Recognition</span>
          </motion.div>

          <h2 className="text-6xl font-black bg-gradient-to-r from-slate-900 via-yellow-800 to-orange-900 bg-clip-text text-transparent mb-8 leading-tight">
            Prizes &
            <br />
            <span className="text-5xl">Opportunities</span>
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            Celebrating innovation with substantial rewards, career opportunities, and recognition that opens doors to
            your future
          </p>
        </motion.div>

        {/* Prize Pool Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="relative block w-full">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-3xl blur-2xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 text-white 
  p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl border border-yellow-300 
  w-full h-full min-h-64 sm:min-h-72 md:min-h-80">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <IndianRupee className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 mx-auto mb-4" />
              </motion.div>
              <div className="text-3xl sm:text-4xl md:text-6xl font-black mb-2">₹1,00,000</div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold opacity-90">Total Prize Pool</div>
              <div className="text-sm sm:text-base md:text-lg opacity-75 mt-2">+ Exclusive Benefits & Opportunities</div>
            </div>
          </div>
        </motion.div>

        {/* Prize Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {prizeBreakdown.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative"
            >
              <div
                className={`bg-gradient-to-br ${prize.bgColor} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/60 h-full`}
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${prize.color} p-8 relative overflow-hidden`}>
                  <motion.div
                    className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                  <div className="relative z-10 text-center">
                    <div className="text-4xl mb-4">{prize.rank}</div>
                    <motion.div
                      className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm inline-block mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <prize.icon className="h-10 w-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">{prize.position}</h3>
                    <p className="text-white/90 text-sm font-medium">{prize.description}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 text-center space-y-4">
                  <div className="text-4xl font-black text-slate-900 mb-4">{prize.amount}</div>

                  <div className="space-y-2">
                    <h4 className="font-bold text-slate-900 mb-3">What You Get:</h4>
                    {prize.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-600">
                        <Star className="h-3 w-3 text-yellow-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Rewards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Beyond Cash Prizes</h3>
            <p className="text-lg text-slate-600">Exclusive opportunities that extend far beyond the hackathon</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialRewards.map((reward, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div
                  className={`bg-gradient-to-br ${reward.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/60 h-full`}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${reward.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <reward.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 text-center">{reward.title}</h4>
                  <div className="text-2xl font-black text-center mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {reward.value}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed text-center">{reward.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-yellow-100 max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Your Success Starts Here</h3>
            <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
              Join the Israeli-Indian Hackathon 2025 and transform your innovative ideas into reality while competing
              for life-changing prizes and opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                className="text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl font-black text-yellow-600 mb-2 group-hover:text-yellow-700 transition-colors">
                  ₹1L+
                </div>
                <div className="text-slate-600 font-semibold">Total Value</div>
              </motion.div>
              <motion.div
                className="text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl font-black text-blue-600 mb-2 group-hover:text-blue-700 transition-colors">
                  10+
                </div>
                <div className="text-slate-600 font-semibold">Career Paths</div>
              </motion.div>
              <motion.div
                className="text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl font-black text-emerald-600 mb-2 group-hover:text-emerald-700 transition-colors">
                  100%
                </div>
                <div className="text-slate-600 font-semibold">Recognition</div>
              </motion.div>
              <motion.div
                className="text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl font-black text-purple-600 mb-2 group-hover:text-purple-700 transition-colors">
                  ∞
                </div>
                <div className="text-slate-600 font-semibold">Possibilities</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
