<template>
  <div id="luxy">
    <WorksTitleMyworks></WorksTitleMyworks>
    <WorksContentAll></WorksContentAll>
  </div>
</template>

<script>

import WorksTitleMyworks from '../components/WorksTitleMyworks.vue'
import WorksContentAll from '../components/WorksContentAll.vue'
import luxy from "luxy.js" //←読み込む

export default{
  components:{
    WorksTitleMyworks,
    WorksContentAll,
  },
    mounted(){
    luxy.init({
      wrapperSpeed:0.10
    }); //←初期化する
  },
}

</script>

