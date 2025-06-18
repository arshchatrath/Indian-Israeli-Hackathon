"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Presentation, Trophy } from "lucide-react"

const timelineData = [
	{
		round: "Round-I",
		title: "PPT Submission",
		date: "24 July 2025",
		description:
			"Submit your innovative presentation showcasing your solution",
		icon: Calendar,
		color: "bg-blue-500",
	},
	{
		round: "Round-II",
		title: "Online Presentation",
		date: "31 July 2025",
		description: "Present your solution to our panel of expert judges",
		icon: Presentation,
		color: "bg-indigo-500",
	},
	{
		round: "Round-III",
		title: "Offline Demo",
		date: "2nd week of August 2025",
		description:
			"Demonstrate your working prototype and compete for the grand prize",
		icon: Trophy,
		color: "bg-purple-500",
	},
]

export default function Timeline() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	return (
		<div
			id="timeline"
			className="py-12 bg-white scroll-mt-16" /* Added id and scroll-mt-16 */
		>
			<div className="max-w-6xl mx-auto px-4">
				<motion.h2
					className="text-3xl font-bold text-center mb-8"
					ref={ref}
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : {}}
				>
					Timeline
				</motion.h2>

				<div className="relative flex items-center justify-between px-4">
					{/* Connecting Line */}
					<div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

					{timelineData.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							className="relative z-10 w-1/3 px-2"
						>
							<div className={`${index % 2 === 0 ? "-mt-32" : "mt-8"}`}>
								<motion.div
									className="bg-white rounded-lg p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all"
									whileHover={{ y: -5 }}
								>
									<div className="flex items-center gap-3 mb-2">
										<div className={`${item.color} p-2 rounded-lg`}>
											<item.icon className="h-4 w-4 text-white" />
										</div>
										<div>
											<h3 className="font-bold text-gray-900">
												{item.round}
											</h3>
											<p className="text-sm text-blue-600">
												{item.title}
											</p>
										</div>
									</div>
									<div className="text-sm font-medium text-gray-900 bg-gray-50 px-3 py-1 rounded-md inline-block">
										{item.date}
									</div>
								</motion.div>
							</div>

							{/* Timeline Node */}
							<div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y 1/2">
								<div
									className={`w-4 h-4 ${item.color} rounded-full ring-4 ring-white`}
								>
									<div className="absolute inset-0 animate-ping rounded-full bg-white opacity-75" />
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	)
}