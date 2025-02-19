import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DownloadIcon, LinkedinIcon, MessageCircleIcon } from 'lucide-react'
import { Pertz } from '@/components/pertz'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
export default function Home() {
  return (
    <>
      <header>
        <section className="py-10">
          <div className="mx-auto max-w-105">
            <div className="mb-8 flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>SP</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <Pertz className="-translate-x-2 translate-y-1 scale-75" />
                <p className="text-muted-foreground text-sm">
                  Product Designer
                </p>
              </div>
            </div>
            <div className="mb-8 flex flex-col gap-4">
              <h1 className="text-2xl font-medium">
                👋 Hey there! I'm{' '}
                <span className="inline-flex">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Pertz className="translate-y-2 transition-transform duration-150 hover:scale-110 hover:-rotate-2" />
                      </TooltipTrigger>
                      <TooltipContent>Sebastian Pertuz</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </span>
                , a designer helping tech companies build kick ass digital
                products.
              </h1>
              <p className="text-muted-foreground">
                Based in Bogotá, Colombia, I love playing with new tools and
                diving into design challenges. Lately, I've been having fun
                mixing design with code and AI.
                <br />
                <br />I work best when teaming up to solve real problems.
                My secret sauce? Quick sketches, prototypes, and lots
                of tweaking until we nail it. Keep it fun, get it done.
              </p>
            </div>
            <div className="flex gap-2">
              <Button>
                <MessageCircleIcon className="size-4" />
                Email me
              </Button>
              <Button variant="outline">
                <LinkedinIcon className="size-4" />
                LinkedIn
              </Button>
              <Button variant="outline">
                <DownloadIcon className="size-4" />
                Download
              </Button>
            </div>
          </div>
        </section>
      </header>
      <main>
        <section className="py-10">
          <div className="mx-auto max-w-105">
            <h2 className="font-medium">Work</h2>
          </div>
        </section>
      </main>
    </>
  )
}
