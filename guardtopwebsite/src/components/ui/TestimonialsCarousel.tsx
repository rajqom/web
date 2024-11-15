'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Malibu Homeowner",
    initials: "JD",
    quote: "GuardTop Roofing exceeded our expectations with their attention to detail and professional service.",
    rating: 5,
    image: "/images/testimonials/image1.jpg"
  },
  {
    id: 2,
    name: "Jimmy Elizarazzas",
    role: "Private Homeowner",
    initials: "JE",
    quote: "Expert commercial roofing team. On-time delivery and within budget. Highly recommended!",
    rating: 5,
    image: "/images/testimonials/image2.jpg"
  },
  {
    id: 3,
    name: "Sarah James",
    role: "Business Owner",
    initials: "SJ",
    quote: "Outstanding quality and customer service. Best roofing investment for our business.",
    rating: 5,
    image: "/images/testimonials/image3.jpg"
  },
  {
    id: 4,
    name: "Khadija Muhammed",
    role: "Homeowner",
    initials: "KM",
    quote: "Their team was professional, efficient, and delivered exceptional results on our roof replacement.",
    rating: 5,
    image: "/images/testimonials/image4.jpg"
  },
  {
    id: 5,
    name: "Ketut Subiyanto",
    role: "Real Estate Developer",
    initials: "KS",
    quote: "Reliable, professional, and excellent communication throughout our commercial project.",
    rating: 5,
    image: "/images/testimonials/image5.jpg"
  },
  {
    id: 6,
    name: "Olusupo Jaiyeola",
    role: "Property Owner",
    initials: "OJ",
    quote: "The attention to detail and quality of work was impressive. Highly satisfied with the results.",
    rating: 5,
    image: "/images/testimonials/image6.jpg"
  }
]

export function TestimonialsCarousel({ width: initialWidth }: { width?: number }) {
  const [currentPage, setCurrentPage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [width, setWidth] = useState(initialWidth)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const handleNext = () => {
    if (isAnimating || currentPage >= testimonials.length - 1) return
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

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="grid gap-16 lg:grid-cols-2 items-center">
        {/* Left Column - Image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
          <Image
            src={testimonials[currentPage].image}
            alt={testimonials[currentPage].name}
            fill
            className="object-cover transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Right Column - Content */}
        <div className="space-y-6">
          <div className="flex gap-1">
            {[...Array(testimonials[currentPage].rating)].map((_, i) => (
              <Star 
                key={i} 
                className="h-5 w-5 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>

          <blockquote className="text-lg font-medium leading-relaxed">
            {testimonials[currentPage].quote}
          </blockquote>

          <div className="space-y-1">
            <div className="font-semibold text-lg">
              {testimonials[currentPage].name}
            </div>
            <div className="text-muted-foreground">
              {testimonials[currentPage].role}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-12">
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`h-2 rounded-full transition-all duration-200 ${
                i === currentPage 
                  ? 'w-8 bg-primary' 
                  : 'w-2 bg-primary/20 hover:bg-primary/40'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className="h-10 w-10 rounded-full border flex items-center justify-center transition-colors hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage >= testimonials.length - 1}
            className="h-10 w-10 rounded-full border flex items-center justify-center transition-colors hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
} 