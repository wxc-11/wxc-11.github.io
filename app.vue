<template>
  <div class="min-h-screen bg-white">
    <!-- Header Section -->
    <header class="bg-primary text-white py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="{ 'shadow-md': scrolled }">
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

    <!-- Hero Section -->
    <section class="py-16 bg-secondary pt-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-center gap-8">
          <!-- 左侧图片 -->
          <div class="w-full md:w-1/4">
            <div class="rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:border hover:border-primary hover:border-2 hover:shadow-primary/20 animate-fade-in slide-in-left">
              <img :src="profileImage" alt="Profile" class="w-full h-auto object-cover transition-all duration-500">
            </div>
          </div>
          <!-- 右侧标题和描述 -->
          <div class="w-full md:w-3/4 text-left">
            <h2 class="text-3xl font-bold mb-4 text-dark animate-fade-in slide-in-right ml-16">{{ $t('hero.title') }}</h2>
            <p class="text-gray-600 mb-8 animate-fade-in-delay slide-in-right max-w-lg ml-16">
              {{ $t('hero.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-8 text-dark text-center">{{ $t('projects.title') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-secondary p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2 card-hover">
            <h3 class="font-bold mb-2">{{ $t('projects.minecraftBlockly') }}</h3>
            <p class="text-gray-600 text-sm mb-2">{{ $t('projects.minecraftDate') }}</p>
            <p class="text-gray-600 mb-4">{{ $t('projects.minecraftBlocklyDesc') }}</p>
            <button @click="openModal('minecraft')" class="text-primary hover:underline inline-flex items-center group transition-all duration-300 hover:scale-105">
              {{ $t('projects.viewProject') }}
              <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div class="bg-secondary p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2 card-hover">
            <h3 class="font-bold mb-2">{{ $t('projects.blackBoardSystem') }}</h3>
            <p class="text-gray-600 text-sm mb-2">{{ $t('projects.blackboardDate') }}</p>
            <p class="text-gray-600 mb-4">{{ $t('projects.blackBoardSystemDesc') }}</p>
            <button @click="openModal('blackboard')" class="text-primary hover:underline inline-flex items-center group transition-all duration-300 hover:scale-105">
              {{ $t('projects.viewProject') }}
              <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div class="bg-secondary p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2 card-hover">
            <h3 class="font-bold mb-2">{{ $t('projects.webGameProject') }}</h3>
            <p class="text-gray-600 text-sm mb-2">{{ $t('projects.webgameDate') }}</p>
            <p class="text-gray-600 mb-4">{{ $t('projects.webGameProjectDesc') }}</p>
            <button @click="openModal('webgame')" class="text-primary hover:underline inline-flex items-center group transition-all duration-300 hover:scale-105">
              {{ $t('projects.viewProject') }}
              <svg class="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-16 bg-secondary">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-8 text-dark text-center">{{ $t('skills.title') }}</h2>
        <div class="flex flex-wrap gap-4 justify-center">
          <div class="bg-white px-4 py-2 rounded-lg shadow-sm skill-tag">
            <span class="flex items-center">💻 HTML5</span>
          </div>
          <div class="bg-white px-4 py-2 rounded-lg shadow-sm skill-tag">
            <span class="flex items-center">🎨 CSS3</span>
          </div>
          <div class="bg-white px-4 py-2 rounded-lg shadow-sm skill-tag">
            <span class="flex items-center">⚡ JavaScript</span>
          </div>
          <div class="bg-white px-4 py-2 rounded-lg shadow-sm skill-tag">
            <span class="flex items-center">🌐 Git</span>
          </div>
          <div class="bg-white px-4 py-2 rounded-lg shadow-sm skill-tag">
            <span class="flex items-center">🐱 GitHub</span>
          </div>
          <div class="bg-white px-4 py-2 rounded-lg shadow-sm skill-tag">
            <span class="flex items-center">🌸 Spring</span>
          </div>
          <div class="bg-white px-4 py-2 rounded-lg shadow-sm skill-tag">
            <span class="flex items-center">🟢 Vue.js</span>
          </div>
          <div class="bg-white px-4 py-2 rounded-lg shadow-sm skill-tag">
            <span class="flex items-center">⚙️ Node.js</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-8 text-dark text-center">{{ $t('contact.title') }}</h2>
        <div class="bg-secondary p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <p class="text-gray-600 mb-4">
            {{ $t('contact.description') }}
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <a href="mailto:28xichen.wang@gmail.com" class="text-primary hover:underline inline-flex items-center group">
              <svg class="w-6 h-6 mr-2 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              {{ $t('contact.email') }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 modal-enter">
      <div class="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto hover-lift">
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold text-dark">{{ modalTitle }}</h2>
            <button @click="closeModal" class="text-gray-500 hover:text-gray-700 hover-scale">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div class="modal-content">
            <!-- Minecraft Blockly Project Modal -->
            <div v-if="activeModal === 'minecraft'" class="space-y-6">
              <div class="flex flex-col md:flex-row gap-6">
                <div class="md:w-1/2 bg-[#6C63FF] text-white p-4 rounded-lg">
                  <h3 class="text-xl font-bold mb-2">{{ $t('projects.minecraftBlockly') }}</h3>
                  <p class="text-gray-200 mb-4">{{ $t('projects.minecraftDate') }}</p>
                  <p class="text-gray-100 mb-4">
                    {{ $t('projects.minecraftBlocklyDetail') }}
                  </p>
                  <h4 class="font-bold mb-2">{{ $t('projects.skills') }}</h4>
                  <ul class="list-disc list-inside text-gray-100 mb-4">
                    <li v-for="(skill, index) in $t('projects.minecraftSkills')" :key="index">{{ skill }}</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 class="font-bold mb-4">{{ $t('projects.features') }}</h4>
                <div class="space-y-6">
                  <div class="flex flex-col gap-4 feature-item">
                    <p class="text-gray-700 feature-text">{{ $t('projects.minecraftFeatures')[0] }}</p>
                    
                    <img 
                      src="~/assets/images/minecraft-blockly/Screenshot 2026-04-07 162439.png" 
                      :alt="$t('projects.minecraftBlockly')" 
                      class="w-full h-auto rounded-lg feature-image"
                      style="opacity: 1; transform: translateY(0);"
                    >
                  </div>
                  <div class="flex flex-col gap-4 feature-item">
                    <p class="text-gray-700 feature-text">{{ $t('projects.minecraftFeatures')[1] }}</p>
                    <img 
                      src="~/assets/images/minecraft-blockly/Screenshot 2026-04-07 162630.png" 
                      :alt="$t('projects.minecraftBlockly')" 
                      class="w-full h-auto rounded-lg feature-image"
                      style="opacity: 1; transform: translateY(0);"
                    >
                  </div>
                  <div class="flex flex-col gap-4 feature-item">
                    <p class="text-gray-700 feature-text">{{ $t('projects.minecraftFeatures')[2] }}</p>
                    <img 
                      src="~/assets/images/minecraft-blockly/Screenshot 2026-04-07 162753.png" 
                      :alt="$t('projects.minecraftBlockly')" 
                      class="w-full h-auto rounded-lg feature-image"
                      style="opacity: 1; transform: translateY(0);"
                    >
                  </div>
                  <div class="flex flex-col gap-4 feature-item">
                    <p class="text-gray-700 feature-text">{{ $t('projects.minecraftFeatures')[3] }}</p>
                    
                    <img 
                      src="~/assets/images/minecraft-blockly/Screenshot 2026-04-07 164100.png" 
                      :alt="$t('projects.minecraftBlockly')" 
                      class="w-full h-auto rounded-lg feature-image"
                      style="opacity: 1; transform: translateY(0);"
                    >
                  </div>
                  <div class="flex flex-col gap-4 feature-item">
                    <p class="text-gray-700 feature-text">{{ $t('projects.minecraftFeatures')[4] }}</p>
                    <img 
                      src="~/assets/images/minecraft-blockly/Screenshot 2026-04-07 164407.png" 
                      :alt="$t('projects.minecraftBlockly')" 
                      class="w-full h-auto rounded-lg feature-image"
                      style="opacity: 1; transform: translateY(0);"
                    >
                    <img 
                      src="~/assets/images/minecraft-blockly/Screenshot 2026-04-07 164524.png" 
                      :alt="$t('projects.minecraftBlockly')" 
                      class="w-full h-auto rounded-lg feature-image"
                      style="opacity: 1; transform: translateY(0);"
                    >
                  </div>
                </div>
              </div>

            </div>
            <!-- BlackBoard System Modal -->
            <div v-else-if="activeModal === 'blackboard'" class="space-y-6">
              <div class="flex flex-col md:flex-row gap-6">
                <div class="md:w-1/2 bg-[#6C63FF] text-white p-4 rounded-lg">
                  <h3 class="text-xl font-bold mb-2">{{ $t('projects.blackBoardSystem') }}</h3>
                  <p class="text-gray-200 mb-4">{{ $t('projects.blackboardDate') }}</p>
                  <p class="text-gray-100 mb-4">
                    {{ $t('projects.blackBoardSystemDetail') }}
                  </p>
                  <h4 class="font-bold mb-2">{{ $t('projects.skills') }}</h4>
                  <ul class="list-disc list-inside text-gray-100 mb-4">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>MySQL</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 class="font-bold mb-4">{{ $t('projects.features') }}</h4>
                <div class="space-y-6">
                  <div class="flex flex-col gap-4 feature-item">
                    <p class="text-gray-700 feature-text">{{ $t('projects.blackboardFeatures')[0] }}</p>
                    <img 
                      src="~/assets/images/blackboard-system/Screenshot 2026-04-07 152322.png" 
                      :alt="$t('projects.blackBoardSystem')" 
                      class="w-full h-auto rounded-lg feature-image"
                      style="opacity: 1; transform: translateY(0);"
                    >
                    
                  </div>
                  <div class="flex flex-col gap-4 feature-item">
                    <p class="text-gray-700 feature-text">{{ $t('projects.blackboardFeatures')[1] }}</p>
                    <img 
                      src="~/assets/images/blackboard-system/Screenshot 2026-04-07 152412.png" 
                      :alt="$t('projects.blackBoardSystem')" 
                      class="w-full h-auto rounded-lg feature-image"
                      style="opacity: 1; transform: translateY(0);"
                    >
                    
                  </div>
                  <div class="flex flex-col gap-4 feature-item">
                    
                    <img 
                      src="~/assets/images/blackboard-system/Screenshot 2026-04-07 152506.png" 
                      :alt="$t('projects.blackBoardSystem')" 
                      class="w-full h-auto rounded-lg feature-image"
                      style="opacity: 1; transform: translateY(0);"
                    >
                    
                  </div>
                  <div class="flex flex-col gap-4 feature-item">
                    <p class="text-gray-700 feature-text">{{ $t('projects.blackboardFeatures')[2] }}</p>
                    <img 
                      src="~/assets/images/blackboard-system/Screenshot 2026-04-07 152715.png" 
                      :alt="$t('projects.blackBoardSystem')" 
                      class="w-full h-auto rounded-lg feature-image"
                      style="opacity: 1; transform: translateY(0);"
                    >
                    <!-- <p class="text-gray-700 feature-text">{{ $t('projects.blackboardFeatures')[4] }}</p> -->
                  </div>
                  <div class="flex flex-col gap-4 feature-item">
                    <p class="text-gray-700 feature-text">{{ $t('projects.blackboardFeatures')[3] }}</p>
                    <img 
                      src="~/assets/images/blackboard-system/Screenshot 2026-04-07 153030.png" 
                      :alt="$t('projects.blackBoardSystem')" 
                      class="w-full h-auto rounded-lg feature-image"
                      style="opacity: 1; transform: translateY(0);"
                    >
                    
                  </div>
                  <!-- <div class="flex flex-col gap-4 feature-item">
                    <img 
                      src="~/assets/images/blackboard-system/Screenshot 2026-04-07 153801.png" 
                      :alt="$t('projects.blackBoardSystem')" 
                      class="w-full h-auto rounded-lg feature-image"
                      style="opacity: 1; transform: translateY(0);"
                    >
                    <p class="text-gray-700 feature-text">{{ $t('projects.blackboardFeatures')[5] }}</p>
                  </div> -->
                </div>
              </div>

            </div>
            <!-- Web Game Project Modal -->
            <div v-else-if="activeModal === 'webgame'" class="space-y-6">
              <div class="flex flex-col md:flex-row gap-6">
                <div class="md:w-1/2 bg-[#6C63FF] text-white p-4 rounded-lg">
                  <h3 class="text-xl font-bold mb-2">{{ $t('projects.webGameProject') }}</h3>
                  <p class="text-gray-200 mb-4">{{ $t('projects.webgameDate') }}</p>
                  <p class="text-gray-100 mb-4">
                    {{ $t('projects.webGameProjectDetail') }}
                  </p>
                </div>
              </div>
              <div>
                <h4 class="font-bold mb-4">{{ $t('projects.features') }}</h4>
                <div class="space-y-6">
                  <div class="flex flex-col gap-4 feature-item">
                    <img 
                      src="~/assets/images/web-game/Screenshot 2026-04-07 165535.png" 
                      :alt="$t('projects.webGameProject')" 
                      class="w-full h-auto rounded-lg feature-image"
                      style="opacity: 1; transform: translateY(0);"
                    >
                    <p class="text-gray-700 feature-text">{{ $t('projects.webgameFeatures')[1] }}</p>
                  </div>
                  <div class="flex flex-col gap-4 feature-item">
                    <img 
                      src="~/assets/images/web-game/Screenshot 2026-04-07 133922.png" 
                      :alt="$t('projects.webGameProject')" 
                      class="w-full h-auto rounded-lg feature-image"
                      style="opacity: 1; transform: translateY(0);"
                    >
                    <p class="text-gray-700 feature-text">{{ $t('projects.webgameFeatures')[0] }}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-primary text-white py-4">
      <div class="container mx-auto px-4 text-center">
        <p>{{ $t('footer.copyright') }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, getCurrentInstance } from 'vue'
import profileImage from '~/assets/images/IMG_7969.png'

const scrolled = ref(false)
const currentInstance = getCurrentInstance()
const i18n = currentInstance?.proxy.$i18n

const handleScroll = () => {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const locales = [
  { code: 'ja', name: '日本語' },
  { code: 'en', name: 'English' }
]

const currentLocale = ref('ja')

const changeLocale = (code) => {
  i18n?.setLocale(code)
  currentLocale.value = code
}

// Modal functionality
const showModal = ref(false)
const activeModal = ref('')
const modalTitle = ref('')

const openModal = (modalType) => {
  activeModal.value = modalType
  
  // Set modal title based on modal type
  if (modalType === 'minecraft') {
    modalTitle.value = i18n?.t('projects.minecraftBlockly') || 'Minecraft Blockly Project'
  } else if (modalType === 'blackboard') {
    modalTitle.value = i18n?.t('projects.blackBoardSystem') || 'BlackBoard System'
  } else if (modalType === 'webgame') {
    modalTitle.value = i18n?.t('projects.webGameProject') || 'Web Game Project'
  }
  
  showModal.value = true
  
  // Wait for modal to render, then initialize scroll effect for features
  setTimeout(() => {
    // Add scroll event listener for features
    const handleScroll = () => {
      const featureItems = document.querySelectorAll('.feature-item')
      featureItems.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // Calculate how much of the item is visible
        const overlapY = Math.max(0, Math.min(itemRect.bottom, windowHeight) - Math.max(itemRect.top, 0))
        const visibility = overlapY / itemRect.height
        
        // Get image and text elements
        const image = item.querySelector('.feature-image')
        const text = item.querySelector('.feature-text')
        
        // Set opacity based on visibility
        if (image) {
          if (visibility > 0) {
            image.style.opacity = '1'
            image.style.transform = 'translateY(0)'
            image.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
          }
        }
        
        if (text) {
          if (visibility > 0) {
            text.style.opacity = '1'
            text.style.transform = 'translateY(0)'
            text.style.transition = 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s'
          }
        }
      })
    }
    
    // Add event listener
    window.addEventListener('scroll', handleScroll)
    
    // Trigger initial check
    handleScroll()
    
    // Remove event listener when modal closes
    window.scrollCleanup = () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, 100)
}

const closeModal = () => {
  showModal.value = false
  activeModal.value = ''
  modalTitle.value = ''
  
  // Cleanup scroll event listener
  if (window.scrollCleanup) {
    window.scrollCleanup()
    delete window.scrollCleanup
  }
}
</script>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

.animate-fade-in-delay {
  animation: fadeIn 0.6s ease-out 0.3s forwards;
  opacity: 0;
}
</style>