<script setup>
import { BookOpen, GraduationCap, Trophy, Users } from 'lucide-vue-next'
</script>

<template>
  <section id="background" class="section about-section">
    <div class="container">
      <div v-reveal class="section-heading"><h2>Background</h2></div>
      <div class="about-background">
        <article v-reveal class="background-card">
          <div class="background-card-heading"><GraduationCap :size="21" /><h3>Education</h3></div>
          <span class="background-period">Jul 2022 — Jul 2026</span>
          <h4>Bachelor of Computer Science</h4>
          <p>Telkom University Surabaya · Major in Informatics</p>
          <span class="education-gpa">Cumulative GPA <strong>3.90 / 4.00</strong></span>
        </article>
        <article v-reveal="90" class="background-card">
          <div class="background-card-heading"><BookOpen :size="21" /><h3>Academic &amp; Research</h3></div>
          <h4>Research &amp; community service</h4>
          <p>Developed web applications for lecturer-led research projects, contributing to design, implementation, and testing.</p>
          <p>Built websites for community service (Pengabdian kepada Masyarakat) projects with lecturers and fellow students, from requirements through testing.</p>
        </article>
        <article v-reveal class="background-card">
          <div class="background-card-heading"><Trophy :size="21" /><h3>Achievements</h3></div>
          <ul class="achievement-list">
            <li><span class="background-period">2023</span><h4>1st Place — PLAYBOX Season 4</h4><p>Student Start-Up Competition.</p></li>
            <li><span class="background-period">2023</span><h4>Finalist — Pekan Ilmiah Mahasiswa</h4><p>Institut Teknologi Telkom Surabaya.</p></li>
          </ul>
        </article>
        <article v-reveal="90" class="background-card">
          <div class="background-card-heading"><Users :size="21" /><h3>Organizations</h3></div>
          <ul class="achievement-list">
            <li><span class="background-period">Jan 2023 — Jan 2024</span><h4>Web Development Mentor</h4><p>GDSC Telkom University Surabaya. Delivered web development learning sessions covering HTML, CSS, JavaScript, and Laravel.</p></li>
            <li><span class="background-period">Nov 2022 — Nov 2023</span><h4>Member &amp; Speaker</h4><p>UKM CODER Telkom University Surabaya. Speaker at Hall of Fame: CODER Exhibition and Welcome Party.</p></li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
