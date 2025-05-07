"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Code, Database, Layout, Server } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="h-6 w-6" />,
    skills: ["HTML/CSS/JS", "AlpineJS","Bootstrap CSS", "Tailwind CSS", "VueJS", "React", "Next.js"],
  },
  {
    title: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    skills: ["PHP", "Python", "Laravel", "Craft CMS", "WordPress", 'Flask'],
  },
  {
    title: "Database & DevOps",
    icon: <Database className="h-6 w-6" />,
    skills: ["SQL", "Git", "Version Control", "Server Administration"],
  },
]

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="dark:bg-gray-950 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">A comprehensive overview of my technical and soft skills</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="text-primary">{category.icon}</div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
