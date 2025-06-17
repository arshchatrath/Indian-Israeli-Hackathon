"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, MapPin, Users, Award } from "lucide-react";

// Board Members - Premium positioning
const boardMembers = [
	{
		name: "Dr. Inderveer Channa",
		designation: "Board Chair",
		image: "/inderveer channa.jpg",
		bio: "Visionary leader driving innovation and strategic partnerships.",
		location: "India"
	},
	{
		name: "Tim Miller",
		designation: "Board Member",
		image: "/tim_miller.avif",
		bio: "Strategic advisor with extensive international experience.",
		location: "Queensland"
	},
	{
		name: "Ori Kadvil",
		designation: "Board Member",
		image: "/Ori Kadvil.avif",
		bio: "Experienced organizer of international tech events.",
		location: "Israel"
	},
	{
		name: "Dr. Harpreet Singh",
		designation: "Board Member",
		image: "/Dr. Harpreet Singh.avif",
		bio: "Academic in emerging tech and AI in healthcare.",
		location: "India"
	},
	{
		name: "Dr. Varinder Garg",
		designation: "Board Member",
		image: "/varinder.png",
		bio: "Leading expert in medical technology and innovation.",
		location: "India"
	},
	{
		name: "Prof. Yosi Shacham",
		designation: "Board Member",
		image: "/yosi.jpeg",
		bio: "Distinguished professor and research leader.",
		location: "Israel"
	},
	{
		name: "Dr. PS Rana",
		designation: "Board Member",
		image: "/bkl.avif",
		bio: "AI researcher and educator in computer science.",
		location: "India"
	},
	{
		name: "Dr. Anju Bala",
		designation: "Board Member",
		image: "/anju bala.jpg",
		bio: "Renowned researcher and academic leader.",
		location: "India"
	},
	{
		name: "Rafi Bhonker",
		designation: "Board Member",
		image: "/rafi_bhonkar.avif",
		bio: "Advocate for Indo-Jewish cultural collaboration.",
		location: "Israel"
	}
];

