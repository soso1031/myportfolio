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
    const callback = async (entries) => {
      // ここでは１つなので最初の配列を指定
      const entry = entries[0];

      // entry.isIntersecting = プロパティは交差しているかどうかのブール値
      // パレントからもらった `props.isLoaded` が `false` のとき
      if (entry && entry.isIntersecting && !props.isLoaded) {

        console.log('observe!')
        console.log(entry.intersectionRatio); // 交差している量を0.0〜1.0の範囲で表示
        console.log(entry.intersectionRect); // 交差している領域の矩形オブジェクト

        // ローディング開始
        loading.value = true;

        // ファンクション実行
        const { data, status } = await props.callback();

        // ローディング終了
        loading.value = false;

        // if OK return
        if (status === 200) {
          context.emit('fetched', data.content)
        }
      }
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