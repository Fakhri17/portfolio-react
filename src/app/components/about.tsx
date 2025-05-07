"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import my_image from "../../../public/fakhri.png";

export default function About() {
  return (
    <section id="about" className="dark:bg-gray-950 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Computer Science student at Telkom University Surabaya with a
            passion for web development and networking
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center items-center"
          >
            <img src="/fakhri.png" alt="Fakhri Alauddin" className="h-100 object-cover" />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Frontend Developer & Web Development Specialist
            </h3>
            <p className="text-muted-foreground mb-6">
              I am a Computer Science student at Telkom University Surabaya with
              a strong interest in web development and networking. I have
              experience working with various technologies and frameworks, and I
              am passionate about creating user-friendly and visually appealing
              web applications.
            </p>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <Card>
                <CardContent className="p-4 flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Surabaya, Indonesia</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>fakhricoffe@gmail.com</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+628970632441</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                  <span>GPA 3.92/4.00</span>
                </CardContent>
              </Card>
            </div>

            <p className="text-muted-foreground">
              Currently working as a Student Staff for Front End and DevOps at Telkom University Surabaya while also
              working part-time as a Web Developer at Pikarlabs.com.
            </p> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
