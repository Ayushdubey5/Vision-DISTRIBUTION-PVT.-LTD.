"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, Globe, MapPin, Users, Building, University, HandPlatter, Award, Target, ShoppingBag, Handshake, Shield, TrendingUp } from "lucide-react"

export default function VisionDistribution() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = totalScroll / windowHeight
      setScrollProgress(scroll)

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "management",
        "verticals",
        "retail",
        "brand-licensing",
        "b2g",
        "govt-experience",
        "manufacturing",
        "achievements",
        "presence",
        "engagements",
        "contact",
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const CountUp = ({ end, duration = 1000, suffix = "" }) => {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
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
        },
        { threshold: 0.1 },
      )

      const element = document.getElementById(`count-${end}`)
      if (element) observer.observe(element)

      return () => observer.disconnect()
    }, [end, duration, isVisible])

    return (
      <span id={`count-${end}`}>
        {count.toLocaleString()}
        {suffix}
      </span>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
  {/* Progress bar */}
  <div className="h-2 bg-gradient-to-r from-green-500 to-blue-600">
    <div
      className="h-full bg-green-600 transition-all duration-300"
      style={{ width: `${scrollProgress * 100}%` }}
    />
  </div>

  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="text-2xl font-bold">
          <span className="text-green-600">VIS</span>
          <span className="text-blue-600">ION</span>
        </div>
        <div className="text-sm text-gray-600">DISTRIBUTION PVT. LTD.</div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "management", label: "Management" },
          { id: "verticals", label: "Verticals" },
          { id: "retail", label: "Retail" },
          { id: "govt-experience", label: "Govt Experience" },
          { id: "achievements", label: "Achievements" },
          { id: "contact", label: "Contact" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`text-sm font-medium transition-colors ${
              activeSection === item.id
                ? "text-green-600"
                : "text-gray-600 hover:text-green-600"
            }`}
          >
            {item.label}
          </button>
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
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "management", label: "Management" },
        { id: "verticals", label: "Verticals" },
        { id: "retail", label: "Retail" },
        { id: "govt-experience", label: "Govt Experience" },
        { id: "achievements", label: "Achievements" },
        { id: "contact", label: "Contact" },
      ].map((item) => (
        <button
          key={item.id}
          onClick={() => {
            scrollToSection(item.id);
            setIsOpen(false); // close after clicking
          }}
          className={`block w-full text-left text-sm font-medium ${
            activeSection === item.id
              ? "text-green-600"
              : "text-gray-600 hover:text-green-600"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  )}
</nav>


      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <img width={500} height={500} src="/Vision logo.svg" alt="Vision Distribution Logo" className="w-122 h-52" />
              
                <p className="text-xl text-gray-600 text-pretty">
                  Specialized Distribution House with Pan-India footprint since 1994
                </p>
                <p className="text-l text-gray-600 text-pretty">H-47,Bali Nagar, New Delhi-110015 (INDIA)
                  011-46380029 | support@vdpl.in
                  www.visionworld.in</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-green-600">
                    <CountUp end={1994} duration={1000} />
                  </div>
                  <div className="text-sm text-gray-600">Established</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-blue-600">
                    ₹<CountUp end={4500} duration={1000} /> Cr
                  </div>
                  <div className="text-sm text-gray-600">Group Turnover FY 24-25</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("verticals")}
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Explore Verticals
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                height={500}
                width={600}
                src="/Hands.png"
                alt="Vision Distribution Team"
                className="rounded-lg shadow-2xl hover:transform-fill"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">ABOUT US</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                "Head Quartered in New Delhi",
                "Commenced Distribution operations in India in the year 1994",
                "A Specialized Distribution House having in depth experience in Telecom trade",
                "First distribution house to import smart phones in India",
                "Having emphatic footprint in Pan India",
                "Group Turnover for FY 24~25-4500 Cr and growing",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-green-600">
                  <CountUp end={31} duration={1000} />
                </div>
                <div className="text-xl text-gray-700">Years of Excellence</div>
                <div className="text-gray-600">Leading the telecom distribution industry since 1994</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management */}
      <section id="management" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">MANAGEMENT</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "/RAJIVBABBAR.png",
                name: "RAJIV BABBAR",
                position: "MANAGING DIRECTOR",
                description:
                  "A law graduate from Delhi University, a professional turned entrepreneur, with over 27 years of experience in consumer electronics, Digital Cameras & Telecom Sector. In 2004 he ventured into the mobile distribution business by launching first PDA smart phone (IMATE) in India. He is also a founder member of Indian Cellular and Electronic Association.",
              },
              {
                img: "/GIRISHNEGI.png",
                name: "GIRISH NEGI",
                position: "CEO",
                description:
                  "A dynamic strategic thinker, motivator, entrepreneur having more than 25 years of rich experience in telecommunication industry, imaging and consumer electronics. He has been instrumental in expanding SAMSUNG, BLACKBERRY, SONY, HTC in Delhi NCR and HUAWEI business PAN India.",
              },
              {
                img: "/PRAGUNBABBAR.png",
                name: "PRAGUN BABBAR",
                position: "DIRECTOR",
                description:
                  "A tech enthusiast having interest in latest gadgets especially focused on developing new businesses and implementing technology driven business solutions. A Law graduate and aspiring entrepreneur.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-64 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <div className="w-52 h-52 bg-gray-300 rounded-full flex items-center justify-center">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-4">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Verticals */}
      <section id="verticals" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">BUSINESS VERTICALS</h2>
            <img f8ff src="" />
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Distribution Business",
                icon: <Building className="w-12 h-12" />,
                description: "Authorised partner for iPads, iPhone, and accessories.  One of the first partner for Boat in GT, currently Authorised for a part of Delhi. Authorised partner for a part of Delhi. Authorised partner for a part of Delhi. Distribution partner for Delhi NCR",
                color: "blue",
                Logo1: "/Apple-Logo-Iconic-Tech-Brand-Symbol-PNG-Transparent-Representation-of-Innovation-and-Design.png",
                Logo2: "/Boat Logo - PNG Logo Vector Brand Downloads (SVG, EPS).jpg",
                Logo3: "/256px-OPPO_LOGO_2019.svg.png",
                Logo4: "/512px-Vivo_logo_2019.svg.png",
                Logo5: "/Swiss Military Logo.png",
              },
              {
                title: "B2G / B2B Business",
                icon: <Target className="w-12 h-12" />,
                description: "Executed orders worth 2900+ cr. in last three years. Executed biggest order for tablets pan India in this segment of 6.25 lacs tablets. Awarded biggest partner by SAMSUNG INDIA In the year 2023.",
                color: "green",
                Logo1: "/Samsung Mobile Logo Vector.svg .png",
                Logo3: "/bharat-electronics-logo.svg",
                Logo4: "/haelthmission.png",
                Logo5: "/Indian_Space_Research_Organisation_Logo.svg.webp",
                Logo6: "/tgche-logo.webp",
                logo7: "",
              },
              {
                title: "Retail Chain",
                icon: <Building className="w-12 h-12" />,
                description: "A mobility retail chain with dominemt presence in Delhi NCR. Currently having 24 stores and aiming to have 100+ stores in Delhi NCR in next 12 months",
                color: "purple",
                Logo1: "/mobilitiworld.jpg",
                Logo2: "/Samsung Mobile Logo Vector.svg .png",
                Logo3: "/256px-OPPO_LOGO_2019.svg.png",
                Logo4: "/512px-Vivo_logo_2019.svg.png",
                Logo5: "/mi.png",
              },
              {
                title: "Brand Licensing",
                icon: <Award className="w-12 h-12" />,
                description: "Licencee of the brand for the category of Mobile Accessories for India market. Currently placed in 5000+ retail outlets, associated with leading LFRs and key retail channel partners across India.",
                color: "red",
                Logo1: "/Swiss Military Logo.png",
                Logo2: "/389-3895095_vijay-sales-vijay-sales.png",
                Logo3: "/sathya.png",
                Logo4: "/oxygen.jpg",
              },
              {
                title: "Manufacturing",
                icon: <Building className="w-12 h-12" />,
                description: "Manufacturing unit built on the thought of reverse integration in the business. Having production capacity of more than 70000 units per month.",
                color: "orange",
                Logo1: "/buzz.png",
                Logo2: "/Swiss Military Logo.png",
                Logo3: "/bolt.jpg",
                Logo4: "/planx.png",
              },
              {
                title: "Sports & Entertainment",
                icon: <Target className="w-12 h-12" />,
                description: "Acuired PURANI DELHI6 Team in Delhi Premier T20 Cricket League. We have some big players like Rishabh Pant, Ishant Sharma, Lalit Yadav etc. in the team. Second runner-up in the first season of DPL.",
                color: "indigo",
                Logo1: "/delhi.png",
              },
              {
                title: "Sevices",
                icon: <HandPlatter className="w-12 h-12" />,
                description: "A Co-Living space with 500 beds in Delhi NCR. Built on the thought of revolutionize the student accommodation segment and providing the best possible amenities",
                color: "indigo",
                Logo1: "/conest.png",
              },
              {
                title: "Group of Institution",
                icon: <University className="w-12 h-12" />,
                description: "A 52 year old educational Institution in the name of MRV. The group has various schools, playschools, and skill centers. Currently nurturing 5000+ students.",
                color: "indigo",
                Logo1: "/school.png",
              },
              {
                title: "E-Commerce & Quick Commerce",
                icon: <ShoppingBag className="w-12 h-12 content-center items-center " />,
                description: "Strategic seller for Flipkart and Zepto, operating on Flipkart for over 2 years and Zepto for the past 8 months, delivering consistent growth, efficient operations, and reliable customer service.",
                color: "indigo",
                Logo1: "/Vision logo.svg",
              },
            ].map((vertical, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-lg p-6 hover:border-green-300 hover:shadow-lg transition-all cursor-pointer group"
              >
                {/* Icon */}
                <div
                  className={`flex justify-center items-center text-${vertical.color}-600 items-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  {vertical.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {vertical.title}
                </h3>

                {/* Logo1 above paragraph */}
                {vertical.Logo1 && (
                  <div className="mb-3 flex justify-center">
                    <img
                      src={vertical.Logo1}
                      alt="logo1"
                      className="w-33 h-33 gap-3 object-contain"
                    />
                  </div>
                )}

                {/* Paragraph */}
                <p className="text-gray-600 text-m gap-2 mb-4">{vertical.description}</p>

                {/* Rest of the logos */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {[
                    vertical.Logo2,
                    vertical.Logo3,
                    vertical.Logo4,
                    vertical.Logo5,
                    vertical.Logo6,
                    vertical.Logo7,
                  ]
                    .filter(Boolean)
                    .map((logo, i) => (
                      <img
                        key={i}
                        src={logo}
                        alt={`logo-${i}`}
                        className="w-22 h-22 gap-2 object-contain"
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>{/* Timeline Section */}
        <div className="py-16 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            OVER THE YEARS
          </h2>

          <div className="flex overflow-x-auto space-x-8 px-6 md:px-16 scrollbar-hide">
            {[
              {
                year: "1994",
                text: "Vision got incorporated",
                logos: ["/videocon.png", "/godrej.png", "/canon.png"],
                color: "bg-blue-600",
              },
              {
                year: "1999",
                logos: ["/alcatel.png", "/samsungcamera.png", "/nokia.png"],
                color: "bg-sky-400",
              },
              {
                year: "2004-07",
                logos: ["/samsungmobile.png", "/imate.png", "/aoc.png", "/olympus.png"],
                color: "bg-gray-400",
              },
              {
                year: "2008-14",
                logos: [
                  "/blackberry.png",
                  "/acer.png",
                  "/lgmobile.png",
                  "/samsungmobile.png",
                  "/htc.png",
                  "/sony.png",
                ],
                color: "bg-green-500",
              },
              {
                year: "2015-18",
                logos: ["/huawei.png", "/jio.png", "/infocus.png", "/xolo.png"],
                color: "bg-yellow-400",
              },
              {
                year: "2019-22",
                logos: [
                  "//samsungmobile.png",
                  "/gem.png",
                  "/Apple-Logo-Iconic-Tech-Brand-Symbol-PNG-Transparent-Representation-of-Innovation-and-Design.png",
                  "/Boat Logo - PNG Logo Vector Brand Downloads (SVG, EPS).jpg",
                  "/256px-OPPO_LOGO_2019.svg.png",
                  "/Swiss Military Logo.png",
                ],
                color: "bg-red-500",
              },
              {
                year: "2023 onwards",
                logos: [
                  "/samsungmobile.png",
                  "/gem.png",
                  "/Apple-Logo-Iconic-Tech-Brand-Symbol-PNG-Transparent-Representation-of-Innovation-and-Design.png",
                  "/realme.png",
                  "/Boat Logo - PNG Logo Vector Brand Downloads (SVG, EPS).jpg",
                  "/256px-OPPO_LOGO_2019.svg.png",
                  "/Swiss Military Logo.png",
                ],
                color: "bg-amber-800",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="min-w-[220px] flex flex-col items-center text-center"
              >
                {/* Year Header */}
                <div
                  className={`w-full rounded-t-2xl text-white font-bold py-3 ${item.color}`}
                >
                  {item.year}
                </div>

                {/* Content Box */}
                <div className="border border-gray-200 rounded-b-2xl shadow-md p-4 bg-white w-full">
                  {item.text && (
                    <p className="text-sm text-gray-600 mb-3">{item.text}</p>
                  )}

                  {/* Logos */}
                  <div className="flex flex-wrap justify-center gap-3">
                    {item.logos.map((logo, i) => (
                      <img
                        key={i}
                        src={logo}
                        alt="logo"
                        className="w-16 h-10 object-contain"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div></section>
      {/* Retail Chain */}
      <section id="retail" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">RETAIL CHAIN</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">
              Mobiliti World is a fast-growing mobility retail chain with a dominant presence across Delhi NCR.
              Known for its modern retail experience, wide product range, and strong brand relationships, we are
              shaping the future of tech retail in the region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-green-600 mb-2">Current Footprint</h3>
                <p className="text-gray-700">
                  Operating{" "}
                  <span className="font-bold text-blue-600">
                    <CountUp end={27} duration={1000} />
                  </span>{" "}
                  premium retail stores across key urban and suburban markets in Delhi NCR
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Expansion Vision</h3>
                <p className="text-gray-700">
                  Ambitiously scaling to{" "}
                  <span className="font-bold text-green-600">
                    <CountUp end={100} duration={1000} />+
                  </span>{" "}
                  stores within the next 12 months
                </p>
                <p className="text-gray-700 gap-1">Focused on reaching every major neighborhood, high-street, and mall in the region
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-purple-600 mb-2">Product Range</h3>
                <p className="text-gray-700">
                  Offering the latest smartphones, accessories, gadgets, and tech essentials — all under one roof,
                  backed by exceptional customer service and brand trust.
                  Mobiliti World is not just a store — it’s a mobility lifestyle destination for the modern Indian consumer
                </p>
              </div><div className="flex flex-wrap gap-4 justify-center">
                <img width={150} height={150} src="/samsungmobile.png" />
                <img width={150} height={150} src="/256px-OPPO_LOGO_2019.svg.png" />
                <img width={150} height={150} src="/512px-Vivo_logo_2019.svg.png" />
                <img width={150} height={150} src="/realme.png" />
                <img width={150} height={150} src="/Apple-Logo-Iconic-Tech-Brand-Symbol-PNG-Transparent-Representation-of-Innovation-and-Design.png" /><img width={150} height={150} src="/mi.png" /></div>
            </div>

            <div className="text-center">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <img className="flex justify-center items-center" src="/mobilitiworld.jpg" width={500} height={350} />
                <div className="text-6xl font-bold text-red-600 mb-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-4xl">🏪</span>
                    <span>MOBILITI</span>
                  </div>
                  <div className="text-3xl text-blue-600">WORLD</div>
                </div>
                <p className="text-gray-600 mt-4">Mobility lifestyle destination for the modern Indian consumer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Licensing */}
      <section id="brand-licensing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">BRAND LICENSING</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">+</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">SWISS MILITARY</h3>
                  <p className="text-gray-600">Wearables and Hearables | India Market</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Vision Distribution is the proud licensee of the globally respected SWISS MILITARY brand for the
                wearables and hearables category in the Indian market.<br></br>
                Our licensed product portfolio includes high-quality wearables and hearables and essential mobile
                tech gear that reflect Swiss Military's global legacy of durability, performance, and affordable
                luxury
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Available in{" "}
                    <span className="font-bold text-green-600">
                      <CountUp end={5000} duration={1000} />+
                    </span>{" "}
                    retail outlets and growing
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Trusted by leading LFRs (Large Format Retailers)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Widely distributed through key retail channel partners nationwide
                  </span>
                </div>
                <p className="text-gray-700">This partnership allows us to deliver world-class products with Swiss precision to the hands of Indian
                  consumers.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-gray-50 p-8 rounded-lg text-center">
              <div className="text-6xl font-bold text-red-600 mb-4">
                <img width={700} height={400} src="/Swiss Military Logo.png" alt="Swiss Military Logo" className=" mx-auto w-auto h-auto mb-2" />
                SWISS
                <br />
                MILITARY
              </div>
              <p className="text-gray-600">World-class products with Swiss precision delivered to Indian consumers</p>
            </div>
          </div><div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
  <img className="w-28 sm:w-32 md:w-36 lg:w-40" src="/389-3895095_vijay-sales-vijay-sales.png" alt="Vijay Sales" />
  <img className="w-24 sm:w-28 md:w-32 lg:w-36" src="/sathya.png" alt="Sathya" />
  <img className="w-20 sm:w-24 md:w-28 lg:w-32" src="/oxygen.jpg" alt="Oxygen" />
  <img className="w-28 sm:w-32 md:w-36 lg:w-40" src="/happi.png" alt="Happi" />
</div></div>
      </section>

      {/* B2G/B2B Business */}
      <section id="b2g" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">B2G / B2B BUSINESS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-green-600 mb-2">
                ₹<CountUp end={2900} duration={1000} />+ Cr
              </div>
              <div className="text-gray-600">Orders Executed</div>
              <div className="text-sm text-gray-500 mt-2">in last three years</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <CountUp end={6.25} duration={1000} /> Lakh
              </div>
              <div className="text-gray-600">Tablets Delivered</div>
              <div className="text-sm text-gray-500 mt-2">Biggest order pan India</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-purple-600 mb-2">#1</div>
              <div className="text-gray-600">Samsung Partner</div>
              <div className="text-sm text-gray-500 mt-2">Biggest partner by Samsung India in 2023</div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Experience */}
      <section id="govt-experience" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">OUR GOVT. EXPERIENCE</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Order Execution</h3>
                <p className="text-lg">
                  Order executed more than{" "}
                  <span className="font-bold">
                    <CountUp end={23} duration={1000} /> lacs unit
                  </span>{" "}
                  of SMARTPHONE, TABLETS, and SMART CLASS SOLUTIONS with order value of approx.
                  <span className="font-bold">
                    {" "}
                    ₹2900 cr
                  </span>
                  .
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-4">States Covered</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    "J&K",
                    "Uttrakhand",
                    "Himachal",
                    "Haryana",
                    "Delhi",
                    "Uttar Pradesh",
                    "Maharashtra",
                    "Telangana",
                    "Andhra Pradesh",
                    "Manipur",
                  ].map((state, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{state}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Departments/Organizations</h4>
              <div className="space-y-3">
                {[
                  "Women & Child Development",
                  "National Health Mission",
                  "Education",
                  "Animal Husbandary",
                  "IT",
                  "BHEL",
                  "ISRO",
                ].map((dept, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Building className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{dept}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
  <img className="w-24 sm:w-28 md:w-32 lg:w-36" src="/Indian_Space_Research_Organisation_Logo.svg.webp" alt="ISRO" />
  <img className="w-24 sm:w-28 md:w-32 lg:w-36" src="/mashal.png" alt="Mashal" />
  <img className="w-24 sm:w-28 md:w-32 lg:w-36" src="/nsso.png" alt="NSSO" />
  <img className="w-24 sm:w-28 md:w-32 lg:w-36" src="/tgche-logo.webp" alt="TG Che" />
  <img className="w-24 sm:w-28 md:w-32 lg:w-36" src="/haelthmission.png" alt="Health Mission" />
  <img className="w-24 sm:w-28 md:w-32 lg:w-36" src="/itgovt.png" alt="IT Govt" />
  <img className="w-24 sm:w-28 md:w-32 lg:w-36" src="/womenandchild.png" alt="Women & Child" />
  <img className="w-24 sm:w-28 md:w-32 lg:w-36" src="/updesco.png" alt="UPDESCO" />
  <img className="w-24 sm:w-28 md:w-32 lg:w-36" src="/bharat-electronics-logo.svg" alt="BEL" />
</div>
      </section>

      {/* Manufacturing */}
      <section id="manufacturing" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">MANUFACTURING UNIT</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">A Trusted Backbone for Leading Brands</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Located at the heart of innovation and efficiency, our manufacturing facility serves as the engine
                behind some of the most trusted names in the market. With a focus on quality, scale, and reliability —
                we bring products to life that meet global standards.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-orange-600 mb-2">Production Capacity</h3>
                <div className="text-4xl font-bold text-gray-800">
                  <CountUp end={70000} duration={1000} />+ units/month
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Business Philosophy</h3>
                <p className="text-gray-700">
                  Manufacturing unit built on the thought of reverse integration in the business
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold text-orange-600 mb-4">
                <img className="mx-auto" width={300} height={250} src="/buzz.png" />
                BUZZ</div>
              <p className="text-gray-600 mb-6">Our OEM Partners</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Swiss Military", logo: "/Swiss Military Logo.png" },
                  { name: "Boat", logo: "/Boat Logo - PNG Logo Vector Brand Downloads (SVG, EPS).jpg" },
                  { name: "PlanX", logo: "/planx.png" },
                  { name: "Candytech", logo: "/candytech.png" },
                  { name: "Intex", logo: "/intex.png" },
                ].map((partner, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md text-center flex flex-col items-center"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-16 h-16 object-contain mb-2"
                    />
                    <span className="text-gray-700 font-semibold">{partner.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">ACHIEVEMENTS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {[
              "We always think long term and our journey with each brand has been an average of 5 years.",
              "We are among the top 3 Apple distributors across India.",
              "Successfully completed and delivered 3 Lakhs tablet and 4.5 Lakhs mobile phones in Uttar Pradesh at 54 different locations. For which UP CM himself praised our organization for the timely execution.",
              "Set up pan India distribution for honor mobiles.",
              "Successfully completed and delivered 6.19 Lakhs Tablets in Haryana in 22 districts.",
              "Set up distribution for Infocus Mobile phones in North & East India.",
            ].map((achievement, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg hover:bg-green-50 transition-colors"
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pan India Presence */}
      <section id="presence" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">PAN INDIA PRESENCE</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-green-600 text-white p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold mb-2">
                    <CountUp end={9} duration={1000} />
                  </div>
                  <div className="text-sm">Office & Warehouses</div>
                </div>

                <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold mb-2">
                    <CountUp end={300} duration={1000} />+
                  </div>
                  <div className="text-sm">Man Power</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 font-semibold">Head Office</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 font-semibold">Branch Location</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="/india-map-showing-pan-india-presence-with-office-l.png" alt="Pan India Presence Map" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">OUR COMPETITIVE ADVANTAGES</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-500 text-white p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Handshake className="w-8 h-8" />
                <h3 className="text-xl font-bold">RELATIONSHIP COMES FIRST</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• Regular contact with Channel Partners</li>
                <li>• Management and team having positive attitude towards the brands we represent</li>
                <li>• Taking ownership of the brand</li>
              </ul>
            </div>

            <div className="bg-blue-500 text-white p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-8 h-8" />
                <h3 className="text-xl font-bold">HONESTY AND INTEGRITY</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• Impeccable market reputation</li>
                <li>• No Dispute with any Channel Partners over 25 years</li>
                <li>• Personal stake in growth of each Partner</li>
              </ul>
            </div>

            <div className="bg-green-500 text-white p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="w-8 h-8" />
                <h3 className="text-xl font-bold">CREATE WIN-WIN SITUATION</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• Treating channel partners as close associates</li>
                <li>• Having a service attitude rather than "Big Brother" attitude</li>
                <li>• Team of best players who know where to play and how to win</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-600 italic">
              Our core capabilities uniquely meet <span className="font-bold text-green-600">PARTNER'S</span> need
            </p>
          </div>
        </div>
      </section>

      {/* Dealer Engagements & CSR */}
      <section id="engagements" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">DEALER ENGAGEMENTS</h2>

              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-4">Birthdays & Festival Wishes</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="/birthday1.png"
                      alt="Birthday celebrations"
                      className="rounded-lg"
                    />
                    <img
                      src="/birthday2.png"
                      alt="Festival celebrations"
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-green-600 mb-4">Cricket Match</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="/cricket2.png"
                      alt="Cricket tournament"
                      className="rounded-lg"
                    />
                    <img
                      src="/cricket3.png"
                      alt="Cricket match"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">CSR INITIATIVES</h2>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-600 mb-4">Tree Plantation</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <img
                    src="/plant1.png"
                    alt="Tree plantation drive"
                    className="rounded-lg"
                  />
                  <img src="/tree-plantation-csr-activity.png" alt="Environmental initiative" className="rounded-lg" />
                </div>
                <p className="text-gray-600">
                  Our commitment to environmental sustainability through regular tree plantation drives and green
                  initiatives across our operational areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">CONTACT US</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Address</h3>
                  <p>H-47, Bali Nagar, New Delhi-110015 (INDIA)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Phone</h3>
                  <p>011-46380029</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p>support@vdpl.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Globe className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Website</h3>
                  <p>www.visionworld.in</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-300 bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-blue-100 bg-opacity-20 placeholder-white border border-white border-opacity-30 text-white"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-blue-100 bg-opacity-20 placeholder-white border border-white border-opacity-30 text-white"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full p-3 rounded-lg bg-blue-100 bg-opacity-20 placeholder-white border border-white border-opacity-30 text-white"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 rounded-lg bg-blue-100 bg-opacity-20 placeholder-white border border-white border-opacity-30 text-white resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-400 text-white font-bold py-3 rounded-lg hover:bg-gray-500 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-6xl font-bold mb-4">
              <span className="text-green-400">VIS</span>
              <span className="text-blue-400">ION</span>
            </div>
            <div className="text-xl text-gray-300 mb-8">DISTRIBUTION PVT. LTD.</div>

            <div className="text-4xl font-bold text-gray-300 mb-8">Thank you</div>

            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <button onClick={() => scrollToSection("home")}>Home</button>
              <button onClick={() => scrollToSection("about")}>About</button>
              <button onClick={() => scrollToSection("verticals")}>Verticals</button>
              <button onClick={() => scrollToSection("contact")}>Contact</button>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-400">
              © 2024 Vision Distribution Pvt. Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
