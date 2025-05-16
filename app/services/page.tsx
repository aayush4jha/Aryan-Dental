import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Root Canal Treatment",
      description:
        "Our painless root canal therapy saves teeth that would otherwise need to be extracted. Using advanced techniques and equipment, we ensure your comfort throughout the procedure.",
      image: "rct1.jpg",
      features: [
        "Single-visit treatments available",
        "Minimal discomfort",
        "High success rate",
        "Preserves natural tooth",
      ],
    },
    {
      id: 2,
      title: "Cosmetic Dentistry",
      description:
        "Transform your smile with our range of cosmetic dental procedures. From teeth whitening to veneers, we help you achieve the smile you've always dreamed of.",
      image: "cd.jpg",
      features: ["Teeth whitening", "Dental veneers", "Smile makeovers", "Natural-looking results"],
    },
    {
      id: 3,
      title: "Oral Surgery",
      description:
        "Our oral surgery services include wisdom teeth extraction, dental implants, and corrective jaw surgery. Our experienced surgeons ensure safe and effective procedures.",
      image: "surgery.jpg",
      features: ["Wisdom teeth removal", "Dental implants", "Bone grafting", "Corrective jaw surgery"],
    },
    {
      id: 4,
      title: "Dental Implants",
      description:
        "Replace missing teeth with dental implants that look, feel, and function like natural teeth. Our implant solutions provide a permanent foundation for replacement teeth.",
      image: "implant.png",
      features: ["Permanent solution", "Natural appearance", "Preserves bone structure", "Improves oral health"],
    },
    {
      id: 5,
      title: "Preventive Dentistry",
      description:
        "Maintain your oral health with our comprehensive preventive dentistry services. Regular check-ups, cleanings, and early intervention help prevent dental problems.",
      image: "pre.jpg",
      features: ["Regular check-ups", "Professional cleanings", "Fluoride treatments", "Dental sealants"],
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center py-12 px-4 md:px-8">
      <div className="max-w-7xl w-full mx-auto">
        <h1 className="text-4xl font-bold text-center text-teal-700 mb-12">Our Services</h1>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={service.id} className="opacity-0 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} bg-white rounded-lg shadow-md overflow-hidden`}
              >
                <div className="md:w-1/2">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <h2 className="text-2xl font-bold text-teal-700 mb-4">{service.title}</h2>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

