'use client'

import Link from 'next/link'
import { Pertz } from '@/components/pertz'
import * as React from 'react'
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User
} from 'lucide-react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from '@/components/ui/command'

export default function Header({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(open => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <header className={className}>
      <nav className="mb-1 flex w-full items-center justify-between pt-6">
        <div className="flex items-center rounded-md hover:-rotate-2 hover:cursor-pointer">
          <Link href="/">
            <Pertz />
          </Link>
        </div>
        <div
          onClick={() => setOpen(true)}
          className="flex items-center rounded-md px-2 py-1 transition-colors duration-150 ease-out hover:cursor-pointer hover:bg-gray-100"
        >
          <p className="text-muted-foreground">
            Menu{' '}
            <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-0.5 rounded border px-1.5 font-mono text-xs font-medium opacity-100 select-none">
              <span className="font-mono text-sm">⌘</span>k
            </kbd>
          </p>
        </div>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User />
                <span>Profile</span>
              </CommandItem>
              <CommandItem>
                <CreditCard />
                <span>Billing</span>
              </CommandItem>
              <CommandItem>
                <Settings />
                <span>Settings</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </nav>
    </header>
  )
}
