// "use client"

// import { motion } from "framer-motion"
// import { useInView } from "framer-motion"
// import { useRef } from "react"
// import { Lightbulb, Rocket, Users, Zap, Target, Star, Award } from "lucide-react"

// const technicalSupporters = [
//   {
//     name: "Creative Computing Society",
//     logo: "https://www.ccstiet.com/static/home/images/ccs_logo.png",
//     description: "Leading programming culture and competitive coding excellence across the institute",
//     icon: Star, // Special icon for CCS
//     color: "from-purple-600 to-indigo-700", // Premium gradient
//     bgColor: "from-purple-50 to-indigo-50",
//     featured: true, // Special flag for CCS
//     achievements: ["500+ Active Members", "50+ Events Annually", "Top Coding Society"],
//   },
//   {
//     name: "IEEE Computer Society",
//     logo: "https://res.cloudinary.com/dldfnkvlm/image/upload/v1749965530/ieeethapar_logo_rncpvh.avif?height=120&width=120",
//     description: "Advancing technology for humanity through computing excellence",
//     icon: Zap,
//     color: "from-blue-500 to-cyan-600",
//     bgColor: "from-blue-50 to-cyan-50",
//     achievements: ["IEEE Standards", "Global Network", "Technical Excellence"],
//   },
//   {
//     name: "ACM Student Chapter",
//     logo: "https://res.cloudinary.com/dldfnkvlm/image/upload/v1749965524/ACM_ajytyh.avif?height=120&width=120",
//     description: "Advancing computing as a science through innovation",
//     icon: Lightbulb,
//     color: "from-emerald-500 to-teal-600",
//     bgColor: "from-emerald-50 to-teal-50",
//     achievements: ["Research Focus", "Academic Excellence", "Innovation Hub"],
//   },
//   {
//     name: "Google Developer Student Clubs",
//     logo: "https://res.cloudinary.com/dldfnkvlm/image/upload/v1749965536/GDSC_vsj29c.avif?height=120&width=120",
//     description: "University community for Google developer technologies",
//     icon: Rocket,
//     color: "from-red-500 to-pink-600",
//     bgColor: "from-red-50 to-pink-50",
//     achievements: ["Google Partnership", "Developer Community", "Tech Workshops"],
//   },
//   {
//     name: "Microsoft Learn Student Ambassadors",
//     logo: "https://avatars.githubusercontent.com/u/45298983?s=200&v=4?height=120&width=120",
//     description: "Student leaders passionate about technology and learning",
//     icon: Users,
//     color: "from-indigo-500 to-purple-600",
//     bgColor: "from-indigo-50 to-purple-50",
//     achievements: ["Microsoft Partnership", "Leadership Program", "Tech Education"],
//   },
// ]

// export default function TechnicalSupport() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   return (
//     <div className="py-24 bg-white relative overflow-hidden">
//       {/* Subtle Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.1, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 12,
//             repeat: Number.POSITIVE_INFINITY,
//             ease: "easeInOut",
//           }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <motion.div
//             className="inline-flex items-center space-x-3 bg-purple-50 px-8 py-4 rounded-full border border-purple-200 shadow-lg mb-8"
//             whileHover={{ scale: 1.02, y: -2 }}
//             transition={{ duration: 0.2 }}
//           >
//             <Target className="w-6 h-6 text-purple-600" />
//             <span className="text-purple-700 font-bold text-lg">Technical Support</span>
//           </motion.div>

//           <h2 className="text-6xl font-black bg-gradient-to-r from-slate-900 via-purple-800 to-indigo-900 bg-clip-text text-transparent mb-8 leading-tight">
//             Powered By
//             <br />
//             <span className="text-5xl">Student Excellence</span>
//           </h2>
//           <p className="text-xl text-slate-600 mb-10 max-w-4xl mx-auto leading-relaxed">
//             Leading college societies and student communities driving innovation in technology and supporting your
//             hackathon journey with expertise and dedication
//           </p>
//         </motion.div>

//         {/* Technical Supporters Grid - CCS gets subtle precedence */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-20">
//           {technicalSupporters.map((supporter, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{
//                 duration: 0.8,
//                 delay: supporter.featured ? 0 : index * 0.1, // CCS appears first
//                 ease: [0.25, 0.46, 0.45, 0.94],
//               }}
//               whileHover={{
//                 y: supporter.featured ? -16 : -12, // CCS hovers slightly higher
//                 scale: supporter.featured ? 1.04 : 1.03, // CCS scales slightly more
//                 transition: { duration: 0.3, ease: "easeOut" },
//               }}
//               className="group relative"
//             >
//               <div
//                 className={`bg-gradient-to-br ${supporter.bgColor} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/60 backdrop-blur-sm h-full ${
//                   supporter.featured ? "ring-2 ring-purple-200/50" : "" // Subtle ring for CCS
//                 }`}
//               >
//                 {/* Header with Icon */}
//                 <div className={`bg-gradient-to-r ${supporter.color} p-6 relative overflow-hidden`}>
//                   {supporter.featured && (
//                     <motion.div
//                       className="absolute top-2 right-2"
//                       animate={{
//                         rotate: [0, 10, -10, 0],
//                         scale: [1, 1.1, 1],
//                       }}
//                       transition={{
//                         duration: 4,
//                         repeat: Number.POSITIVE_INFINITY,
//                         ease: "easeInOut",
//                       }}
//                     >
//                       <Award className="h-5 w-5 text-white/80" />
//                     </motion.div>
//                   )}

