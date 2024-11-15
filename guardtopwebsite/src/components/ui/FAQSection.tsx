'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "How long does a typical roof installation take?",
    answer: "A typical residential roof installation usually takes 2-4 days, depending on the size and complexity of your roof. Commercial projects may take longer. We'll provide a detailed timeline during your consultation."
  },
  {
    question: "What type of warranty do you offer?",
    answer: "We offer comprehensive warranties on both materials and workmanship. Our standard warranty covers materials for 25-30 years and labor for 10 years. Extended warranty options are also available."
  },
  {
    question: "Do you offer emergency repair services?",
    answer: "Yes, we provide 24/7 emergency repair services for urgent roofing issues. Our team typically responds within 2-4 hours for emergency situations to prevent further damage to your property."
  },
  {
    question: "How do I know if I need a roof replacement or just repairs?",
    answer: "Several factors determine this: age of your roof, extent of damage, and cost-effectiveness of repairs. We provide free inspections to assess your roof's condition and recommend the most appropriate solution based on our findings."
  },
  {
    question: "What roofing materials do you recommend?",
    answer: "Our recommendations vary based on your specific needs, climate, budget, and architectural style. We offer a wide range of materials including asphalt shingles, metal roofing, tile, and flat roof systems. During consultation, we'll discuss the pros and cons of each option."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we are fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers' compensation coverage to protect both our clients and employees throughout every project."
  },
  {
    question: "How do you handle unexpected weather during installation?",
    answer: "We closely monitor weather conditions and plan accordingly. If unexpected weather occurs, we ensure your property is properly protected with temporary coverage until work can safely resume."
  },
  {
    question: "What financing options do you offer?",
    answer: "We offer various financing options including flexible payment plans and partnerships with leading financial institutions. We can help you find a payment solution that fits your budget while getting the quality roof you need."
  },
  {
    question: "How long will my new roof last?",
    answer: "The lifespan of your roof depends on the material chosen and maintenance. Asphalt shingles typically last 20-30 years, metal roofs 40-70 years, and tile roofs 50+ years. Regular maintenance can help extend these lifespans."
  },
  {
    question: "Do you provide maintenance services after installation?",
    answer: "Yes, we offer regular maintenance programs to extend the life of your roof. This includes annual inspections, cleaning, minor repairs, and preventative care to ensure your roof performs optimally."
  }
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full py-24 sm:py-32 bg-white">
      <div className="container px-4 max-w-7xl mx-auto">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find answers to common questions about our roofing services
          </p>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-gray-100">
          {faqData.map((faq, index) => (
            <div key={index} className="py-6">
              <button 
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between text-left"
              >
                <h3 className="text-base font-medium text-gray-900 group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`h-5 w-5 text-primary transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="mt-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-base text-muted-foreground mb-4">
            Still have questions?
          </p>
          <Button 
            variant="outline" 
            className="hover:bg-primary hover:text-white transition-colors"
          >
            Contact Our Support Team
          </Button>
        </div>
      </div>
    </section>
  )
}