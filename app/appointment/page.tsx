"use client"

import type React from "react"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export default function AppointmentPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Generate available time slots based on clinic hours
  const generateTimeSlots = () => {
    const morningSlots = []
    const eveningSlots = []

    // Morning slots: 9 AM to 1 PM
    for (let hour = 9; hour < 13; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, "0")
        const formattedMinute = minute.toString().padStart(2, "0")
        morningSlots.push(`${formattedHour}:${formattedMinute}`)
      }
    }

    // Evening slots: 5 PM to 9 PM
    for (let hour = 17; hour < 21; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, "0")
        const formattedMinute = minute.toString().padStart(2, "0")
        eveningSlots.push(`${formattedHour}:${formattedMinute}`)
      }
    }

    return { morningSlots, eveningSlots }
  }

  const { morningSlots, eveningSlots } = generateTimeSlots()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!date) {
      toast({
        title: "Please select a date",
        description: "You need to select an appointment date",
        variant: "destructive",
      })
      return
    }

    if (!timeSlot) {
      toast({
        title: "Please select a time slot",
        description: "You need to select an appointment time",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Appointment Booked!",
      description: `Your appointment has been scheduled for ${date.toDateString()} at ${timeSlot}`,
    })

    setIsSubmitting(false)
  }

  return (
    <div className="container py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold">Book Your Appointment</h1>
          <p className="text-muted-foreground">
            Schedule your visit to Naga Dental Clinic. Please fill out the form below.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Please provide your contact details so we can confirm your appointment.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="9876543210" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="service">Service Required</Label>
                  <Select required>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="restorative">Restorative Dentistry</SelectItem>
                      <SelectItem value="whitening">Teeth Whitening</SelectItem>
                      <SelectItem value="surgery">Dental Surgery</SelectItem>
                      <SelectItem value="orthodontic">Orthodontic Dentistry</SelectItem>
                      <SelectItem value="pediatric">Pediatric Dentistry</SelectItem>
                      <SelectItem value="implants">Dental Implants</SelectItem>
                      <SelectItem value="consultation">General Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea id="notes" placeholder="Any specific concerns or requirements..." />
                </div>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Select Date</CardTitle>
                  <CardDescription>Choose your preferred appointment date.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                    disabled={(date) => {
                      // Disable dates in the past
                      return date < new Date(new Date().setHours(0, 0, 0, 0))
                    }}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Select Time</CardTitle>
                  <CardDescription>Choose your preferred appointment time.</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={timeSlot} onValueChange={setTimeSlot}>
                    <div className="mb-4">
                      <h3 className="mb-2 font-medium">Morning (9 AM - 1 PM)</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {morningSlots.map((slot) => (
                          <div key={slot} className="flex items-center space-x-2">
                            <RadioGroupItem value={slot} id={`time-${slot}`} />
                            <Label htmlFor={`time-${slot}`}>{slot}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 font-medium">Evening (5 PM - 9 PM)</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {eveningSlots.map((slot) => (
                          <div key={slot} className="flex items-center space-x-2">
                            <RadioGroupItem value={slot} id={`time-${slot}`} />
                            <Label htmlFor={`time-${slot}`}>{slot}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button type="submit" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Booking..." : "Book Appointment"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
