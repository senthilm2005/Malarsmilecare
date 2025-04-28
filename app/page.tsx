import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 py-20 text-white">
        <div className="container relative z-10">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">Welcome to Naga Dental Clinic</h1>
              <p className="mb-6 text-lg">
                Professional dental care services by Dr. Nagarathnamma, BDS (Dental Surgeon)
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link href="/appointment">Book Appointment</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-64 w-full overflow-hidden rounded-lg md:h-80">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Dental care"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">Our Dental Services</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We provide comprehensive dental care services to help you maintain a healthy and beautiful smile.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Restorative Dentistry",
                description: "Repair damaged teeth and restore your smile with our restorative treatments.",
                icon: "/placeholder.svg?height=100&width=100",
              },
              {
                title: "Teeth Whitening",
                description: "Get a brighter, whiter smile with our professional teeth whitening services.",
                icon: "/placeholder.svg?height=100&width=100",
              },
              {
                title: "Dental Surgery",
                description: "Expert surgical procedures including extractions and wisdom teeth removal.",
                icon: "/placeholder.svg?height=100&width=100",
              },
              {
                title: "Orthodontic Dentistry",
                description: "Straighten your teeth and correct bite issues with our orthodontic treatments.",
                icon: "/placeholder.svg?height=100&width=100",
              },
              {
                title: "Pediatric Dentistry",
                description: "Specialized dental care for children in a comfortable, friendly environment.",
                icon: "/placeholder.svg?height=100&width=100",
              },
              {
                title: "Dental Implants",
                description: "Replace missing teeth with natural-looking, permanent dental implants.",
                icon: "/placeholder.svg?height=100&width=100",
              },
            ].map((service, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10">
                    <Image
                      src={service.icon || "/placeholder.svg"}
                      alt={service.title}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Doctor */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Dr. Nagarathnamma"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 text-3xl font-bold">Dr. Nagarathnamma, BDS</h2>
              <p className="mb-2 text-lg font-medium">Dental Surgeon</p>
              <p className="mb-6 text-muted-foreground">
                Dr. Nagarathnamma is a highly skilled dental surgeon with years of experience in providing comprehensive
                dental care. She is committed to ensuring that each patient receives personalized treatment in a
                comfortable environment.
              </p>
              <ul className="space-y-2">
                {[
                  "Specialized in advanced dental procedures",
                  "Committed to painless dentistry",
                  "Continuous professional development",
                  "Patient-centered approach",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Schedule Your Visit?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Book an appointment today and take the first step towards a healthier smile.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/appointment">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
