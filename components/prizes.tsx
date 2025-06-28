"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { IndianRupee, Award, Star, Sparkles, Crown, Medal, Users, Trophy } from "lucide-react"

const prizeBreakdown = [
	{
		position: "Winners",
		amount: "₹45,000",
		color: "from-yellow-400 to-orange-500",
		icon: Crown,
		rank: "🏆",
		count: "3",
	},
	{
		position: "Runner Up",
		amount: "₹25,000",
		color: "from-slate-400 to-slate-600",
		icon: Medal,
		rank: "🥈",
		count: "5",
	},
	{
		position: "Innovation Award",
		amount: "₹30,000",
		color: "from-blue-500 to-blue-700",
		icon: Award,
		rank: "⭐",
		count: "10",
	},
]

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
	hidden: { opacity: 0, y: 15 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
			ease: "easeOut",
		},
	},
}

export default function Prizes() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: "-30px" })

	return (
		<div className="py-12 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
			{/* Subtle Background */}
			<div className="absolute inset-0 pointer-events-none">
				<motion.div
					className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-yellow-400/5 to-orange-400/5 rounded-full blur-3xl"
					animate={{ rotate: [0, 360] }}
					transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
				/>
			</div>

			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					ref={ref}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={containerVariants}
					className="text-center mb-8"
				>
					{/* <motion.div
						variants={itemVariants}
						className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full shadow-md mb-4 text-sm font-bold"
					>
						<Sparkles className="w-4 h-4" />
						<span>Rewards & Recognition</span>
					</motion.div> */}

					<motion.h2
						variants={itemVariants}
						className="text-3xl md:text-4xl font-black bg-gradient-to-r from-slate-900 via-yellow-800 to-orange-900 bg-clip-text text-transparent mb-2"
					>
						Prizes and Opportunities
					</motion.h2>
					<motion.p
						variants={itemVariants}
						className="text-slate-600 mb-6"
					>
						Total Prize Pool:{" "}
						<span className="font-bold text-xl text-slate-900">₹1,00,000</span>
					</motion.p>
				</motion.div>

				{/* Attractive Prize Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
				>
					{prizeBreakdown.map((prize, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							whileHover={{ y: -8, scale: 1.04, boxShadow: "0 8px 32px 0 rgba(37,99,235,0.18)" }}
							className="group"
						>
							<div className={`relative bg-gradient-to-br ${prize.color} p-1 rounded-2xl shadow-xl transition-all duration-300`}>
								<div className="bg-white rounded-2xl p-6 flex flex-col items-center relative overflow-hidden">
									{/* Floating Icon */}
									<div className="absolute -top-8 right-4 opacity-20 text-8xl pointer-events-none select-none">
										{prize.rank}
									</div>
									<div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-2 border-4 border-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
										<prize.icon className="h-8 w-8 text-yellow-500 group-hover:text-orange-500 transition-colors" />
									</div>
									<h3 className="text-xl font-extrabold text-slate-900 mb-1 tracking-tight">{prize.position}</h3>
									<div className="text-sm text-slate-500 mb-2">Count: <span className="font-semibold">{prize.count}</span></div>
									<div className="text-3xl font-black text-yellow-600 mb-2 flex items-center gap-2">
										<IndianRupee className="h-6 w-6 inline-block text-yellow-500" />
										<span className="tracking-tight">{prize.amount.replace("₹", "")}</span>
									</div>
									<div className="flex items-center justify-center text-xs text-slate-600 bg-slate-100 px-3 py-1 rounded-full font-medium shadow">
										<Star className="h-3 w-3 text-yellow-500 mr-1" />
										Certificate Included
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Compact Info Cards */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
				>
					{/* Quick Stats */}
					<motion.div variants={itemVariants}>
						<div className="bg-white rounded-xl p-4 shadow-md border border-slate-100">
							<h4 className="font-bold text-slate-900 mb-3 text-center">Quick Stats</h4>
							<div className="grid grid-cols-3 gap-3 text-center">
								<div>
									<div className="text-xl font-black text-yellow-600 flex items-center justify-center gap-1">
										<Users className="w-5 h-5" />18
									</div>
									<div className="text-xs text-slate-600">Total Winners</div>
								</div>
								<div>
									<div className="text-xl font-black text-blue-600 flex items-center justify-center gap-1">
										<IndianRupee className="w-5 h-5" />1L
									</div>
									<div className="text-xs text-slate-600">Total Pool</div>
								</div>
								<div>
									<div className="text-xl font-black text-emerald-600 flex items-center justify-center gap-1">
										<Trophy className="w-5 h-5" />3
									</div>
									<div className="text-xs text-slate-600">Prize Categories</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Additional Benefits */}
					<motion.div variants={itemVariants}>
						<div className="bg-white rounded-xl p-4 shadow-md border border-slate-100">
							<h4 className="font-bold text-slate-900 mb-3 text-center">Beyond Cash</h4>
							<div className="space-y-2 text-sm text-slate-600">
								<div className="flex items-center">
									<div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
									Career opportunities & internships
								</div>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
									Media coverage & recognition
								</div>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
									Industry mentorship programs
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>

				{/* Prize Release Notice - Compact */}
				<motion.div
					variants={itemVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
				>
					<div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
						<div className="flex items-center justify-center space-x-2 text-blue-700 text-sm">
							<Star className="h-4 w-4" />
							<span className="font-medium">
								All prizes and certificates released within 7 days after event completion
							</span>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	)
}