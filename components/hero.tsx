"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowRight, FileText, Trophy, Users, Globe, Calendar, MapPin, Sparkles, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef, useEffect, useState } from "react"

// Update the stats array with more impactful visuals
const stats = [
	{
		label: "Total Prize Pool",
		value: "₹1,00,000",
		icon: Trophy,
		gradient: "from-yellow-400 via-amber-500 to-orange-600",
	},
	{
		label: "Expected Participants",
		value: "500+",
		icon: Users,
		gradient: "from-blue-400 via-indigo-500 to-purple-600",
	},
	{
		label: "Participating Nations",
		value: "2",
		icon: Globe,
		gradient: "from-emerald-400 via-teal-500 to-cyan-600",
	},
	{
		label: "Event Duration",
		value: "48 Hours",
		icon: Calendar,
		gradient: "from-blue-400 via-blue-500 to-blue-600",
	},
	{
		label: "Format",
		value: "Hybrid Event",
		icon: MapPin,
		gradient: "from-purple-400 via-purple-500 to-indigo-600",
	},
]

// Countdown Timer Component
function Countdown({ deadline }: { deadline: string }) {
  const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, minutes: number, seconds: number}>({
    days: 0, hours: 0, minutes: 0, seconds: 0
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const end = new Date(deadline)
      const diff = end.getTime() - now.getTime()
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [deadline])

  return (
    <span className="font-mono text-blue-900 text-base">
      {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
    </span>
  )
}

export default function Hero() {
	const containerRef = useRef(null)
	const statsRef = useRef(null)
	const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 })

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	})

	const heroY = useTransform(scrollYProgress, [0, 1], [0, -150])
	const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
	const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50])

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
			className="min-h-screen"
		>
			<section
				ref={containerRef}
				className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 overflow-hidden"
			>
				{/* Enhanced Animated Background */}
				<motion.div style={{ y: backgroundY }} className="absolute inset-0">
					{/* Floating Orbs */}
					<motion.div
						className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
						animate={{
							scale: [1, 1.2, 1],
							opacity: [0.3, 0.5, 0.3],
							x: [0, 50, 0],
							y: [0, -30, 0],
						}}
						transition={{
							duration: 20,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
					<motion.div
						className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl"
						animate={{
							scale: [1.1, 1, 1.1],
							opacity: [0.2, 0.4, 0.2],
							x: [0, -40, 0],
							y: [0, 20, 0],
						}}
						transition={{
							duration: 25,
							repeat: Infinity,
							ease: "easeInOut",
							delay: 5,
						}}
					/>

					{/* Sophisticated Grid Pattern */}
					<div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />

					{/* Gradient Overlays */}
					<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
					<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-300/30 to-transparent" />
				</motion.div>

				{/* Main Content Container */}
				<motion.div
					style={{ y: heroY, opacity: heroOpacity }}
					className="relative z-10 min-h-screen flex items-center py-8"
				>
					<div className="w-full max-w-7xl mx-auto px-8 py-8">
						<div
							className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center"
							style={{ minHeight: "calc(100vh - 4rem)" }}
						>
							{/* Left Column - Content */}
							<div className="space-y-4 xl:pr-8">
								{/* Enhanced Logo Section */}
								<motion.div
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
									className="space-y-4"
								>
									{/* Institution Header */}
									<motion.div
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.8, delay: 0.2 }}
										className="space-y-2"
									>
										<h2 className="text-sm font-bold text-slate-600 tracking-[0.2em] uppercase">
											Thapar Institute of Engineering & Technology
										</h2>
										<div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
									</motion.div>

									{/* COE Logo - Optimized for Horizontal Layout */}
									<motion.div
										className="flex items-center space-x-6"
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{
											duration: 1,
											delay: 0.4,
											ease: [0.25, 0.46, 0.45, 0.94],
										}}
									>
										<motion.div
											className="relative group cursor-pointer"
											whileHover={{ scale: 1.02 }}
											transition={{ duration: 0.3, ease: "easeOut" }}
										>
											<motion.div
												className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-indigo-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
												animate={{
													opacity: [0.3, 0.5, 0.3],
												}}
												transition={{
													duration: 4,
													repeat: Infinity,
													ease: "easeInOut",
												}}
											/>
											<div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl border border-white/80">
												<img
													src="/coe logo.png"
													alt="Center of Excellence"
													className="h-16 w-auto object-contain"
												/>
											</div>
										</motion.div>

										<motion.div
											initial={{ opacity: 0, x: -10 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.8, delay: 0.6 }}
											className="space-y-1"
										>
											<p className="text-lg font-bold text-slate-800">
												Center of Excellence
											</p>
											<p className="text-sm text-blue-600 font-semibold tracking-wide uppercase">
												Proudly Presents
											</p>
										</motion.div>
									</motion.div>
								</motion.div>

								{/* Main Headlines with Staggered Animation */}
								<div className="space-y-4">
									<motion.div
										className="space-y-3"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 1.2, delay: 0.8 }}
									>
										<motion.h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 whitespace-nowrap">
                        Israeli-Indian
                      </span>
                      <br />
                      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        Hackathon 2025
                      </span>
                    </motion.h1>
									</motion.div>

									{/* Enhanced Description */}
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											duration: 1,
											delay: 1.6,
											ease: [0.25, 0.46, 0.45, 0.94],
										}}
										className="max-w-2xl"
									>
										<motion.p
											className="text-lg text-slate-600 leading-relaxed font-medium mb-2"
											animate={{
												opacity: [1, 0.8, 1],
											}}
											transition={{
												duration: 3,
												repeat: Infinity,
												ease: "easeInOut",
											}}
										>
											Unite with visionary innovators from Israel and India to revolutionize healthcare technology.
										</motion.p>
										<p className="text-base text-slate-500 leading-relaxed">
											Build groundbreaking solutions that will transform patient care and medical innovation across both nations.
										</p>
									</motion.div>
								</div>

								{/* Countdown Timer */}
              {/* <Countdown deadline="2025-07-24T23:59:59" /> */}

								{/* Premium CTA Buttons */}
								<motion.div
									className="flex flex-col sm:flex-row gap-4 pt-2"
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 1, delay: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
								>
									<motion.div
										whileHover={{ y: -3, scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										transition={{ duration: 0.2, ease: "easeOut" }}
									>
										<Button
											size="lg"
											className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800 text-white px-10 py-5 text-lg font-bold rounded-2xl shadow-2xl border-0 overflow-hidden group"
											onClick={() =>
												window.open(
													"https://docs.google.com/forms/d/e/1FAIpQLScn8F1KEg57rFbDvFhCqqyyHD3TkLKKUFqPR-g39aUe69EhYw/viewform",
													"_blank",
													"noopener,noreferrer"
												)
											}
										>
											<motion.div
												className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
												initial={{ x: "-200%" }}
												whileHover={{ x: "200%" }}
												transition={{ duration: 0.8, ease: "easeInOut" }}
											/>
											<motion.div
												className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 rounded-2xl"
												animate={{
													opacity: [0, 0.5, 0],
													scale: [0.8, 1.2, 0.8],
												}}
												transition={{
													duration: 3,
													repeat: Infinity,
													ease: "easeInOut",
												}}
											/>
											<span className="relative z-10 flex items-center">
												Register Now
												<motion.div
													animate={{ x: [0, 4, 0] }}
													transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
												>
													<ArrowRight className="ml-3 h-5 w-5" />
												</motion.div>
											</span>
										</Button>
									</motion.div>

									<motion.div
										whileHover={{ y: -3, scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										transition={{ duration: 0.2, ease: "easeOut" }}
									>
										<Button
											variant="outline"
											size="lg"
											className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-blue-400 hover:text-blue-700 px-10 py-5 text-lg font-bold rounded-2xl bg-white/90 backdrop-blur-sm shadow-xl transition-all duration-300 group relative overflow-hidden"
											onClick={() => (window.location.href = "/guidelines")}
										>
											<motion.div
												className="absolute inset-0 bg-gradient-to-r from-slate-50/0 via-slate-50/50 to-slate-50/0"
												initial={{ x: "-100%" }}
												whileHover={{ x: "100%" }}
												transition={{ duration: 0.6, ease: "easeInOut" }}
											/>
											<span className="relative z-10 flex items-center">
												View Guidelines
												<motion.div
													whileHover={{ scale: 1.2, rotate: 15 }}
													transition={{ duration: 0.3 }}
												>
													<FileText className="ml-3 h-5 w-5" />
												</motion.div>
											</span>
										</Button>
									</motion.div>
								</motion.div>
							</div>

							{/* Right Column - Enhanced Stats Dashboard */}
							<div className="xl:pl-8 xl:ml-12">
  <motion.div
    ref={statsRef}
    className="relative"
    initial={{ opacity: 0, x: 60 }}
    animate={isStatsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
    transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    {/* Background Glow Effect */}
    <motion.div
      className="absolute -inset-6 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-indigo-400/10 rounded-2xl blur-2xl"
      animate={{
        scale: [1, 1.05, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Main Stats Container */}
    <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-7 shadow-xl border border-white/40 max-w-lg mx-auto"> {/* Increased p-5 -> p-7 and max-w-sm -> max-w-lg */}
      {/* Countdown Timer at the top of the box */}
      <div className="flex flex-nowrap items-center gap-3 bg-blue-50 border border-blue-200 rounded-xl px-6 py-3 mb-3 w-fit shadow-sm animate-pulse"> {/* Increased px-4 -> px-6, py-2 -> py-3, gap-2 -> gap-3, mb-2 -> mb-3 */}
        <Clock className="h-5 w-5 text-blue-500" />
        <span className="font-semibold text-blue-700 text-sm">
          Registration closes in:
        </span>
        <Countdown deadline="2025-07-24T23:59:59" />
      </div>

      {/* Header */}
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="flex items-center justify-center gap-2 mb-1">
          <Sparkles className="h-5 w-5 text-blue-500" />
          <h3 className="text-xl font-bold text-slate-900 tracking-wide">
            Event Highlights
          </h3>
        </div>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full mx-auto" />
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4"> {/* Increased gap-3 -> gap-4 */}
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            className="flex items-center gap-4 p-3 rounded-lg bg-gradient-to-r from-white/60 to-white/30 hover:shadow-md transition-all" // Increased gap-3 -> gap-4, p-2 -> p-3
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isStatsInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.7, delay: 1 + idx * 0.12 }}
            whileHover={{ scale: 1.03, y: -2 }}
          >
            <div className={`flex-shrink-0 w-11 h-11 bg-gradient-to-r ${stat.gradient} rounded-lg flex items-center justify-center shadow`}> {/* Increased w-9 h-9 -> w-11 h-11 */}
              <stat.icon className="h-6 w-6 text-white" /> {/* Increased h-5 w-5 -> h-6 w-6 */}
            </div>
            <div>
              <div className="text-lg font-semibold text-slate-900 leading-tight">{stat.value}</div> {/* Increased text-base -> text-lg */}
              <div className="text-sm text-slate-600">{stat.label}</div> {/* Increased text-xs -> text-sm */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
</div>
						</div>
					</div>
				</motion.div>

				{/* Add animated background patterns */}
				<motion.div className="absolute inset-0">
					{/* Sacred Geometry Pattern */}
					<motion.div
						className="absolute inset-0 opacity-5"
						style={{
							backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.858 8.485 15.272 9.9l7.9-7.9h-.83zm5.657 0L19.515 8.485 20.93 9.9l7.9-7.9h-0.83zM32 0l-8.485 8.485 1.415 1.415 7.9-7.9h-.83zm5.657 0l-8.485 8.485 1.415 1.415 7.9-7.9h-.83zM32 0l-8.485 8.485 1.415 1.415 7.9-7.9h-.83z' fill='%234B5563' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
						}}
					/>
				</motion.div>

				{/* Decorative Globe Illustration - New Addition */}
				<Globe
					className="absolute right-10 top-1/2 -translate-y-1/2 text-blue-100/30 w-64 h-64 z-0 pointer-events-none hidden xl:block"
					style={{ filter: "blur(2px)" }}
				/>
			</section>
		</motion.div>
	)
}