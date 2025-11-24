"use client"

import Link from "next/link"
import { ArrowRight, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FlowerAccent } from "@/components/flower-accent"

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#3a4a2a] to-[#2a3a1a]">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=1080&width=1920&query=group%20of%20diverse%20people%20practicing%20yoga%20outdoors%20in%20nature)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3a4a2a]/60 to-[#2a3a1a]/80" />

        {/* Decorative Flower Accent */}
        <FlowerAccent className="absolute top-8 right-8 animate-spin-slow hidden lg:block" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-16">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-4 tracking-tight">kin</h1>
          </div>

          <p className="text-xl md:text-2xl text-white/90 mb-12 italic font-serif">join the club</p>

          <Button
            asChild
            size="lg"
            className="bg-[#3a4a2a] border-2 border-white/60 text-white hover:bg-[#4a5a3a] hover:border-white text-lg px-12 py-6 h-auto group"
          >
            <Link href="/signup">
              SIGN UP
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-2 border-white/60 text-white hover:bg-white/10"
            >
              <Link href="/about">About Us</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="icon"
              className="bg-transparent border-2 border-white/60 text-white hover:bg-white/10"
            >
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="bg-transparent border-2 border-white/60 text-white hover:bg-white/10"
            >
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </>
  )
}
