<template>

<div>
  <Header></Header>
  
  <transition name="fade">
    <router-view></router-view>
  </transition>
</div>

</template>

<script>

import Header from './components/Header.vue'

export default{
  components:{
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


  .fade-enter-active {
    transition: opacity 3s;
    opacity: 0;
  }
  .fade-enter-to {
    opacity: 1;
  }

  .fade-leave-active {
    transition: opacity 3s;
    opacity: 1;
  }
  .fade-leave-to {
    opacity: 0;
  }

</style>

