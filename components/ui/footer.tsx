import React from 'react'
import Link from 'next/link'
import ThemeToggle from './theme-toggle'

/**
 * Footer component
 * Displays social links and copyright information
 */
export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={`border-t border-zinc-200 py-8 ${className}`}>
      <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-center gap-4 px-4 text-center md:flex-row md:justify-between">
        <div className="flex items-center space-x-6">
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-900"
          >
            LINKEDIN
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-900"
          >
            INSTAGRAM
          </Link>
          <Link
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-900"
          >
            X
          </Link>
        </div>

        <ThemeToggle />

        <div className="text-sm text-zinc-500">Created with mucho love ❤️</div>
      </div>
    </footer>
  )
}
