'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="text-5xl font-bold text-black dark:text-white">
          Hi, I'm Patrick Chen
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-xl text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          I'm a Software Engineer, and aiming to be a Full Stack Developer.
        </TextEffect>
      </div>
    </header>
  )
}
