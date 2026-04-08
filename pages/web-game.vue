<template>
  <div class="min-h-screen bg-white">
    <!-- Header Section -->
    <header class="bg-primary text-white py-4 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold transition-all duration-300 hover:scale-105">{{ $t('header.title') }}</h1>
        <div class="flex items-center gap-2">
          <button 
            v-for="locale in locales" 
            :key="locale.code"
            @click="changeLocale(locale.code)"
            class="px-3 py-1 rounded-md transition-all duration-300"
            :class="{ 'bg-white text-primary font-medium': currentLocale === locale.code, 'hover:bg-white/20': currentLocale !== locale.code }"
          >
            {{ locale.name }}
          </button>
        </div>
      </div>
    </header>

    <!-- Project Detail Section -->
    <section class="py-16 pt-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row gap-8">
          <!-- Project Image -->
          <div class="md:w-1/2">
            <div class="bg-secondary p-4 rounded-lg shadow-md">
                      <div class="grid grid-cols-2 gap-4">
                        <img src="~/assets/images/web-game/Screenshot 2026-04-07 133922.png" :alt="$t('projects.webGameProject')" class="w-full h-auto rounded">
                        <img src="~/assets/images/web-game/Screenshot 2026-04-07 165535.png" :alt="$t('projects.webGameProject')" class="w-full h-auto rounded">
                      </div>
                    </div>
          </div>
          <!-- Project Details -->
          <div class="md:w-1/2">
            <h2 class="text-3xl font-bold mb-4 text-dark">{{ $t('projects.webGameProject') }}</h2>
            <p class="text-gray-600 mb-4">{{ $t('projects.webgameDate') }}</p>
            <p class="text-gray-600 mb-6">{{ $t('projects.webGameProjectDesc') }}</p>
            <p class="text-gray-700 mb-6">
              {{ $t('projects.webGameProjectDetail') }}
            </p>
            <a href="/" class="text-primary hover:underline inline-flex items-center group">
              {{ $t('projects.backToProjects') }}
              <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:-translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-primary text-white py-4">
      <div class="container mx-auto px-4 text-center">
        <p>{{ $t('footer.copyright') }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue'

const currentInstance = getCurrentInstance()
const i18n = currentInstance?.proxy.$i18n

const locales = [
  { code: 'ja', name: '日本語' },
  { code: 'en', name: 'English' }
]

const currentLocale = ref('ja')

const changeLocale = (code) => {
  i18n?.setLocale(code)
  currentLocale.value = code
}
</script>