// Core Members - Operational team
const coreMembers = [
	{
		name: "David Drabkin",
		designation: "CEO, VRSteps",
		image: "/david_drabkin.avif",
		bio: "Leader in immersive VR healthcare solutions.",
		location: "Israel"
	},
	{
		name: "Poulomi",
		designation: "CEO, Silvergenie",
		image: "/poulomi.avif",
		bio: "Driving innovation for eldercare with technology.",
		location: "India"
	},
	{
		name: "Noa Muzaffi",
		designation: "Founder, INNONA Ventures",
		image: "/noa_muzaffi.avif",
		bio: "Entrepreneur fostering Israeli-Indian innovation.",
		location: "Israel"
	},
	{
		name: "Sharon Paz",
		designation: "Cancer Research Center, Sheba",
		image: "/sharon_paz.avif",
		bio: "Expert in oncology research and translational care.",
		location: "Israel"
	},
	{
		name: "Dr. Nehemya Shachaf",
		designation: "Chairman, Cochin Jewish Heritage Center",
		image: "/Dr. Nehemya Shachaf.avif",
		bio: "Preserving and promoting Jewish heritage in India.",
		location: "India"
	},
	{
		name: "Tsafrir Tsadok",
		designation: "CEO, Tsora",
		image: "/Tsafrir Tsadok.avif",
		bio: "Founder of sustainable agriculture tech company.",
		location: "Israel"
	},
	{
		name: "Neyema Awaskar",
		designation: "Software Engineer",
		image: "/Neyema Awaskar.avif",
		bio: "Engineer focused on scalable and ethical systems.",
		location: "India"
	},
	{
		name: "Eden Sharon",
		designation: "Project Manager",
		image: "/Eden Sharon.avif",
		bio: "Expert in cross-border project execution.",
		location: "Israel"
	},
	{
		name: "Aniruddha Bera",
		designation: "PhD Scholar, TAU / Event Co-ordinator, Lowy School",
		image: "/Aniruddha Bera.avif",
		bio: "Researcher in medical innovation and diagnostics.",
		location: "Israel"
	},
	{
		name: "Sayali Narayan Mhetre",
		designation: "Director ICC, Embassy of India Tel Aviv",
		image: "/Sayali Narayan Mhetre.avif",
		bio: "Diplomat fostering Indo-Israel collaboration.",
		location: "Israel"
	},
	{
		name: "Keshav Agarwal",
		designation: "COO, Thinkwave / Talent Acquisition Lead",
		image: "/Keshav Agarwal.avif",
		bio: "Tech leader and hiring strategist for startups.",
		location: "India"
	},
	{
		name: "Oren Daudi",
		designation: "Business Development Exec., Embassy of India",
		image: "/Oren Daudi.avif",
		bio: "Promoting business partnerships between India and Israel.",
		location: "Israel"
	},
	{
		name: "Saar Nehemia",
		designation: "Physicist and Algorithm Developer",
		image: "/Saar Nehemia.avif",
		bio: "Physicist building intelligent algorithms.",
		location: "Israel"
	},
	{
		name: "Yarin Didi",
		designation: "CTO, Batika",
		image: "/Yarin Didi.avif",
		bio: "Technology leader in agritech solutions.",
		location: "Israel"
	},
	{
		name: "Bhavvishya Singla",
		designation: "Institutions Innovation Council, Student Volunteer",
		image: "/Bhavishya Singla.avif",
		bio: "Innovative thinker driving student-led change.",
		location: "India"
	},
	{
		name: "Vishesh Makwana",
		designation: "Masters Student, Technion, Israel",
		image: "/Vishesh Makwana.avif",
		bio: "Graduate student working in AI and robotics.",
		location: "Israel"
	},
	{
		name: "Dr. Mohit Goswami",
		designation: "PostDoc, Technion, Israel",
		image: "/Dr. Mohit Goswami.avif",
		bio: "Postdoctoral researcher in biomedical engineering.",
		location: "Israel"
	},
	{
		name: "Chen Smile",
		designation: "CEO, 8200 Alumni Association",
		image: "/Chen Smilo.avif",
		bio: "Leader in cybersecurity and defense tech innovation.",
		location: "Israel"
	},
	{
		name: "Chen Kamin",
		designation: "CEO, B1 Association",
		image: "/Chen Kamin.avif",
		bio: "Advocate for emerging entrepreneurs in tech.",
		location: "Israel"
	},
	{
		name: "Prathor L.",
		designation: "Operations Anchor, NCR",
		image: "/Prakhar L..avif",
		bio: "Operational lead for technology deployments.",
		location: "India"
	},
	{
		name: "Ms. Sowmya Sudhakar",
		designation: "Medical Device Design & Development",
		image: "/Ms. Sowmya Sudhakar.avif",
		bio: "Developer of innovative medical devices and systems.",
		location: "India"
	},
];

