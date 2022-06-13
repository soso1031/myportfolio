<template>
<div :style="bgColor" data-scroll-container>
  <Header></Header>
  <router-view v-slot="{ Component }">
    <transition name="transition" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</div>
</template>

<script>
import { reactive } from 'vue';
import Header from './components/Header.vue'
import LocomotiveScroll from 'locomotive-scroll';

export default {
  components: {
    Header,
  },
  setup(){

    const bgColor = reactive({
      backgroundColor: '#F4F2F0',
    });
    const scroll = new LocomotiveScroll();
    return{
      bgColor,
      scroll
    }

  },
}

</script>

<style scoped>

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

