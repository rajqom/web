'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Luxury Home Renovation in Malibu",
    service: "Residential Roofing • Premium Installation",
    description: "Complete roof replacement featuring premium slate tiles, custom copper gutters, and a state-of-the-art waterproofing system to withstand coastal weather conditions.",
    startDate: "March 2023",
    endDate: "July 2023",
    image: "/images/projects/luxury-home.jpg",
    tags: ["Residential", "Luxury", "Waterproofing"]
  },
  {
    id: 2,
    title: "Downtown LA Office Tower",
    service: "Commercial Roofing • Green Installation",
    description: "Installation of a cutting-edge green roofing system, incorporating solar panels, rainwater harvesting, and energy saving materials. Achieved LEED Platinum certification.",
    startDate: "January 2023",
    endDate: "June 2023",
    image: "/images/projects/office-tower.jpg",
    tags: ["Commercial", "Sustainable", "LEED"]
  },
  {
    id: 3,
    title: "Beverly Hills Apartment Complex",
    service: "Multi-Family • Solar Installation",
    description: "Modern roofing solution with premium materials, integrated solar systems, and advanced drainage design for maximum efficiency and durability.",
    startDate: "August 2023",
    endDate: "December 2023",
    image: "/images/projects/apartment-complex.jpg",
    tags: ["Multi-Family", "Solar", "Premium"]
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-24 sm:py-32 bg-muted/30">
      <div className="container px-4 max-w-7xl mx-auto">
        {/* Heading Content */}
        <div className="mb-24 text-center">
          <span className="text-sm font-medium text-primary mb-3 block">
            Our Work
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-16">
            Explore our portfolio of successful roofing projects, showcasing our commitment to quality and innovation across residential and commercial properties.
          </p>
        </div>

        {/* Projects Content */}
        <div className="space-y-24 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div key={project.id} className="space-y-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                    <p className="text-sm font-medium text-primary">{project.service}</p>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
                    <span>Started: {project.startDate}</span>
                    <span>•</span>
                    <span>Completed: {project.endDate}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="group relative px-6 py-2 h-auto font-medium hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    View Project Details
                    <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </Button>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <div className="absolute bottom-4 left-4 z-10 flex gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              {index !== projects.length - 1 && <div className="w-full h-px bg-border/60" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
