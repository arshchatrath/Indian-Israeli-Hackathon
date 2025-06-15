"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
	ChevronDown,
	Users,
	Lightbulb,
	Globe2,
	BookOpen,
	Star,
	Scale,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const judges = [
	{
		name: "Mr. Ravi Patneedi",
		title: "Lead SAP",
		company: "Tractor Supply Company",
		image: "/Ravi Patneedi.avif",
	},
	{
		name: "Mr. Satish Bhambri",
		title: "Sr Machine Learning Engineer",
		company: "Walmart Labs",
		image: "/Satish Bhambri.avif",
	},
	{
		name: "Mr. Sunil Netra",
		title: "Principal Developer",
		company: "",
		image: "/Sunil Netra.avif",
	},
	{
		name: "Mr. Anil Vijarnia",
		title: "Senior Principal Engineer",
		company: "Wasabi Technologies",
		image: "/Anil Vijarnia.avif",
	},
	{
		name: "Mr. Abhishek Vyas",
		title: "Product Leader",
		company: "Meta",
		image: "/Abhishek Vyas.avif",
	},
	{
		name: "Mr. Chetan Sharma",
		title: "SAP Architect",
		company: "Tractor Supply Company, Brentwood, Tennessee",
		image: "/Mr. Chetan Sharma.avif",
	},
	{
		name: "Ms. Sangeeta Singh",
		title: "Firmware Engineer III",
		company: "Variosystems Inc",
		image: "/Sangeeta Singh.avif",
	},
	{
		name: "Mr. Naga Bharadwaj Bhavikatta",
		title: "Sr Tech Manager",
		company: "Oracle, USA",
		image: "/Naga Bharadwaj Bhavikatta.avif",
	},
	{
		name: "Mr. Navdeep Singh",
		title: "Principal Product Manager",
		company: "Walmart",
		image: "/Navdeep Singh.avif",
	},
	{
		name: "Mr. Jaya Krishna Modadugu",
		title: "Sr. Software Engineer",
		company: "Prosper Marketplace INC",
		image: "/Mr. Jaya Krishna Modadugu.avif",
	},
];

const selectionCriteria = [
	{
		icon: Lightbulb,
		title: "Technical Knowledge",
		description:
			"Expertise in programming, design, AI, IoT, cybersecurity, blockchain, or other relevant fields.",
	},
	{
		icon: Globe2,
		title: "Industry Representation",
		description:
			"A mix of professionals from startups, tech companies, academia, and government bodies for balanced perspectives.",
	},
	{
		icon: BookOpen,
		title: "Experience in Competitions",
		description:
			"Previous experience judging hackathons, startup pitches, or research competitions is preferred.",
	},
	{
		icon: Users,
		title: "Diversity in Backgrounds",
		description:
			"Judges from diverse sectors like academia, startups, corporate R&D, and venture capital for well-rounded feedback.",
	},
	{
		icon: Star,
		title: "Reputation & Credibility",
		description:
			"Well-respected in their domain, recognized by peers, or have significant contributions in their field.",
	},
	{
		icon: Scale,
		title: "Neutrality",
		description:
			"No personal or business relationships with participants to maintain fairness.",
	},
];

// Updated eligibility criteria for judges
const eligibilityCriteria = [
	"Relevant expertise in software development, engineering, AI, cybersecurity, healthcare, or related domains.",
	"At least 3-5 years of industry, research, or academic experience related to the hackathon’s focus.",
	"Experience in evaluating projects, mentoring startups, or working on innovative solutions is a plus.",
	"Must be unbiased, professional, and capable of evaluating projects based on merit.",
	"Strong analytical and communication skills to assess feasibility, innovation, and impact.",
	"Available for the entire judging process, including Q&A sessions and final evaluations.",
];

const selectionProcess = [
	{
		step: "Identifying Potential Judges",
		detail:
			"Reach out to industry leaders, professors, startup founders, and past hackathon winners. Seek recommendations from sponsors, organizing committees, and past judges. Utilize LinkedIn, professional networks, and academic conferences to find qualified individuals.",
	},
	{
		step: "Screening & Shortlisting",
		detail:
			"Verify credentials, technical expertise, and past judging experience. Ensure a balance between industry professionals and academicians. Confirm willingness and availability to judge fairly and effectively.",
	},
	{
		step: "Invitation & Confirmation",
		detail:
			"Send formal invitations outlining responsibilities, judging criteria, and the event schedule. Obtain a commitment and ensure they agree to ethical guidelines.",
	},
	{
		step: "Briefing & Orientation",
		detail:
			"Conduct a pre-hackathon session to explain scoring criteria, expected evaluation depth, and guidelines. Provide judges with hackathon themes, submission guidelines, and scoring rubrics in advance.",
	},
];

