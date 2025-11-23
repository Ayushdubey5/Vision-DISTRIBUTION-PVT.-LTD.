"use client"
import { useRef, useState, useEffect } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image";

const achievements = [
  "Ranked among India’s top distributors for mobility and electronics.",
  "Delivered over 23 lakh smart devices for government initiatives.",
  "Recognized by leading brands for exceptional retail execution.",
  "Expanding PAN India with consistent partner success.",
]

const timeline = [
  {
    year: "1994",
    color: "bg-blue-600",
    text: "Vision got incorporated",
    logos: [
      { src: "/canon.png", w: 100, h: 70, shape: "rounded-lg" },
      { src: "/godrej.png", w: 100, h: 70, shape: "rounded-full" },
      { src: "/videocon.png", w: 90, h: 50, shape: "rounded-xl" },
    ],
  },
  {
    year: "1999",
    color: "bg-sky-500",
    text: "",
    logos: [
      { src: "/alcatel.png", w: 100, h: 50, shape: "rounded-md" },
      { src: "/Nokia.png", w: 100, h: 60, shape: "rounded-lg" },
      { src: "/samsungcamera.png", w: 130, h: 70, shape: "rounded-2xl" },
    ],
  },
  {
    year: "2004–07",
    color: "bg-gray-500",
    text: "",
    logos: [
      { src: "/samsungmobile.png", w: 100, h: 70, shape: "rounded-md" },
      { src: "/imate.png", w: 90, h: 60, shape: "rounded-lg" },
      { src: "/aoc.png", w: 100, h: 50, shape: "rounded-full" },
      { src: "/olympus.png", w: 100, h: 60, shape: "rounded-xl" },
    ],
  },
  {
  year: "2008–14",
  color: "bg-green-600",
  text: "",
  logos: [
    { src: "/blackberry.png", w: 110, h: 60, shape: "rounded-md" },
    { src: "/acer.png", w: 100, h: 70, shape: "rounded-lg" },
    { src: "/lgmobile.png", w: 100, h: 60, shape: "rounded-xl" },
    { src: "/htc.png", w: 100, h: 55, shape: "rounded-md" },
    { src: "/sony.png", w: 100, h: 70, shape: "rounded-full" },
  ],
},
{
  year: "2015–18",
  color: "bg-yellow-500",
  text: "",
  logos: [
    { src: "/huawei.png", w: 100, h: 65, shape: "rounded-md" },
    { src: "/jio.png", w: 100, h: 60, shape: "rounded-full" },
    { src: "/xolo.png", w: 100, h: 55, shape: "rounded-lg" },
    { src: "/infocus.png", w: 105, h: 60, shape: "rounded-md" },
    { src: "/Applelogo.png", w: 80, h: 80, shape: "rounded-xl" },
  ],
},
{
  year: "2019–22",
  color: "bg-red-500",
  text: "",
  logos: [
    { src: "/samsungmobile.png", w: 100, h: 80, shape: "rounded-lg" },
    { src: "/Applelogo.png", w: 80, h: 80, shape: "rounded-md" },
    { src: "/Oppo.png", w: 115, h: 60, shape: "rounded-xl" },
    { src: "/Boat Logo - PNG Logo Vector Brand Downloads (SVG, EPS).jpg", w: 90, h: 80, shape: "rounded-full" },
    { src: "/swiss military.svg", w: 110, h: 60, shape: "rounded-md" },
    { src: "/gem.png", w: 100, h: 55, shape: "rounded-lg" },
  ],
},
{
  year: "2023 onwards",
  color: "bg-amber-800",
  text: "",
  logos: [
    { src: "/samsungmobile.png", w: 100, h: 80, shape: "rounded-lg" },
    { src: "/Applelogo.png", w: 80, h: 80, shape: "rounded-md" },
    { src: "/realme.png", w: 105, h: 60, shape: "rounded-xl" },
    { src: "/Boat Logo - PNG Logo Vector Brand Downloads (SVG, EPS).jpg", w: 90, h: 80, shape: "rounded-full" },
    { src: "/swiss military.svg", w: 110, h: 60, shape: "rounded-md" },
    { src: "/Oppo.png", w: 115, h: 60, shape: "rounded-lg" },
    { src: "/gem.png", w: 100, h: 55, shape: "rounded-xl" },
  ],
},
]


