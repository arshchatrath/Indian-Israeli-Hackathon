"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const partnerCategories = [
	{
		title: "Academic Partners",
		partners: [
			{
				name: "University of Haifa",
				logo: "/haifa logo.avif?height=100&width=200",
			},
			{
				name: "Tel Aviv University",
				logo: "/tel aviv logo.avif?height=100&width=200",
			},
			{
				name: "Thapar University",
				logo: "thapar logo.png?height=100&width=200",
			},
		],
	},
	{
		title: "Industry Partners",
		partners: [
			{ logo: "/codingn.jpg?height=100&width=200" },
			{ logo: "/ip1.avif?height=100&width=200" },
			{ logo: "/ip2.avif?height=100&width=200" },
			{ logo: "/ip3.avif?height=100&width=200" },
			{ logo: "/ip4.avif?height=100&width=200" },
			{ logo: "/ip5.avif?height=100&width=200" },
			{ logo: "/ip6.avif?height=100&width=200" },
			{ logo: "/ip7.avif?height=100&width=200" },
			{ logo: "/ip8.avif?height=100&width=200" },
			{ logo: "/ip9.avif?height=100&width=200" },
		],
	},
	{
		title: "Media Partners",
		partners: [
			{ logo: "/mp1.avif?height=100&width=200" },
		],
	},
	{
		title: "Sponsors",
		partners: [
			{ logo: "/devfolio.jpg?height=100&width=200", name: "DEVFOLIO LOGO", website: "https://devfolio.co/" },
			{ logo: "/ETHIndia.png?height=100&width=200", name: "ETHINDIA LOGO", website: "https://ethindia.co" },
			{ logo: "/polygon.png?height=100&width=200" },
		],
	},
	{
		title: "Healthcare Partners",
		partners: [
			{
				logo: "/hp1.avif?height=100&width=200",
			},
			{
				logo: "/hp2.jpg?height=200&width=200",
			},
		],
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.2,
		},
	},
};

const cardVariants = {
	hidden: { 
		opacity: 0, 
		y: 30,
		scale: 0.95,
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 15,
			duration: 0.6,
		},
	},
};

const hoverVariants = {
	hover: {
		scale: 1.03,
		y: -4,
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 25,
		},
	},
	tap: {
		scale: 0.98,
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 25,
		},
	},
};

export default function Partners() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-50px" });

	return (
		<div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 40 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ 
						duration: 0.8,
						type: "spring",
						stiffness: 100,
						damping: 15 
					}}
					className="text-center mb-20"
				>
					<motion.h2 
						className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-6"
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						Our Partners
					</motion.h2>
					<motion.div
						className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"
						initial={{ width: 0 }}
						animate={isInView ? { width: 96 } : {}}
						transition={{ duration: 0.8, delay: 0.4 }}
					/>
					<motion.p 
						className="text-xl text-gray-600 max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.6 }}
					>
						Collaborating with industry leaders to drive innovation and excellence
					</motion.p>
				</motion.div>

				<div className="space-y-20">
					{partnerCategories.map((category, categoryIndex) => (
						<motion.div
							key={categoryIndex}
							initial={{ opacity: 0, y: 40 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ 
								duration: 0.8, 
								delay: 0.8 + categoryIndex * 0.2,
								type: "spring",
								stiffness: 100,
								damping: 15
							}}
						>
							<motion.h3 
								className="text-3xl font-bold text-gray-800 text-center mb-12 relative"
								whileHover={{ scale: 1.02 }}
								transition={{ type: "spring", stiffness: 300, damping: 20 }}
							>
								<span className="relative z-10">{category.title}</span>
								<motion.div
									className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-sm"
									initial={{ opacity: 0 }}
									whileHover={{ opacity: 1 }}
									transition={{ duration: 0.3 }}
								/>
							</motion.h3>

							<motion.div 
								className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto"
								variants={containerVariants}
								initial="hidden"
								animate={isInView ? "visible" : "hidden"}
							>
								{category.partners.map((partner, index) => (
									<motion.div
										key={index}
										variants={cardVariants}
										whileHover="hover"
										whileTap="tap"
										className={`group relative ${
											category.title === "Healthcare Partners"
												? "w-48 h-48"
												: "w-64 h-32"
										}`}
									>
										<motion.div
											className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
											variants={hoverVariants}
										/>
										
										<motion.div
											className={`relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 group-hover:border-blue-200/50 ${
												category.title === "Healthcare Partners"
													? "h-full flex flex-col justify-center items-center"
													: "h-full flex flex-col justify-center items-center"
											}`}
											variants={hoverVariants}
										>
											{/* Subtle gradient overlay on hover */}
											<motion.div
												className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
												initial={{ opacity: 0 }}
												whileHover={{ opacity: 1 }}
											/>
											
											<div className="relative z-10 w-full flex justify-center items-center">
												{partner.website ? (
													<a href={partner.website} target="_blank" rel="noopener noreferrer">
														<motion.img
															src={partner.logo || "/placeholder.svg"}
															alt={
																partner.name === "DEVFOLIO LOGO"
																	? "DEVFOLIO LOGO"
																	: partner.name === "ETHINDIA LOGO"
																	? "ETHINDIA LOGO"
																	: partner.name || "Partner logo"
															}
															className={`${
																category.title === "Healthcare Partners"
																	? "w-32 h-32 object-contain"
																	: "w-full max-w-40 h-16 object-contain"
															} filter group-hover:brightness-110 transition-all duration-300`}
															whileHover={{ scale: 1.05 }}
															transition={{ type: "spring", stiffness: 300, damping: 20 }}
														/>
													</a>
												) : (
													<motion.img
														src={partner.logo || "/placeholder.svg"}
														alt={
															partner.name === "DEVFOLIO LOGO"
																? "DEVFOLIO LOGO"
																: partner.name === "ETHINDIA LOGO"
																? "ETHINDIA LOGO"
																: partner.name || "Partner logo"
														}
														className={`${
															category.title === "Healthcare Partners"
																? "w-32 h-32 object-contain"
																: "w-full max-w-40 h-16 object-contain"
														} filter group-hover:brightness-110 transition-all duration-300`}
														whileHover={{ scale: 1.05 }}
														transition={{ type: "spring", stiffness: 300, damping: 20 }}
													/>
												)}
											</div>
											
											{partner.name && (
												<motion.p 
													className="text-center text-sm font-semibold text-gray-700 mt-4 group-hover:text-blue-700 transition-colors duration-300"
													initial={{ opacity: 0.8 }}
													whileHover={{ opacity: 1 }}
												>
													{partner.name}
												</motion.p>
											)}
											
											{/* Subtle shine effect */}
											<motion.div
												className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-all duration-700"
												style={{ transformOrigin: "center" }}
											/>
										</motion.div>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
