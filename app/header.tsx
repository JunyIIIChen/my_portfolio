'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { motion } from "framer-motion";


export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="text-5xl font-bold text-black dark:text-white">
          Hi, I'm Patrick Chen
        </Link>
        <motion.span
          className="ml-1 inline-block text-5xl"
          animate={{ y: [0, -5, 0] }} // 上下浮动
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          👋
        </motion.span>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-m text-zinc-600 dark:text-zinc-500 mt-3"
          delay={0.5}
        >
          I'm a Full Stack Developer, and a world explorer.
          
        </TextEffect>

      </div>
    </header>
  )
}
