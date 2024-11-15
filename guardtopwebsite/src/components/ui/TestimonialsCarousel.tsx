'use client'

import { useState, useRef } from 'react'
import { Card } from './card'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Malibu Homeowner",
    initials: "JD",
    quote: "GuardTop Roofing exceeded our expectations with their attention to detail and professional service.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Property Manager",
    initials: "SJ",
    quote: "Expert commercial roofing team. On-time delivery and within budget. Highly recommended!",
    rating: 5
  },
  {
    id: 3,
    name: "Robert Martinez",
    role: "Business Owner",
    initials: "RM",
    quote: "Outstanding quality and customer service. Best roofing investment for our business.",
    rating: 5
  },
  {
    id: 4,
    name: "Emily Wilson",
    role: "Homeowner",
    initials: "EW",
    quote: "Their team was professional, efficient, and delivered exceptional results on our roof replacement.",
    rating: 5
  },
  {
    id: 5,
    name: "Michael Chang",
    role: "Real Estate Developer",
    initials: "MC",
    quote: "Reliable, professional, and excellent communication throughout our commercial project.",
    rating: 5
  },
  {
    id: 6,
    name: "Lisa Anderson",
    role: "Property Owner",
    initials: "LA",
    quote: "The attention to detail and quality of work was impressive. Highly satisfied with the results.",
    rating: 5
  }
]

export function TestimonialsCarousel() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const itemsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  }

  const totalPages = Math.ceil(testimonials.length / itemsPerPage.desktop)

  const handleNext = () => {
    if (isAnimating || currentPage >= totalPages - 1) return
    setIsAnimating(true)
    setCurrentPage(prev => prev + 1)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handlePrev = () => {
    if (isAnimating || currentPage <= 0) return
    setIsAnimating(true)
    setCurrentPage(prev => prev - 1)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <Card className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-6 border bg-background shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out">
      <div className="flex gap-1 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star 
            key={i} 
            className="h-4 w-4 text-amber-400 fill-amber-400"
          />
        ))}
      </div>
      <blockquote className="text-base font-medium mb-4 line-clamp-3">
        "{testimonial.quote}"
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
          <span className="text-sm font-semibold">{testimonial.initials}</span>
        </div>
        <div>
          <div className="font-semibold text-sm">{testimonial.name}</div>
          <div className="text-xs text-muted-foreground">{testimonial.role}</div>
        </div>
      </div>
    </Card>
  )

  return (
    <div className="relative max-w-5xl mx-auto px-12">
      <button 
        onClick={handlePrev}
        disabled={currentPage === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-background shadow-lg border hover:border-primary/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Previous testimonials"
      >
        <ChevronLeft className="h-5 w-5 text-primary" />
      </button>

      <div className="overflow-hidden">
        <div 
          ref={containerRef}
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>

      <button 
        onClick={handleNext}
        disabled={currentPage >= totalPages - 1}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-background shadow-lg border hover:border-primary/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Next testimonials"
      >
        <ChevronRight className="h-5 w-5 text-primary" />
      </button>

      <div className="flex justify-center gap-3 mt-10">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`h-2 rounded-full transition-all ${
              i === currentPage 
                ? 'w-6 bg-primary' 
                : 'w-2 bg-primary/20 hover:bg-primary/40'
            }`}
            aria-label={`Go to testimonial page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 