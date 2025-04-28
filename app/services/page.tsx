import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  const services = [
    {
      title: "Restorative Dentistry",
      description:
        "Our restorative dentistry services focus on repairing damaged teeth and restoring your smile. We offer fillings, crowns, bridges, and more to help you maintain optimal oral health.",
      image: "/placeholder.svg?height=300&width=500",
      features: ["Dental Fillings", "Crowns and Bridges", "Inlays and Onlays", "Full Mouth Reconstruction"],
    },
    {
      title: "Teeth Whitening",
      description:
        "Achieve a brighter, whiter smile with our professional teeth whitening services. We offer both in-office and take-home whitening options to suit your preferences and lifestyle.",
      image: "/placeholder.svg?height=300&width=500",
      features: ["In-Office Whitening", "Take-Home Whitening Kits", "Stain Removal", "Customized Treatment Plans"],
    },
    {
      title: "Dental Surgery",
      description:
        "Our dental surgery services include tooth extractions, wisdom teeth removal, and other oral surgical procedures. We ensure your comfort throughout the process with local anesthesia and sedation options.",
      image: "/placeholder.svg?height=300&width=500",
      features: ["Tooth Extractions", "Wisdom Teeth Removal", "Bone Grafting", "Surgical Implant Placement"],
    },
    {
      title: "Orthodontic Dentistry",
      description:
        "Straighten your teeth and correct bite issues with our orthodontic treatments. We offer traditional braces, clear aligners, and other orthodontic solutions for patients of all ages.",
      image: "/placeholder.svg?height=300&width=500",
      features: ["Traditional Braces", "Clear Aligners", "Retainers", "Bite Correction"],
    },
    {
      title: "Pediatric Dentistry",
      description:
        "We provide specialized dental care for children in a comfortable, friendly environment. Our pediatric dentistry services focus on preventive care and education to establish good oral health habits early.",
      image: "/placeholder.svg?height=300&width=500",
      features: ["Child-Friendly Environment", "Preventive Care", "Dental Sealants", "Early Orthodontic Assessment"],
    },
    {
      title: "Dental Implants",
      description:
        "Replace missing teeth with natural-looking, permanent dental implants. Our implant solutions restore both function and aesthetics, allowing you to eat, speak, and smile with confidence.",
      image: "/placeholder.svg?height=300&width=500",
      features: ["Single Tooth Implants", "Multiple Tooth Implants", "Implant-Supported Dentures", "All-on-4 Implants"],
    },
  ]

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16 text-white">
        <div className="container">
          <h1 className="mb-4 text-4xl font-bold">Our Dental Services</h1>
          <p className="max-w-2xl text-lg">
            At Naga Dental Clinic, we offer a comprehensive range of dental services to meet all your oral health needs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="mr-2 h-2 w-2 rounded-full bg-primary"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/appointment">Book Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold">Have Questions About Our Services?</h2>
          <p className="mx-auto mb-8 max-w-2xl">
            Our team is ready to answer any questions you may have about our dental services. Contact us today or
            schedule an appointment for a consultation.
          </p>
          <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg">
              <Link href="/appointment">Book Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
