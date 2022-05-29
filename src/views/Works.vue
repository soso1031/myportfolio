<template>
  <div class="overflow">
    <WorksTitleMyworks></WorksTitleMyworks>
    <WorksContentAll></WorksContentAll>
  </div>


</template>

<script>
import WorksTitleMyworks from '../components/WorksTitleMyworks.vue'
import WorksContentAll from '../components/WorksContentAll.vue'


export default{
  components:{
    WorksTitleMyworks,
    WorksContentAll
  }
}
</script>

<style scoped>
.overflow{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
  overflow: scroll;
  scrollbar-width: none; /*Firefox対応のスクロールバー非表示コード*/  
  -ms-overflow-style: none;/*Internet Explore対応のスクロールバー非表示コード*/
}
.overflow::-webkit-scrollbar {  
  display: none; /*Google Chrome、Safari、Microsoft Edge対応のスクロールバー非表示コード*/
}
</style>

