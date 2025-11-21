"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

// Smooth count-up component
const CountUp = ({ end, duration = 1000, suffix = "" }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true)
        let start = 0
        const increment = end / (duration / 30)
        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            setCount(end)
            clearInterval(timer)
          } else {
            setCount(Math.floor(start))
          }
        }, 16)
      }
    })
    const element = document.getElementById(`count-${end}`)
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [end, duration, isVisible])

  return (
    <span id={`count-${end}`} className="text-green-600 font-semibold">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function About() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const images = ["/aboutus.jpg"]
  const [currentImage, setCurrentImage] = useState(0)

  // Progress bar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      setScrollProgress(scrollTop / docHeight)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Hero image cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 font-sans">
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-md z-50"
      >
        <div className="h-1.5 bg-gradient-to-r from-green-500 to-blue-600">
          <motion.div
            className="h-full bg-green-600"
            style={{ width: `${scrollProgress * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/visionlogonodistribution.svg"
              alt="Vision Distribution Logo"
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {[
              { href: "/", label: "Home" },
              { href: "/pages/about", label: "About Us" },
              { href: "/pages/contact", label: "Contact Us" },
            ].map((item) => (
              <motion.div key={item.href} whileHover={{ scale: 1.1 }}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-green-600"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-white shadow-lg px-4 py-3 space-y-3"
            >
              {[
                { href: "/", label: "Home" },
                { href: "/pages/about", label: "About Us" },
                { href: "/pages/contact", label: "Contact Us" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-green-600 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* HERO SECTION */}
      <section className="relative text-white py-48 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${images[currentImage]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <p className="text-lg text-gray-200">
            Redefining how technology reaches people — powering India’s connectivity since 1994.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              About Vision Distribution Pvt. Ltd.
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left — Narrative */}
            <motion.div
              className="space-y-6 text-lg leading-relaxed text-gray-700"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              <motion.p>
                Born in <span className="font-semibold text-green-700">1994</span> and headquartered in{" "}
                <span className="font-semibold text-green-700">New Delhi</span>, Vision began its journey with a single,
                powerful idea — to redefine how technology reaches people.
              </motion.p>
              <motion.p>
                We were among the <span className="font-semibold text-green-700">first to import smartphones into India</span>,
                pioneering a new era of connectivity and setting the benchmark for how innovation enters the Indian market.
              </motion.p>
              <motion.p>
                Today, Vision stands tall with an emphatic{" "}
                <span className="font-semibold text-blue-600">Pan-India presence</span>, a robust partner ecosystem, and
                three decades of telecom expertise that define <span className="font-semibold text-green-700">trust, scale, and precision</span>.
              </motion.p>
              <motion.p>
                With a turnover of{" "}
                <span className="font-semibold text-green-700">₹4500 crore (FY 24–25)</span>, we’re not just distributing
                technology — we’re empowering possibilities.
              </motion.p>
              <motion.p className="italic text-xl font-semibold text-gray-800 pt-2">
                At Vision, we don’t just move technology.<br />We move the nation forward.
              </motion.p>
            </motion.div>

            {/* Right — Animated Card */}
            <motion.div
              className="bg-gradient-to-br from-green-50 to-blue-50 p-10 rounded-2xl shadow-xl text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-7xl font-bold text-green-600"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <CountUp end={31} suffix="+" />
              </motion.div>
              <h3 className="text-xl font-semibold mt-4">Years of Excellence</h3>
              <p className="text-gray-600 mt-2">
                Leading India’s telecom distribution industry since 1994
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MANAGEMENT SECTION */}
      <section id="management" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Management</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                img: "/RAJIVBABBAR.png",
                name: "RAJIV BABBAR",
                position: "MANAGING DIRECTOR",
                description:
                  "Law graduate with 27+ years in consumer electronics & telecom. Introduced India’s first PDA smartphone and co-founded ICEA.",
              },
              {
                img: "/GIRISHNEGI.png",
                name: "GIRISH NEGI",
                position: "CEO",
                description:
                  "Telecom leader with 25+ years of experience. Expanded Samsung, BlackBerry, Sony, HTC, and Huawei across India.",
              },
              {
                img: "/PRAGUNBABBAR.png",
                name: "PRAGUN BABBAR",
                position: "DIRECTOR",
                description:
                  "Law graduate and tech enthusiast focused on business innovation and technology-driven solutions.",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="h-52 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <motion.img
                    src={member.img}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                  <p className="text-green-600 font-medium text-sm mb-2">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-gray-900 text-white py-20">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <img
            src="/visionlogonodistribution.svg"
            alt="Vision Distribution Logo"
            className="mx-auto mb-2 h-10 object-contain"
          />
          <h2 className="text-3xl font-bold">Connect With Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We’d love to hear from you. Reach out for partnerships, collaborations, or business inquiries.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-10 text-gray-300">
            <div className="flex items-center gap-2"><MapPin size={18} /> H-47, Bali Nagar, New Delhi</div>
            <div className="flex items-center gap-2"><Phone size={18} /> +91-11-46380029</div>
            <div className="flex items-center gap-2"><Mail size={18} /> support@vdpl.in</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 text-center py-6 text-sm">
        © 2025 Vision Distribution Pvt. Ltd. All Rights Reserved.
      </footer>
    </div>
  )
}
