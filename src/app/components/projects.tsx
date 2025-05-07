"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const projects = [
  {
    title: "SSC (Student Service Center) Website",
    description: "Website ticketing application for the Student Service Center (SSC) at Telkom University Surabaya.",
    image: "/ssc.png",
    tags: ["Vue.js", "Tailwind CSS", "Laravel", "MongoDB", "MySQL"],
    liveUrl: "https://ssc.telu-sby.id/",
    githubUrl: "#",
    category: "frontend",
  },
  {
    title: "Coder Web Profile",
    description: "Website for UKM Coder at Telkom University Surabaya.",
    image: "/coder-web.png",
    tags: ["Tailwind CSS", "Livewire", "Laravel", "MySQL"],
    liveUrl: "https://www.coder-telkomsby.com/",
    githubUrl: "#",
    category: "frontend",
  },
  {
    title: "Meducine",
    description: "A application webinar and membership for doctors and medical students.",
    image: "/meducine.png",
    tags: ["Craft CMS", "PHP", "AlpineJS", "Bootstrap CSS"],
    liveUrl: "https://meducine.id/",
    githubUrl: "#",
    category: "fullstack",
  },
  {
    title: "Mihwan.id",
    description: "A blog website for Muhammad Ihwan.",
    image: "/mihwan.png",
    tags: ["Craft CMS", "PHP", "AlpineJS", "Bootstrap CSS"],
    liveUrl: "https://mihwan.id",
    githubUrl: "#",
    category: "fullstack",
  },
  {
    title: "Erde Jilbab",
    description: "A website for selling jilbab",
    image: "/erdejilbab.png",
    tags: ["PHP", "Laravel", "Tailwind CSS", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
    category: "fullstack",
  },
  {
    title: "Petrokimia Company Profile",
    description: "A company profile website for Petrokimia Gresik.",
    image: "/petro.png",
    tags: ["Craft CMS", "PHP", "AlpineJS", "Bootstrap CSS"],
    liveUrl: "https://petrokimia-gresik.com/",
    githubUrl: "#",
    category: "fullstack",
  },
  {
    title: "Islamic Website",
    description: "A website for reading the Quran and Sholah schedule.",
    image: "/islamic-web.png",
    tags: ["Bootstrap CSS", 'AlpineJS'],
    liveUrl: "https://islamic-web-telkomsby.netlify.app",
    githubUrl: "#",
    category: "frontend",
  },
  {
    title: "SIMRS (Sistem Informasi Rumah Sakit) Multimedika",
    description: "A website SIMRS for Multimedika Company.",
    image: "/simrs.png",
    tags: ["PHP", "Laravel", "Filament", "Tailwind CSS", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
    category: "fullstack",
  },
  {
    title: "Bisnis Digital Website",
    description: "A website for study program Bisnis Digital at Telkom University Surabaya.",
    image: "/db.png", 
    tags: ["wordpress", "PHP"],
    liveUrl: "https://bdb-sby.telkomuniversity.ac.id/",
    githubUrl: "#",
    category: "fullstack",
  },
]

const categories = [
  { value: "all", label: "All Projects" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "fullstack", label: "Full Stack" },
]

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="dark:bg-gray-950 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">A selection of my recent work and projects</p>
        </motion.div>

        {/* <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={filter === category.value ? "default" : "outline"}
                onClick={() => setFilter(category.value)}
                className="rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div> */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
