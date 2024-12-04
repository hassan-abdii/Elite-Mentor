export default function Curriculum() {
  const phases = [
    {
      title: "Introduction to Trading",
      description: "Basics and roadmap for your trading journey."
    },
    {
      title: "Psychology & Mindset",
      description: "Self-mastery, mental habits, and trading psychology."
    },
    {
      title: "Trading Fundamentals",
      description: "Principles, concepts, and technical skills."
    },
    {
      title: "Advanced Trading Strategies",
      description: "Learn 27+ advanced strategies and tactics."
    },
    {
      title: "Weekly Live Market Breakdowns",
      description: "Live Sunday sessions with Q&A and market insights."
    }
  ]

  return (
    <section id="curriculum" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Your Roadmap to Success</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
              <p>{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

