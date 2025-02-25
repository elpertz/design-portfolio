'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CaseStudy } from '@/lib/getCaseStudies'

/**
 * CaseStudyCard component
 * Displays a preview of a case study with image, title, company, and excerpt
 */
interface CaseStudyCardProps {
  caseStudy: CaseStudy
  diamond?: boolean
}

const CaseStudyCard = ({ caseStudy, diamond = false }: CaseStudyCardProps) => {
  const { title, company, year, excerpt, coverImage, slug, tags } = caseStudy

  return (
    <Link
      href={`/case-studies/${slug}`}
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
              src={coverImage}
              alt={title}
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        ) : (
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>

      <div className="mt-3 flex flex-col gap-1 px-3">
        <h3 className="font-medium">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-500">{company}</span>
          <span className="text-xs text-zinc-400">{year}</span>
        </div>
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map(tag => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}

export default CaseStudyCard
