import "./globals.css"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Manrope } from "next/font/google"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata = {
  title: "Vision Distribution Pvt. Ltd. | India’s Leading Telecom, Electronics & Government Supply Distributor",

  description:
    "Vision Distribution Pvt. Ltd. (VDPL), established in 1994, is a leading telecom and electronics distribution company with a Pan-India presence, 9 branches, 300+ employees, and a turnover exceeding ₹4500 Cr (FY 24–25). Authorized partner for Apple, Samsung, Oppo, Swiss Military, and a dominant retail chain in Delhi NCR (Mobiliti World). Executed 23+ lakh smartphones, tablets & smart-class orders worth ₹2900+ Cr in government projects.",

  metadataBase: new URL("https://www.visionworld.in"),

  keywords: [
    "Telecom distributor in India",
    "Smartphone distribution company",
    "Electronics OEM manufacturer India",
    "Mobility retail chain Delhi NCR",
    "Government electronics supplier India",
    "Mobile accessories distributor",
    "Pan India distribution network",
    "Apple distributor India",
    "B2G electronics procurement",
    "Tech retail franchise Delhi NCR",
    "Vision Distribution Pvt. Ltd.",
    "VDPL",
    "Vision World",
    "Vision Distribution",
    "Swiss Military India",
  ],

  alternates: {
    canonical: "https://www.visionworld.in",
  },

  openGraph: {
    title: "Vision Distribution Pvt. Ltd. | Leading Telecom, Retail & Government Supply Partner",
    description:
      "A dominant Indian distribution house with 30+ years of expertise across telecom, electronics, OEM manufacturing, retail, and large-scale government supply projects. Trusted by Apple, Samsung, Oppo, and Swiss Military.",
    url: "https://www.visionworld.in",
    siteName: "Vision Distribution Pvt. Ltd.",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/Vision logo only SVG (1).svg",
        width: 1200,
        height: 630,
        alt: "Vision Distribution Pvt. Ltd. Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vision Distribution Pvt. Ltd. | Shaping India’s Telecom & Electronics Ecosystem",
    description:
      "A pan-India distribution powerhouse with strong government execution, 5000+ retail presence through Swiss Military licensing, and 27+ Mobiliti World retail stores in Delhi NCR.",
    images: ["/Vision logo.svg"],
    creator: "@VisionDistribution",
  },

  icons: {
    icon: "/Vision logo only SVG (1).svg",
    shortcut: "/Vision logo only SVG (1).svg",
    apple: "/Apple (1).svg",
  },

  themeColor: "#0B7A4B",
  category: "Business",

  other: {
    "geo.region": "IN-DL",
    "geo.placename": "New Delhi",
    "geo.position": "28.6517;77.2219",
    ICBM: "28.6517, 77.2219",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Canonical link */}
        <link rel="canonical" href="https://www.visionworld.in" />

        {/* Google Analytics — replace G-XXXXXXX */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-M656WRGEPW"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-M656WRGEPW');
            `,
          }}
        />

        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vision Distribution Pvt. Ltd.",
              url: "https://www.visionworld.in",
              logo: "https://www.visionworld.in/Vision logo only SVG (1).svg",
              sameAs: [
                "https://www.linkedin.com/company/vision-distribution",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressLocality: "New Delhi",
                addressRegion: "Delhi",
              },
            }),
          }}
        />
      </head>

      <body
        className={`${manrope.variable} ${GeistSans.variable} ${GeistMono.variable} font-sans antialiased text-gray-900`}
      >
        {children}
      </body>
    </html>
  )
}
