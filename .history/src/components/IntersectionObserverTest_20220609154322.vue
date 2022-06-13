<template>
  <h1 id="heading">フェードイン</h1>
</template>

<script>
import { ref, onMounted } from "vue"
export default {
  setup(props, context) {
    // ロード中
    const loading = ref(false)
    // refで要素を取得
    const observeElement = ref(null)

    // entries = 監視するエレメントすべて
    const callback = async () => {
      
    }

    const options = {
      // 1 = 完全にrootに入ってきたとき
      threshold: 0
    }

    // `onMounted`内で監視する要素を取得
    onMounted(() => {
      // IntersectionObserverオブジェクトを作成
      const observer = new IntersectionObserver(callback, options);

      // 監視する要素をobserve
      observer.observe(observeElement.value);
    })

    return {
      loading,
      // リターンしないと取れない
      observeElement,
    }
  }

}
</script>

<style scoped>
#heading {
  font-size: 3rem;
  transition: 4s;
  padding: 100vh 1rem;
  opacity: 1;
}

.show {
  opacity: 1;
}
</style>