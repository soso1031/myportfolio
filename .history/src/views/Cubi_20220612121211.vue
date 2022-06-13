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
      title: "Cubi",
      role: "Design",
      date: "2021 Nov",
      heading: "Making voxel art more accessible.",
      subHeading: "ボクセルアートを手軽に",
      sentence: "1ピクセルのブロック積み上げることで作り上げる3Dアートのボクセルアート。趣味で作っていた、ボクセルアートのデータの一部を配布するためのWEBサイトのデザインを行いました。データはobjファイルでダウンロードできます。",
      topPicture: require('@/assets/cubi-icon.png'),
      pictures: [
        require('@/assets/cubi-UI.png'),
        require('@/assets/panda-boy001.png'),
      ],
    }
  },
}
</script>