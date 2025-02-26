import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  DownloadIcon,
  LinkedinIcon,
  MessageCircle,
  MessageCircleIcon,
  Sparkles
} from 'lucide-react'
import { Pertz } from '@/components/pertz'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import ProjectGrid from '@/components/project-grid'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="mx-auto flex max-w-md flex-col items-center space-y-6 py-12 text-center">
        <h1 className="text-title mb-6">
          Senior
          <br />
          Product Designer
        </h1>

        <p className="text-muted-foreground max-w-[40ch] text-pretty">
          👋 Hey there! I'm Sebastian, also known as Pertz, a designer from
          Bogotá who helps tech companies build kick-ass digital products.
        </p>

        <div className="flex space-x-4">
          <Button variant="default">
            <MessageCircle className="mr-2 h-4 w-4" /> REACH OUT
          </Button>
          <Button variant="outline" asChild>
            <Link href="/playground">
              <Sparkles className="mr-2 h-4 w-4" /> PLAYGROUND
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="max-w-2xlg mx-auto flex flex-col items-center space-y-6 py-12 text-center">
        <h2 className="mb-8 text-center text-base">Featured projects</h2>
        <ProjectGrid />
      </section>
    </>
  )
}