export default function Judges() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [showCriteria, setShowCriteria] = useState(false);
	const [showEligibility, setShowEligibility] = useState(false);
	const [showProcess, setShowProcess] = useState(false);

	return (
		<div className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-8" // Reduced from mb-16 to mb-8
				>
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Expert Judges
					</h2>
					<p className="text-xl text-gray-600 mb-6">
						Industry leaders who will evaluate your innovations
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<Button
							onClick={() => setShowEligibility((v) => !v)}
							variant="outline"
							className="border-blue-600 text-blue-600 hover:bg-blue-50"
						>
							Eligibility Criteria
							<ChevronDown
								className={`ml-2 h-4 w-4 transition-transform ${
									showEligibility ? "rotate-180" : ""
								}`}
							/>
						</Button>
						<Button
							onClick={() => setShowCriteria((v) => !v)}
							variant="outline"
							className="border-blue-600 text-blue-600 hover:bg-blue-50"
						>
							Selection Criteria
							<ChevronDown
								className={`ml-2 h-4 w-4 transition-transform ${
									showCriteria ? "rotate-180" : ""
								}`}
							/>
						</Button>
						<Button
							onClick={() => setShowProcess((v) => !v)}
							variant="outline"
							className="border-blue-600 text-blue-600 hover:bg-blue-50"
						>
							Selection Process
							<ChevronDown
								className={`ml-2 h-4 w-4 transition-transform ${
									showProcess ? "rotate-180" : ""
								}`}
							/>
						</Button>
					</div>
				</motion.div>
				{/* Eligibility Criteria */}
				<motion.div
					initial={{ opacity: 0, height: 0 }}
					animate={{
						opacity: showEligibility ? 1 : 0,
						height: showEligibility ? "auto" : 0,
					}}
					transition={{ duration: 0.3 }}
					className="overflow-hidden mb-4" // Reduced from mb-8 to mb-4
				>
					<div className="bg-white rounded-lg p-6 shadow-lg max-w-3xl mx-auto">
						{" "}
						{/* p-8 -> p-6 */}
						<h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">
							Eligibility Criteria for Judges
						</h3>{" "}
						<ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
							{eligibilityCriteria.map((item, idx) => (
								<li key={`eligibility-${idx * 23}`}>{item}</li>
							))}
						</ul>
					</div>
				</motion.div>
				{/* Selection Criteria */}
				<motion.div
					initial={{ opacity: 0, height: 0 }}
					animate={{
						opacity: showCriteria ? 1 : 0,
						height: showCriteria ? "auto" : 0,
					}}
					transition={{ duration: 0.3 }}
					className="overflow-hidden mb-4" // Reduced from mb-8 to mb-4
				>
					<div className="bg-white rounded-lg p-6 shadow-lg">
						<h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">
							Selection Criteria
						</h3>{" "}
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{selectionCriteria.map((criteria, index) => (
								<div
									key={`criteria-${criteria.title}`}
									className="text-center"
								>
									<criteria.icon className="h-12 w-12 text-blue-600 mx-auto mb-3" />
									<h4 className="font-semibold text-gray-900 mb-2">
										{criteria.title}
									</h4>
									<p className="text-gray-600 text-sm">
										{criteria.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</motion.div>
				{/* Selection Process */}
				<motion.div
					initial={{ opacity: 0, height: 0 }}
					animate={{
						opacity: showProcess ? 1 : 0,
						height: showProcess ? "auto" : 0,
					}}
					transition={{ duration: 0.3 }}
					className="overflow-hidden mb-4" // Reduced from mb-16 to mb-8
				>
					<div className="bg-white rounded-lg p-6 shadow-lg max-w-3xl mx-auto">
						<h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">
							Selection Process
						</h3>{" "}
						<ol className="list-decimal list-inside text-gray-700 space-y-4 text-left">
							{selectionProcess.map((step, idx) => (
								<li key={`process-${step.step}`}>
									<span className="font-semibold">{step.step}:</span>{" "}
									{step.detail}
								</li>
							))}
						</ol>
					</div>
				</motion.div>
				{/* Judges Grid */}{" "}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{judges.map((judge, index) => (
						<motion.div
							key={`judge-${judge.name}`}
							initial={{ opacity: 0, y: 50 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							whileHover={{ y: -5 }}
							className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
						>
							<img
								src={judge.image || "/placeholder.svg"}
								alt={judge.name}
								className="w-full h-64 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-900 mb-1">
									{judge.name}
								</h3>
								<p className="text-blue-600 font-semibold mb-1">
									{judge.title}
								</p>
								<p className="text-gray-600">{judge.company}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
