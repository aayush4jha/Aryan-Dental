import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aryan Dental",
  description:
    "Aryan Dental provides exceptional dental care with a gentle touch. Our team of experienced professionals is dedicated to your oral health and beautiful smile.",
  generator: "v0.dev",
  keywords: [
    "Aryan Dental",
    "Dental Clinic",
    "Dentist",
    "Root Canal",
    "Braces",
    "Teeth Whitening",
    "Oral Care",
    "Dentist in Surat"
  ],
  authors: [{ name: "Aryan Dental Team" }],
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/logo.png", // Ensure logo.png is in your public directory
  },
  openGraph: {
    title: "Aryan Dental | Expert Dental Care You Can Trust",
    description:
      "Your smile is our priority. Visit Aryan Dental for compassionate, cutting-edge dental care tailored to your needs.",
    url: "https://aryandental.com",
    siteName: "Aryan Dental",
    images: [
      {
        url: "https://aryandental.com/assets/images/og-image.jpg", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Aryan Dental Clinic",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Dental | Expert Dental Care You Can Trust",
    description:
      "Your smile is our priority. Visit Aryan Dental for compassionate, cutting-edge dental care tailored to your needs.",
    images: ["https://aryandental.com/assets/images/og-image.jpg"], // Replace accordingly
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}