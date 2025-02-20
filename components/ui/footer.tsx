import React from 'react'

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={className}>
      <div className="mx-auto max-w-110">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Pertz. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
