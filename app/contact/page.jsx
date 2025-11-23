"use client"

import { useRef, useState, useEffect } from "react"
import { MapPin, Phone, Mail, Globe } from "lucide-react"
import emailjs from "@emailjs/browser"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function ContactPage() {
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("home")
  const [isOpen, setIsOpen] = useState(false)

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }
  // add near top of component
const images = ["/phone.png"]
const [currentImage, setCurrentImage] = useState(0)


// image auto-rotation
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }, 4000) // change image every 4 seconds
  return () => clearInterval(interval)
}, [])

  // ✅ Send Email Function
  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        "", // Your EmailJS Service ID
        "", // Your EmailJS Template ID
        form.current,
        "" // Your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Your message has been sent successfully!")
          form.current.reset()
          setLoading(false)
        },
        (error) => {
          alert("Something went wrong. Please contact them directly through email.")
          setLoading(false)
        }
      )
  }

  // ✅ Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      setScrollProgress(scrollTop / docHeight)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ✅ Scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setActiveSection(id)
    }
  }

  return (
    <section
      id="contact"
      className="relative py-0 bg-gradient-to-br from-green-600 to-blue-600 text-white"
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="h-2 bg-gradient-to-r from-green-500 to-blue-600">
          <div
            className="h-full bg-green-600 transition-all duration-300"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/">
              <div className="flex items-center space-x-2">
                <img src="/visionlogonodistribution.svg" alt="Vision Distribution Logo" className="h-8 w-auto" />
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact Us" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.href
                      ? "text-green-600"
                      : "text-gray-600 hover:text-green-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-600 hover:text-green-600 focus:outline-none"
              >
                {isOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg px-4 py-3 space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact Us" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block w-full text-left text-sm font-medium text-gray-600 hover:text-green-600"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Contact Section */}
      <section className="relative text-white py-40 overflow-hidden transition-all duration-1000">
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
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-5xl font-bold mb-4"
                >
                  Contact Us Vision
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="text-xl text-gray-300 max-w-3xl mx-auto"
                >
                 Reach out to our team for personalized assistance and quick responses to all your queries.
                </motion.p>
              </div>
            </section>
      <div className="container mx-auto px-4 mt-28">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">CONTACT US</h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {[
              {
                icon: <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />,
                title: "Address",
                text: "H-47, Bali Nagar, New Delhi-110015 (INDIA)",
              },
              {
                icon: <Phone className="w-6 h-6 mt-1 flex-shrink-0" />,
                title: "Phone",
                text: "011-46380029",
              },
              {
                icon: <Mail className="w-6 h-6 mt-1 flex-shrink-0" />,
                title: "Email",
                text: "support@vdpl.in",
              },
              {
                icon: <Globe className="w-6 h-6 mt-1 flex-shrink-0" />,
                title: "Website",
                text: "www.visionworld.in",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-4 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                {item.icon}
                <div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-sm mb-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-green-300">
              Get In Touch
            </h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/30 placeholder-gray-300 text-white resize-none focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={loading}
                className={`w-full font-bold py-3 rounded-lg transition-all ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-90"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>{/* Footer */}
      {/* CONTACT */}
      <section id="contact" className="bg-gray-900 text-white py-15">
        <div className="max-w-5xl mx-auto text-center">
           <img
      src="/visionlogonodistribution.svg"
      alt="Vision Distribution Logo"
      className="mx-auto mb-2 h-2 md:h-10 object-contain"
    />
          <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
          <p className="mb-6">We’d love to hear from you. Reach out for partnerships, collaborations, or business inquiries.</p>
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
      </footer></section>
      
 
    
  )
}
