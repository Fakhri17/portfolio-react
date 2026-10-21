import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Apply the saved palette before Vue renders; new visitors start in the paper theme.
let theme = 'light'
try {
  if (localStorage.getItem('portfolio-theme') === 'dark') theme = 'dark'
} catch {
  // The default theme also works when browser storage is unavailable.
}
document.documentElement.classList.add(theme)
document.documentElement.style.colorScheme = theme

createApp(App).mount('#app')
