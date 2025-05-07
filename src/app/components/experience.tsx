"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Student Staff Front End and DevOps",
    company: "Akademik Telkom University Surabaya",
    type: "Part Time",
    period: "January 2023 - Present",
    description:
      "Build a profile website for the academic department of Telkom University Surabaya and a ticketing app for the Student Service Center (SSC).",
  },
  {
    title: "Web Developer",
    company: "Pikarlabs.com",
    type: "Part Time",
    period: "January 2020 - Present",
    description: "Build websites for clients using Craft CMS and Laravel Filament.",
  },
  {
    title: "Tech and Curriculum of Website Development",
    company: "GDSC Telkom University Surabaya",
    type: "Organization",
    period: "January 2023 - January 2024",
    description:
      "Collaborated with the team in planning and executing sharing session activities. Developed materials in web development. Served as a mentor and tech curriculum specialist in web development.",
  },
  {
    title: "Frontend Developer",
    company: "Tribes Agency",
    type: "Project Base",
    period: "January 2023 - March 2023",
    description: "Built website for Tribes Agency using Tailwind CSS and Craft CMS.",
  },
  {
    title: "Member",
    company: "Coder Telkom University Surabaya",
    type: "Organization",
    period: "November 2022 - November 2023",
    description: "Member of UMKM Coder in the Web Developer division. Created website for UMKM Coder.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="dark:bg-gray-950 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey and work experience</p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{experience.title}</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {experience.company}
                        <Badge variant="outline" className="ml-2">
                          {experience.type}
                        </Badge>
                      </CardDescription>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {experience.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{experience.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
