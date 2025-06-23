"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { IndianRupee, Briefcase, Camera, Award, Star, Gift, Target, Zap, Crown, Medal, Sparkles, TrendingUp } from "lucide-react"

const prizeBreakdown = [
  {
    position: "1st Place",
    amount: "₹50,000",
    color: "from-yellow-400 to-orange-500",
    bgColor: "from-yellow-50 to-orange-50",
    icon: Crown,
    rank: "🥇",
    description: "Champion's Glory",
    benefits: ["Cash Prize", "Winner's Trophy", "Certificate", "Media Coverage"],
  },
  {
    position: "2nd Place",
    amount: "₹30,000",
    color: "from-slate-400 to-slate-600",
    bgColor: "from-slate-50 to-slate-100",
    icon: Medal,
    rank: "🥈",
    description: "Runner-up Recognition",
    benefits: ["Cash Prize", "Silver Trophy", "Certificate", "Recognition"],
  },
  {
    position: "3rd Place",
    amount: "₹20,000",
    color: "from-amber-600 to-orange-700",
    bgColor: "from-amber-50 to-orange-50",
    icon: Award,
    rank: "🥉",
    description: "Excellence Award",
    benefits: ["Cash Prize", "Bronze Trophy", "Certificate", "Appreciation"],
  },
]

const specialRewards = [
  {
    icon: Briefcase,
    title: "Career Opportunities",
    value: "10+ Positions",
    description: "Exclusive tech internships",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Camera,
    title: "Media Spotlight",
    value: "National Coverage",
    description: "Feature in tech publications",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Gift,
    title: "Participation",
    value: "For Everyone",
    description: "Certificates & merchandise",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Zap,
    title: "Mentorship",
    value: "6 Months",
    description: "Industry expert guidance",
    color: "from-orange-500 to-red-600",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function Prizes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div className="py-16 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg mb-6"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-bold">Rewards & Recognition</span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-900 via-yellow-800 to-orange-900 bg-clip-text text-transparent mb-4"
          >
            Prizes & Opportunities
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            Celebrating innovation with substantial rewards and career opportunities
          </motion.p>
        </motion.div>

        {/* Compact Prize Pool */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-2xl blur-lg" />
            <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-8 rounded-2xl shadow-xl border border-yellow-300 text-center min-w-80">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <IndianRupee className="h-12 w-12 mx-auto mb-3" />
              </motion.div>
              <div className="text-4xl font-black mb-1">₹1,00,000</div>
              <div className="text-lg font-bold opacity-90">Total Prize Pool</div>
              <div className="text-sm opacity-75 mt-1">+ Exclusive Benefits</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Compact Prize Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {prizeBreakdown.map((prize, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className={`bg-gradient-to-br ${prize.bgColor} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/60 overflow-hidden`}>
                <div className={`bg-gradient-to-r ${prize.color} p-6 text-center relative`}>
                  <div className="text-3xl mb-2">{prize.rank}</div>
                  <motion.div
                    className="p-2 bg-white/20 rounded-xl inline-block mb-3"
                    whileHover={{ rotate: 10 }}
                  >
                    <prize.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-1">{prize.position}</h3>
                  <p className="text-white/90 text-sm">{prize.description}</p>
                </div>

                <div className="p-6 text-center">
                  <div className="text-3xl font-black text-slate-900 mb-4">{prize.amount}</div>
                  <div className="space-y-1">
                    {prize.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-600 justify-center">
                        <Star className="h-3 w-3 text-yellow-500 mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Compact Special Rewards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Beyond Cash Prizes</h3>
            <p className="text-slate-600">Exclusive opportunities that extend your success</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {specialRewards.map((reward, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.03 }}
                className="group"
              >
                <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 h-full text-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${reward.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <reward.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{reward.title}</h4>
                  <div className="text-xl font-black mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {reward.value}
                  </div>
                  <p className="text-slate-600 text-sm">{reward.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compact Success Stats */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Your Success Starts Here</h3>
              <p className="text-slate-600">Transform your ideas into reality with life-changing opportunities</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "₹1L+", label: "Total Value", color: "text-yellow-600" },
                { value: "10+", label: "Career Paths", color: "text-blue-600" },
                { value: "100%", label: "Recognition", color: "text-emerald-600" },
                { value: "∞", label: "Possibilities", color: "text-purple-600" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`text-3xl font-black mb-1 ${stat.color} group-hover:scale-110 transition-transform`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-600 font-semibold text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}