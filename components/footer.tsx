import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-teal-700 mb-4">Aryan Dental</h3>
            <p className="text-gray-600 mb-4">
              Providing exceptional dental care with a gentle touch. Our team of experienced professionals is dedicated
              to your oral health and beautiful smile.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Aryan-Dental/pfbid02qYft7iHeiVos8nGRE87cx1xhMorXN6yNAPj9UXpDEiQA2QnDFuNC2TtMztodvugYl/?mibextid=9R9pXO" className="text-gray-400 hover:text-teal-600 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/aryandental2/?igshid=NzZlODBkYWE4Ng%3D%3D" className="text-gray-400 hover:text-teal-600 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-teal-700 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">+91 9934349934 / +91 9934343417</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">drajay89@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-teal-700 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-teal-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Book Appointment
                </Link>
              </li> 
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Aryan Dental. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

