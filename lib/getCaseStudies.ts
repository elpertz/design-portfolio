import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

/**
 * Gets all case studies from the content directory
 * Parses frontmatter and returns an array of case study metadata
 */
export interface CaseStudy {
  title: string
  company: string
  year: string
  period: string
  team: { role: string; name: string }[]
  slug: string
  excerpt: string
  coverImage: string
  tags: string[]
  featured?: boolean
  content: string
}

export function getCaseStudies(): CaseStudy[] {
  // Get the directory path
  const contentDirectory = path.join(process.cwd(), 'content/case-studies')

  // Get all files in the directory
  const filenames = fs.readdirSync(contentDirectory)

  // Filter for MDX files
  const mdxFiles = filenames.filter(filename => filename.endsWith('.mdx'))

  // Map through files and get frontmatter
  const caseStudies = mdxFiles.map(filename => {
    // Read file content
    const filePath = path.join(contentDirectory, filename)
    const fileContent = fs.readFileSync(filePath, 'utf8')

    // Parse frontmatter
    const { data, content } = matter(fileContent)

    // Return case study with frontmatter and content
    return {
      title: data.title,
      company: data.company,
      year: data.year,
      period: data.period,
      team: data.team,
      slug: data.slug,
      excerpt: data.excerpt,
      coverImage: data.coverImage,
      tags: data.tags,
      featured: data.featured || false,
      content
    } as CaseStudy
  })

  // Sort by featured first, then by year (newest first)
  return caseStudies.sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return parseInt(b.year) - parseInt(a.year)
  })
}

/**
 * Gets featured case studies
 */
export function getFeaturedCaseStudies(): CaseStudy[] {
  const allCaseStudies = getCaseStudies()
  return allCaseStudies.filter(study => study.featured)
}

/**
 * Gets recent case studies (limited by count)
 */
export function getRecentCaseStudies(count: number = 3): CaseStudy[] {
  const allCaseStudies = getCaseStudies()
  return allCaseStudies.slice(0, count)
}
