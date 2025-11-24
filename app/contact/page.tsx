"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FlowerAccent } from "@/components/flower-accent"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-[#3a4a2a] to-[#2a3a1a] pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative mb-12">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white text-center mb-4">Get In Touch</h1>
            <p className="text-xl text-white/90 text-center">We'd love to hear from you</p>
            <FlowerAccent className="absolute -top-4 -right-4 hidden lg:block" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-[#4a5a3a]/30 p-8 rounded-lg">
                <h2 className="text-2xl font-serif font-bold text-white mb-6">Contact Information</h2>

                <div className="space-y-6 text-white/90">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-[#c5d11c] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white mb-1">Email</p>
                      <a href="mailto:thekinclubmail@gmail.com" className="hover:text-white transition-colors">
                        thekinclubmail@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-[#c5d11c] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white mb-1">Phone</p>
                      <a href="tel:+919702100077" className="hover:text-white transition-colors">
                        +91 9702100077
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[#c5d11c] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white mb-1">Location</p>
                      <p className="leading-relaxed">
                        Thapar Suburbia, Acharya Marg,
                        <br />
                        Chembur - 400088
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-[#c5d11c] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white mb-1">Hours</p>
                      <p>Monday - Sunday</p>
                      <p>10 AM – 6 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#4a5a3a]/30 p-8 rounded-lg">
                <h3 className="text-xl font-serif font-bold text-white mb-4">Visit Us</h3>
                <p className="text-white/90 leading-relaxed">
                  Drop by our space in Chembur to experience the community firsthand. We're always happy to show you
                  around and answer any questions about our events and membership options.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#4a5a3a]/30 p-8 rounded-lg">
              <h2 className="text-2xl font-serif font-bold text-white mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2 font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2 font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white mb-2 font-medium">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2 font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50 min-h-32"
                    placeholder="Tell us what you're interested in..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-white/10 hover:bg-white/20 border-2 border-white/60 text-white font-semibold py-6"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
