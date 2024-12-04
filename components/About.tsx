"use client";

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <Image
            src="/1713119792165.jpeg" // Leading slash here
            alt="Qasim"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">About Qasim</h2>
          <p className="text-lg">
            Accomplished proprietary trader with 4-5 years of proven success delivering consistent, top-tier payouts from leading proprietary trading firms. Highly experienced across a broad spectrum of asset classes, including equities, derivatives, fixed income, and commodities. Demonstrates exceptional market insight, risk management expertise, and the ability to capitalize on complex trading opportunities. Recognized for outperforming benchmarks and contributing to firm profitability, I bring a strategic mindset and a relentless drive to excel in high-stakes trading environments.
          </p>
        </div>
      </div>
    </section>
  );
}
