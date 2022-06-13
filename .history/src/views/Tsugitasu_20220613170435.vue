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
      title: "Tsugitasu",
      role: "Design,Develop",
      date: "Now Developing",
      heading: "More Efficient Classroom Creation",
      subHeading: "授業作成をもっと効率的に",
      sentence: "全国のあらゆる教員が教育研究の成果(≒教材)を還元し合う文化を形成し、教材作成にかかる時間の削減、教材の質の向上を実現することを目指して始まったプロジェクト。現地調査によって、学外でのノウハウシェア及び意見交換の不足が明らかに。その課題の解決のため教材、ノウハウをつぎ足しあう(還元しあう)文化を生み出す教材シェアプラットフォームを現在開発しています。",
      topPicture: require('@/assets/tsugitasu-icon.png'),
      pictures: [
        require('@/assets/tsugitasu-person.png'),
        require('@/assets/tsugitasu-dashboard.png'),
        require('@/assets/tsugitasu-mark.png'),
        require('@/assets/tsugitasu-create.png'),
        require('@/assets/tsugitasu-need.png'),

      ],
    }
  },
}
</script>