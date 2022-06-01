<template>
<div class="works_info">

  <h1 class="works_info_title">title</h1>

  <div class="works_info_data">
    <div class="works_info_detail">
      <h2 class="bottom10">Role</h2>
      <p class="detail_style">Design,Project</p>
    </div>
    <div class="works_info_detail">
        <h2>Date</h2>
        <p class="detail_style">2022 Apr</p>
    </div>
  </div>

  <div class="img_list">
    <div class="img_picture" v-for="picture in pictures" :key="picture">
      <img :src="picture">
    </div>
  </div>

</div>

</template>

<script>

export default{
  data(){
    return{
      pictures: [
           require('@/assets/oneroute-top.png'),
           require('@/assets/oneroute-logo-short.png'),
           require('@/assets/oneroute-icon.png'),
           require('@/assets/oneroute-colorcard.png'),
           require('@/assets/oneroute-login.png'),
           require('@/assets/oneroute-pic.png'),
      ]
    }
  }
}

</script>


<style scoped lang="scss">
  .works_info{
    background-color: #F4F2F0;
    padding:2.2rem 3.7rem 0rem 3.7rem ;
    .works_info_title{
      text-align: left;
      font: normal normal 300 5.3rem/6.4rem Montserrat;
      letter-spacing: 0.37rem;
      color:#313131;
    }
    .works_info_data{
      display: flex;
      padding-top: 3.8rem;
      padding-bottom: 6.8rem;
      .works_info_detail{
        margin-right: 11.5rem;
        h2{
            font-family: montserrat, sans-serif;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1.6;
            text-align: left;
            letter-spacing: 0.16rem;
            color: #808080;
        }
        &.bottom10{
          margin-bottom: 1rem;
        }
        .detail_style{
            font-family: montserrat, sans-serif;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1.6;
            text-align: left;
            letter-spacing: 0.16rem;
            color: #313131;
        }
      }
    }
    .img_list{
      .img_picture{
        padding-bottom: 2rem;
          // img{
          //   border-radius: 0.7rem;
          // }
      }
    }
  }
</style>