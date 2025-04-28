import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold">Naga Dental Clinic</h3>
            <p className="mb-4">Professional dental care services for the whole family.</p>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>94448 09846</span>
            </div>
            <div className="mt-2 flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@nagadentalclinic.com</span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Address</h3>
            <div className="flex items-start space-x-2">
              <MapPin className="h-4 w-4 mt-1" />
              <p>
                4/11, Subbammal St, Venkatapuram,
                <br />
                Ambattur, Chennai,
                <br />
                Tamil Nadu 600053
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Working Hours</h3>
            <div className="flex items-start space-x-2">
              <Clock className="h-4 w-4 mt-1" />
              <div>
                <p>Morning: 9 AM to 1 PM</p>
                <p>Evening: 5 PM to 9 PM</p>
                <p className="mt-2">All days of the week</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Naga Dental Clinic. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <Link href="/appointment" className="hover:underline">
              Appointments
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