export default function Organizers() {
	const ref = useRef(null);
	const boardRef = useRef(null);
	const coreRef = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const isBoardInView = useInView(boardRef, { once: true, margin: "-100px" });
	const isCoreInView = useInView(coreRef, { once: true, margin: "-100px" });

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.08,
				delayChildren: 0.3,
			},
		},
	};

	const cardVariants = {
		hidden: { 
			opacity: 0, 
			y: 50,
			scale: 0.95,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: "spring",
				damping: 25,
				stiffness: 120,
				duration: 0.6,
			},
		},
	};

	const premiumCardVariants = {
		hidden: { 
			opacity: 0, 
			y: 60,
			scale: 0.9,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: "spring",
				damping: 20,
				stiffness: 100,
				duration: 0.8,
			},
		},
	};

	return (
		<div className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
				<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="text-center mb-20"
				>
					{/* <motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={isInView ? { scale: 1, opacity: 1 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-blue-200/50 shadow-lg"
					>
						<Users className="w-4 h-4" />
						Meet Our Team
					</motion.div> */}
					
					<motion.h2 
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6"
					>
						Organizing Committee
					</motion.h2>
					<motion.p 
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
					>
						A diverse group of visionaries, innovators, and leaders from India and Israel, 
						working together to bridge cultures through technology and innovation.
					</motion.p>
				</motion.div>

				{/* Board Members Section */}
				<motion.div
					ref={boardRef}
					initial={{ opacity: 0, y: 30 }}
					animate={isBoardInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="mb-24"
				>
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={isBoardInView ? { scale: 1, opacity: 1 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-center mb-16"
					>
						<div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-bold mb-6 shadow-2xl">
							Board Members
						</div>
						<motion.h3 
							initial={{ opacity: 0, y: 20 }}
							animate={isBoardInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4"
						>
							Leadership & Strategic Guidance
						</motion.h3>
						<motion.p 
							initial={{ opacity: 0, y: 20 }}
							animate={isBoardInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8, delay: 0.6 }}
							className="text-lg text-gray-600 max-w-2xl mx-auto"
						>
							Distinguished leaders providing strategic direction and executive oversight for our mission.
						</motion.p>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate={isBoardInView ? "visible" : "hidden"}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
					>
						{boardMembers.map((member, index) => (
							<motion.div
								key={index}
								variants={premiumCardVariants}
								whileHover={{ 
									y: -15, 
									scale: 1.05,
									transition: { 
										type: "spring", 
										stiffness: 400, 
										damping: 20 
									}
								}}
								className="group relative"
							>
								<div className="bg-gradient-to-br from-white via-amber-50/50 to-yellow-50/30 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 border-2 border-amber-200/30 h-full backdrop-blur-sm relative">
									
									{/* Image Section */}
									<div className="relative overflow-hidden h-56">
										<motion.img
											src={member.image || "/placeholder.svg"}
											alt={member.name}
											className="w-full h-full object-cover transition-transform duration-700"
											whileHover={{ scale: 1.15 }}
										/>
										
										{/* Premium overlay */}
										<motion.div 
											initial={{ opacity: 0 }}
											whileHover={{ opacity: 1 }}
											transition={{ duration: 0.3 }}
											className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-800/40 to-transparent flex items-end justify-center pb-6"
										>
											<div className="flex space-x-4">
												<motion.button
													whileHover={{ 
														scale: 1.2, 
														rotate: 5,
														boxShadow: "0 12px 30px rgba(245,158,11,0.4)"
													}}
													whileTap={{ scale: 0.95 }}
													className="bg-gradient-to-r from-amber-400 to-yellow-400 backdrop-blur-sm p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
												>
													<Linkedin className="h-5 w-5 text-white" />
												</motion.button>
												<motion.button
													whileHover={{ 
														scale: 1.2, 
														rotate: -5,
														boxShadow: "0 12px 30px rgba(245,158,11,0.4)"
													}}
													whileTap={{ scale: 0.95 }}
													className="bg-gradient-to-r from-amber-400 to-yellow-400 backdrop-blur-sm p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
												>
													<Mail className="h-5 w-5 text-white" />
												</motion.button>
											</div>
										</motion.div>

										{/* Location badge - Updated position */}
										<div className="absolute top-3 right-3"> {/* Changed from top-4 right-4 to top-3 right-3 */}
											<motion.div 
												whileHover={{ scale: 1.1 }}
												className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm" // Updated styling to match core members
											>
												<MapPin className="w-3 h-3" />
												{member.location}
											</motion.div>
										</div>
									</div>

									{/* Content Section */}
									<div className="p-6 space-y-4">
										<div>
											<h3 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-amber-700 transition-colors duration-300">
												{member.name}
											</h3>
											<p className="text-amber-600 font-semibold text-sm mt-2 leading-tight">
												{member.designation}
											</p>
										</div>
										
										<p className="text-gray-700 text-sm leading-relaxed">
											{member.bio}
										</p>
									</div>

									{/* Enhanced premium shadow */}
									<motion.div
										className="absolute inset-0 rounded-3xl pointer-events-none"
										whileHover={{
											boxShadow: "0 30px 60px rgba(245,158,11,0.3), 0 0 0 2px rgba(245,158,11,0.2)",
										}}
										transition={{ duration: 0.3 }}
									/>
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.div>

				{/* Core Members Section */}
				<motion.div
					ref={coreRef}
					initial={{ opacity: 0, y: 30 }}
					animate={isCoreInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="mb-20"
				>
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={isCoreInView ? { scale: 1, opacity: 1 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-center mb-16"
					>
						<div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold mb-6 shadow-xl">
							<Award className="w-6 h-6" />
							Core Members
						</div>
						<motion.h3 
							initial={{ opacity: 0, y: 20 }}
							animate={isCoreInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="text-4xl font-bold bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent mb-4"
						>
							Operational Excellence Team
						</motion.h3>
						<motion.p 
							initial={{ opacity: 0, y: 20 }}
							animate={isCoreInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8, delay: 0.6 }}
							className="text-lg text-gray-600 max-w-2xl mx-auto"
						>
							Dedicated professionals executing our vision and ensuring seamless operations across all initiatives.
						</motion.p>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate={isCoreInView ? "visible" : "hidden"}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6"
					>
						{coreMembers.map((member, index) => (
							<motion.div
								key={index}
								variants={cardVariants}
								whileHover={{ 
									y: -12, 
									scale: 1.03,
									transition: { 
										type: "spring", 
										stiffness: 400, 
										damping: 25 
									}
								}}
								className="group relative"
							>
								<div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 h-full backdrop-blur-sm">
									{/* Image Section */}
									<div className="relative overflow-hidden h-48">
										<motion.img
											src={member.image || "/placeholder.svg"}
											alt={member.name}
											className="w-full h-full object-cover transition-transform duration-700"
											whileHover={{ scale: 1.1 }}
										/>
										
										{/* Overlay with social icons */}
										<motion.div 
											initial={{ opacity: 0 }}
											whileHover={{ opacity: 1 }}
											transition={{ duration: 0.3 }}
											className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-center pb-4"
										>
											<div className="flex space-x-3">
												<motion.button
													whileHover={{ 
														scale: 1.15, 
														rotate: 3,
														boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
													}}
													whileTap={{ scale: 0.95 }}
													className="bg-white/95 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:bg-white transition-all duration-200"
												>
													<Linkedin className="h-4 w-4 text-blue-600" />
												</motion.button>
												<motion.button
													whileHover={{ 
														scale: 1.15, 
														rotate: -3,
														boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
													}}
													whileTap={{ scale: 0.95 }}
													className="bg-white/95 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:bg-white transition-all duration-200"
												>
													<Mail className="h-4 w-4 text-gray-600" />
												</motion.button>
											</div>
										</motion.div>

										{/* Location badge */}
										<div className="absolute top-3 right-3">
											<motion.div 
												whileHover={{ scale: 1.05 }}
												className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm"
											>
												<MapPin className="w-3 h-3" />
												{member.location}
											</motion.div>
										</div>
									</div>

									{/* Content Section */}
									<div className="p-4 space-y-3">
										<div>
											<h3 className="font-bold text-gray-900 text-sm leading-tight group-hover:text-blue-600 transition-colors duration-300">
												{member.name}
											</h3>
											<p className="text-blue-600 font-medium text-xs mt-1 leading-tight">
												{member.designation}
											</p>
										</div>
										
										<p className="text-gray-600 text-xs leading-relaxed">
											{member.bio}
										</p>
									</div>

									{/* Enhanced shadow effect on hover */}
									<motion.div
										className="absolute inset-0 rounded-2xl pointer-events-none"
										whileHover={{
											boxShadow: "0 25px 50px rgba(0,0,0,0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)",
										}}
										transition={{ duration: 0.3 }}
									/>
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.div>

				{/* Statistics Section */}
				{/* <motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.8 }}
					className="mt-20 text-center"
				>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
						{[
							{ number: "9", label: "Board Members", color: "amber" },
							{ number: "21", label: "Core Members", color: "blue" },
							{ number: "2", label: "Countries United", color: "purple" },
							{ number: "15+", label: "Diverse Specializations", color: "green" }
						].map((stat, index) => (
							<motion.div
								key={index}
								whileHover={{ 
									y: -5, 
									scale: 1.05,
									boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
								}}
								transition={{ type: "spring", stiffness: 300, damping: 20 }}
								className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
							>
								<div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>
									{stat.number}
								</div>
								<div className="text-gray-600 font-medium">
									{stat.label}
								</div>
							</motion.div>
						))}
					</div>
				</motion.div> */}
			</div>
		</div>
	);
}