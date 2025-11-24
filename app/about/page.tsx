import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FlowerAccent } from "@/components/flower-accent"

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-[#3a4a2a] to-[#2a3a1a] pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative mb-12">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white text-center mb-4">About The Kin</h1>
            <p className="text-xl md:text-2xl text-white/90 text-center italic font-serif">
              Meaningful Connections, Mindful Moments.
            </p>
            <FlowerAccent className="absolute -top-4 -right-4 hidden lg:block" />
          </div>

          <div className="space-y-8 text-white/90 leading-relaxed">
            <div className="bg-[#4a5a3a]/30 p-8 md:p-12 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">Our Story</h2>
              <p className="mb-4">
                The Kin is more than a wellness space—it's a community built on the foundation of meaningful connections
                and mindful moments. We believe that true wellness comes from nurturing not just the body, but also the
                mind and soul through shared experiences.
              </p>
              <p>
                Founded in Mumbai, we've created a sanctuary where people can come together to explore various wellness
                practices, from yoga and meditation to cycling and sound healing, all while building genuine connections
                with like-minded individuals.
              </p>
            </div>

            <div className="bg-[#4a5a3a]/30 p-8 md:p-12 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">Our Mission</h2>
              <p className="mb-4">
                To foster a vibrant community where wellness meets connection. We curate experiences that bring people
                together in meaningful ways, creating spaces where strangers become friends and healthy habits become
                joyful rituals.
              </p>
            </div>

            <div className="bg-[#4a5a3a]/30 p-8 md:p-12 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">What We Offer</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#c5d11c] mr-3 text-xl">•</span>
                  <span>Curated wellness events across Mumbai</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5d11c] mr-3 text-xl">•</span>
                  <span>Yoga, meditation, and movement classes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5d11c] mr-3 text-xl">•</span>
                  <span>Community gatherings and social experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5d11c] mr-3 text-xl">•</span>
                  <span>Mindful dining and wellness workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5d11c] mr-3 text-xl">•</span>
                  <span>Outdoor adventures and nature experiences</span>
                </li>
              </ul>
            </div>

            <div className="text-center mt-12">
              <p className="text-2xl font-serif italic text-white mb-8">
                Join us in creating a kinder, more connected world.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
