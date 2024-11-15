'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FaqSection } from "@/components/ui/FAQSection"
import { TestimonialsCarousel } from '@/components/ui/TestimonialsCarousel'
import { useState } from 'react'
import { typography } from '@/styles/typography'
import { services } from '@/constants/services'
import { ProjectsSection } from "@/components/ui/ProjectsSection"
import { Clock, Home, Shield, Menu, X, ChevronDown, ChevronRight, Building2, Wrench, Settings, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

interface Service {
  number: string;
  title: string;
  description: string;
  href: string;
}

export default function Homepage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 flex h-16 items-center justify-between max-w-7xl mx-auto">
          <Link className="flex items-center gap-2 font-bold" href="#">
            <Shield className="h-6 w-6 text-primary" />
            <span className="hidden sm:inline-block">GuardTop Roofing</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              className="text-sm font-medium transition-colors hover:text-primary" 
              href="#about"
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
                Services
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] rounded-xl border bg-background shadow-lg hidden group-hover:block">
                <div className="relative">
                  {/* Arrow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 rotate-45 border-l border-t bg-background"></div>
                  
                  <div className="relative p-6 bg-background rounded-xl">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-medium mb-4 text-sm text-muted-foreground">Residential Services</h3>
                        <div className="space-y-3">
                          <Link 
                            href="#residential" 
                            className="group/item flex items-start gap-3 rounded-lg p-3 hover:bg-muted"
                          >
                            <Home className="h-5 w-5 text-primary" />
                            <div>
                              <div className="font-medium text-sm">Residential Roofing</div>
                              <div className="text-xs text-muted-foreground">Complete roofing solutions for homeowners</div>
                            </div>
                          </Link>
                          <Link 
                            href="#repairs" 
                            className="group/item flex items-start gap-3 rounded-lg p-3 hover:bg-muted"
                          >
                            <Shield className="h-5 w-5 text-primary" />
                            <div>
                              <div className="font-medium text-sm">Roof Repairs</div>
                              <div className="text-xs text-muted-foreground">Fast and reliable repair services</div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-4 text-sm text-muted-foreground">Commercial Services</h3>
                        <div className="space-y-3">
                          <Link 
                            href="#commercial" 
                            className="group/item flex items-start gap-3 rounded-lg p-3 hover:bg-muted"
                          >
                            <Building2 className="h-5 w-5 text-primary" />
                            <div>
                              <div className="font-medium text-sm">Commercial Roofing</div>
                              <div className="text-xs text-muted-foreground">Solutions for businesses and properties</div>
                            </div>
                          </Link>
                          <Link 
                            href="#maintenance" 
                            className="group/item flex items-start gap-3 rounded-lg p-3 hover:bg-muted"
                          >
                            <Clock className="h-5 w-5 text-primary" />
                            <div>
                              <div className="font-medium text-sm">Maintenance</div>
                              <div className="text-xs text-muted-foreground">Regular upkeep and inspections</div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t">
                      <Link 
                        href="#contact" 
                        className="flex items-center justify-between rounded-lg p-3 hover:bg-muted"
                      >
                        <div className="flex items-center gap-2">
                          <Phone className="h-5 w-5 text-primary" />
                          <span className="text-sm font-medium">Need emergency repairs?</span>
                        </div>
                        <span className="text-xs text-muted-foreground">Contact us 24/7 →</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link 
              className="text-sm font-medium transition-colors hover:text-primary" 
              href="#projects"
            >
              Projects
            </Link>
            <Link 
              className="text-sm font-medium transition-colors hover:text-primary" 
              href="#resources"
            >
              Resources
            </Link>
            <Link 
              className="text-sm font-medium transition-colors hover:text-primary" 
              href="#contact"
            >
              Contact Us
            </Link>
          </nav>
          
          <Button className="hidden md:inline-flex" asChild>
            <Link href="#contact">Book a Call</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="container px-4 py-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  className="text-sm font-medium transition-colors hover:text-primary px-4 py-2 rounded-lg hover:bg-muted" 
                  href="#about"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                
                {/* Services Section */}
                <div className="px-4 py-2">
                  <h3 className="text-sm font-medium mb-2">Services</h3>
                  <div className="pl-4 space-y-2">
                    <Link 
                      className="block text-sm text-muted-foreground hover:text-primary" 
                      href="#residential"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Residential Roofing
                    </Link>
                    <Link 
                      className="block text-sm text-muted-foreground hover:text-primary" 
                      href="#commercial"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Commercial Roofing
                    </Link>
                    <Link 
                      className="block text-sm text-muted-foreground hover:text-primary" 
                      href="#repairs"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Roof Repairs
                    </Link>
                    <Link 
                      className="block text-sm text-muted-foreground hover:text-primary" 
                      href="#maintenance"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Maintenance
                    </Link>
                  </div>
                </div>

                <Link 
                  className="text-sm font-medium transition-colors hover:text-primary px-4 py-2 rounded-lg hover:bg-muted" 
                  href="#projects"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link 
                  className="text-sm font-medium transition-colors hover:text-primary px-4 py-2 rounded-lg hover:bg-muted" 
                  href="#resources"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resources
                </Link>
                <Link 
                  className="text-sm font-medium transition-colors hover:text-primary px-4 py-2 rounded-lg hover:bg-muted" 
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <div className="pt-8 border-t flex flex-col items-end">
                  <Button size="lg">
                    Schedule Free Consultation
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    No obligation, same-day response
                  </p>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden bg-background">
          {/* Decorative background elements */}
          <div className="absolute inset-0">
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            {/* Gradient orbs */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/25 opacity-30 blur-[80px]" />
            <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-primary/20 opacity-40 blur-[60px]" />
            <div className="absolute left-1/4 top-1/2 h-[600px] w-[600px] rounded-full bg-primary/15 opacity-35 blur-[70px]" />
            
            {/* Accent lines */}
            <div className="absolute left-0 top-1/2 h-[2px] w-1/3 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute right-0 top-1/3 h-[2px] w-1/3 bg-gradient-to-l from-transparent via-primary/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="container px-4 py-24 sm:py-32 md:py-40 max-w-7xl mx-auto relative">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className={typography.h1}>
                Expert Roofing Solutions for Every Need
              </h1>
              <p className={typography.lead}>
                Whether you're a homeowner looking for a lasting upgrade or a property manager needing a commercial roof, we provide top-quality service tailored to your needs.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <div className="flex flex-col items-center">
                  <Button size="lg" className="w-full sm:w-auto">Get a Free Estimate</Button>
                  <span className={typography.caption}>For homeowners</span>
                </div>
                <div className="flex flex-col items-center">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">Schedule Consultation</Button>
                  <span className={typography.caption}>For property managers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-24 sm:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container px-4 max-w-7xl mx-auto">
            {/* Introduction Header */}
            <div className="max-w-3xl mx-auto text-center mb-20">
              <span className={`${typography.sectionLabel} mb-3 block`}>
                Our Services
              </span>
              <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Roofing Solutions
              </h3>
              <p className={`mt-6 ${typography.sectionSubtitle}`}>
                Our commitment is to quality ensures lasting protection for your property.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Image */}
              <div className="relative h-[640px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/roofing-expert.jpg"
                  alt="Professional Roofing Services"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 max-w-lg">
                  <h3 className={`${typography.h3} text-white mb-4`}>
                    We&apos;re Committed to Excellence
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    With decades of experience and a dedication to quality, we deliver superior roofing solutions for every project.
                  </p>
                </div>
              </div>

              {/* Right Column - Services List */}
              <div className="space-y-6">
                {services.map((service) => (
                  <Link 
                    key={service.title} 
                    href={service.href}
                    className="group block"
                  >
                    <div className="flex items-start gap-6 p-6 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-primary/20">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        {service.title.includes('Residential') && <Home className="h-6 w-6 text-primary" />}
                        {service.title.includes('Commercial') && <Building2 className="h-6 w-6 text-primary" />}
                        {service.title.includes('Repairs') && <Wrench className="h-6 w-6 text-primary" />}
                        {service.title.includes('Maintenance') && <Settings className="h-6 w-6 text-primary" />}
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className={typography.featureTitle}>{service.title}</h4>
                          <ChevronRight className="h-5 w-5 text-primary transform group-hover:translate-x-1 transition-transform" />
                        </div>
                        <p className={typography.featureDescription}>{service.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
                
                {/* Add CTA Button */}
                <div className="pt-8 border-t">
                  <Button size="lg">
                    Schedule Free Consultation
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    No obligation, same-day response
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-24 sm:py-32 md:py-40 bg-muted/50">
          <div className="container px-4 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-24">
            <span className={`${typography.sectionLabel} mb-3 block`}>
                Why GuardTop
            </span>
              <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Benefits for Every Client</h3>
              <p className="mt-4 text-lg text-muted-foreground">
                We deliver exceptional value through our comprehensive roofing solutions
              </p>
            </div>

            {/* Residential Benefits */}
            <div className="grid gap-16 lg:grid-cols-2 max-w-6xl mx-auto mb-32 items-center">
              {/* Left Column - Benefits List */}
              <div className="space-y-12">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight mb-2">For Homeowners</h3>
                  <p className="text-lg text-muted-foreground">Tailored solutions that protect your most valuable asset</p>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center">
                      <span className="text-lg font-semibold text-primary">01</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Unmatched Reliability</h4>
                      <p className="text-muted-foreground">
                        Industry-leading materials and installation techniques for lasting protection
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center">
                      <span className="text-lg font-semibold text-primary">02</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Comprehensive Warranty</h4>
                      <p className="text-muted-foreground">
                        Complete peace of mind with our extensive warranty coverage
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center">
                      <span className="text-lg font-semibold text-primary">03</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Expert Installation</h4>
                      <p className="text-muted-foreground">
                        Certified professionals ensuring perfect execution every time
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center">
                      <span className="text-lg font-semibold text-primary">04</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Personalized Solutions</h4>
                      <p className="text-muted-foreground">
                        Custom approaches tailored to your home's unique requirements
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative h-[520px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/residential-roofing.jpg"
                  alt="Professional Residential Roofing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6">
                    <p className="text-3xl font-bold text-white tracking-wider mb-4">FINANCING AVAILABLE</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Commercial Benefits */}
            <div className="grid gap-16 lg:grid-cols-2 max-w-6xl mx-auto items-center">
              {/* Left Column - Image */}
              <div className="relative h-[520px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/commercial-roofing.jpg"
                  alt="Professional Commercial Roofing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6">
                    <p className="text-3xl font-bold text-white tracking-wider">ENTERPRISE SOLUTIONS</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Benefits List */}
              <div className="space-y-12">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight mb-2">For Commercial Properties</h3>
                  <p className="text-lg text-muted-foreground">Enterprise solutions for maximum efficiency and durability</p>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center">
                      <span className="text-lg font-semibold text-primary">01</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Cost-Effective Durability</h4>
                      <p className="text-muted-foreground">
                        Long-term solutions that reduce maintenance costs and extend roof life
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center">
                      <span className="text-lg font-semibold text-primary">02</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Project Management</h4>
                      <p className="text-muted-foreground">
                        Strict timeline adherence with minimal business disruption
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center">
                      <span className="text-lg font-semibold text-primary">03</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Scale & Compliance</h4>
                      <p className="text-muted-foreground">
                        Handling any project size while meeting all industry regulations
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center">
                      <span className="text-lg font-semibold text-primary">04</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Energy Efficiency</h4>
                      <p className="text-muted-foreground">
                        Modern solutions that reduce energy costs and environmental impact
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Certifications & Awards</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
              <Image 
                src="/placeholder.svg" 
                alt="Certification 1" 
                width={150} 
                height={150} 
                priority={false}
                unoptimized={process.env.NODE_ENV === 'development'}
              />
              <Image src="/placeholder.svg" alt="Certification 2" width={150} height={150} />
              <Image src="/placeholder.svg" alt="Award 1" width={150} height={150} />
              <Image src="/placeholder.svg" alt="Award 2" width={150} height={150} />
            </div>
          </div>
        </section>

        <ProjectsSection />

        <section id="testimonials" className="w-full py-24 sm:py-32 bg-muted/30">
          <div className="container px-4 max-w-7xl mx-auto">
            <div className="mx-auto max-w-3xl text-center">
              <span className={`${typography.sectionLabel} mb-3 block`}>
                Testimonials
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                What Our Clients Say
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-16">
                Real feedback from satisfied customers who trust our roofing expertise
              </p>
            </div>

            <TestimonialsCarousel />
          </div>
        </section>

        <FaqSection />

        <section id="contact" className="w-full py-24 sm:py-32 bg-muted/30">
          <div className="container px-4 max-w-7xl mx-auto">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Get in touch for a free consultation and estimate for your roofing project
              </p>
            </div>

            <div className="mx-auto max-w-xl bg-background rounded-xl border-2 shadow-lg p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </label>
                  <Input
                    id="email"
                    placeholder="john@example.com"
                    type="email"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    placeholder="(123) 456-7890"
                    type="tel"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className={typography.small}>
                    Service Needed
                  </label>
                  <select 
                    id="service"
                    className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Roofing</option>
                    <option value="commercial">Commercial Roofing</option>
                    <option value="repair">Roof Repair</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="inspection">Roof Inspection</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    className="w-full min-h-[120px] flex rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="consent"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="consent" className="text-sm text-muted-foreground">
                    I agree to be contacted about my roofing project
                  </label>
                </div>

                <Button className="w-full" size="lg">
                  Get Free Estimate
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  We typically respond within 24 hours
                </p>
              </form>
            </div>

            <div className="mt-16 max-w-4xl mx-auto">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="group relative overflow-hidden rounded-xl border-2 p-6 hover:border-primary/50 transition-colors">
                  <div className="absolute top-0 right-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-primary/10 blur-2xl"></div>
                  <div className="relative">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className={`${typography.h4} mb-2`}>Call Us Anytime</h3>
                    <Link 
                      href="tel:+1234567890" 
                      className={typography.link}
                    >
                      (123) 456-7890
                    </Link>
                  </div>
                </div>
              
                <div className="group relative overflow-hidden rounded-xl border-2 p-6 hover:border-primary/50 transition-colors">
                  <div className="absolute top-0 right-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-primary/10 blur-2xl"></div>
                  <div className="relative">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className={`${typography.h4} mb-2`}>Email Us</h3>
                    <Link 
                      href="mailto:info@guardtop.com" 
                      className={typography.link}
                    >
                      info@guardtop.com
                    </Link>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl border-2 p-6 hover:border-primary/50 transition-colors">
                  <div className="absolute top-0 right-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-primary/10 blur-2xl"></div>
                  <div className="relative">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className={`${typography.h4} mb-2`}>Business Hours</h3>
                    <div className="space-y-1">
                      <p className="text-base text-muted-foreground">Mon-Fri: 8am - 6pm</p>
                      <p className="text-sm text-muted-foreground">Sat-Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted">
        <div className="container px-4 py-12 md:py-16 max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className={typography.h4}>About Us</h3>
              <p className={typography.small}>
                Professional roofing solutions with over 20 years of experience serving our community.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className={typography.h4}>Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className={typography.link}>
                    Residential Roofing
                  </Link>
                </li>
                <li>
                  <Link href="#" className={typography.link}>
                    Commercial Roofing
                  </Link>
                </li>
                <li>
                  <Link href="#" className={typography.link}>
                    Roof Repairs
                  </Link>
                </li>
                <li>
                  <Link href="#" className={typography.link}>
                    Maintenance
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className={typography.h4}>Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className={typography.link}>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className={typography.link}>
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className={typography.link}>
                    Free Estimate
                  </Link>
                </li>
                <li>
                  <Link href="#" className={typography.link}>
                    Emergency Service
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className={typography.h4}>Contact</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">123 Roofing Street</li>
                <li className="text-muted-foreground">Los Angeles, CA 90001</li>
                <li>
                  <Link href="tel:+1234567890" className={typography.link}>
                    (123) 456-7890
                  </Link>
                </li>
                <li>
                  <Link href="mailto:info@guardtop.com" className={typography.link}>
                    info@guardtop.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 border-t pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2024 GuardTop Roofing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
