"use client";

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{backgroundImage: "url('https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}
      ></div>
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div className="relative z-20">
        <h2 className="text-5xl font-bold mb-4">Elite Mentorship: Empowering Traders for Success</h2>
        <p className="text-xl mb-8">Instant Access to Trading Education | Secure Payment</p>
        <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}>
          Enroll Now
        </Button>
      </div>
    </section>
  )
}

