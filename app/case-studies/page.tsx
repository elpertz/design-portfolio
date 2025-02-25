import React from 'react'
import { getCaseStudies } from '@/lib/getCaseStudies'
import CaseStudyCard from '@/components/CaseStudyCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies | Sebastian Pertuz',
  description: 'Explore my case studies and design work'
}

/**
 * CaseStudiesPage component
 * Lists all case studies with filtering options
 */
export default function CaseStudiesPage() {
  const caseStudies = getCaseStudies()

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-title mb-4">Case Studies</h1>
        <p className="mx-auto max-w-2xl text-zinc-600">
          Explore my design work and case studies. Each project showcases my
          approach to solving design challenges and creating impactful user
          experiences.
        </p>
      </div>

      {/* Filter options could go here */}

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map(caseStudy => (
          <CaseStudyCard
            key={caseStudy.slug}
            caseStudy={caseStudy}
            diamond={caseStudy.slug === 'ui-exploration'}
          />
        ))}
      </div>
    </div>
  )
}
