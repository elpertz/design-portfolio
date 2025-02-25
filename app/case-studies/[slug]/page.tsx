import React from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getCaseStudyBySlug } from '@/lib/getCaseStudyBySlug'
import { getCaseStudies } from '@/lib/getCaseStudies'
import { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'

// Generate metadata for the page
export async function generateMetadata({
  params
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const caseStudy = getCaseStudyBySlug(params.slug)

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found'
    }
  }

  return {
    title: `${caseStudy.title} | Sebastian Pertuz`,
    description: caseStudy.excerpt,
    openGraph: {
      images: [caseStudy.coverImage]
    }
  }
}

// Generate static params for all case studies
export async function generateStaticParams() {
  const caseStudies = getCaseStudies()

  return caseStudies.map(caseStudy => ({
    slug: caseStudy.slug
  }))
}

/**
 * CaseStudyPage component
 * Displays a single case study with all its details
 */
export default function CaseStudyPage({
  params
}: {
  params: { slug: string }
}) {
  const caseStudy = getCaseStudyBySlug(params.slug)

  // If case study not found, show 404 page
  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-title mb-4">{caseStudy.title}</h1>
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="text-lg font-medium">{caseStudy.company}</span>
          <span className="text-zinc-500">{caseStudy.period}</span>
        </div>

        {/* Tags */}
        {caseStudy.tags && caseStudy.tags.length > 0 && (
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {caseStudy.tags.map(tag => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Team */}
        {caseStudy.team && caseStudy.team.length > 0 && (
          <div className="mb-8">
            <h3 className="mb-2 text-lg font-medium">Team</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {caseStudy.team.map((member, index) => (
                <div key={index} className="text-sm">
                  <span className="font-medium">{member.role}:</span>{' '}
                  {member.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Cover Image */}
      <div className="mb-12 overflow-hidden rounded-xl">
        <Image
          src={caseStudy.coverImage}
          alt={caseStudy.title}
          width={1200}
          height={675}
          className="w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="prose prose-zinc mx-auto max-w-3xl">
        <MDXRemote source={caseStudy.content} />
      </div>
    </div>
  )
}
