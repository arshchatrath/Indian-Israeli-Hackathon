"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, MapPin, Users, Award } from "lucide-react";

// Board Members - Premium positioning
const boardMembers = [
	{
		name: "Dr. Inderveer Channa",
		designation: "Center Director, Professor of Computer Science, TIET",
		image: "/inderveer channa.jpg",
		bio: "Visionary leader driving innovation and strategic partnerships.",
		location: "India",
		email: "inderveer@thapar.edu",
		linkedin: "https://www.linkedin.com/in/dr-inderveer-chana-b0102023/"
	},
	{
		name: "Tim Miller",
		designation: "Center Director, Professor of Artificial Intelligence, UQ",
		image: "/tim miller.png",
		bio: "Strategic advisor with extensive international experience.",
		location: "Queensland",
		email: "tim.miller@uq.edu.au",
		linkedin: "https://www.linkedin.com/in/tim-miller-6a9271/"
	},
	{
		name: "Ori Kadvil",
		designation: "Board Member",
		image: "/Ori Kadvil.avif",
		bio: "Experienced organizer of international tech events.",
		email: "orikadvil@israelindiahub.com",
		location: "Israel",
		linkedin: "https://www.linkedin.com/in/ori-kadvil-66222351/"
	},
	{
		name: "Dr. Harpreet Singh",
		designation: "Assistant Professor, TIET & Visiting Professor, Reichman University, Israel",
		image: "/Dr. Harpreet Singh.avif",
		bio: "Academic in emerging tech and AI in healthcare.",
		email: "harpreet.s@thapar.edu",
		location: "India",
		linkedin: "https://www.linkedin.com/in/harpreet-singh-bb3aa89b/"
	},
	{
		name: "Dr. Varinder Garg",
		designation: "OSD to Union Health Minister & President PGIMER",
		image: "/varinder.png",
		bio: "Leading expert in medical technology and innovation.",
		location: "India"
	},
	{
		name: "Prof. Yosi Shacham",
		designation: "Head at Scojen Institute for Synthetic Biology, Reichman University, Israel.",
		image: "/yosi.jpeg",
		bio: "Professor Emeritus, Faculty of engineering, Tel Aviv University",
		location: "Israel"
	},
	{
		name: "Dr. PS Rana",
		designation: "Associate Professor, TIET",
		image: "/rana.avif",
		bio: "AI researcher and educator in computer science.",
		location: "India"
	},
	{
		name: "Dr. Anju Bala",
		designation: "Education and Training Coordinator & Associate Professor, TIET",
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
	},
	{
		name: "Dr. Sachin Kansal",
		designation: "Assistant Professor -II, TIET",
		image: "/sachin kansal.jpg",
		bio: "Academic in Robotics, Computer Vision, Mechatronics.",
		location: "India"
	}
];

