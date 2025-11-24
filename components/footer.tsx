"use client"

import Link from "next/link"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#2a3a1a] text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-3">The Kin</h3>
            <p className="text-white/80 text-sm leading-relaxed">Meaningful Connections, Mindful Moments.</p>
          </div>

          {/* Navigate Section */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider mb-4 uppercase">Navigate</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-white/80 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link href="/events" className="text-white/80 hover:text-white transition-colors text-sm">
                Events
              </Link>
              <Link href="/membership" className="text-white/80 hover:text-white transition-colors text-sm">
                Membership
              </Link>
              <Link href="/contact" className="text-white/80 hover:text-white transition-colors text-sm">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider mb-4 uppercase">Contact</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:thekinclubmail@gmail.com" className="text-white/80 hover:text-white transition-colors">
                thekinclubmail@gmail.com
              </a>
              <a href="tel:+919702100077" className="text-white/80 hover:text-white transition-colors">
                +91 9702100077
              </a>
              <p className="text-white/80 mt-2 leading-relaxed">Thapar Suburbia, Acharya Marg, Chembur - 400088</p>
              <p className="text-white/80 text-xs mt-2">Monday - Sunday 10 AM–6 PM IST</p>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mt-3">
                <Instagram className="w-5 h-5 text-white/80 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Legal Section */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider mb-4 uppercase">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/privacy" className="text-white/80 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/80 hover:text-white transition-colors text-sm">
                Terms & Conditions
              </Link>
              <Link href="/cancellation" className="text-white/80 hover:text-white transition-colors text-sm">
                Cancellation & Refund Policy
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-xs text-center md:text-left">
            © 2025 The Kinspace Wellness Private Limited. All rights reserved.
          </p>

          <Button
            onClick={scrollToTop}
            variant="outline"
            className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 text-xs px-6"
          >
            BACK TO TOP ↑
          </Button>
        </div>
      </div>

      {/* Decorative accent */}
      <div className="absolute top-8 right-8 hidden lg:block">
        {/* <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="4" fill="#c5d11c" />
          <circle cx="24" cy="8" r="2.5" fill="#c5d11c" />
          <circle cx="24" cy="40" r="2.5" fill="#c5d11c" />
          <circle cx="8" cy="24" r="2.5" fill="#c5d11c" />
          <circle cx="40" cy="24" r="2.5" fill="#c5d11c" />
          <circle cx="14" cy="14" r="2" fill="#c5d11c" />
          <circle cx="34" cy="34" r="2" fill="#c5d11c" />
          <circle cx="34" cy="14" r="2" fill="#c5d11c" />
          <circle cx="14" cy="34" r="2" fill="#c5d11c" />
        </svg> */}
      </div>
    </footer>
  )
}
