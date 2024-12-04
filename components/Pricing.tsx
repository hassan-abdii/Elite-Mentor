import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Pricing() {
  const plans = [
    {
      title: "1-on-1 Mentorship",
      price: "£999/month",
      description: "Personalized trading guidance",
      features: [
        "4 weekly private sessions",
        "Custom strategy development",
        "Performance tracking",
        "Email support"
      ],
      cta: "Get Started"
    },
    {
      title: "Community Channel",
      price: "£99/month",
      description: "Coming soon",
      features: [
        "Daily market analysis",
        "Trading setups",
        "Community access",
        "Group discussions"
      ],
      cta: "Coming Soon",
      disabled: true
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-100">Pricing Plans</h2>
        <p className="text-xl text-center mb-12 text-gray-300">Choose the plan that best fits your trading journey</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-100">{plan.title}</CardTitle>
                <CardDescription className="text-gray-300">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold mb-6 text-gray-100">{plan.price}</p>
                <ul className="space-y-2 text-gray-300 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg" disabled={plan.disabled}>
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

