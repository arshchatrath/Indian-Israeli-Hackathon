"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { Calendar, Presentation, Trophy, Users, Award } from "lucide-react"

const timelineData = [
	{
		round: "Round-I",
		title: "PPT Submission",
		date: "7 August 2025",
		icon: Calendar,
		color: "bg-blue-500",
		bgColor: "bg-blue-50",
		description:
			"Submit your innovative presentation showcasing your solution approach and technical implementation strategy.",
		details: [
			"13-slide presentation required",
			"Focus on problem definition",
			"Technical feasibility analysis",
			"Innovation and creativity",
			"Last date: 7th August 2025",
		],
	},
	{
		round: "Round-II",
		title: "Online Presentation",
		date: "15 August 2025",
		icon: Presentation,
		color: "bg-purple-500",
		bgColor: "bg-purple-50",
		description:
			"Present your solution to our expert panel of judges through an interactive online session.",
		details: [
			"10 minutes presentation",
			"5 minutes Q&A session",
			"Live demo preferred",
			"Team coordination evaluation",
			"Online presentation on 15th August 2025",
		],
	},
	{
		round: "Round-III",
		title: "Final 24-Hour Hackathon",
		date: "23-24 August 2025",
		icon: Trophy,
		color: "bg-emerald-500",
		bgColor: "bg-emerald-50",
		description:
			"Demonstrate your working prototype and compete for the grand prize in a 24-hour in-person hackathon.",
		details: [
			"24-hour hackathon at the venue",
			"Working prototype demo",
			"In-person presentation",
			"Final pitch to judges",
			"Winner announcement",
			"23rd-24th August 2025",
		],
	},
]

export default function Timeline() {
	const ref = useRef(null)

	return (
		<div className="py-16 bg-white" ref={ref}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl font-bold text-center text-blue-700 mb-16">
					Timeline
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{timelineData.map((item, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: idx * 0.2 }}
							viewport={{ once: true }}
							className={`rounded-3xl overflow-hidden ${item.bgColor} p-8`}
						>
							<div className="flex items-start space-x-4 mb-4">
								<div className={`p-3 rounded-2xl ${item.color}`}>
									<item.icon className="w-6 h-6 text-white" />
								</div>
								<div>
									<div
										className={`text-sm font-semibold ${item.color} rounded-full px-4 py-1 inline-block`}
									>
										{item.round}
									</div>
								</div>
							</div>

							<h3 className="text-xl font-bold text-gray-900 mb-2">
								{item.title}
							</h3>
							<p
								className={`text-lg font-semibold mb-4 ${
									idx === 0
										? "text-blue-600"
										: idx === 1
										? "text-purple-600"
										: "text-emerald-600"
								}`}
							>
								{item.date}
							</p>

							<p className="text-gray-600 mb-6">{item.description}</p>

							<ul className="space-y-2">
								{item.details.map((detail, index) => (
									<li
										key={index}
										className="flex items-center space-x-2 text-sm text-gray-600"
									>
										<div
											className={`w-1.5 h-1.5 rounded-full ${item.color}`}
										/>
										<span>{detail}</span>
									</li>
								))}
							</ul>

							<div className="mt-6 flex items-center justify-start space-x-4 text-xs text-gray-500">
								<div className="flex items-center space-x-1">
									<Users className="w-3 h-3" />
									<span>Team Evaluation</span>
								</div>
								<div className="w-1 h-1 bg-gray-300 rounded-full" />
								<div className="flex items-center space-x-1">
									<Award className="w-3 h-3" />
									<span>Merit Based</span>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	)
}