export default function VisionDistribution() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const form = useRef();
  const achievements = [
    "We always think long term and our journey with each brand has been an average of 5 years.",
    "We are among the top 3 Apple distributors across India.",
    "Successfully completed and delivered 3 Lakhs tablet and 4.5 Lakhs mobile phones in Uttar Pradesh at 54 different locations. For which UP CM himself praised our organization for the timely execution.",
    "Set up pan India distribution for Honor mobiles.",
    "Successfully completed and delivered 6.19 Lakhs Tablets in Haryana in 22 districts.",
    "Set up distribution for Infocus Mobile phones in North & East India.",
  ];

  const images = ["/aerialfrontimage.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  // Image auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Scroll progress & active section
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);

      const sections = [
        "home",
        "verticals",
        "retail",
        "b2g",
        "achievements",
        "presence",
        "engagements"
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // ✅ Fixed CountUp function (counts once, smooth)
  const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const fps = 60; // frames per second
    const totalFrames = Math.round((duration / 1000) * fps);
    const increment = end / totalFrames;

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      start += increment;
      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / fps);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        {/* Progress bar */}
        <div className="h-2 bg-gradient-to-r from-green-500 to-blue-600">
          <div className="h-full bg-green-600 transition-all duration-300" style={{ width: `${scrollProgress * 100}%` }} />
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
                { id: "home", label: "Home", type: "scroll" },
                { href: "/about", label: "About Us", type: "link" },
                { id: "verticals", label: "Verticals", type: "scroll" },
                { id: "retail", label: "Retail", type: "scroll" },
                { id: "achievements", label: "Achievements", type: "scroll" },
                { href: "/contact", label: "Contact Us", type: "link" },
              ].map((item, index) =>
                item.type === "link" ? (
                  <Link key={index} href={item.href} className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">{item.label}</Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-colors ${activeSection === item.id ? "text-green-600" : "text-gray-600 hover:text-green-600"}`}
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600 hover:text-green-600 focus:outline-none">
                {isOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg px-3 py-3 space-y-2 flex flex-col">
            {[
              { href: "/", label: "Home", type: "link" },
              { href: "/about", label: "About Us", type: "link" },
              { id: "verticals", label: "Verticals", type: "scroll" },
              { id: "retail", label: "Retail", type: "scroll" },
              { id: "govt-experience", label: "Govt Experience", type: "scroll" },
              { id: "achievements", label: "Achievements", type: "scroll" },
              { href: "/contact", label: "Contact Us", type: "link" },
            ].map((item, index) =>
              item.type === "link" ? (
                <Link key={index} href={item.href} className="block text-left text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">{item.label}</Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block text-left text-sm font-medium transition-colors ${activeSection === item.id ? "text-green-600" : "text-gray-600 hover:text-green-600"}`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center">
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
            className="text-5xl font-bold mb-4 p-5 text-white"
          >
            Powering India's Mobility & Technology Ecosystem
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto p-5 text-white"
          >
            From distribution to brand creation — Vision Distribution Pvt. Ltd. is shaping the future of consumer electronics and mobility across India.
          </motion.p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => scrollToSection("verticals")}
              className="border-2 border-green-600 text-green-600 px-8 py-3 p-5 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
            >
              Explore the businesses
            </button>
            <a onClick={() => window.open("/VDPL Profile.pdf", "_blank")}>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 p-5 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Download Company Profile
              </button></a></div>
        </div>
      </section>
      {/*logos of bussinesses*/}
      <section className="py-20 bg-gray-100 text-center">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {[['₹4500 Cr+', 'Group Turnover'], ['5000+', 'Retail Touchpoints'], ['27+', 'Retail Stores'], ['9', 'Offices & Warehouses'], ['25+ Years', 'Industry Expertise']].map(([num, label]) => (
            <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold text-green-600">{num}</h2>
              <p className="text-sm text-gray-700">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-18 bg-white text-center border-t border-gray-100">
  <h2 className="text-[1.35rem] text-gray-500 font-semibold mb-10">
    Our Business Ecosystem & Brand Partnerships
  </h2>

  <div className="flex flex-wrap justify-center items-center gap-4 px-4">
    {[
      { src: "/apple.svg", w: "w-35", h: "h-18", rounded: "rounded-lg" },
      { src: "/Oppo.png", w: "w-30", h: "h-16", rounded: "rounded-md" },
      { src: "/samsung.svg", w: "w-32", h: "h-16", rounded: "rounded-lg" },
      { src: "/swiss military.svg", w: "w-28", h: "h-14", rounded: "rounded-full" },
      { src: "/buzz.svg", w: "w-32", h: "h-19", rounded: "rounded-lg" },
      { src: "/conest.svg", w: "w-29", h: "h-14", rounded: "rounded-lg" },
      { src: "/delhi 6.svg", w: "w-22", h: "h-18", rounded: "rounded-full" },
      { src: "/vision q com.svg", w: "w-25", h: "h-13", rounded: "rounded-lg" },
    ].map((logo, index) => (
      <motion.div
        key={index}
        className={`bg-white  ${logo.rounded} p-2 `}
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={logo.src}
          alt={`Partner ${index + 1}`}
          className={`${logo.w} ${logo.h} object-contain mx-auto`}
        />
      </motion.div>
    ))}
  </div>
</section>
      {/* ABOUT US PAGE */}<section id="about" className=" padding top-25 py-20 bg-gradient-to-r from-gray-10 via-white to-gray-200 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
          >
            A Trusted Name in Distribution Since 1994
          </motion.h2>

          <p className="font-inter text-gray-700 max-w-3xl mx-auto mb-8">
            Headquartered in New Delhi, Vision Distribution Pvt. Ltd. (VDPL) is a
            specialized distribution house with a deep legacy in telecom, mobility,
            and consumer electronics. From being the first to import smartphones in
            India to becoming a trusted partner for global brands, VDPL has built its
            success on integrity, innovation, and long-term partnerships.
          </p>
          <a href="/about/">
            <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors">
              Know More
            </button></a>
        </div>
      </section>


      {/* BUSINESS VERTICALS PAGE */}
      <section id="verticals" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 mb-16 text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Our Businesses — Diverse, Dynamic, and Future-Ready
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            From retail to manufacturing, our ecosystem is built on innovation, trust, and next-generation growth.
          </p>
          <div className="w-20 h-1 bg-green-600 mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            ['Distribution Business', '/Distribution logos.png', 'Authorized partner for iPads, iPhones, and accessories. Among the top 3 Apple distributors in India.'],
            ['B2G / B2B Projects', '/B2G logos.png', 'Executed government orders worth ₹2900+ Cr — delivering over 23 lakh smart devices across India.'],
            ['Retail (Mobiliti World)', '/Retail Chain.png', 'A fast-growing mobility retail chain with 27 stores in Delhi NCR — expanding to 100+ soon.'],
            ['Brand Licensing (Swiss Military)', '/Brand Licensing logos.png', 'Licensee for wearables & hearables in India — bringing Swiss precision to Indian consumers.'],
            ['Manufacturing Unit', '/manufacturinglogos.png', 'Reverse-integrated setup with 70,000+ units/month production capacity.'],
            ['E-Commerce & Quick Commerce', '/Quick commerce logos.png', 'Strategic seller for Flipkart & Zepto — delivering technology faster to your doorstep.'],
            ['Integrated Electronics Unit', '/Vision Manufacturing.png', ' An end-to-end electronics powerhouse — designing, assembling, and delivering at scale from a 3,50,000 sq. ft. smart facility.'],
            ['Sports & Entertainment', '/Sport logos.png', 'Owners of Purani Delhi-6 team in DPL — engaging fans through sport and community initiatives.'],
            ['Services (Co-Living Space)', '/Services logos.png', 'A modern co-living space with 500 beds in Delhi-NCR, redefining student accommodation with comfort and design.'],
          ].map(([title, img, desc]) => (
            <motion.div
              key={title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Card className="overflow-hidden border border-gray-100 hover:border-green-500 transition-colors duration-300 shadow-sm hover:shadow-lg bg-gray-50">
                <img
                  src={img}
                  alt={title}
                  className="h-75 w-full object-contain bg-white p-6"
                />
                <CardContent className="p-6 text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>





      <div className="bg-white text-gray-800">
        {/* RETAIL CHAIN */}
        <section id="retail" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* Right-aligned text */}
              <motion.div
                className="text-left"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="text-left mb-10"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl font-bold mb-2 text-gray-900">RETAIL CHAIN</h2>
                  <p className="text-xl text-green-600 font-medium">Mobiliti World</p>
                  <div className="w-24 h-1 bg-green-600 ml-0 mt-4"></div>
                </motion.div>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  <span className="font-semibold text-green-700">Mobiliti World</span> is redefining the smartphone retail
                  landscape with a premium presence across Delhi NCR.
                  Our retail chain focuses on delivering a modern and immersive
                  customer experience through advanced in-store designs and
                  strong collaborations with top global brands.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Currently operating over <span className="font-bold text-blue-600">100+ premium stores</span>,
                  we continue to expand with a clear vision of adding
                  <span className="font-bold text-green-600"> 100+ new locations</span> in the coming year—strategically
                  positioned in high-traffic city centers and leading malls.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our product range includes the latest smartphones, tech
                  accessories, and lifestyle essentials—seamlessly combining
                  technology, innovation, and customer delight.
                </p>

                <div className="flex justify-end gap-6 mt-8 opacity-80">
                  {[
                    "/samsungmobile.png",
                    "/256px-OPPO_LOGO_2019.svg.png",
                    "/512px-Vivo_logo_2019.svg.png",
                    "/realme.png",
                    "/Applelogo.png",
                    "/mi.png",
                  ].map((logo, i) => (
                    <img key={i} src={logo} className="h-7" alt="brand" />
                  ))}
                </div>
              </motion.div>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <img
                  src="/mobilitiworld.jpg"
                  alt="Mobiliti World Store"
                  className="rounded-xl shadow-lg mx-auto mb-6"
                  width={480}
                />

              </motion.div>

            </div>
          </div>
        </section>


        {/* BRAND LICENSING */}
        <section className="py-24 bg-gradient-to-r from-green-100 via-white to-blue-200">
          <div className="container mx-auto px-6">
            {/* Heading */}
            <motion.div
              className="text-right mb-14"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-3 text-gray-900">Brand Licensing</h2>
              <p className="text-xl  text-green-600 font-medium">
                Swiss Military
              </p>
             
              <div className="w-35 h-1 bg-green-600 mt-4 ml-auto"></div>

            </motion.div>

            {/* Main Content */}
            <div className="grid md:grid-cols-2 gap-14 items-center">

              {/* Left Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <img
                  src="/Swiss Military Logo.png"
                  alt="Swiss Military Logo"
                  className="mx-auto w-72 mb-6 rounded-xl "
                />
                
                
              </motion.div>

              {/* Right-aligned Text */}
              <motion.div
                className="text-right"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-xl font-bold text-red-600 mb-4">Swiss precision. Indian presence</h3>
                
                <p className="font-roboto text-gray-700 leading-relaxed text-lg mb-6">
                  Mobiliti World is the exclusive Indian licensee for
                  <span className="font-semibold text-red-600"> Swiss Military</span> wearables
                  and hearables — bringing the brand’s legacy of durability, precision,
                  and innovation to Indian consumers.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  With a robust distribution network, Swiss Military products are
                  available in <span className="text-green-600 font-bold"><CountUp end={5000} duration={500} />+ </span>
                   outlets nationwide — trusted by top retail chains and major e-commerce
                  platforms across India.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our partnership reflects a shared vision: to merge global quality
                  with local accessibility, delivering premium technology for the
                  modern Indian lifestyle.
                </p>
              </motion.div>
            </div>
          </div>
        </section>



        {/* MANUFACTURING */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">

            {/* Heading */}
            <motion.div
              className="text-left "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-bold mb-2 text-gray-900">Manufacturing</h2>
              <p className="text-xl text-green-600 font-medium">
                Buzz Electronics Pvt. Ltd.
              </p>
              <div className="w-20 h-1 bg-green-600 mt-4"></div>
              
            </motion.div>
             
            {/* Main Content */}
            <div className="grid md:grid-cols-2 gap-13 items-center">

              {/* Left-aligned Text */}
              <motion.div
                className="text-left"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Our state-of-the-art manufacturing facility drives production for
                  India’s leading technology brands — ensuring unmatched quality,
                  consistency, and scalability. Every unit embodies our commitment
                  to precision and innovation.
                </p>

                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  With a monthly capacity exceeding
                  <span className="font-bold text-orange-600"> <CountUp end={70000} duration={500} />+ units</span>,
                  our facility supports large-scale production while maintaining
                  flexibility for custom brand requirements.
                </p>

                <p className="text-gray-700 leading-relaxed text-lg">
                  Guided by a philosophy of
                  <span className="font-semibold text-blue-600"> reverse-integrated manufacturing</span>,
                  we empower brands with faster go-to-market timelines and
                  technology-driven excellence.
                </p>
              </motion.div>

              {/* Image + Partner Logos */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <img
                  src="/buzz.svg"
                  alt="Buzz Electronics"
                  className="mx-auto w-250 h-120 mb-6 rounded-lg "
                />


              </motion.div>
            </div>
          </div>
        </section>

        {/* B2G / B2B */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-10">B2G / B2B BUSINESS</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { label: "Orders Executed", value: "₹2900+ Cr" },
                { label: "Devices Delivered", value: "12 lakh+" },
                { label: "Top Partner", value: "#1 Samsung India (2023)" },
              ].map((stat, i) => (
                <motion.div key={i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg">
                  <h3 className="text-2xl font-bold text-green-600 mb-2">{stat.value}</h3>
                  <p className="text-gray-700">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="py-24 bg-gradient-to-b from-emerald-50 via-white to-sky-100">
          <div className="container mx-auto px-6">
            {/* Header */}
            <motion.div
              className="text-left mb-14"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Our Journey So Far
              </h2>
              <p className="text-lg text-gray-600">
                Milestones that define our growth, innovation, and commitment to excellence.
              </p>
              <div className="w-20 h-1 bg-green-600 mt-4"></div>
            </motion.div>

            {/* Two-column layout */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left side — text milestones */}
              <div className="space-y-10">
                {[
                  {
                    title: "100+ Premium Retail Stores",
                    color: "border-green-500",
                    desc: "A growing network of modern retail spaces redefining tech shopping experiences across Delhi NCR.",
                  },
                  {
                    title: "5000+ Retail Outlets Nationwide",
                    color: "border-blue-500",
                    desc: "Trusted by leading chains and large-format stores, delivering consistent reach and brand presence.",
                  },
                  {
                    title: "OEM Partner to Global Brands",
                    color: "border-orange-500",
                    desc: "Proud manufacturing and retail partner for top international brands like Swiss Military, Boat, and Intex.",
                  },
                  {
                    title: "Recognized for Excellence",
                    color: "border-purple-500",
                    desc: "Awarded for innovation, growth, and sustainable retail leadership in India’s tech landscape.",
                  },
                  {
                    title: "Long-Term Brand Partnerships",
                    color: "border-emerald-500",
                    desc: "We always think long term — our journey with each brand averages over 5 years, built on mutual trust and consistent performance.",
                  },
                  {
                    title: "Top 3 Apple Distributors in India",
                    color: "border-red-500",
                    desc: "Proud to be among the top three Apple distributors across India, driving excellence in retail and distribution.",
                  },
                  {
                    title: "Government Project Success in Uttar Pradesh",
                    color: "border-cyan-500",
                    desc: "Successfully completed and delivered 3 lakh tablets and 4.5 lakh mobile phones across 54 locations in Uttar Pradesh — personally appreciated by the Chief Minister for timely execution.",
                  },
                  {
                    title: "Pan-India Distribution for Honor Mobiles",
                    color: "border-yellow-500",
                    desc: "Established a robust pan-India distribution network for Honor Mobiles, ensuring reliable nationwide reach.",
                  },
                  {
                    title: "Haryana Education Project",
                    color: "border-indigo-500",
                    desc: "Successfully completed and delivered 6.19 lakh tablets across 22 districts in Haryana under government education initiatives.",
                  },
                  {
                    title: "North & East India Distribution for Infocus",
                    color: "border-pink-500",
                    desc: "Set up strong regional distribution for Infocus Mobile Phones across North and East India, expanding accessibility and market presence.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`border-l-4 ${item.color} pl-6`}
                  >
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 max-w-2xl">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Right side — vertical timeline */}
              <div className="relative border-l-4 border-gray-300 ml-13 pt-2">
  {timeline.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-12 ml-6 relative"
    >
      {/* Dot */}
      <span
        className={`absolute -left-10 w-6 h-6 rounded-full border-4 border-white ${item.color}`}
      ></span>

      {/* Year */}
      <h3 className="text-2xl font-semibold text-gray-900">{item.year}</h3>

      {/* Text */}
      {item.text && (
        <p className="text-gray-600 mt-1 text-sm max-w-md">{item.text}</p>
      )}

      {/* Logos */}
      <div className="mt-4 flex flex-wrap gap-4">
        {item.logos.map((logo, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`flex items-center justify-center border border-gray-200 shadow-sm bg-white hover:shadow-md transition-all duration-300 ${logo.shape}`}
            style={{
              width: logo.w,
              height: logo.h,
            }}
          >
            <Image
              src={logo.src}
              alt="brand logo"
              width={logo.w - 20}
              height={logo.h - 20}
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  ))}
</div>
            </div>
          </div>
        </section>
      </div>
       <section className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden">
  {/* Background Earth Image */}
  <Image
    src="/map.jpg"
    alt="Global Earth Background"
    fill
    priority
    className="object-cover brightness-75 scale-y-80"
  />

  {/* Overlay Content */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
    {/* Centered Info Card */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-black/40 backdrop-blur-md text-white rounded-2xl p-8 md:p-10 shadow-lg border border-white/10 max-w-lg w-full"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-400">
        Our India Presence
      </h2>

      <div className="space-y-4 text-left">
        <div className="flex justify-between items-center border-b border-white/20 pb-2">
          <span className="text-lg font-medium text-green-300">
            Office & Warehouses
          </span>
          <span className="text-2xl font-semibold text-blue-400">9</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-lg font-medium text-green-300">
            Man Power
          </span>
          <span className="text-2xl font-semibold text-blue-400">300+</span>
        </div>
      </div>

      <div className="mt-6 space-y-2 text-sm text-left">
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 bg-green-400 rounded-sm"></span>
          <span>Head Office</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 bg-blue-400 rounded-full"></span>
          <span>Branch Locations</span>
        </div>
      </div>
    </motion.div>
  </div>
</section>




      {/* WHY PARTNER WITH US */}
      <section className="py-20 text-center bg-white">
        <h2 className="text-3xl font-bold mb-8">What Sets Us Apart</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-2">🤝 Relationship Comes First</h3>
            <p className="text-gray-600">Strong, long-term ties with channel partners nationwide.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">💼 Integrity & Reliability</h3>
            <p className="text-gray-600">25+ years of dispute-free operations and partner trust.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🚀 Growth with Purpose</h3>
            <p className="text-gray-600">A win-win approach with a team that knows where to play and how to win.</p>
          </div>
        </div>
      </section>


      {/* Footer */}
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
      </footer>
    </div>
  )
}
