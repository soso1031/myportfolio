<template>
    <Header></Header>
    <WorksTitleMyworks></WorksTitleMyworks>
    <WorksContentAll></WorksContentAll>
</template>

<script>

import WorksTitleMyworks from '../components/WorksTitleMyworks.vue'
import WorksContentAll from '../components/WorksContentAll.vue'
import Header from '../components/Header.vue'

export default{
  components:{
    WorksTitleMyworks,
    WorksContentAll,
    Header
  },
}

</script>

