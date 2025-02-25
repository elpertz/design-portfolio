import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

/**
 * ProjectCard component
 * Displays an individual project with image, title, and category
 */
interface ProjectCardProps {
  image: string
  title: string
  category: string
  href: string
  diamond?: boolean
}

const ProjectCard = ({
  image,
  title,
  category,
  href,
  diamond = false
}: ProjectCardProps) => {
  return (
    <Link
      href={href}
      className="group block transform rounded-lg text-start transition-all duration-200 ease-out hover:-translate-y-1 hover:bg-gray-100/50"
    >
      <div
        className="relative aspect-[6/7] overflow-hidden rounded-2xl bg-gray-100"
        style={{
          boxShadow:
            '0px 4px 6px 0px rgba(0, 0, 0, 0.02) inset, 0px -3px 3px 1px rgba(255, 255, 255, 0.72)',
          border: '1px solid rgba(231, 231, 233, 0.39)'
        }}
      >
        {diamond ? (
          <div className="flex h-full items-center justify-center bg-black p-6">
            <Image
              src={image}
              alt={title}
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <div className="mt-3 flex flex-col gap-1 px-3">
        <h3>{title}</h3>
        <p className="text-muted-foreground text-sm">{category}</p>
      </div>
    </Link>
  )
}

/**
 * ProjectGrid component
 * Creates a responsive grid layout for featuring project cards
 */
const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        image="/images/main-report-payment.png"
        title="Second Look to Payment Reports"
        category="Case Study"
        href="/case-studies/payment-reports"
      />
      <ProjectCard
        image="/images/main-report-payment.png"
        title="Cleaning Addi's offering"
        category="Case Study"
        href="/case-studies/payment-reports"
      />
      <ProjectCard
        image="/images/main-report-payment.png"
        title="UI exploration and gems 💎"
        category="Playground"
        href="/case-studies/ui-exploration"
        diamond={true}
      />
    </div>
  )
}

export default ProjectGrid
