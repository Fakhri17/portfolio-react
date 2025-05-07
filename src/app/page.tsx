import About from "@/app/components/about"
import Experience from "@/app/components/experience"
// import Footer from "@/app/components/footer"
import Hero from "@/app/components/hero"
import Projects from "@/app/components/projects"
import Skills from "@/app/components/skills"
import Contact from "@/app/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </main>
  )
}
