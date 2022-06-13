<template>
<div>
 <BackButton></BackButton>
<WorksExplain
  :title="title"
  :date="date"
  :heading="heading"
  :sub-heading="subHeading"
  :role="role"
  :sentence="sentence"
  :top-picture="topPicture"
  :pictures="pictures"
  >
</WorksExplain>
</div>


</template>

<script>
import BackButton from '../components/BackButton.vue'
import WorksExplain from '../components/WorksExplain.vue'

import {reactive} from vue
export default{
  components:{
    BackButton,
    WorksExplain
  },

  data(){
    return{
      title:"ONE-ROUTE",
      role:"Design,Project",
      date:"2022 Apr",
      heading:"Connect enginner to create unkown futures.",
      subHeading:"想いを繋げてつくりたいへ一本道",
      sentence:"つくりたいけど、つくれない。 これはエンジニアのみに関わらず、多くの人が共通して持つ課題。 ワンルートではつくりたいものの因数分解をサポートし、プロジェクトの全容を視覚化。さらに、プロジェクト単位でのマッチングを実現し、プロジェクトを強力に推進。 このアプリケーションの企画・デザインを担当しました。 現在は機能の一つである非エンジニア、エンジニア関わらず誰でも簡単に仕様書が作れる『誰でも仕様書』を開発・検証中。",
      topPicture:require('@/assets/oneroute-top-small.png'),
      pictures: [
           require('@/assets/oneroute-icon.png'),
           require('@/assets/oneroute-logo-short.png'),
           require('@/assets/oneroute-login.png'),
           require('@/assets/oneroute-pic.png'),
          require('@/assets/oneroute-colorcard.png'),
      ] ,
    }
  },
  setup(){
      const bgfont = reactive({
      backgroundColor: '#FF6464',
      color:"FFFFFF",
      transition:'.2s',
    });
  }
}
</script>