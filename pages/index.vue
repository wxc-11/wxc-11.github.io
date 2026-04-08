<template>
  <div class="min-h-screen bg-white">
    <!-- Header Section -->
    <header class="bg-primary text-white py-4">
      <div class="container mx-auto px-4">
        <h1 class="text-2xl font-bold">Portfolio</h1>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="py-16 bg-secondary">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <pre class="text-sm text-gray-800 font-mono">
                <code>
                  const dev = "John Doe";
                  function criarSite() {}
                  let criatividade = true;
                  if(dev){ sucesso(); }
                  HTML CSS JS
                </code>
              </pre>
            </div>
          </div>
          <div class="md:w-1/2">
            <h2 class="text-3xl font-bold mb-4 text-dark">DESENVOLVEDOR FULL-STACK</h2>
            <p class="text-gray-600 mb-8">
              Crio interfaces modernas e interativas utilizando HTML, CSS e JavaScript.
              Transformando ideias em experiências digitais.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-8 text-dark">Projetos</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-secondary p-6 rounded-lg shadow-md">
            <h3 class="font-bold mb-2">Calculadora</h3>
            <p class="text-gray-600 mb-4">Calculadora funcional criada com JavaScript.</p>
            <a href="#" class="text-primary hover:underline">Ver projeto</a>
          </div>
          <div class="bg-secondary p-6 rounded-lg shadow-md">
            <h3 class="font-bold mb-2">Conversor de Moedas</h3>
            <p class="text-gray-600 mb-4">Aplicação que converte moedas automaticamente.</p>
            <a href="#" class="text-primary hover:underline">Ver projeto</a>
          </div>
          <div class="bg-secondary p-6 rounded-lg shadow-md">
            <h3 class="font-bold mb-2">Gerador de Senhas</h3>
            <p class="text-gray-600 mb-4">Gerador de senhas seguras com JavaScript.</p>
            <a href="#" class="text-primary hover:underline">Ver projeto</a>
          </div>
          <div class="bg-secondary p-6 rounded-lg shadow-md">
            <h3 class="font-bold mb-2">DevSorteio</h3>
            <p class="text-gray-600 mb-4">Sorteador de números.</p>
            <a href="#" class="text-primary hover:underline">Ver projeto</a>
          </div>
          <div class="bg-secondary p-6 rounded-lg shadow-md">
            <h3 class="font-bold mb-2">Jogo da Memória</h3>
            <p class="text-gray-600 mb-4">Jogo interativo desenvolvido com JavaScript.</p>
            <a href="#" class="text-primary hover:underline">Ver projeto</a>
          </div>
          <div class="bg-secondary p-6 rounded-lg shadow-md">
            <h3 class="font-bold mb-2">Dev-Jokenpô</h3>
            <p class="text-gray-600 mb-4">Jogo de Pedra, Papel, Tesoura contra o computador.</p>
            <a href="#" class="text-primary hover:underline">Ver projeto</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-16 bg-secondary">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-8 text-dark">Habilidades</h2>
        <div class="flex flex-wrap gap-4">
          <div class="bg-white px-4 py-2 rounded-lg shadow-sm">
            <span class="flex items-center">💻 HTML5</span>
          </div>
          <div class="bg-white px-4 py-2 rounded-lg shadow-sm">
            <span class="flex items-center">🎨 CSS3</span>
          </div>
          <div class="bg-white px-4 py-2 rounded-lg shadow-sm">
            <span class="flex items-center">⚡ JavaScript</span>
          </div>
          <div class="bg-white px-4 py-2 rounded-lg shadow-sm">
            <span class="flex items-center">🌐 Git</span>
          </div>
          <div class="bg-white px-4 py-2 rounded-lg shadow-sm">
            <span class="flex items-center">🐱 GitHub</span>
          </div>
          <div class="bg-white px-4 py-2 rounded-lg shadow-sm">
            <span class="flex items-center">📱 Responsividade</span>
          </div>
          <div class="bg-white px-4 py-2 rounded-lg shadow-sm">
            <span class="flex items-center">🟢 Vue.js</span>
          </div>
          <div class="bg-white px-4 py-2 rounded-lg shadow-sm">
            <span class="flex items-center">⚙️ Node.js</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-8 text-dark">Contato</h2>
        <div class="bg-secondary p-6 rounded-lg shadow-md">
          <p class="text-gray-600 mb-4">
            Se você tiver alguma dúvida ou quiser trabalhar juntos, sinta-se à vontade para entrar em contato.
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="#" class="text-primary hover:underline">
              <svg class="w-6 h-6 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="#" class="text-primary hover:underline">
              <svg class="w-6 h-6 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a href="#" class="text-primary hover:underline">
              <svg class="w-6 h-6 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.057 10.057 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-primary text-white py-4">
      <div class="container mx-auto px-4 text-center">
        <!-- <p>&copy; 2024 DevPortfolio. Todos os direitos reservados.</p> -->
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>