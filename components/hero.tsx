"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ArrowRight, FileText, Trophy, Users, Globe, Calendar, MapPin, Sparkles, BadgeCheck, Clock } from "lucide-react"
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
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);
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
    <span className="font-mono text-blue-900 text-base font-semibold">
    {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
    </span>
  )
}

// Mock Button Component
function Button({ 
  children, 
  size = "default", 
  variant = "default", 
  className = "", 
  onClick,
  ...props 
}: {
  children: React.ReactNode
  size?: "default" | "lg"
  variant?: "default" | "outline"
  className?: string
  onClick?: () => void
}) {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-105 active:scale-95 transform-gpu"
  const sizeClasses = size === "lg" ? "h-11 px-8" : "h-10 px-4 py-2"
  const variantClasses = variant === "outline" 
    ? "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:shadow-2xl hover:border-blue-400" 
    : "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-2xl"
  
  return (
    <motion.button 
      whileHover={{ 
        y: -3,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      whileTap={{ y: 0, scale: 0.98 }}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`} // fixed template string
      onClick={onClick}
      {...props}
    >
      <motion.span
        initial={{ opacity: 0.9 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
    </motion.button>
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

    // Load Devfolio SDK
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            // Check if script still exists before removing
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        }
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen"
        >
            <section
                ref={containerRef}
                className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 overflow-hidden"
            >
                {/* --- Decorative Animated Blobs --- */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    {/* Radial Glow */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-5xl max-h-[60vh] bg-gradient-radial from-blue-200/40 via-purple-100/30 to-transparent rounded-full blur-2xl opacity-70" />
                    {/* Top Left Blob */}
                    <motion.div
                        className="absolute top-[8%] left-[6%] w-[22vw] h-[22vw] bg-gradient-to-br from-blue-400/40 via-purple-400/30 to-indigo-400/40 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.12, 1],
                            x: [0, 40, 0],
                            y: [0, -30, 0],
                            opacity: [0.35, 0.5, 0.35],
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    {/* Bottom Right Blob */}
                    <motion.div
                        className="absolute bottom-[8%] right-[8%] w-[18vw] h-[18vw] bg-gradient-to-br from-rose-400/40 via-pink-300/30 to-purple-400/40 rounded-full blur-3xl"
                        animate={{
                            scale: [1.1, 0.95, 1.1],
                            x: [0, -30, 0],
                            y: [0, 40, 0],
                            opacity: [0.25, 0.4, 0.25],
                        }}
                        transition={{
                            duration: 22,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2,
                        }}
                    />
                    {/* Center Right Blob */}
                    <motion.div
                        className="absolute top-1/2 right-[20%] w-[14vw] h-[14vw] bg-gradient-to-br from-indigo-400/30 via-blue-300/20 to-purple-400/30 rounded-full blur-2xl"
                        animate={{
                            scale: [1, 1.08, 1],
                            x: [0, 20, 0],
                            y: [0, -20, 0],
                            opacity: [0.18, 0.28, 0.18],
                        }}
                        transition={{
                            duration: 16,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                    />
                    {/* Subtle Animated Grid */}
                    <motion.div
                        className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.07)_1px,transparent_1px)] bg-[size:60px_60px]"
                        animate={{
                            backgroundPosition: ["0px 0px", "30px 30px", "0px 0px"],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />

                    {/* Faint Globe Icon */}
                    <Globe
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-200/10 w-[40vw] h-[40vw] z-0 pointer-events-none"
                        style={{ filter: "blur(2px)" }}
                    />
                </div>

                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="relative z-10 min-h-screen flex flex-col items-center py-8 pt-24"
                >
                    {/* Centered Heading at the Top with enhanced fade-in animation */}
                    <motion.div 
                        initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="w-full max-w-4xl mx-auto mb-8 text-center px-4"
                    >
                        <motion.h2 
                            initial={{ letterSpacing: "0.1em", opacity: 0.8 }}
                            animate={{ letterSpacing: "0.05em", opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.4 }}
                            className="text-2xl sm:text-2xl md:text-2.5xl font-extrabold mb-2 text-teal-500"
                            style={{ fontFamily: "inherit" }}
                        >
                            Center of Excellence in Data Science & AI<br />
                            Thapar Institute of Engineering and Technology, Patiala
                        </motion.h2>
                        <div className="mt-2 mb-1 text-lg font-bold text-black">
                            in association with
                        </div>
                        <div className="text-lg sm:text-xl font-extrabold text-teal-500 mb-2">
                            Tel Aviv University, Israel and University of Haifa, Israel.
                        </div>
                        <div className="text-base font-semibold text-black mt-6">
                            Presents
                        </div>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="w-full max-w-7xl mx-auto px-4 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8 xl:gap-6">
                        {/* Left: Main Content (left-aligned, timer below CTAs) */}
                        <motion.div 
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            className="flex-1 flex flex-col items-start text-left order-1 xl:order-1"
                        >
                            {/* Enhanced Main Heading with Purple Gradient */}
                            <motion.h1 
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight mt-[-2.5rem]"
                                style={{
                                    textShadow: "0 0 30px rgba(139, 69, 19, 0.1)"
                                }}
                            >
                                <span className="inline-block">
                                    Israeli-Indian
                                </span>
                                <br />
                                <motion.span 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    className="inline-block"
                                >
                                    Hackathon 2025
                                </motion.span>
                            </motion.h1>

                            {/* Enhanced Description */}
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                                className="text-base sm:text-lg font-semibold text-slate-700 mb-2 leading-relaxed"
                            >
                                Unite with visionary innovators from Israel and India to revolutionize healthcare technology.
                            </motion.p>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                                className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed"
                            >
                                Build groundbreaking solutions that will transform patient care and medical innovation across both nations.
                            </motion.p>

                            {/* Enhanced CTA Buttons - Now with Devfolio */}
                            <motion.div 
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                                className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-start"
                            >
                                {/* Devfolio Apply Button */}
                                <motion.div
                                    whileHover={{ 
                                        y: -3,
                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                    }}
                                    whileTap={{ y: 0, scale: 0.98 }}
                                    className="relative overflow-hidden rounded-2xl flex items-center"
                                >
                                    <div 
                                        className="apply-button h-[44px] w-[312px]" 
                                        data-hackathon-slug="israeliindian-hackathon" 
                                        data-button-theme="light"
                                        // style="height: 44px; width: 312px"
                                    ></div>
                                    {/* <div
                                        className="apply-button"
                                        data-hackathon-slug="israeliindian-hackathon"
                                        data-button-theme="dark"
                                        style={{ height: 44, width: 312, display: "flex", alignItems: "center", justifyContent: "center" }}
                                    >
                                        <span className="text-blue-700 font-bold text-base">Apply with Devfolio</span>
                                    </div> */}
                                </motion.div>
                                
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-purple-400 hover:text-purple-700 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-2xl bg-white/90 backdrop-blur-sm shadow-xl relative overflow-hidden group"
                                    onClick={() => (window.location.href = "/guidelines")}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        View Guidelines
                                        <motion.span
                                            whileHover={{ rotate: 180 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <FileText className="h-5 w-5" />
                                        </motion.span>
                                    </span>
                                </Button>
                            </motion.div>

                            {/* Timer */}
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1.3 }}
                                whileHover={{ 
                                    scale: 1.02,
                                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                                }}
                                className="flex flex-wrap items-center gap-3 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200/60 rounded-xl px-4 py-3 mt-6 w-fit shadow-lg backdrop-blur-sm justify-start relative overflow-hidden"
                            >
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                >
                                    <Clock className="h-5 w-5 text-blue-500" />
                                </motion.div>
                                <span className="font-semibold text-blue-700 text-sm">
                                    Registration closes in:
                                </span>
                                <motion.div
                                    animate={{ 
                                        opacity: [0.7, 1, 0.7],
                                        scale: [1, 1.02, 1]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Countdown deadline="2025-07-24T23:59:59" />
                                </motion.div>
                                {/* Subtle animated border */}
                                <motion.div
                                    className="absolute inset-0 rounded-xl border border-blue-300/30"
                                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />
                            </motion.div>
                        </motion.div>

                        {/* Enhanced Right:Event Highlights */}
                        <motion.div 
                            initial={{ x: 60, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                            className="flex flex-col items-center w-full max-w-xs xl:ml-8 order-3 -mt-10"
                        >
                            <div className="w-full">
                                <motion.div 
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-xl border border-white/60 overflow-hidden"
                                >
                                    <div className="relative z-10">
                                        <div className="text-lg sm:text-xl font-bold text-slate-800 mb-3 text-center">
                                            Event Highlights
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg bg-gradient-to-r from-white/70 to-white/40 border border-white/30 backdrop-blur-sm">
                                                <Trophy className="h-4 w-4 text-yellow-500" />
                                                <div>
                                                    <div className="text-xs sm:text-sm font-semibold text-slate-900 leading-tight">₹1,00,000</div>
                                                    <div className="text-[11px] sm:text-xs text-slate-600">Total Prize Pool</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg bg-gradient-to-r from-white/70 to-white/40 border border-white/30 backdrop-blur-sm">
                                                <Users className="h-4 w-4 text-blue-500" />
                                                <div>
                                                    <div className="text-xs sm:text-sm font-semibold text-slate-900 leading-tight">500+</div>
                                                    <div className="text-[11px] sm:text-xs text-slate-600">Expected Participants</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg bg-gradient-to-r from-white/70 to-white/40 border border-white/30 backdrop-blur-sm">
                                                <Globe className="h-4 w-4 text-emerald-500" />
                                                <div>
                                                    <div className="text-xs sm:text-sm font-semibold text-slate-900 leading-tight">2</div>
                                                    <div className="text-[11px] sm:text-xs text-slate-600">Participating Nations</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg bg-gradient-to-r from-white/70 to-white/40 border border-white/30 backdrop-blur-sm">
                                                <BadgeCheck className="h-4 w-4 text-green-600" />
                                                <div>
                                                    <div className="text-xs sm:text-sm font-semibold text-slate-900 leading-tight">Free Event</div>
                                                    <div className="text-[11px] sm:text-xs text-slate-600">No Registration Cost</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg bg-gradient-to-r from-white/70 to-white/40 border border-white/30 backdrop-blur-sm">
                                                <Calendar className="h-4 w-4 text-blue-600" />
                                                <div>
                                                    <div className="text-xs sm:text-sm font-semibold text-slate-900 leading-tight">48 Hours</div>
                                                    <div className="text-[11px] sm:text-xs text-slate-600">Event Duration</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg bg-gradient-to-r from-white/70 to-white/40 border border-white/30 backdrop-blur-sm">
                                                <MapPin className="h-4 w-4 text-purple-600" />
                                                <div>
                                                    <div className="text-xs sm:text-sm font-semibold text-slate-900 leading-tight">Hybrid Event</div>
                                                    <div className="text-[11px] sm:text-xs text-slate-600">Both Offline & Online Mode</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Enhanced floating shapes */}
                <motion.div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        className="absolute top-20 right-10 sm:right-20 w-16 h-16 sm:w-20 sm:h-20 border border-blue-200/40 rounded-full"
                        animate={{ 
                            rotate: 360,
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                        }}
                    />
                    <motion.div
                        className="absolute bottom-20 left-10 sm:left-20 w-12 h-12 sm:w-16 sm:h-16 border border-purple-200/40 rounded-lg"
                        animate={{ 
                            rotate: -360,
                            scale: [1, 1.15, 1]
                        }}
                        transition={{ 
                            rotate: { duration: 35, repeat: Infinity, ease: "linear" },
                            scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }
                        }}
                    />
                    <motion.div
                        className="absolute top-1/3 left-1/4 w-8 h-8 border border-indigo-200/30 rounded-full"
                        animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ 
                            duration: 5, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            delay: 1 
                        }}
                    />
                </motion.div>

                {/* Enhanced Decorative Globe */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.15, scale: 1 }}
                    transition={{ duration: 3, delay: 1.5 }}
                >
                    <motion.div
                        animate={{ 
                            rotate: 360,
                            scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                            rotate: { duration: 120, repeat: Infinity, ease: "linear" },
                            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                        }}
                    >
                        <Globe
                            className="absolute right-5 sm:right-10 top-1/2 -translate-y-1/2 text-blue-100/20 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 z-0 pointer-events-none hidden md:block"
                            style={{ filter: "blur(1px)" }}
                        />
                    </motion.div>
                </motion.div>
            </section>
        </motion.div>
    )
}