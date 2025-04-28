import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16 text-white">
        <div className="container">
          <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
          <p className="max-w-2xl text-lg">
            Get in touch with Naga Dental Clinic. We're here to answer your questions and provide the dental care you
            need.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold">Get In Touch</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="flex items-start space-x-4 pt-6">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <p className="text-muted-foreground">
                        4/11, Subbammal St, Venkatapuram,
                        <br />
                        Ambattur, Chennai,
                        <br />
                        Tamil Nadu 600053
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start space-x-4 pt-6">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-muted-foreground">94448 09846</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start space-x-4 pt-6">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-muted-foreground">info@nagadentalclinic.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start space-x-4 pt-6">
                    <Clock className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">Working Hours</h3>
                      <p className="text-muted-foreground">
                        Morning: 9 AM to 1 PM
                        <br />
                        Evening: 5 PM to 9 PM
                        <br />
                        All days of the week
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold">Location</h2>
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>Naga Dental Clinic</CardTitle>
                  <CardDescription>Find us at our convenient location in Ambattur, Chennai</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0158246503707!2d80.15!3d13.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA1JzI0LjAiTiA4MMKwMDknMDAuMCJF!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="aspect-video"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Find answers to common questions about our dental services and clinic.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                question: "What should I expect during my first visit?",
                answer:
                  "During your first visit, we'll conduct a comprehensive examination, take necessary X-rays, and discuss your dental history and concerns. Dr. Nagarathnamma will then create a personalized treatment plan for you.",
              },
              {
                question: "How often should I visit the dentist?",
                answer:
                  "We recommend visiting the dentist every six months for regular check-ups and cleanings. However, some patients may need more frequent visits depending on their oral health condition.",
              },
              {
                question: "Do you accept insurance?",
                answer:
                  "Yes, we accept most major dental insurance plans. Please contact our office to verify your specific coverage before your appointment.",
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept cash, credit/debit cards, and various digital payment methods for your convenience.",
              },
              {
                question: "How can I schedule an appointment?",
                answer:
                  "You can schedule an appointment by calling us at 94448 09846, using our online booking system, or visiting our clinic in person.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