// Core Members - Operational team
const coreMembers = [
	{
		name: "David Drabkin",
		designation: "CEO, VRSteps",
		image: "/david_drabkin.avif",
		bio: "Leader in immersive VR healthcare solutions.",
		location: "Israel",
		email: "david.drabkin@vrsteps.com",
		linkedin: "https://www.linkedin.com/in/david-drabkin/"
	},
	{
		name: "Poulomi",
		designation: "CEO, Silvergenie",
		image: "/poulomi.avif",
		bio: "Driving innovation for eldercare with technology.",
		location: "India",
		linkedin: "https://www.linkedin.com/in/poulomi-bhattacharya-072883/"
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
		name: "Dr. Saif Nailband",
		designation: "Assisstant Professor, Thapar University",
		image: "/saif.jpg",
		bio: "Expert in cross-border project execution.",
		location: "India"
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
		name: "Bhavishya Singla",
		designation: "Student Volunteer, Thapar University",
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
		designation: "CEO, 81 Alumni Association",
		image: "/Chen Kamin.avif",
		bio: "Advocate for emerging entrepreneurs in tech.",
		location: "Israel"
	},
	{
		name: "Dr. Simerjeet Sharma",
		designation: "Founder, Procare",
		image: "/dr simar.avif",
		bio: "Leading healthcare professional",
		location: "India"
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
	{
		name:"Arsh Chatrath",
		designation:"Joint Secretary, Creative Computing Society, Tiet",
		image:"/Arsh Chatrath.avif",
		bio:"Leading with vision, empowering through creativity.",
		linkedin:"https://www.linkedin.com/in/arshchatrath/",
		location:"India"

	},
	{
		name:"Sarthak Tyagi",
		designation:"General Secretary, Creative Computing Society, Tiet",
		image:"/Sarthak Tyagi.avif",
		bio:"Shaping the future of tech through student leadership",
		location:"India"
	},
	{
		name:"Ritesh Kapoor",
		designation:"General Secretary, Creative Computing Society, Tiet",
		image:"/Ritesh Kapoor.avif",
		bio:"Championing student-led change at the intersection of creativity and computing.",
		location:"India"
	},
	{
		name:"Karman Singh Talwar",
		designation:"Student Volunteer, Thapar University",
		image:"/Karman Singh Talwar.avif",
		bio:"Passionate advocate for student innovation and impact.",
		location:"India"
	},
	{
		name:"Bhavninder Singh",
		designation:"Student Volunteer, Thapar University",
		image:"/Bhavninder Singh.avif",
		bio:"Passionate about collaborative problem-solving and impactful technology",
		location:"India"
	},
	{
		name:"Prarabdh Sharma",
		designation:"Student Volunteer, Thapar University",
		image:"/Prarabdh Sharma.avif",
		bio:"Turning ideas into impact through technology and teamwork.",
		location:"India"
	}
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
						Organizers
					</motion.h2>
					<div className="max-w-4xl mx-auto mb-8">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8, delay: 0.5 }}
							className="rounded-2xl border-2 border-transparent bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 p-1 shadow-xl"
							style={{ backgroundClip: 'padding-box' }}
						>
							<div className="rounded-2xl bg-white/90 p-6 sm:p-8">
								<span className="block text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent">
									United by Innovation & Excellence
								</span>
								<p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
									The <a
										href="https://dsai.thapar.edu"
										target="_blank"
										rel="noopener noreferrer"
										title="Visit dsai.thapar.edu"
										className="inline-flex items-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#9333EA] hover:underline hover:decoration-2 hover:decoration-[#4F46E5] transition-all group"
									>
										Centre of Excellence in Data Science & AI,TIET
										<svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4 text-[#4F46E5] group-hover:text-[#9333EA] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
											<path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6m5-3h3m0 0v3m0-3L10 14" />
										</svg>
									</a>, the organiser of Israeli-Indian Hackathon, is a cross-disciplinary research centre advancing foundational and applied research in data science and AI, jointly located at Thapar Institute, Patiala, India, and The University of Queensland, Australia. It works to bridge national and disciplinary boundaries—spanning computer science, engineering, health, agriculture, and more—to develop innovative solutions for global challenges and foster knowledge exchange between two leading institutions.<br /><br />
									<span className="font-bold">Thapar Institute of Engineering & Technology (TIET)</span> is one of India's premier engineering institutions, renowned for its excellence in technical education, research, and innovation. With a legacy since 1956, TIET is consistently ranked among the top 20 engineering institutions in India, pioneering initiatives in Data Science, Artificial Intelligence, and Machine Learning.
								</p>
							</div>
						</motion.div>
					</div>
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
							{/* Distinguished leaders providing strategic direction and executive oversight for our mission. */}
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
												{member.linkedin && (
													<motion.button
														whileHover={{ 
															scale: 1.2, 
															rotate: 5,
															boxShadow: "0 12px 30px rgba(245,158,11,0.4)"
														}}
														whileTap={{ scale: 0.95 }}
														onClick={() => window.open(member.linkedin, '_blank')}
														className="bg-gradient-to-r from-amber-400 to-yellow-400 backdrop-blur-sm p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
													>
														<Linkedin className="h-5 w-5 text-white" />
													</motion.button>
												)}
												{member.email && (
													<motion.button
														whileHover={{ 
															scale: 1.2, 
															rotate: -5,
															boxShadow: "0 12px 30px rgba(245,158,11,0.4)"
														}}
														whileTap={{ scale: 0.95 }}
														onClick={() => window.location.href = `mailto:${member.email}`}
														className="bg-gradient-to-r from-amber-400 to-yellow-400 backdrop-blur-sm p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
													>
														<Mail className="h-5 w-5 text-white" />
													</motion.button>
												)}
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
							{/* Dedicated professionals executing our vision and ensuring seamless operations across all initiatives. */}
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
												{member.linkedin && (
													<motion.button
														whileHover={{ 
															scale: 1.15, 
															rotate: 3,
															boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
														}}
														whileTap={{ scale: 0.95 }}
														onClick={() => window.open(member.linkedin, '_blank')}
														className="bg-white/95 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:bg-white transition-all duration-200"
													>
														<Linkedin className="h-4 w-4 text-blue-600" />
													</motion.button>
												)}
												{member.email && (
													<motion.button
														whileHover={{ 
															scale: 1.15, 
															rotate: -3,
															boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
														}}
														whileTap={{ scale: 0.95 }}
														onClick={() => window.location.href = `mailto:${member.email}`}
														className="bg-white/95 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:bg-white transition-all duration-200"
													>
														<Mail className="h-4 w-4 text-gray-600" />
													</motion.button>
												)}
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
			</div>
		</div>
	);
}