//                   <motion.div
//                     className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"
//                     animate={{
//                       rotate: [0, 360],
//                       scale: [1, 1.1, 1],
//                     }}
//                     transition={{
//                       duration: supporter.featured ? 15 : 20, // CCS rotates slightly faster
//                       repeat: Number.POSITIVE_INFINITY,
//                       ease: "linear",
//                     }}
//                   />
//                   <div className="relative z-10 flex items-center justify-center">
//                     <motion.div
//                       className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm"
//                       whileHover={{
//                         scale: supporter.featured ? 1.15 : 1.1, // CCS scales more on hover
//                         rotate: supporter.featured ? 8 : 5,
//                       }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <supporter.icon className="h-8 w-8 text-white" />
//                     </motion.div>
//                   </div>
//                 </div>

//                 {/* Logo Section */}
//                 <div className="p-6 text-center space-y-4">
//                   <motion.div
//                     whileHover={{
//                       scale: supporter.featured ? 1.12 : 1.1, // CCS logo scales more
//                       rotate: supporter.featured ? 5 : 3,
//                     }}
//                     transition={{ duration: 0.3 }}
//                     className="relative mx-auto"
//                   >
//                     <div
//                       className={`w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 ${
//                         supporter.featured ? "ring-2 ring-purple-200" : "" // Subtle ring for CCS logo
//                       }`}
//                     >
//                       <img
//                         src={supporter.logo || "/placeholder.svg"}
//                         alt={supporter.name}
//                         className="w-16 h-16 object-contain filter group-hover:scale-110 transition-transform duration-300"
//                       />
//                     </div>
//                   </motion.div>

//                   <h3
//                     className={`text-lg font-bold leading-tight group-hover:text-purple-600 transition-colors duration-300 ${
//                       supporter.featured ? "text-slate-900" : "text-slate-900"
//                     }`}
//                   >
//                     {supporter.name}
//                   </h3>

//                   <p className="text-slate-600 text-sm leading-relaxed">{supporter.description}</p>

//                   {/* Achievements - Only show on hover for cleaner look */}
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     whileHover={{ opacity: 1, height: "auto" }}
//                     transition={{ duration: 0.3 }}
//                     className="overflow-hidden"
//                   >
//                     <div className="space-y-1 pt-2 border-t border-slate-200/50">
//                       {supporter.achievements.map((achievement, idx) => (
//                         <div key={idx} className="text-xs text-slate-500 flex items-center">
//                           <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
//                           {achievement}
//                         </div>
//                       ))}
//                     </div>
//                   </motion.div>
//                 </div>

//                 {/* Hover Effect Overlay */}
//                 <motion.div
//                   className={`absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl ${
//                     supporter.featured ? "from-purple-100/20" : "" // Special overlay for CCS
//                   }`}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Community Impact Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="text-center"
//         >
//           <div className="bg-white rounded-3xl p-10 shadow-xl border border-purple-100 max-w-5xl mx-auto">
//             <h3 className="text-3xl font-bold text-slate-900 mb-8">Community Excellence</h3>
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//               <motion.div
//                 className="text-center group"
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="text-4xl font-black text-purple-600 mb-3 group-hover:text-purple-700 transition-colors">
//                   5
//                 </div>
//                 <div className="text-slate-600 font-semibold text-lg">Elite Organizations</div>
//               </motion.div>
//               <motion.div
//                 className="text-center group"
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="text-4xl font-black text-blue-600 mb-3 group-hover:text-blue-700 transition-colors">
//                   1000+
//                 </div>
//                 <div className="text-slate-600 font-semibold text-lg">Active Members</div>
//               </motion.div>
//               <motion.div
//                 className="text-center group"
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="text-4xl font-black text-emerald-600 mb-3 group-hover:text-emerald-700 transition-colors">
//                   24/7
//                 </div>
//                 <div className="text-slate-600 font-semibold text-lg">Technical Support</div>
//               </motion.div>
//               <motion.div
//                 className="text-center group"
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="text-4xl font-black text-orange-600 mb-3 group-hover:text-orange-700 transition-colors">
//                   100+
//                 </div>
//                 <div className="text-slate-600 font-semibold text-lg">Annual Events</div>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   )
// }