<template>
  <div>
    <WorksExplain :title="title" :date="date" :heading="heading" :sub-heading="subHeading" :role="role"
      :sentence="sentence" :top-picture="topPicture" :pictures="pictures" :colorChange="colorChange">
    </WorksExplain>
  </div>


</template>

<script>
import WorksExplain from '../components/WorksExplain.vue'

export default {
  components: {
    WorksExplain
  },

  data() {
    return {
      title: "Trim",
      role: "Design,Develop",
      date: "2021 Oct",
      heading: "Aiming to integrate novice and team development.",
      subHeading: "初心者とチーム開発の融合を目指す",
      sentence: "初心者でも簡単に使うことができるコード整形アプリ 『trim』。コードのフォーマットが整い、開発において非常に便利な『Lint』はコンソールベースであるがゆえにプログラミング初学者には近寄りづらいもの。もっと誰でも、気軽に使えるようにとGUIベースでのアプリケーションを開発しました。、",
      topPicture: require('@/assets/trim-top.png'),
      pictures: [
        require('@/assets/trim-select-code.png'),
        require('@/assets/trim-trimer.png'),
        require('@/assets/trim-create-rule.png'),
        require('@/assets/trim-ruler.png'),

      ],
    }
  },
}
</script>
