<script setup>
import { ArrowDown, ArrowUpRight } from 'lucide-vue-next'
</script>

<template>
  <section id="home" class="hero-section">
    <div class="container hero-grid">
      <div class="hero-copy reveal">
        <div class="eyebrow"><span class="status-dot"></span> Available for select projects</div>
        <h1>Fakhri<br /><span class="hero-surname">Alauddin.</span></h1>
        <p class="hero-description">I’m a web developer focused on <strong>backend and full-stack development</strong>, mainly using Laravel, Craft CMS, and Vue.js.</p>
        <div class="hero-actions"><a href="#projects" class="button button-primary">View projects <ArrowUpRight :size="17" /></a><a href="#contact" class="button button-ghost">Contact me <ArrowUpRight :size="17" /></a></div>
        <div class="scroll-cue"><ArrowDown :size="15" /> Scroll to explore</div>
      </div>
      <div class="hero-showcase reveal reveal-delay" aria-label="Portrait of Fakhri Alauddin">
        <div class="portrait-frame">
          <svg class="field-contours" viewBox="0 0 500 500" fill="none" aria-hidden="true" focusable="false">
            <g stroke="currentColor" stroke-width="1">
              <path v-for="scale in [2.4, 2.1, 1.8, 1.5, 1.2, 0.9, 0.6]" :key="scale" :transform="`translate(370 115) scale(${scale})`" d="M-95-10C-112-58-70-91-27-96C18-101 26-66 58-52C96-35 116-5 94 31C75 62 32 53 10 78C-21 113-62 100-77 64C-89 36-82 24-95-10Z" />
              <path d="M-50 270C65 185 116 262 162 325S230 417 320 389S465 347 553 425M-50 292C61 207 100 271 146 340S232 443 328 413S467 371 553 448M-50 316C51 230 84 281 130 355S230 468 336 437S465 396 553 471M-50 340C42 254 68 293 114 370S227 494 344 461S463 420 553 494" />
            </g>
            <path class="field-trail" d="M26 432C72 419 53 358 102 338S186 313 175 257S216 222 246 181S258 81 321 53" stroke="currentColor" stroke-width="2" stroke-dasharray="5 7" />
            <circle class="field-trail" cx="321" cy="53" r="5" stroke="currentColor" stroke-width="2" />
            <path class="field-cross" d="M32 28V44M24 36H40M460 456V472M452 464H468" stroke="currentColor" stroke-width="2" />
          </svg>
          <img class="hero-portrait" src="/fakhri.png" alt="Fakhri Alauddin" width="1024" height="1024" fetchpriority="high" />
          <svg class="portrait-code" viewBox="0 0 80 40" fill="none" aria-hidden="true" focusable="false"><path d="M26 8L12 20L26 32M54 8L68 20L54 32M45 4L35 36" stroke="currentColor" stroke-width="2" /></svg>
        </div>
      </div>
    </div>
    <div class="hero-footer container"><span>01 / 06</span><div class="hero-rule"></div><span>Independent developer · Based in Indonesia</span></div>
  </section>
</template>
