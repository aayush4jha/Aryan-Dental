import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center py-12 px-4 md:px-8">
      <div className="max-w-7xl w-full mx-auto">
        {/* About Clinic Section */}
        <section className="mb-16 opacity-0 animate-fade-in">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src="clinic.jpg"
                  alt="Aryan Dental Clinic"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h1 className="text-3xl font-bold text-teal-700 mb-4">About Aryan Dental</h1>
                <p className="text-gray-700 mb-4">
                  Established in 2011, Aryan Dental has been at the forefront of dental care in the region, providing
                  exceptional services to thousands of patients. Our state-of-the-art facilities and experienced team
                  ensure that you receive the best dental care possible.
                </p>
                <p className="text-gray-700 mb-4">
                  We believe in a patient-first approach, ensuring that every visit is comfortable and stress-free. Our
                  clinic is equipped with the latest technology and follows strict sterilization protocols to maintain
                  the highest standards of hygiene and safety.
                </p>
                <p className="text-gray-700">
                  At Aryan Dental, we're not just treating teeth – we're caring for people. Our mission is to help you
                  achieve and maintain optimal oral health with personalized care and education.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-12">Our Doctor</h2>
          <div className="grid grid-cols-1 gap-8">
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden opacity-0 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="doc1.png"
                      alt="Dr. Ajay Kumar Jha"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-700 mb-2">Dr. Ajay Kumar Jha</h3>
                    <p className="text-gray-600 mb-4">BDS, MIDA Oral & Dental Surgeon</p>
                    <p className="text-gray-700 mb-4">
                      Dr. Ajay Kumar Jha brings over two decades of dental experience to Aryan Dental. Known for his
                      compassionate care and surgical expertise, he has transformed countless smiles with his
                      comprehensive approach to oral health. Dr. Jha is highly regarded for his dedication to patient
                      care and continual learning in the evolving field of dentistry.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">General Dentistry</span>
                      <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Oral Surgery</span>
                      <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Dental Implants</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
