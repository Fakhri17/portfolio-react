<script setup>
import { ArrowUpRight, BookOpen, GraduationCap, MoveUpRight, Trophy } from 'lucide-vue-next'
</script>

<template>
  <section id="about" class="section about-section">
    <div class="container about-grid">
      <div class="about-intro">
        <span class="section-kicker">Background</span>
        <h2>About me</h2>
      </div>
      <div class="about-copy">
        <p class="about-lead">I graduated in <strong>Informatics from Telkom University</strong> in July 2026.</p>
        <p>I’ve worked on hospital systems, medical learning platforms, company websites, and student services. My work covers backend and frontend features, databases, API integrations, debugging, and maintenance.</p>
        <p>At PikarLabs and Telkom University, I worked with developers and staff to understand their requirements and build the applications they needed.</p>
        <a href="https://github.com/fakhri17" target="_blank" rel="noopener noreferrer" class="text-link">View my GitHub <ArrowUpRight :size="16" /></a>
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
          <p>Built websites for partner organizations and communities through lecturer-led research and community service (Pengabdian kepada Masyarakat) projects.</p>
          <p>Worked with lecturers and fellow students on requirements, design, development, testing, improvements, and maintenance.</p>
        </article>
        <article class="background-card">
          <div class="background-card-heading"><Trophy :size="21" /><h3>Achievements</h3></div>
          <ul class="achievement-list">
            <li><span class="background-period">2023</span><h4>1st Place — PLAYBOX Season 4</h4><p>Student Start-Up Competition.</p></li>
            <li><span class="background-period">2023</span><h4>Finalist — Pekan Ilmiah Mahasiswa</h4><p>Institut Teknologi Telkom Surabaya.</p></li>
          </ul>
        </article>
      </div>
      <div class="about-note"><MoveUpRight :size="21" /><span>I continue learning about backend development, Linux servers, and web deployment.</span></div>
    </div>
  </section>
</template>
