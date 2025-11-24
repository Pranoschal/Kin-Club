"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FlowerAccent } from "@/components/flower-accent"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interests: [] as string[],
  })

  const interests = [
    "Yoga",
    "Meditation",
    "Cycling",
    "Hiking",
    "Sound Healing",
    "Wellness Workshops",
    "Social Events",
    "Nutrition",
  ]

  const toggleInterest = (interest: string) => {
    if (formData.interests.includes(interest)) {
      setFormData({
        ...formData,
        interests: formData.interests.filter((i) => i !== interest),
      })
    } else {
      setFormData({
        ...formData,
        interests: [...formData.interests, interest],
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Sign up:", formData)
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-[#3a4a2a] to-[#2a3a1a] pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="relative mb-12">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white text-center mb-4">Join The Club</h1>
            <p className="text-xl text-white/90 text-center italic font-serif">Start your wellness journey with us</p>
            <FlowerAccent className="absolute -top-4 -right-4 hidden lg:block" />
          </div>

          <div className="bg-[#4a5a3a]/30 p-8 md:p-12 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-white mb-2 font-medium">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                    placeholder="First name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-white mb-2 font-medium">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                    placeholder="Last name"
                    required
                  />
                </div>
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
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-4 font-medium">What are you interested in?</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`px-4 py-3 rounded-md border-2 transition-all text-sm font-medium ${
                        formData.interests.includes(interest)
                          ? "bg-[#c5d11c] border-[#c5d11c] text-[#2a3a1a]"
                          : "bg-white/10 border-white/30 text-white hover:bg-white/20"
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-white/10 hover:bg-white/20 border-2 border-white/60 text-white font-semibold py-6 text-lg group"
              >
                Join The Kin
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-white/70 text-sm text-center mt-4">
                By signing up, you agree to our Terms & Conditions and Privacy Policy
              </p>
            </form>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/90 mb-4">Already a member?</p>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-2 border-white/60 text-white hover:bg-white/10"
            >
              <a href="/login">Sign In</a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
