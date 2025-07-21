"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
	ArrowLeft,
	Download,
	Share2,
	Users,
	FileText,
	Clock,
	Award,
	CheckCircle,
	AlertTriangle,
	ExternalLink,
	Mail,
	Phone,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Guidelines() {
	const [activeSection, setActiveSection] = useState("general");
	const router = useRouter();

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	// Add type annotations for color and url
	const getPhaseStyles = (color: string) => {
		const styles = {
			blue: "bg-blue-100 border-blue-300 text-blue-700",
			purple: "bg-purple-100 border-purple-300 text-purple-700",
			green: "bg-green-100 border-green-300 text-green-700",
			orange: "bg-orange-100 border-orange-300 text-orange-700",
		};
		return styles[color as keyof typeof styles] || styles.blue;
	};

	const getBadgeStyles = (color: string) => {
		const styles = {
			blue: "bg-blue-600 text-white",
			purple: "bg-purple-600 text-white",
			green: "bg-green-600 text-white",
			orange: "bg-orange-600 text-white",
		};
		return styles[color as keyof typeof styles] || styles.blue;
	};

	const referenceLinks = [
		{
			name: "Presentation Skills Guide",
			url: "https://www.youtube.com/watch?v=9EfabrSBFRk",
		},
		{
			name: "Hackathon Strategy Podcast",
			url: "https://open.spotify.com/episode/7fXEfYSnxGDtYlxHoTG6WX?nd=1&dlsi=9a8923fb1a164995",
		},
		{
			name: "Winning Pitch Techniques",
			url: "https://www.youtube.com/watch?v=jqLsD1zT14o",
		},
		{
			name: "Common Hackathon Mistakes",
			url: "https://deecodes.hashnode.dev/how-not-to-win-sih",
		},
		{
			name: "Sample PPTs and Hackathon Template",
			url: "https://drive.google.com/drive/folders/1VKDmAVa0ALRRx-phpExBh_LDCAUf5X1t?usp=sharing",
		},
		{
			name: "Hackathon Success Roadmap",
			url: "https://www.linkedin.com/posts/vikram-gaur-0252aa185_hackathon-learnbydoing-hackathonroadmap-activity-7307279051885338624-ZFd2/",
		},
	];

	const generalInstructions = [
		"Each team must register through the official registration form provided by the organizers.",
		"Team size should be between 1-6 members (minimum 1, maximum 6 participants per team).",
		"Teams can have mixed composition of students from different institutions, disciplines, and countries.",
		"All team members must submit the registration form individually and mention their team name consistently.",
		"After registration, teams must join the official WhatsApp group for important updates and communications.",
	];

	const slideOutline = [
		{
			title: "Title Slide",
			description: "Team name, project title, members",
		},
		{
			title: "Problem Statement",
			description: "Clear definition of the healthcare challenge",
		},
		{ title: "Market Research", description: "Current solutions and gaps" },
		{
			title: "Target Audience",
			description: "Who will benefit from your solution",
		},
		{ title: "Proposed Solution", description: "Your innovative approach" },
		{
			title: "Technology Stack",
			description: "Tools and technologies used",
		},
		{
			title: "Implementation Plan",
			description: "Step-by-step development approach",
		},
		{
			title: "Prototype/Demo",
			description: "Visual representation or working model",
		},
		{
			title: "Business Model",
			description: "Revenue streams and sustainability",
		},
		{
			title: "Impact Assessment",
			description: "Expected outcomes and benefits",
		},
		{
			title: "Challenges & Mitigation",
			description: "Potential obstacles and solutions",
		},
		{
			title: "Future Roadmap",
			description: "Scaling and enhancement plans",
		},
		{
			title: "Thank You",
			description: "Contact information and acknowledgments",
		},
	];

	const timelinePhases = [
		{
			round: "Round-I",
			title: "PPT/Idea Submission",
			description:
				"Submit your 13-slide presentation with your innovative healthcare solution",
			details:
				"Due by: 7 August 2025. Exactly 13 slides required. Focus on problem, solution, and implementation plan.",
			color: "blue",
		},
		{
			round: "Round-II",
			title: "Online Presentation",
			description: "Present your idea to judges via online platform",
			details:
				"15 August 2025. 15 minutes total: 10 minutes presentation + 5 minutes Q&A session",
			color: "purple",
		},
		{
			round: "Round-III",
			title: "Final 24-Hour Hackathon",
			description: "In-person 24-hour hackathon with demo and evaluation",
			details:
				"23-24 August 2025. 24-hour hackathon at the venue. Final presentations and demos to judges.",
			color: "green",
		},
		{
			round: "Certificates",
			title: "Participation Recognition",
			description:
				"All participants receive certificates of participation",
			details:
				"Digital certificates will be provided to all registered participants after the final round",
			color: "orange",
		},
	];

	const evaluationCriteria = [
		"Innovation & Creativity - Uniqueness of the solution",
		"Technical Feasibility - Practicality of implementation",
		"Market Potential - Commercial viability and scalability",
		"Healthcare Impact - Potential to improve patient outcomes",
		"Presentation Quality - Clarity and professionalism",
		"Team Collaboration - Evidence of teamwork and coordination",
	];

	const handleExternalLink = (url: string) => {
		window.open(url, "_blank", "noopener,noreferrer");
	};

	const handleDownloadGuidelines = () => {
		// This would typically generate a PDF or provide a download link
		alert("Guidelines download feature would be implemented here");
	};

	const handleShare = async () => {
		if (navigator.share) {
			try {
				await navigator.share({
					title: "Israeli-Indian Hackathon 2025 Guidelines",
					text: "Check out the guidelines for the Israeli-Indian Hackathon 2025 - Restorative Health Care",
					url: window.location.href,
				});
			} catch (err) {
				console.log("Error sharing:", err);
			}
		} else {
			// Fallback for browsers that don't support Web Share API
			navigator.clipboard.writeText(window.location.href);
			alert("Link copied to clipboard!");
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
			{/* Header */}
			<header className="bg-white shadow-sm border-b border-blue-100 sticky top-0 z-50">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-4">
							<button
								onClick={() => router.push("/")}
								className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
							>
								<ArrowLeft className="h-4 w-4" />
								<span className="text-sm font-medium">
									Back to Home
								</span>
							</button>
							<div className="h-6 w-px bg-gray-300" />
							<span className="text-sm text-gray-600">
								israeli-indian-hackathon.org
							</span>
						</div>
						<div className="flex items-center space-x-2">
							<motion.a
								href="https://dsai.thapar.edu/"
								target="_blank"
								rel="noopener noreferrer"
								initial={{ scale: 1, opacity: 0.7 }}
								animate={{ scale: 1.08, opacity: 1 }}
								whileHover={{
									scale: 1.15,
									rotate: 3,
									opacity: 1,
								}}
								transition={{
									type: "spring",
									stiffness: 200,
									damping: 12,
								}}
								className="flex items-center space-x-2 px-2 py-1 rounded-lg bg-white shadow hover:shadow-lg border border-blue-100"
								title="Organizing Center"
							>
								<img
									src="https://res.cloudinary.com/dldfnkvlm/image/upload/v1749965201/coe_xivuna.png"
									alt="Organizing Center Logo"
									className="h-10 w-30 object-contain"
								/>
								<span className="text-xs font-semibold text-blue-700 hidden sm:inline"></span>
							</motion.a>
							<button
								onClick={handleShare}
								className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
							>
								<Share2 className="h-4 w-4" />
								<span className="text-sm">Share</span>
							</button>
						</div>
					</div>
					<div className="mt-4">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
							Guidelines for the{" "}
							<span className="text-blue-600">Participants</span>
						</h1>
						<p className="text-lg text-gray-600">
							Israeli-Indian Hackathon 2025 - Restorative Health
							Care
						</p>
					</div>
				</div>
			</header>

			{/* Navigation */}
			<nav className="bg-white border-b border-gray-200 sticky top-20 z-40">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex space-x-8 overflow-x-auto py-4">
						{[
							{
								id: "general",
								label: "General Instructions",
								icon: Users,
							},
							{
								id: "presentation",
								label: "Presentation Guidelines",
								icon: FileText,
							},
							{ id: "timeline", label: "Timeline", icon: Clock },
							{
								id: "evaluation",
								label: "Evaluation",
								icon: Award,
							},
						].map(({ id, label, icon: Icon }) => (
							<button
								key={id}
								onClick={() => setActiveSection(id)}
								className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
									activeSection === id
										? "bg-blue-100 text-blue-700 border-b-2 border-blue-600"
										: "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
								}`}
							>
								<Icon className="h-4 w-4" />
								<span className="text-sm font-medium">
									{label}
								</span>
							</button>
						))}
					</div>
				</div>
			</nav>

			{/* Main Content */}
			<main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="space-y-8">
					{/* General Instructions */}
					{activeSection === "general" && (
						<div className="animate-in slide-in-from-right duration-300">
							<div className="bg-white rounded-xl border border-blue-200 shadow-lg overflow-hidden">
								<div className="bg-blue-50 px-6 py-4 border-b border-blue-100">
									<h2 className="flex items-center text-2xl font-bold text-blue-900">
										<Users className="h-6 w-6 mr-3" />
										General Instructions
									</h2>
								</div>
								<div className="p-6">
									<div className="space-y-4">
										{generalInstructions.map(
											(instruction, index) => (
												<div
													key={index}
													className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
												>
													<div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 border border-blue-300 rounded-full flex items-center justify-center text-sm font-semibold">
														{index + 1}
													</div>
													<p className="text-gray-700 leading-relaxed">
														{instruction}
													</p>
												</div>
											)
										)}
									</div>

									<div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
										<div className="flex items-center">
											<CheckCircle className="h-5 w-5 text-green-600 mr-2" />
											<span className="font-semibold text-green-800">
												Registration Checklist:
											</span>
										</div>
										<ul className="mt-3 space-y-2 text-green-700">
											<li className="flex items-center space-x-2">
												<div className="w-2 h-2 bg-green-600 rounded-full"></div>
												<span>
													Complete individual
													registration form
												</span>
											</li>
											<li className="flex items-center space-x-2">
												<div className="w-2 h-2 bg-green-600 rounded-full"></div>
												<span>
													Confirm team name
													consistency
												</span>
											</li>
											<li className="flex items-center space-x-2">
												<div className="w-2 h-2 bg-green-600 rounded-full"></div>
												<span>
													Join official WhatsApp group
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					)}

					{/* Presentation Guidelines */}
					{activeSection === "presentation" && (
						<div className="animate-in slide-in-from-right duration-300 space-y-6">
							<div className="bg-white rounded-xl border border-orange-200 shadow-lg overflow-hidden">
								<div className="bg-orange-50 px-6 py-4 border-b border-orange-100">
									<h2 className="flex items-center text-2xl font-bold text-orange-900">
										<FileText className="h-6 w-6 mr-3" />
										Presentation Guidelines
									</h2>
								</div>
								<div className="p-6">
									{/* AI Warning */}
									<div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
										<div className="flex items-center">
											<AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
											<span className="font-semibold text-red-800">
												Important Warning:
											</span>
										</div>
										<p className="text-red-700 mt-2">
											<strong>
												Don't use AI for PPT generation.
											</strong>{" "}
											All presentations must be original
											work created by team members.
										</p>
									</div>

									{/* Reference Materials */}
									<div className="mb-6">
										<h3 className="font-semibold text-gray-900 mb-3">
											Reference Materials:
										</h3>
										<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
											{referenceLinks.map(
												(link, index) => (
													<button
														key={index}
														onClick={() =>
															handleExternalLink(
																link.url
															)
														}
														className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-left"
													>
														<ExternalLink className="h-4 w-4 text-blue-600 flex-shrink-0" />
														<span className="text-sm text-gray-700">
															{link.name}
														</span>
													</button>
												)
											)}
										</div>
									</div>

									{/* Slide Outline */}
									<div className="mb-6">
										<h3 className="font-semibold text-gray-900 mb-4">
											Required Slide Outline (13 Slides):
										</h3>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
											{slideOutline.map(
												(slide, index) => (
													<div
														key={index}
														className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
													>
														<div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
															{index + 1}
														</div>
														<div>
															<p className="font-medium text-gray-900 text-sm">
																{slide.title}
															</p>
															<p className="text-xs text-gray-600 mt-1">
																{
																	slide.description
																}
															</p>
														</div>
													</div>
												)
											)}
										</div>
									</div>

									{/* Video Submission */}
									<div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
										<h3 className="font-semibold text-blue-900 mb-2">
											Optional Video Submission:
										</h3>
										<p className="text-blue-800 text-sm">
											Teams can optionally submit a 1-4
											minute YouTube video explaining
											their solution. This can enhance
											your presentation and provide
											additional context to judges.
										</p>
									</div>
								</div>
							</div>
						</div>
					)}

					{/* Timeline */}
					{activeSection === "timeline" && (
						<div className="animate-in slide-in-from-right duration-300">
							<div className="bg-white rounded-xl border border-green-200 shadow-lg overflow-hidden">
								<div className="bg-green-50 px-6 py-4 border-b border-green-100">
									<h2 className="flex items-center text-2xl font-bold text-green-900">
										<Clock className="h-6 w-6 mr-3" />
										Timeline of the Hackathon
									</h2>
								</div>
								<div className="p-6">
									<div className="space-y-6">
										{timelinePhases.map((phase, index) => (
											<div
												key={index}
												className="relative"
											>
												<div className="flex items-start space-x-4">
													<div
														className={`flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center ${getPhaseStyles(
															phase.color
														)}`}
													>
														<span className="font-bold text-sm">
															{index + 1}
														</span>
													</div>
													<div className="flex-grow">
														<div className="flex items-center space-x-2 mb-2">
															<span
																className={`px-2 py-1 rounded text-xs font-semibold ${getBadgeStyles(
																	phase.color
																)}`}
															>
																{phase.round}
															</span>
															<h3 className="font-semibold text-gray-900">
																{phase.title}
															</h3>
														</div>
														<p className="text-gray-700 mb-1">
															{phase.description}
														</p>
														<p className="text-sm text-gray-600">
															{phase.details}
														</p>
													</div>
												</div>
												{index <
													timelinePhases.length -
														1 && (
													<div className="absolute left-6 top-12 w-px h-6 bg-gray-300"></div>
												)}
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					)}

					{/* Evaluation Parameters */}
					{activeSection === "evaluation" && (
						<div className="animate-in slide-in-from-right duration-300">
							<div className="bg-white rounded-xl border border-purple-200 shadow-lg overflow-hidden">
								<div className="bg-purple-50 px-6 py-4 border-b border-purple-100">
									<h2 className="flex items-center text-2xl font-bold text-purple-900">
										<Award className="h-6 w-6 mr-3" />
										Evaluation Parameters
									</h2>
								</div>
								<div className="p-6">
									<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
										<p className="text-yellow-800 font-medium">
											<strong>
												Mandatory Requirement:
											</strong>{" "}
											All team members must be present
											during evaluation rounds.
										</p>
									</div>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										{evaluationCriteria.map(
											(criteria, index) => (
												<div
													key={index}
													className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg border border-purple-100"
												>
													<div className="w-3 h-3 bg-purple-600 rounded-full flex-shrink-0"></div>
													<p className="text-gray-700">
														{criteria}
													</p>
												</div>
											)
										)}
									</div>

									<div className="mt-6 p-4 bg-gray-50 rounded-lg">
										<h3 className="font-semibold text-gray-900 mb-2">
											Evaluation Process:
										</h3>
										<ul className="space-y-2 text-sm text-gray-700">
											<li>
												• Each criterion will be scored
												on a scale of 1-10
											</li>
											<li>
												• Multiple judges will evaluate
												each team independently
											</li>
											<li>
												• Final scores will be averaged
												across all judges
											</li>
											<li>
												• Top teams from each round
												advance to the next stage
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					)}

					{/* Motivational Quote */}
					<div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-indigo-200 shadow-lg overflow-hidden">
						<div className="p-8 text-center">
							<h3 className="text-2xl font-bold text-indigo-900 mb-4">
								Remember
							</h3>
							<blockquote className="text-lg text-indigo-800 italic leading-relaxed max-w-4xl mx-auto">
								"Whether you win or lose, the most important
								thing is what you learn from this experience.
								Every challenge is an opportunity to grow, every
								setback is a setup for a comeback, and every
								innovation starts with a single idea. Your
								journey in this hackathon is not just about the
								destination, but about the knowledge, skills,
								and connections you build along the way."
							</blockquote>
							<div className="mt-6 w-16 h-1 bg-indigo-300 mx-auto rounded-full"></div>
						</div>
					</div>
				</div>
			</main>

			{/* Footer Contact */}
			<footer className="bg-gray-900 text-white py-12 mt-16">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h3 className="text-2xl font-bold mb-6">
							Hackathon Coordinator
						</h3>
						<div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
							<a
								href="mailto:contact@israeli-indian-hackathon.org"
								className="flex items-center space-x-3 text-blue-400 hover:text-blue-300 transition-colors"
							>
								<Mail className="h-5 w-5" />
								<span>
									contact@israeli-indian-hackathon.org
								</span>
							</a>
							<a
								href="tel:+919313889932"
								className="flex items-center space-x-3 text-green-400 hover:text-green-300 transition-colors"
							>
								<Phone className="h-5 w-5" />
								<span>+91-9313889932</span>
							</a>
						</div>
						<div className="mt-8 pt-8 border-t border-gray-700">
							<p className="text-gray-400">
								© 2025 Israeli-Indian Hackathon. All rights
								reserved.
							</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
