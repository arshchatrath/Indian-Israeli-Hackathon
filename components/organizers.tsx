"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LinkedinIcon, Mail } from "lucide-react";

const organizers = [
	{
		name: "David Drabkin",
		designation: "CEO, VRSteps",
		image: "/david_drabkin.avif",
		bio: "Leader in immersive VR healthcare solutions.",
	},
	{
		name: "Poulomi",
		designation: "CEO, Silvergenie",
		image: "/poulomi.avif",
		bio: "Driving innovation for eldercare with technology.",
	},
	{
		name: "Noa Muzaffi",
		designation: "Founder, INNONA Ventures",
		image: "/noa_muzaffi.avif",
		bio: "Entrepreneur fostering Israeli-Indian innovation.",
	},
	{
		name: "Sharon Paz",
		designation: "Cancer Research Center, Sheba",
		image: "/sharon_paz.avif",
		bio: "Expert in oncology research and translational care.",
	},
	{
		name: "Rafi Bhonker",
		designation: "Chairman, Indian Jewish Heritage Center, IJHC",
		image: "/rafi_bhonkar.avif",
		bio: "Advocate for Indo-Jewish cultural collaboration.",
	},
	{
		name: "Dr. Nehemya Shachaf",
		designation: "Chairman, Cochin Jewish Heritage Center",
		image: "/Dr. Nehemya Shachaf.avif",
		bio: "Preserving and promoting Jewish heritage in India.",
	},
	{
		name: "Tsafrir Tsadok",
		designation: "CEO, Tsora",
		image: "/Tsafrir Tsadok.avif",
		bio: "Founder of sustainable agriculture tech company.",
	},
	{
		name: "Neyema Awaskar",
		designation: "Software Engineer",
		image: "/Neyema Awaskar.avif",
		bio: "Engineer focused on scalable and ethical systems.",
	},
	{
		name: "Eden Sharon",
		designation: "Project Manager",
		image: "/Eden Sharon.avif",
		bio: "Expert in cross-border project execution.",
	},
	{
		name: "Dr. Harpreet Singh",
		designation: "Asst. Professor, TIET & Visiting Prof., Reichman Univ.",
		image: "/Dr. Harpreet Singh.avif",
		bio: "Academic in emerging tech and AI in healthcare.",
	},
	{
		name: "Aniruddha Bera",
		designation: "PhD Scholar, TAU / Event Co-ordinator, Lowy School",
		image: "/Aniruddha Bera.avif",
		bio: "Researcher in medical innovation and diagnostics.",
	},
	{
		name: "Sayali Narayan Mhetre",
		designation: "Director ICC, Embassy of India Tel Aviv",
		image: "/Sayali Narayan Mhetre.avif",
		bio: "Diplomat fostering Indo-Israel collaboration.",
	},
	{
		name: "Keshav Agarwal",
		designation: "COO, Thinkwave / Talent Acquisition Lead",
		image: "/Keshav Agarwal.avif",
		bio: "Tech leader and hiring strategist for startups.",
	},
	{
		name: "Oren Daudi",
		designation: "Business Development Exec., Embassy of India",
		image: "/Oren Daudi.avif",
		bio: "Promoting business partnerships between India and Israel.",
	},
	{
		name: "Dr. Prashant Singh Rana",
		designation: "Associate Professor, TIET, India",
		image: "/bkl.avif",
		bio: "AI researcher and educator in computer science.",
	},
	{
		name: "Saar Nehemia",
		designation: "Physicist and Algorithm Developer",
		image: "/Saar Nehemia.avif",
		bio: "Physicist building intelligent algorithms.",
	},
	{
		name: "Yarin Didi",
		designation: "CTO, Batika",
		image: "/Yarin Didi.avif",
		bio: "Technology leader in agritech solutions.",
	},
	{
		name: "Bhavvishya Singla",
		designation: "Institutions Innovation Council, Student Volunteer",
		image: "/Bhavishya Singla.avif",
		bio: "Innovative thinker driving student-led change.",
	},
	{
		name: "Vishesh Makwana",
		designation: "Masters Student, Technion, Israel",
		image: "/Vishesh Makwana.avif",
		bio: "Graduate student working in AI and robotics.",
	},
	{
		name: "Dr. Mohit Goswami",
		designation: "PostDoc, Technion, Israel",
		image: "/Dr. Mohit Goswami.avif",
		bio: "Postdoctoral researcher in biomedical engineering.",
	},
	{
		name: "Chen Smile",
		designation: "CEO, 8200 Alumni Association",
		image: "/Chen Smilo.avif",
		bio: "Leader in cybersecurity and defense tech innovation.",
	},
	{
		name: "Chen Kamin",
		designation: "CEO, B1 Association",
		image: "/Chen Kamin.avif",
		bio: "Advocate for emerging entrepreneurs in tech.",
	},
	{
		name: "Ori Kadvi",
		designation: "Hackathon Organizer",
		image: "/Ori Kadvil.avif",
		bio: "Experienced organizer of international tech events.",
	},
	{
		name: "Prathor L.",
		designation: "Operations Anchor, NCR",
		image: "/Prakhar L..avif",
		bio: "Operational lead for technology deployments.",
	},
	{
		name: "Ms. Sowmya Sudhakar",
		designation: "Medical Device Design & Development",
		image: "/Ms. Sowmya Sudhakar.avif",
		bio: "Developer of innovative medical devices and systems.",
	},
];

export default function Organizers() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<div className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Organizing Committee
					</h2>
					<p className="text-xl text-gray-600">
						Meet the minds behind the hackathon
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{organizers.map((organizer, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							whileHover={{ y: -10 }}
							className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all group"
						>
							<div className="relative overflow-hidden">
								<img
									src={organizer.image || "/placeholder.svg"}
									alt={organizer.name}
									className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
									<div className="flex space-x-4">
										<motion.button
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.9 }}
											className="bg-white/90 p-2 rounded-full"
										>
											<LinkedinIcon className="h-5 w-5 text-blue-600" />
										</motion.button>
										<motion.button
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.9 }}
											className="bg-white/90 p-2 rounded-full"
										>
											<Mail className="h-5 w-5 text-gray-600" />
										</motion.button>
									</div>
								</div>
							</div>

							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-900 mb-1">
									{organizer.name}
								</h3>
								<p className="text-blue-600 font-semibold mb-3">
									{organizer.designation}
								</p>
								<p className="text-gray-600 text-sm">{organizer.bio}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
