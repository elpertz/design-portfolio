'use client'

import Link from 'next/link'
import { PertzWithDesign } from '@/components/pertz'
import * as React from 'react'
import {
  Calculator,
  CreditCard,
  Settings,
  Smile,
  User,
  ArrowRight
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

/**
 * Header component that displays the centered logo
 * Maintains keyboard shortcut functionality but hides the menu button
 */
export default function Header({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false)
  const [isPressed, setIsPressed] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsPressed(true)
        setTimeout(() => {
          setOpen(open => !open)
          setIsPressed(false)
        }, 100)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <header className={`${className} e`}>
        <nav className="flex items-center justify-center">
          <div
            onClick={() => setOpen(true)}
            className="flex translate-x-1 items-center gap-1 rounded-md px-1 py-1 transition-colors duration-150 ease-out hover:scale-98 hover:cursor-pointer hover:bg-gray-100"
          >
            <Link href="/">
              <PertzWithDesign />
            </Link>

            <kbd
              className={`bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-0.5 rounded border px-1 font-mono text-xs font-medium opacity-100 transition-transform select-none ${isPressed ? 'scale-85' : ''}`}
            >
              <span className="font-mono text-sm">⌘</span>k
            </kbd>
          </div>
        </nav>
      </header>

      {/* Keep the CommandDialog to maintain functionality */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search for projects..." />
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>
          <CommandGroup heading="Work">
            <CommandItem
              value="payment-reports"
              onSelect={() => {
                // Handle selection
              }}
              className="group flex items-center justify-between transition-all duration-150 ease-out data-[selected=true]:scale-97 data-[selected=true]:cursor-pointer"
            >
              <div className="flex flex-col">
                <span>Second look to Payment reports</span>
                <span className="text-muted-foreground text-sm">
                  Payment reports
                </span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-0.5 rounded border px-1.5 font-mono text-xs font-medium opacity-100 select-none">
                  <span className="font-mono text-sm">1</span>
                </kbd>
                <ArrowRight className="hidden group-data-[selected=true]:block" />
              </div>
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
          <CommandGroup heading="About">
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
    </>
  )
}
