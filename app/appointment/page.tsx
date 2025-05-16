"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, AlertTriangle } from "lucide-react"

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    caseType: "new",
    date: "",
    timeSlot: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  const { name, phone, caseType, date, timeSlot } = formData

  // Manual validation
  if (!name || !phone || !caseType || !date || !timeSlot) {
    alert("Please fill in all the required fields.")
    return
  }

  // Additional custom validation (optional)
  if (!/^\d{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number.")
    return
  }

  const message = `New Appointment Request:
Name: ${name}
Phone: ${phone}
Case Type: ${caseType === "new" ? "New Case" : "Old Case"}
Date: ${date}
Time Slot: ${timeSlot}`

  const encodedMessage = encodeURIComponent(message)

  window.open(`https://wa.me/91829332121123?text=${encodedMessage}`, "_blank")
}


  return (
    <main className="flex min-h-screen flex-col items-center py-12 px-4 md:px-8">
      <div className="max-w-4xl w-full mx-auto">
        <h1 className="text-4xl font-bold text-center text-teal-700 mb-6">Book an Appointment</h1>
        <p className="text-center text-gray-700 mb-12">
          Schedule your visit to Aryan Dental.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your 10-digit phone number"
                  />
                </div>

                <div>
                  <span className="block text-sm font-medium text-gray-700 mb-1">Case Type</span>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="caseType"
                        value="new"
                        checked={formData.caseType === "new"}
                        onChange={handleChange}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500"
                      />
                      <span className="ml-2 text-gray-700">New Case</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="caseType"
                        value="old"
                        checked={formData.caseType === "old"}
                        onChange={handleChange}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500"
                      />
                      <span className="ml-2 text-gray-700">Old Case</span>
                    </label>
                  </div>
                </div>

                <div>
  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
    Appointment Date
  </label>
  <div>
    <input
      type="date"
      id="date"
      name="date"
      value={formData.date}
      onChange={handleChange}
      required
      min={new Date().toISOString().split("T")[0]}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
    />
  </div>
</div>

                <div>
                  <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <select
                      id="timeSlot"
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none"
                    >
                      <option value="">Select a time slot</option>
                      <option value="10:00 AM - 10:30 AM">10:00 AM - 10:30 AM</option>
                      <option value="10:30 AM - 11:00 AM">10:30 AM - 11:00 AM</option>
                      <option value="11:00 AM - 11:30 AM">11:00 AM - 11:30 AM</option>
                      <option value="11:30 AM - 12:00 PM">11:30 AM - 12:00 PM</option>
                      <option value="12:00 PM - 12:30 PM">12:00 PM - 12:30 PM</option>
                      <option value="12:30 PM - 1:00 PM">12:30 PM - 1:00 PM</option>
                      <option value="3:00 PM - 3:30 PM">3:00 PM - 3:30 PM</option>
                      <option value="3:30 PM - 4:00 PM">3:30 PM - 4:00 PM</option>
                      <option value="4:00 PM - 4:30 PM">4:00 PM - 4:30 PM</option>
                      <option value="4:30 PM - 5:00 PM">4:30 PM - 5:00 PM</option>
                      <option value="5:00 PM - 5:30 PM">5:00 PM - 5:30 PM</option>
                      <option value="5:30 PM - 6:00 PM">5:30 PM - 6:00 PM</option>
                      <option value="6:00 PM - 6:30 PM">6:00 PM - 6:30 PM</option>
                      <option value="6:30 PM - 7:00 PM">6:30 PM - 7:00 PM</option>
                      <option value="7:00 PM - 7:30 PM">7:00 PM - 7:30 PM</option>
                      <option value="7:30 PM - 8:00 PM">7:30 PM - 8:00 PM</option>
                      <option value="8:00 PM - 8:30 PM">8:00 PM - 8:30 PM</option>
                    </select>
                    <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none h-5 w-5" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          </div>

          <div className="md:col-span-1">
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <AlertTriangle className="h-6 w-6 text-amber-500 mr-2 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-amber-800">Important Note</h3>
              </div>
              <ul className="space-y-3 text-sm text-amber-800">
                <li>Online booking of Consultation (New Case) - Rs. 300/-</li>
                <li>Online booking of Consultation (Old Case) - Rs. 200/-</li>
                <li>Extra charges for additional services.</li>
                <li>Online appointments get the HIGHEST PREFERENCE.</li>
                <li>Fees to be paid at the Desk AFTER consultation.</li>
                <li>Consultation will be OFFLINE at Aryan Dental.</li>
                <li>Preference to patients who arrive FIRST in the appointed time slot.</li>
                <li>In case of doctor unavailability, the appointment may get delayed or cancelled.</li>
                <li>Old case patients coming after 4 months will be treated as a NEW CASE.</li>
                <li>For inquiries, call: +91-9934349934 / +91-9934343417</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

