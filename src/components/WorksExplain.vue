<template>
<div class="works_info">

  <h1 class="works_info_title">{{title}}</h1>

  <div class="works_info_data">
    <div class="works_info_detail">
      <p class="bottom10 detail_heading_style">Role</p>
      <p class="detail_style">{{role}}</p>
    </div>
    <div class="works_info_detail">
        <p class="bottom10 detail_heading_style">Date</p>
        <p class="detail_style">{{date}}</p>
    </div>
  </div>

  <div class="top_img">
      <img :src="topPicture">
  </div>

  <div class="works_info_set">
    <div class="works_info_left">
      <h2 class="works_info_heading">{{heading}}</h2>
      <p class="works_info_subheading">{{subHeading}}</p>
    </div>
    <div class="works_info_right">
      <p class="works_info_sentence">{{sentence}}</p>
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
  props:['title','role','date','heading','subHeading','sentence','topPicture','pictures'],
}

</script>


<style scoped lang="scss">
// import google fonts
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
  .works_info{
    background-color: #F4F2F0;
    padding:2.2rem 4.5rem 0rem 4.5rem ;
    .works_info_title{
      text-align: left;
      font: normal normal 300 5.3rem/6.4rem Montserrat;
      letter-spacing: 0.37rem;
      color:#313131;
    }
    .works_info_data{
      display: flex;
      padding-top: 3.9rem;
      padding-bottom: 6.8rem;
      .works_info_detail{
        margin-right: 11.5rem;
        .detail_heading_style{
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
    .top_img{
      padding-bottom: 2rem;
          img{
            width:100%;
            object-fit: cover;
          }
    }
    .works_info_set{
      display: flex;
      justify-content: space-between;
      padding-top: 8.1rem;
      padding-bottom: 10.3rem;
      .works_info_left{
         width:50%;
        .works_info_heading{
            font-family: montserrat, sans-serif;
            font-size: 4.5rem;
            font-style: normal;
            font-weight: 300;
            line-height: 1.25;
            text-align: left;
            letter-spacing: 0.315rem;
            color: #313131;
            text-align: left;
            margin-bottom: 2.5rem;
        }
        .works_info_subheading{
          font-family: 'Noto Sans JP', sans-serif;
          font-weight: 400;
          font-style: normal;
          text-align: left;
          font-size: 1.3rem;
          letter-spacing: 0.273rem;
          color: #3E3E3E;
        }
      }
      .works_info_right{
        width:40%;
        padding-top: 0.5rem;
        .works_info_sentence{
          font-family: 'Noto Sans JP', sans-serif;
          font-weight: 400;
          font-style: normal;
          text-align: left;
          font-size: 1.4rem;
          letter-spacing: 0.294rem;
          line-height: 2.28;
          color: #3E3E3E;
        }
      }
    }
    .img_list{
      .img_picture{
        padding-bottom: 3rem;
          img{
            width:100%;
            object-fit: cover;
          }
      }
    }
  }
</style>