"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown, Users, Lightbulb, Globe2, BookOpen, Star, Scale, Building2, Linkedin } from "lucide-react"

const judges = [
  {
    name: "Mr. Anil Vijarnia",
    title: "Senior Principal Engineer",
    company: "Wasabi Technologies",
    image: "/Anil Vijarnia.avif",
    linkedIn:"https://www.linkedin.com/in/anil-vijarnia/"
  },
  {
    name: "Mr. Arun Kumar",
    title: "Sr. Sofware Solution Architect",
    company: "BiziByte",
    image: "/Arun.jpg", // Add the correct image path if available
    linkedIn: "https://www.linkedin.com/in/arunqumar/"
  },
  /*
  {
    name: "Mr. Arun Kumar Elengovan",
    title: "Director, Engineering Security",
    company: "OKTA Inc",
    image: "/Arun Kumar Elengovan.png", // Add the correct image path if available
    linkedIn: "https://www.linkedin.com/in/arun-kumar-e-b7019a33/"
  },
  */
  /*
  {
    name: "Mr. Bhanu Prakash Reddy Rella",
    title: "Sr. Software Engineer",
    company: "Walmart, USA.",
    image: "/Bhanu Prakash Reddy Rella.png", // Add the correct image path if available
    linkedIn: "http://linkedin.com/in/rbhanur/"
  },
  */
  {
    name: "Mr. Chaitanya Gunupudi",
    title: "Independent Researcher and IT Platform Senior Cloud Engineer",
    company: "University of Maryland Research Center",
    image: "/Chaitanya Gunupudi.png", // Add the correct image path if available
    linkedIn: "https://www.linkedin.com/in/chaitanyagunupudi/"
  },
  {
    name: "Mr. Chandra Mouli Yalamanchili",
    title: "Independent Researcher",
    company: "USA",
    image: "/Chandra Mouli Yalamanchili.png", // Add the correct image path if available
    linkedIn: "https://www.linkedin.com/in/chandu85"
  },
  {
    name: "Mr. Chetan Sharma",
    title: "SAP Architect",
    company: "Tractor Supply Company",
    image: "/Mr. Chetan Sharma.avif",
    linkedIn: "https://www.linkedin.com/in/chetansharma4u/"
  },
  {
    name: "Mr. Damodhara Reddy Palavali",
    title: "Software Engineer",
    company: "Sbase Technologies, Inc",
    image: "/Damodhara Reddy Palavali.png",
    linkedIn: "https://www.linkedin.com/in/damodharap/"
  },
  {
    name: "Mr. Dharmateja Priyadarshi Uddandarao",
    title: "Sr. Data Scientist",
    company: "Amazon",
    image: "/Dharmateja Priyadarshi Uddandarao.jpg",
    linkedIn: "https://www.linkedin.com/in/dtp-uddandarao/"
  },
  {
    name: "Mr. Jaya Krishna Modadugu",
    title: "Sr. Software Engineer",
    company: "Prosper Marketplace Inc",
    image: "/Mr. Jaya Krishna Modadugu.avif",
    linkedIn: "https://www.linkedin.com/in/jaya-krishna-modadugu-77820813a/"
  },
  /*{
    name: "Mr. Justin Rajakumar Thason",
    title: "Director of DevOps Information Technology",
    company: "Virginia, USA.",
    image: "/Justin Rajakumar.png",
    linkedIn: "https://www.linkedin.com/in/justin-rajakumar-thason-a3349425/"
  },*/
  {
    name: "Mr. Karan Alang",
    title: "Principal Software Engineer",
    company: "Versa Networks Inc",
    image: "/Karan Alang.png",
    linkedIn: "https://www.linkedin.com/in/karan-alang-4173437/"
  },
  {
    name: "Mr. Kapil Kumar Goyal",
    title: "Sr. Product Manager",
    company: "The Zillow Group",
    image: "/Kapil Kumar Goyal.png",
    linkedIn: "https://www.linkedin.com/in/kapil-goyal/"
  },  
  {
    name: "Mr. Karthik Sirigiri",
    title: "Software Developer",
    company: "USA",
    image: "/Karthik Sirigiri.png",
    linkedIn: "http://www.linkedin.com/in/karthik2502/"
  },
  {
    name: "Dr. Manas Ranjan Panda",
    title: "Partner",
    company: "Wipro Limited",
    image: "/Manas Panda.jpg",
    linkedIn: "http://linkedin.com/in/manaspanda01/"
  },
  {
    name: "Mr. Manoj Pal",
    title: "Senior Data Engineer",
    company: "Artnet Worldwide Corporation",
    image: "/Manoj Pal.png",
    linkedIn: "https://www.linkedin.com/in/manoj7pal/"
  },
  {
    name: "Mr. Naga Bharadwaj Bhavikatta",
    title: "Sr Tech Manager",
    company: "Oracle",
    image: "/Naga Bharadwaj Bhavikatta.avif",
    linkedIn: "https://www.linkedin.com/in/naga-bharadwaj-bhavikatta-101347203/"
  },
  {
    name: "Mr. Nagamalleswararao Bellamkonda",
    title: "Sr. Database Adminstrator",
    company: "IEEE Senior Member",
    image: "/Nagamalleswararao Bellamkonda.jpeg",
    linkedIn: "http://linkedin.com/in/naga-bellamkonda-7209a11a0/"
  },
  {
    name: "Mr. Narendra Kandregula",
    title: "Assitant Vice President",
    company: "Deutsche Bank",
    image: "/Narendra Kandregula.png",
    linkedIn: "https://www.linkedin.com/in/ganpatigoel/"
  },
  {
    name: "Mr. Navdeep Singh",
    title: "Principal Product Manager",
    company: "Walmart",
    image: "/Navdeep Singh.avif",
    linkedIn:"https://www.linkedin.com/in/inavdeepsingh/"
  },
  {
    name: "Mr. Naveen Edapurath Vijayan",
    title: "Head of Engineering",
    company: "AWS Central Economics",
    image: "/Naveen Edapurath Vijayan.jpeg",
    linkedIn:"https://www.linkedin.com/in/naveenvijayan/"
  },
  {
    name: "Mr. Nandagopal Seshagiri",
    title: "Sr. Software Architect",
    company: "Okta Inc",
    image: "/Nandagopal Seshagiri.jpeg",
    linkedIn:"https://www.linkedin.com/in/nandagopal-seshagiri-1479ab5/"
  },
  {
    name: "Mr. Nayan Goel",
    title: "Principal Application Security Engineer",
    company: "Upgrade Inc",
    image: "/Nayan Goel.jpeg",
    linkedIn:"https://www.linkedin.com/in/nayan-goel-426922bb/"
  },
  {
    name: "Mr. Praveen Kumar Thota",
    title: "Sr. Technical Operations Manager",
    company: "USA",
    image: "/Praveen.png", // Add the correct image path if available
    linkedIn: "https://www.linkedin.com/in/praveen-t-2b0a23222/"
  },
  /*
  {
    name: "Mrs. Priyanka Bakthavalsalan",
    title: "Engineering Manager",
    company: "Juniper Square, USA.",
    image: "/Priyanka Bakthavalsalan.jpeg", // Add the correct image path if available
    linkedIn: "https://www.linkedin.com/in/priyanka-bakthavalsalan-601079127/"
  },
  */
  {
    name: "Mr. Rakesh Keshava",
    title: "Software Architect, Security",
    company: "USA",
    image: "/Rakesh Keshava.png",
    linkedIn: "https://www.linkedin.com/in/rakeshkeshava/"
  },
  {
    name: "Mr. Ravi Patneedi",
    title: "Lead SAP",
    company: "Tractor Supply Company",
    image: "/Ravi Patneedi.avif",
    linkedIn: "https://www.linkedin.com/in/ravi-patneedi-169233a/"
  },
  {
    name: "Mr. Ritesh Tandon",
    title: "Independent Researcher and Lead Data Scientist",
    company: "Data and AI Solution",
    image: "/Ritesh Tandon.png",
    linkedIn: "https://www.linkedin.com/in/ritesh-tandon-3427481/"
  },
  {
    name: "Mr. Sai Kiran Nandipati",
    title: "Senior Application System Engineer",
    company: "Ernst & Young",
    image: "/sai kiran.jpg",
    linkedIn: "https://www.linkedin.com/in/sai-kiran-nandipati-92a302133 ",
  },
  {
    name: "Mr. Sai Raghu Ram Gummadidala",
    title: "Independent Researcher",
    company: "Tractor Supply Company",
    image: "/Sai raghu.jpg",
    linkedIn:"https://www.linkedin.com/in/raghu-ram-gummadidala-b2a171128/"
  },
  {
    name: "Ms. Sangeeta Singh",
    title: "Firmware Engineer III",
    company: "Variosystems Inc",
    image: "/Sangeeta Singh.avif",
    linkedIn: "https://www.linkedin.com/in/sangeetasinghembeddedsystems/"
  },
  {
    name: "Mr. Satish Bhambri",
    title: "Sr Machine Learning Engineer",
    company: "Walmart Labs",
    image: "/Satish Bhambri.avif",
    linkedIn: "https://www.linkedin.com/in/satish-bhambri-9164b997/"
  },
  {
    name: "Ms. Sonali Suri",
    title: "Software Development Engineer",
    company: "Amazon",
    image: "/sonali.jpg",
    linkedIn: "https://www.linkedin.com/in/sonali-suri-3bb440b6/"
  },
  {
    name: "Mr. Sreekar Theja Jami",
    title: "Sr. SysDev Engineer",
    company: "USA",
    image: "/Sreekar Theja Jami.png",
    linkedIn: "http://www.linkedin.com/in/sreekar-jami-554583173/"
  },
  {
    name: "Mr. Sunil Netra",
    title: "Principal Developer",
    company: "",
    image: "/Sunil Netra.avif",
    linkedIn: "https://www.linkedin.com/in/snetra/"
  },
]

