"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const partnerCategories = [
	{
		title: "Academic Partners",
		partners: [
			{
				name: "Tel Aviv University",
				logo: "/placeholder.svg?height=100&width=200",
			},
			{ name: "IIT Delhi", logo: "/placeholder.svg?height=100&width=200" },
			{ name: "Technion", logo: "/placeholder.svg?height=100&width=200" },
			{
				name: "IISc Bangalore",
				logo: "/placeholder.svg?height=100&width=200",
			},
		],
	},
	{
		title: "Industry Partners",
		partners: [
			{ name: "Microsoft", logo: "/placeholder.svg?height=100&width=200" },
			{ name: "Google", logo: "/placeholder.svg?height=100&width=200" },
			{ name: "IBM", logo: "/placeholder.svg?height=100&width=200" },
			{ name: "Amazon", logo: "/placeholder.svg?height=100&width=200" },
		],
	},
	{
		title: "Media Partners",
		partners: [
			{ name: "TechCrunch", logo: "/placeholder.svg?height=100&width=200" },
			{ name: "YourStory", logo: "/placeholder.svg?height=100&width=200" },
			{
				name: "The Times of India",
				logo: "/placeholder.svg?height=100&width=200",
			},
			{ name: "Haaretz", logo: "/placeholder.svg?height=100&width=200" },
		],
	},
	{
		title: "Healthcare Partners",
		partners: [
			{
				name: "Apollo Hospitals",
				logo: "/placeholder.svg?height=100&width=200",
			},
			{
				name: "Hadassah Medical",
				logo: "/placeholder.svg?height=100&width=200",
			},
			{ name: "AIIMS", logo: "/placeholder.svg?height=100&width=200" },
			{
				name: "Sheba Medical",
				logo: "/placeholder.svg?height=100&width=200",
			},
		],
	},
];

export default function Partners() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<div className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Our Partners
					</h2>
					<p className="text-xl text-gray-600">
						Collaborating with industry leaders
					</p>
				</motion.div>

				<div className="space-y-16">
					{partnerCategories.map((category, categoryIndex) => (
						<motion.div
							key={categoryIndex}
							initial={{ opacity: 0, y: 50 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
						>
							<h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
								{category.title}
							</h3>

							<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
								{category.partners.map((partner, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, scale: 0.8 }}
										animate={isInView ? { opacity: 1, scale: 1 } : {}}
										transition={{
											duration: 0.5,
											delay: categoryIndex * 0.2 + index * 0.1,
										}}
										whileHover={{ scale: 1.05 }}
										className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all group"
									>
										<img
											src={partner.logo || "/placeholder.svg"}
											alt={partner.name}
											className="w-full h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
										/>
										<p className="text-center text-sm font-medium text-gray-700 mt-3">
											{partner.name}
										</p>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
