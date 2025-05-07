"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { GitHub, Linkedin, Mail } from "react-feather"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 dark:bg-gray-950 bg-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.15),transparent_50%)]" />

      <div className="section-container">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="text-primary font-medium">Hello, I'm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Fakhri Alauddin
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Frontend Developer & Web Development Specialist
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {/* <Button asChild size="lg">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#projects">View Projects</Link>
            </Button> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex space-x-6"
          >
            <Link href="https://github.com/fakhri17" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="cursor-pointer">
                <GitHub style={{ width: "1.5rem", height: "1.5rem" }} />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/fakhri-alauddin/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="cursor-pointer">
                <Linkedin style={{ width: "1.5rem", height: "1.5rem" }} />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:fakhricoffe@gmail.com">
              <Button variant="ghost" size="icon" className="cursor-pointer">
                <Mail style={{ width: "1.5rem", height: "1.5rem" }} />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          {/* <Link href="#about">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowDown style={{ width: "1.5rem", height: "1.5rem" }} />
              <span className="sr-only">Scroll Down</span>
            </Button>
          </Link> */}
        </motion.div>
      </div>
    </section>
  )
}
