import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Playground - Design Experiments & Projects',
  description:
    "A lab of personal projects, UI experiments, drawings, and code experiments I've been tinkering with over the past few years."
}

/**
 * PlaygroundItem component
 * A flexible container for playground content with configurable hover effects
 */
interface PlaygroundItemProps {
  children: React.ReactNode
  className?: string
  title?: string
  hoverEffect?: boolean
}

const PlaygroundItem = ({
  children,
  className,
  title,
  hoverEffect = true
}: PlaygroundItemProps) => {
  return (
    <div
      className={`group bg-foreground/3 relative flex flex-col justify-end overflow-hidden rounded-xl p-6 ${className}`}
    >
      {children}

      {title && (
        <div className="relative z-10 mt-auto">
          <h3 className="text-foreground font-mono text-xs font-normal">
            {title}
          </h3>
        </div>
      )}
    </div>
  )
}

/**
 * PlaygroundImage component
 * Displays an image with configurable positioning and hover effects
 */
interface PlaygroundImageProps {
  src: string
  alt: string
  className?: string
  hoverEffect?: boolean
}

const PlaygroundImage = ({
  src,
  alt,
  className,
  hoverEffect = true
}: PlaygroundImageProps) => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={` ${className || ''}`}
      />
    </div>
  )
}

/**
 * PlaygroundVideo component
 * Displays a video with autoplay and loop
 */
interface PlaygroundVideoProps {
  src: string
  className?: string
  hoverEffect?: boolean
}

const PlaygroundVideo = ({
  src,
  className,
  hoverEffect = true
}: PlaygroundVideoProps) => {
  return (
    <div className="overflow-hidden rounded-xl shadow-lg outline outline-2 outline-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        className={`h-full w-full object-cover ${
          hoverEffect
            ? 'transition-transform duration-300 group-hover:scale-105'
            : ''
        } ${className || ''}`}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

/**
 * Playground page
 * Displays a collection of design and code experiments
 */
export default function PlaygroundPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pt-4 pb-12">
      <div className="mb-6 flex justify-center">
        <Button variant="outline" size="sm" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="mb-20 flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-title mb-4">Playground</h1>
        <p className="text-muted-foreground max-w-[40ch] text-balance">
          A lab of personal projects, UI experiments, drawings, and code
          experiments I've been tinkering with over the past few years 😊
        </p>
      </div>

      {/* Playground Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-8">
        <PlaygroundItem className="pointer-events-none row-span-1 flex items-center justify-center p-16 md:col-span-3">
          <PlaygroundVideo
            src="/videos/dark-gift.mp4"
            className="aspect-auto"
          />
        </PlaygroundItem>

        <PlaygroundItem className="row-span-1 flex items-center justify-center md:col-span-5">
          <PlaygroundImage
            src="/images/brand-dak-voluah.png"
            alt="Brand Dak Volunteer"
            className="[aspect-[65/48] mx-auto max-w-[80%] object-contain p-4"
          />
        </PlaygroundItem>

        <PlaygroundItem
          className="row-span-1 aspect-[2/1] md:col-span-5"
          title="Todo list interaction"
        >
          <PlaygroundImage src="/placeholder.jpg" alt="Todo list interaction" />
        </PlaygroundItem>

        <PlaygroundItem
          className="row-span-2 md:col-span-3"
          title="Mobile screen Ticket pass"
        >
          <PlaygroundImage
            src="/placeholder.jpg"
            alt="Mobile screen Ticket pass"
          />
        </PlaygroundItem>

        <PlaygroundItem className="md:col-span-3">
          <PlaygroundImage
            src="/images/spm-logo.png"
            alt="SPM logo"
            className="relative aspect-square h-80 w-full object-contain p-4"
          />
        </PlaygroundItem>

        <PlaygroundItem
          className="row-span-1 aspect-[1/1] md:col-span-2"
          title="Small buttons"
        >
          <PlaygroundImage src="/placeholder.jpg" alt="Small buttons" />
        </PlaygroundItem>

        <PlaygroundItem
          className="row-span-1 aspect-video md:col-span-5"
          title="Nike"
        >
          <PlaygroundImage src="/placeholder.jpg" alt="Nike" />
        </PlaygroundItem>

        <PlaygroundItem className="row-span-1 flex items-center justify-center md:col-span-3">
          <PlaygroundImage
            src="/images/pertz.png"
            alt="Pertz logo "
            className="pointer-events-none w-full object-contain p-4"
          />
        </PlaygroundItem>

        <PlaygroundItem
          className="row-span-1 aspect-[9/5] md:col-span-8"
          title="Wedding page hero animation"
        >
          <PlaygroundVideo src="/videos/wedding-animation.mp4" />
        </PlaygroundItem>
      </div>
    </div>
  )
}
