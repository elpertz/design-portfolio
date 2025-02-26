'use client'

import { Monitor, Moon, MoonStar, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

export default function ThemeToggle() {
  const { setTheme, resolvedTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center space-x-2 rounded-md border border-zinc-200 p-1 dark:border-zinc-700">
      <Button
        variant="ghost"
        size="icon"
        className={`h-8 w-8 rounded-md ${
          theme === 'light' ? 'bg-zinc-100 dark:bg-zinc-800' : ''
        }`}
        onClick={() => setTheme('light')}
        aria-label="Light mode"
        role="button"
      >
        <Sun className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={`h-8 w-8 rounded-md ${
          theme === 'dark' ? 'bg-zinc-100 dark:bg-zinc-800' : ''
        }`}
        onClick={() => setTheme('dark')}
        aria-label="Dark mode"
        role="button"
      >
        <MoonStar className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={`h-8 w-8 rounded-md ${
          theme === 'system' ? 'bg-zinc-100 dark:bg-zinc-800' : ''
        }`}
        onClick={() => setTheme('system')}
        aria-label="System theme"
        role="button"
      >
        <Monitor className="h-4 w-4" />
      </Button>
    </div>
  )
}
