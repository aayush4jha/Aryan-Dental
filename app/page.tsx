"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const backgroundImages = ["t1.png", "t2.png", "t3.png", "t4.png"]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section with Sliding Background Image */}
      <section className="w-full relative overflow-hidden">
        <div className="relative w-full h-[600px] transition-all duration-1000">
          <Image
            src={`/${backgroundImages[currentImageIndex]}`}
            alt="Welcome to Aryan Dental"
            fill
            className="object-cover transition-opacity duration-1000"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-teal-700 mb-4">Welcome to Aryan Dental</h1>
            <p className="text-lg text-gray-700 mb-6">
              Providing exceptional dental care with a gentle touch. Our team of experienced professionals is dedicated
              to your oral health and beautiful smile.
            </p>
            <Link
              href="/appointment"
              className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
            >
              Book Appointment <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-12">Our Clinic</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "gallery1.avif",
              "gallery2.avif",
              "gallery3.jpg",
              "gallery4.avif",
              "gallery5.avif",
              "gallery6.jpg",
            ].map((filename, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={`/${filename}`}
                  alt={`Clinic Image ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Details Section */}
      <section className="w-full py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-12">Visit Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Clinic 1 */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-teal-700 mb-4">G.M. Road Branch</h3>
              <div className="mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Address:</strong> Radio Station, GM Road, opposite PNB Circle Office, near Smart Bazaar & Dagru Seth Jeweller, Kathalbari, Darbhanga, Bihar 846004
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +91 9934349934 / +91 9934343417
                </p>
                <p className="text-gray-700">
                  <strong>Hours:</strong> Mon-Sat: 9:00 AM - 8:30 PM, Sun: 9:00 AM - 4:00 PM
                </p>
              </div>
              <div className="w-full h-64 bg-gray-200 rounded-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114582.5083572889!2d85.893527!3d26.1495031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb83a5c36db65%3A0x4b27fa90b5754011!2sARYAN%20DENTAL!5e0!3m2!1sen!2sin!4v1715763800000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Clinic 2 */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-teal-700 mb-4">Allalpatti Branch</h3>
              <div className="mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Address:</strong> VIP Road, Near Honda Motorcycle Agency, Allalpatti, Donar, Darbhanga, Bihar 846004
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +91 9934349934 / +91 9934343417
                </p>
                <p className="text-gray-700">
                  <strong>Hours:</strong> Mon-Sat: 9:00 AM - 8:30 PM, Sun: 9:00 AM - 4:00 PM
                </p>
              </div>
              <div className="w-full h-64 bg-gray-200 rounded-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114567.9222165327!2d85.8982036!3d26.1386755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb84209000015%3A0x3b89f962fe92643f!2sDr.%20A.%20K.%20Jha%20Dental%20surgeon%20ARYAN%20DENTAL%20CLINIC!5e0!3m2!1sen!2sin!4v1715763900000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
