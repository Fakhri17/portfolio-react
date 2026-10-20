<script setup>
import { ArrowUpRight, BookOpen, GraduationCap, MoveUpRight, Trophy } from 'lucide-vue-next'
</script>

<template>
  <section id="about" class="section about-section">
    <div class="container about-grid">
      <div class="about-intro">
        <span class="section-kicker">A little context</span>
        <h2>Good software is<br /><span class="muted-text">quietly excellent.</span></h2>
      </div>
      <div class="about-copy">
        <p class="about-lead">I’m Fakhri, an Informatics graduate from Telkom University with several years of experience in backend and full-stack web development.</p>
        <p>I care about the details between a good idea and a great product. I work across the stack, with a particular love for backend systems that are clear, resilient, and built to evolve. My approach is equal parts technical rigor and curiosity: understand the problem deeply, then make the solution feel simple.</p>
        <p>My work spans healthcare platforms, corporate websites, student services, and internal business applications. I enjoy continuous learning and working with teams to turn real operational needs into effective, reliable web solutions.</p>
        <a href="https://github.com/fakhri17" target="_blank" rel="noopener noreferrer" class="text-link">More about my work <ArrowUpRight :size="16" /></a>
      </div>
      <div class="about-background">
        <article class="background-card">
          <div class="background-card-heading"><GraduationCap :size="21" /><h3>Education</h3></div>
          <span class="background-period">Jul 2022 — Jul 2026</span>
          <h4>Bachelor of Computer Science</h4>
          <p>Telkom University · Major in Informatics</p>
          <span class="education-gpa">Final GPA <strong>3.90 / 4.00</strong></span>
        </article>
        <article class="background-card">
          <div class="background-card-heading"><BookOpen :size="21" /><h3>Academic &amp; Research</h3></div>
          <h4>Research &amp; community service</h4>
          <p>Contributed to lecturer-led research and community service (Pengabdian kepada Masyarakat) projects by building websites for partner organizations and communities.</p>
          <p>Collaborated with lecturers and fellow students on requirements, design, development, maintenance, testing, and improvements.</p>
        </article>
        <article class="background-card">
          <div class="background-card-heading"><Trophy :size="21" /><h3>Achievements</h3></div>
          <ul class="achievement-list">
            <li><span class="background-period">2023</span><h4>1st Place — PLAYBOX Season 4</h4><p>Student Start-Up Competition.</p></li>
            <li><span class="background-period">2023</span><h4>Finalist — Pekan Ilmiah Mahasiswa</h4><p>Institut Teknologi Telkom Surabaya.</p></li>
          </ul>
        </article>
      </div>
      <div class="about-note"><MoveUpRight :size="21" /><span>Currently exploring better ways to make complex systems feel effortless.</span></div>
    </div>
  </section>
</template>
