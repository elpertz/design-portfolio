import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { CaseStudy } from './getCaseStudies'

/**
 * Gets a single case study by its slug
 * Returns null if not found
 */
export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  // Get the directory path
  const contentDirectory = path.join(process.cwd(), 'content/case-studies')

  // Get all files in the directory
  const filenames = fs.readdirSync(contentDirectory)

  // Filter for MDX files
  const mdxFiles = filenames.filter(filename => filename.endsWith('.mdx'))

  // Find the file with matching slug in frontmatter
  for (const filename of mdxFiles) {
    const filePath = path.join(contentDirectory, filename)
    const fileContent = fs.readFileSync(filePath, 'utf8')

    // Parse frontmatter
    const { data, content } = matter(fileContent)

    // Check if slug matches
    if (data.slug === slug) {
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
    }
  }

  // Return null if not found
  return null
}
