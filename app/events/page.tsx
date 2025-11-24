'use client'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FlowerAccent } from "@/components/flower-accent"
import { Card, CardContent } from "@/components/ui/card"

const pastEvents = [
  {
    id: 1,
    title: "yoga @ greenr cafe, breach candy:",
    description: ["stretch, breathe, play,", "smoothie bowls, toasts, games."],
    image: "/group-yoga-class-outdoors-on-grass-with-people-str.jpg",
  },
  {
    id: 2,
    title: "spin class @ mma matrix, bandra:",
    description: ["pedal. refuel. brunch."],
    image: "/indoor-spin-cycling-class-with-people-on-bikes.jpg",
  },
  {
    id: 3,
    title: "meditation @ seaside, juhu:",
    description: ["breathe, reflect, connect,", "guided meditation, tea ceremony."],
    image: "/peaceful-meditation-group-by-the-beach-at-sunset.jpg",
  },
]

const upcomingEvents = [
  {
    id: 4,
    title: "sound healing @ the studio:",
    date: "March 15, 2025",
    time: "6:00 PM - 8:00 PM",
    description: "Immersive sound bath experience with crystal bowls and gongs.",
    spots: "12 spots left",
    image: "/sound-healing-session-with-singing-bowls.jpg",
  },
  {
    id: 5,
    title: "trail hike @ sanjay gandhi park:",
    date: "March 22, 2025",
    time: "7:00 AM - 11:00 AM",
    description: "Morning hike followed by healthy breakfast.",
    spots: "8 spots left",
    image: "/people-hiking-on-forest-trail.jpg",
  },
]

export default function EventsPage() {

  const handleClick = ()=>{
     window.open("https://docs.google.com/forms/d/e/1FAIpQLScbWR4E7rwX0rxtuXua4oH5fa8J9BPx7XcIjgoRunpOzsXgOw/viewform?usp=dialog", "_blank")
  }
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-[#3a4a2a] to-[#2a3a1a] pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Upcoming Events Section */}
          <section className="mb-20">
            <div className="relative mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-2">upcoming events</h2>
              <FlowerAccent className="absolute -top-4 -right-4 hidden lg:block" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {upcomingEvents.map((event) => (
                <Card
                  key={event.id}
                  className="overflow-hidden border-0 bg-[#4a5a3a]/30 hover:bg-[#4a5a3a]/40 transition-all"
                >
                  <div
                    className="h-64 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${event.image})`,
                    }}
                  />
                  <CardContent className="p-6 text-white" >
                    <h3 className="text-2xl font-serif mb-3 text-balance">{event.title}</h3>
                    <div className="space-y-2 text-sm text-white/80 mb-4">
                      <p>{event.date}</p>
                      <p>{event.time}</p>
                      <p className="text-[#c5d11c] font-semibold">{event.spots}</p>
                    </div>
                    <p className="text-white/90 leading-relaxed mb-4">{event.description}</p>
                    <button onClick={handleClick} className="w-full py-3 px-6 bg-white/10 hover:bg-white/20 border border-white/40 text-white font-semibold rounded-md transition-colors">
                      Register Now
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Past Events Section */}
          <section>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-12">past events</h2>

            <div className="space-y-8 max-w-6xl mx-auto">
              {pastEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-lg ${
                    index % 2 === 0 ? "" : "md:grid-flow-dense"
                  }`}
                >
                  <div
                    className={`${index % 2 === 0 ? "" : "md:col-start-2"}`}
                    style={{
                      backgroundImage: `url(${event.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      minHeight: "300px",
                    }}
                  />
                  <div className="bg-[#a8a89c] p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-serif mb-6 text-[#2a3a1a] text-balance">{event.title}</h3>
                    <div className="space-y-2 text-[#3a4a2a]">
                      {event.description.map((line, i) => (
                        <p key={i} className="text-lg leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
