<template>
  <h1 id="heading">フェードイン</h1>
</template>

<script>
import { ref, onMounted } from "vue"
export default {
  setup() {
    // refで要素を取得
    const observeElement = ref(null)

    // entries = 監視するエレメントすべて
    const callback = () => {
      observeElement.value.style.opacity = 0.2
    }

    const options = {
      // 1 = 完全にrootに入ってきたとき
      threshold: 0
    }

    // `onMounted`内で監視する要素を取得
    onMounted(() => {
      // IntersectionObserverオブジェクトを作成
      const observer = new IntersectionObserver(callback, options);

      console.log(observeElement.value);
      // 監視する要素をobserve
      observer.observe(observeElement.value);
    })

    return {
      observeElement,
    }
  }

}
</script>

<style scoped>
#heading {
  font-size: 3rem;
  transition: 2s;
  padding: 100vh 1rem;
  opacity: 1;
}

.show {
  opacity: 1;
}
</style>