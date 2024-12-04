"use client";
import { Button } from "@/components/ui/button"

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">1-on-1 Private Mentorship</h3>
            <p className="mb-4">Personalized guidance tailored to individual trading goals and challenges.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Telegram Community Channel (Coming Soon)</h3>
            <p className="mb-4">A growing network of traders sharing insights and accessing exclusive content.</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}>
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}

