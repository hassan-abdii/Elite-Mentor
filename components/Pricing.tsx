"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Pricing() {
  const plans = [
    {
      title: "1-on-1 Mentorship",
      originalPrice: "£999",
      discountedPrice: "£499.50",
      description: "Personalized trading guidance",
      features: [
        "4 weekly private sessions",
        "Custom strategy development",
        "Performance tracking",
        "Email support",
      ],
      cta: "Get Started",
      mailto: {
        email: "qazzmabdi@gmail.com",
        subject: "I want to have 1-on-1 mentorship",
        body: "Hi,\n\nI am interested in the 1-on-1 Mentorship plan. Please provide more details about the next steps.\n\nThank you.",
      },
    },
    {
      title: "Community Channel",
      price: "£99/month",
      description: "Coming soon",
      features: [
        "Daily market analysis",
        "Trading setups",
        "Community access",
        "Group discussions",
      ],
      cta: "Coming Soon",
      disabled: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-100">Pricing Plans</h2>
        <p className="text-xl text-center mb-12 text-gray-300">
          Choose the plan that best fits your trading journey
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 relative overflow-hidden">
              {plan.discountedPrice && (
                <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 rounded-bl-lg font-semibold text-sm">
                  50% OFF
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-gray-100">{plan.title}</CardTitle>
                <CardDescription className="text-gray-300">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {plan.discountedPrice ? (
                  <div className="mb-6">
                    <p className="text-4xl font-bold text-gray-100">
                      {plan.discountedPrice}
                      <span className="text-lg font-normal">/month</span>
                    </p>
                    <p className="text-xl text-gray-400 line-through mt-1">{plan.originalPrice}/month</p>
                    <p className="text-sm text-yellow-400 font-semibold mt-2">Limited Time Only</p>
                  </div>
                ) : (
                  <p className="text-4xl font-bold mb-6 text-gray-100">{plan.price}</p>
                )}
                <ul className="space-y-2 text-gray-300 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                {!plan.disabled ? (
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={() => {
                      if (plan.mailto) {
                        const mailtoLink = `mailto:${plan.mailto.email}?subject=${encodeURIComponent(
                          plan.mailto.subject
                        )}&body=${encodeURIComponent(plan.mailto.body)}`;
                        window.open(mailtoLink, "_blank");
                      } else {
                        console.error("Mailto details are not defined for this plan.");
                      }
                    }}
                  >
                    {plan.cta}
                  </Button>
                ) : (
                  <Button className="w-full" size="lg" disabled>
                    {plan.cta}
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

