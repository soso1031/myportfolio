<template>

  <Header></Header>
  <router-view v-slot="{ Component }">
    <transition name="transition" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

</template>

<script>

import Header from './components/Header.vue'

export default {
  components: {
    Header,
  },
}

</script>

<style>
/*リセットCSS--------------------------------*/
*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

ul[role="list"],
ol[role="list"] {
  list-style: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img,
picture {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/*リセットcss終了---------------------------------*/

.transition-enter-active {
  animation: transition-fade-in .7s ease-in-out;
}

.transition-enter-to ,

.transition-leave-active {
  transition: opacity .3s;
  opacity: 1;
}

.transition-leave-to {
  opacity: 0;
}

/* アニメーションの定義 */
@keyframes transition-fade-in{
  0%{
    opacity: 0;
  }
  70%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

</style>

