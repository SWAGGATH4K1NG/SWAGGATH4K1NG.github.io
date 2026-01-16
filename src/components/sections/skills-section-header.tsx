"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { BoxReveal } from "../reveal-animations"
import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export const SkillsSectionHeader = ({ id, title, desc, className }: { id: string, title: string, desc?: string, className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Fade out ao fazer scroll
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 0.8, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, -10, -30])

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <motion.div
        ref={headerRef}
        className="top-[70px] sticky z-20"
        style={{ opacity, y }}
      >
        <Link href={`#${id}`}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "text-4xl text-center md:text-7xl font-bold",
                "text-foreground"
              )}
            >
              {title}
            </h2>
          </BoxReveal>
        </Link>
        <p className="mx-auto line-clamp-4 max-w-3xl font-normal text-base text-center text-muted-foreground">
          {desc}
        </p>
      </motion.div>
      
      {/* Spacing para empurrar o conteúdo para baixo */}
      <div className="h-48" />
    </div>
  )
}
