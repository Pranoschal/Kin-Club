import Link from "next/link"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#3a4a2a]/95 backdrop-blur-sm border-b border-[#4a5a3a]">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold text-white tracking-tight">
          kin
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-white/90 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/events" className="text-white/90 hover:text-white transition-colors">
            Events
          </Link>
          <Link href="/contact" className="text-white/90 hover:text-white transition-colors">
            Contact
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 text-white/90 hover:text-white transition-colors" />
          </Link>
        </nav>

        <Button
          asChild
          className="bg-transparent border-2 border-white/60 text-white hover:bg-white/10 hover:border-white transition-all"
        >
          <Link href="/signup">SIGN UP</Link>
        </Button>
      </div>
    </header>
  )
}
