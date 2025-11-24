import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FlowerAccent } from "@/components/flower-accent"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

const membershipTiers = [
  {
    name: "Explorer",
    price: "₹999",
    period: "per month",
    description: "Perfect for those starting their wellness journey",
    features: [
      "2 events per month",
      "Access to community events",
      "Member-only newsletter",
      "Early bird event notifications",
      "10% discount on workshops",
    ],
  },
  {
    name: "Connector",
    price: "₹2,499",
    period: "per month",
    description: "For the wellness enthusiast",
    features: [
      "6 events per month",
      "Priority event booking",
      "Access to exclusive gatherings",
      "Quarterly wellness consultation",
      "20% discount on all workshops",
      "Bring a friend to 1 event/month",
    ],
    popular: true,
  },
  {
    name: "Kinship",
    price: "₹4,999",
    period: "per month",
    description: "Ultimate wellness experience",
    features: [
      "Unlimited events",
      "VIP access to all experiences",
      "Private wellness coaching session",
      "Host your own event",
      "30% discount on workshops",
      "Exclusive annual retreat access",
      "Bring a friend to unlimited events",
    ],
  },
]

export default function MembershipPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-[#3a4a2a] to-[#2a3a1a] pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="relative mb-16 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Membership</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Choose the membership that fits your wellness goals and become part of our community
            </p>
            <FlowerAccent className="absolute -top-4 -right-4 hidden lg:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {membershipTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative overflow-hidden border-2 ${
                  tier.popular ? "border-[#c5d11c] bg-[#4a5a3a]/50" : "border-white/30 bg-[#4a5a3a]/30"
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-[#c5d11c] text-[#2a3a1a] px-4 py-1 text-sm font-semibold">
                    POPULAR
                  </div>
                )}

                <CardHeader className="text-center pb-8 pt-8">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-white/70 text-sm ml-2">{tier.period}</span>
                  </div>
                  <p className="text-white/80 text-sm">{tier.description}</p>
                </CardHeader>

                <CardContent className="space-y-4 pb-8">
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#c5d11c] flex-shrink-0 mt-0.5" />
                      <span className="text-white/90 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}

                  <Button
                    className={`w-full mt-8 py-6 font-semibold ${
                      tier.popular
                        ? "bg-[#c5d11c] text-[#2a3a1a] hover:bg-[#d5e12c]"
                        : "bg-white/10 text-white border-2 border-white/60 hover:bg-white/20"
                    }`}
                  >
                    Choose {tier.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-[#4a5a3a]/30 p-8 md:p-12 rounded-lg max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6 text-center">
              All Memberships Include
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/90">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#c5d11c] flex-shrink-0 mt-1" />
                <span>Access to member community chat</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#c5d11c] flex-shrink-0 mt-1" />
                <span>Wellness resources library</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#c5d11c] flex-shrink-0 mt-1" />
                <span>Birthday month special surprise</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#c5d11c] flex-shrink-0 mt-1" />
                <span>Partner discounts at wellness venues</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
