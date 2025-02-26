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
}

const ProjectCard = ({ image, title, category, href }: ProjectCardProps) => {
  return (
    <Link
      href={href}
      className="group block transform rounded-[18px] p-1 text-start transition-all duration-200 ease-out hover:-translate-y-1 hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
    >
      <div className="relative aspect-[6/7] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.02)_inset,_0px_-3px_3px_1px_rgba(255,255,255,0.72)] group-hover:bg-indigo-500/80 dark:border-zinc-700 dark:bg-zinc-800 dark:shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)_inset,_0px_-3px_3px_1px_rgba(255,255,255,0.05)]">
        <Image
          src={image}
          alt={title}
          width={1600}
          height={900}
          sizes="w-[31.5rem] h-[18rem]"
          className="absolute -right-40 -bottom-4 scale-200 rounded-md border-2 border-white object-cover shadow-lg transition-all duration-800 ease-out group-hover:-bottom-1 group-hover:scale-205 dark:border-zinc-800"
        />
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
      />
    </div>
  )
}

export default ProjectGrid
