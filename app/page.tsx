import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
export default function Home() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-105">
        <div className="mb-8 flex gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SP</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-foreground leading-none">Pertz</p>
            <p className="text-muted-foreground text-sm">Product Designer</p>
          </div>
        </div>
        <h1 className="text-2xl font-medium">
          👋 Hey there! I'm Pertz, a designer helping tech companies build kick
          ass digital products.
        </h1>
      </div>
    </section>
  )
}
