import Image from "next/image"

interface Testimonial {
  id: string
  name: string
  text: string
  avatar: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 text-transparent bg-clip-text font-sans">
          Ce que nos clients disent
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 transition-all hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 font-sans">{testimonial.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 font-sans">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
