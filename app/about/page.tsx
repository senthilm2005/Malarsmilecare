import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16 text-white">
        <div className="container">
          <h1 className="mb-4 text-4xl font-bold">About Naga Dental Clinic</h1>
          <p className="max-w-2xl text-lg">
            Learn more about our clinic, our mission, and our commitment to providing exceptional dental care.
          </p>
        </div>
      </section>

      {/* About Clinic */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Our Clinic</h2>
              <p className="mb-4 text-muted-foreground">
                Naga Dental Clinic was established with a vision to provide high-quality, comprehensive dental care to
                patients of all ages. Located in Ambattur, Chennai, our modern facility is equipped with
                state-of-the-art technology to ensure the best possible treatment outcomes.
              </p>
              <p className="mb-6 text-muted-foreground">
                We believe in creating a comfortable and welcoming environment for our patients. Our team is dedicated
                to making your dental visit as pleasant and stress-free as possible.
              </p>
              <div className="space-y-3">
                {[
                  "State-of-the-art dental equipment",
                  "Comfortable and relaxing environment",
                  "Strict adherence to sterilization protocols",
                  "Convenient location with parking facilities",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Naga Dental Clinic"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Doctor */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative h-64 overflow-hidden rounded-lg md:h-auto md:order-last">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Dr. Nagarathnamma"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold">Meet Dr. Nagarathnamma</h2>
              <p className="mb-4 text-muted-foreground">
                Dr. Nagarathnamma is a highly qualified dental surgeon with a BDS degree and years of experience in the
                field of dentistry. Her expertise spans across various dental specialties, allowing her to provide
                comprehensive care to her patients.
              </p>
              <p className="mb-6 text-muted-foreground">
                With a patient-centered approach, Dr. Nagarathnamma ensures that each patient receives personalized
                attention and treatment. She is committed to continuous learning and stays updated with the latest
                advancements in dental techniques and technologies.
              </p>
              <div className="space-y-3">
                {[
                  "BDS (Bachelor of Dental Surgery)",
                  "Specialized training in advanced dental procedures",
                  "Committed to painless dentistry",
                  "Passionate about patient education and preventive care",
                ].map((qualification, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>{qualification}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">Our Mission</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              At Naga Dental Clinic, we are driven by our commitment to excellence in dental care.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Quality Care",
                description:
                  "We are committed to providing the highest quality dental care using the latest techniques and technologies.",
              },
              {
                title: "Patient Comfort",
                description:
                  "We prioritize patient comfort and strive to create a positive and stress-free dental experience.",
              },
              {
                title: "Preventive Approach",
                description:
                  "We believe in preventive dentistry and educating our patients about maintaining good oral health.",
              },
            ].map((mission, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-xl font-bold">{mission.title}</h3>
                  <p className="text-muted-foreground">{mission.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold">Experience Quality Dental Care</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Schedule an appointment with Dr. Nagarathnamma and experience the difference at Naga Dental Clinic.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/appointment">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