const selectionCriteria = [
  {
    icon: Lightbulb,
    title: "Technical Knowledge",
    description: "Expertise in programming, design, AI, IoT, cybersecurity, blockchain, or other relevant fields.",
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
    description: "Previous experience judging hackathons, startup pitches, or research competitions is preferred.",
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
    description: "No personal or business relationships with participants to maintain fairness.",
  },
]

const eligibilityCriteria = [
  "Relevant expertise in software development, engineering, AI, cybersecurity, healthcare, or related domains.",
  "At least 3-5 years of industry, research, or academic experience related to the hackathon's focus.",
  "Experience in evaluating projects, mentoring startups, or working on innovative solutions is a plus.",
  "Must be unbiased, professional, and capable of evaluating projects based on merit.",
  "Strong analytical and communication skills to assess feasibility, innovation, and impact.",
  "Available for the entire judging process, including Q&A sessions and final evaluations.",
]

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
]

const Button = ({ onClick, variant, className, children }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
      variant === "outline"
        ? "text-blue-600 hover:bg-blue-50 hover:border-blue-700"
        : "bg-blue-600 text-white hover:bg-blue-700"
    } ${className}`}
  >
    {children}
  </button>
)

export default function Judges() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openSection, setOpenSection] = useState(null)

  const handleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section))
  }

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-0"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="inline-block p-2 bg-blue-100 rounded-full">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent m-0">
              Expert Judges
            </h2>
          </div>
          {/* <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Meet our distinguished panel of industry leaders and technical experts who will evaluate your innovations
            with their wealth of experience
          </p> */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => handleSection("eligibility")}
              variant="outline"
              className={`${openSection === "eligibility" ? "border-2 border-blue-700" : "border border-blue-600"} text-blue-600 hover:bg-blue-50 hover:shadow-lg transform hover:scale-105 inline-flex items-center`}
            >
              Eligibility Criteria
              <ChevronDown
                className={`ml-2 h-4 w-4 transition-transform duration-200 ${openSection === "eligibility" ? "rotate-180" : ""}`}
              />
            </Button>
            <Button
              onClick={() => handleSection("criteria")}
              variant="outline"
              className={`${openSection === "criteria" ? "border-2 border-blue-700" : "border border-blue-600"} text-blue-600 hover:bg-blue-50 hover:shadow-lg transform hover:scale-105 inline-flex items-center`}
            >
              Selection Criteria
              <ChevronDown
                className={`ml-2 h-4 w-4 transition-transform duration-200 ${openSection === "criteria" ? "rotate-180" : ""}`}
              />
            </Button>
            <Button
              onClick={() => handleSection("process")}
              variant="outline"
              className={`${openSection === "process" ? "border-2 border-blue-700" : "border border-blue-600"} text-blue-600 hover:bg-blue-50 hover:shadow-lg transform hover:scale-105 inline-flex items-center`}
            >
              Selection Process
              <ChevronDown
                className={`ml-2 h-4 w-4 transition-transform duration-200 ${openSection === "process" ? "rotate-180" : ""}`}
              />
            </Button>
          </div>
        </motion.div>

        {/* Eligibility Criteria */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: openSection === "eligibility" ? 1 : 0,
            height: openSection === "eligibility" ? "auto" : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden mb-8"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-2 bg-blue-100 rounded-full mr-3">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-blue-700">Eligibility Criteria for Judges</h3>
            </div>
            <ul className="space-y-4 text-left">
              {eligibilityCriteria.map((item, idx) => (
                <li key={`eligibility-${idx}`} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Selection Criteria */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: openSection === "criteria" ? 1 : 0,
            height: openSection === "criteria" ? "auto" : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden mb-8"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100">
            <div className="flex items-center justify-center mb-6">
              <div className="p-2 bg-blue-100 rounded-full mr-3">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-blue-700">Selection Criteria</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {selectionCriteria.map((criteria, index) => (
                <motion.div
                  key={`criteria-${criteria.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={openSection === "criteria" ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-blue-100"
                >
                  <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                    <criteria.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">{criteria.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{criteria.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Selection Process */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: openSection === "process" ? 1 : 0,
            height: openSection === "process" ? "auto" : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden mb-8"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-2 bg-blue-100 rounded-full mr-3">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-blue-700">Selection Process</h3>
            </div>
            <ol className="space-y-6 text-left">
              {selectionProcess.map((step, idx) => (
                <li key={`process-${step.step}`} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                    {idx + 1}
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 text-lg block mb-2">{step.step}</span>
                    <span className="text-gray-700 leading-relaxed">{step.detail}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>

        {/* Judges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-2">
          {judges.map((judge, index) => (
            <motion.div
              key={`judge-${judge.name}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.04 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-400"
            >
              {/* Image Section with group for hover */}
              <div className="relative overflow-hidden h-48 group">
                <img
                  src={judge.image || "/placeholder.svg"}
                  alt={judge.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {judge.linkedIn && (
                  <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
                    <motion.button
                      whileHover={{
                        scale: 1.18,
                        rotate: 6,
                        boxShadow: "0 0 0 6px rgba(37,99,235,0.15), 0 8px 32px 0 rgba(37,99,235,0.25)",
                        filter: "brightness(1.15)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(judge.linkedIn.trim(), "_blank")}
                      className="pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-600 to-blue-400 p-3 rounded-full shadow-2xl ring-2 ring-white/70 hover:ring-blue-400 focus:ring-4 focus:ring-blue-500"
                      tabIndex={0}
                      aria-label={`Open LinkedIn profile of ${judge.name}`}
                      type="button"
                      style={{ marginBottom: "1.5rem" }}
                    >
                      <Linkedin className="h-7 w-7 text-white transition-colors duration-200 drop-shadow-lg" />
                    </motion.button>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{judge.name}</h3>
                <p className="text-blue-600 font-semibold mb-2 text-sm">{judge.title}</p>
                {judge.company && (
                  <div className="flex items-start text-gray-600 text-sm">
                    <Building2 className="h-3 w-3 mt-1 mr-1 flex-shrink-0" />
                    <span className="leading-tight">{judge.company}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Judging Panel</h3>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">11</div>
                <div className="text-gray-600">Expert Judges</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
                <div className="text-gray-600">Top Tech Companies</div>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </div>
  )
}
