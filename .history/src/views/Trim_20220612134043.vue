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
      heading: "Connect enginner to create unkown futures.",
      subHeading: "初心者とチーム開発の融合を目指す",
      sentence: "つくりたいけど、つくれない。 これはエンジニアのみに関わらず、多くの人が共通して持つ課題。 ワンルートではつくりたいものの因数分解をサポートし、プロジェクトの全容を視覚化。さらに、プロジェクト単位でのマッチングを実現し、プロジェクトを強力に推進。 このアプリケーションの企画・デザインを担当しました。 現在は機能の一つである非エンジニア、エンジニア関わらず誰でも簡単に仕様書が作れる『誰でも仕様書』を開発・検証中。",
      topPicture: require('@/assets/trim-top00.png'),
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
