<template>
  <div class="works_info" v-bind:class="{colorChange:isColorChange}">

    <!-- 閉じるボタン -->
    <div class=layout>
      <router-link to="/" class="close_button layout_right">
        <span></span>
        <span></span>
      </router-link>
    </div>


    <!-- タイトルと役割・製作期 -->
    <h1 class="works_info_title">{{ title }}</h1>

    <div class="works_info_data">
      <div class="works_info_detail">
        <p class="bottom10 detail_heading_style">Role</p>
        <p class="detail_style">{{ role }}</p>
      </div>
      <div class="works_info_detail">
        <p class="bottom10 detail_heading_style">Date</p>
        <p class="detail_style">{{ date }}</p>
      </div>
    </div>

    <!-- トップ画像 -->
    <div class="top_img">
      <img :src="topPicture">
    </div>

    <!-- 製作物の情報のセット -->
    <div class="works_info_set" ref="observeTarget">
      <div class="works_info_left">
        <h2 class="works_info_heading">{{ heading }}</h2>
        <p class="works_info_subheading">{{ subHeading }}</p>
      </div>
      <div class="works_info_right">
        <p class="works_info_sentence">{{ sentence }}</p>
      </div>
    </div>

    <!-- 製作物の画像リスト -->
    <div class="img_list">
      <div class="img_picture" v-for="picture in pictures" :key="picture">
        <!-- IntersectionObserverでアニメーションを追加 -->
        <img :src="picture" :ref="addImgRef">
        <!-- <div class = lazy_loaded_cover></div> -->
      </div>
    </div>

  </div>

</template>

<script>
import { onMounted, ref } from "vue"
export default {
  props: ['title', 'role', 'date', 'heading', 'subHeading', 'sentence', 'topPicture', 'pictures','colorChange'],
  setup() {


    // imgのレンダリング↓

    // refで画像を取得配列にプッシュ
    let imgRefs = [];
    const addImgRef = (ref) => {
      imgRefs.push(ref);
    }

    //発火するコールバック関数
    const flipin = (entries, object) => {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add("isShowAnime");
      }
      object.unobserve(entries[0]);
    }
    // オプションの設定
    const options = {
      threshold: 0.15
    }
    // `onMounted`内で監視する要素を取得
    onMounted(() => {
      // IntersectionObserverオブジェクトを作成
      const observer = new IntersectionObserver(flipin, options);

      // 監視する要素をobserve
      imgRefs.forEach((ref) => { observer.observe(ref); });
    })


    // 背景及び文字列の色をscrollで変更↓
    
    // v-vindパラメータの初期値
    const isColorChange = ref(false);

    // 監視する要素
    const observeTarget = ref(null)

   //発火するイベント
    const callback = () => {
      isColorChange.value = !isColorChange.value;
      console.log('hello')
    }
        // オプションの設定
    const Coptions = {
      threshold: 0.15
    }


    // `onMounted`内で監視する要素を取得
    onMounted(() => {
      // IntersectionObserverオブジェクトを作成
      const observer = new IntersectionObserver(callback, Coptions);
      // 監視する要素をobserve
      observer.observe(observeTarget.value);
    })
    

    return {
      addImgRef,
      isColorChange,
      observeTarget
    }
  }
}



</script>


<style scoped lang="scss">
// import google fonts
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');

.works_info {
  padding: 0 4.5rem 0rem 4.5rem;

  .layout{
  padding-top: 5rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: end;
.close_button{
  padding: 0.1rem;
  display: block;
  width: 17.8rem;
  height: 4.74rem;
  position: relative;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover span:nth-of-type(1)::before{
    animation-name: LineOutIN;
    animation-duration: 0.5s;
    animation-timing-function:ease-in-out;
  }
  &:hover span:nth-of-type(2)::before{
    animation-name: LineOutIN;
    animation-duration: 0.5s;
    animation-delay: 0.2s;
    animation-timing-function:ease-in-out;
  }
}

.close_button  span:nth-of-type(1) {
    content: '';
    display: block;
    width: 18.3rem;
    height: 0.1rem;
    position: absolute;
    transform: translate(-50%,-50%) rotate(15deg);
    top: 50%;
    left: 50%;
    &::before{
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #313131;
      // background-color: #FFFFFF;
    }
  }
.close_button  span:nth-of-type(2) {
    content: '';
    display: block;
    width: 18.3rem;
    height: 0.1rem;
    position: absolute;
    transform: translate(-50%,-50%) rotate(-15deg);
    top: 50%;
    left: 50%;
    &::before{
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #313131;
      // background-color: #FFFFFF;

    }
  }
}

  // タイトルと役割・製作期
  .works_info_title {
    text-align: left;
    font: normal normal 300 5.3rem/6.4rem Montserrat;
    letter-spacing: 0.37rem;
    padding-top: 5.6rem;
  }

  .works_info_data {
    display: flex;
    padding-top: 4.1rem;
    padding-bottom: 6.8rem;

    .works_info_detail {
      margin-right: 11.5rem;

      .detail_heading_style {
        font-family: montserrat, sans-serif;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.6;
        text-align: left;
        letter-spacing: 0.16rem;
        opacity: .4;
      }

      &.bottom10 {
        margin-bottom: 1rem;
      }

      .detail_style {
        font-family: montserrat, sans-serif;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.6;
        text-align: left;
        letter-spacing: 0.16rem;
      }
    }
  }

  // トップ画像
  .top_img {
    padding-bottom: 2rem;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  // 製作物情報
  .works_info_set {
    display: flex;
    justify-content: space-between;
    padding-top: 8.1rem;
    padding-bottom: 10.3rem;

    .works_info_left {
      width: 50%;

      .works_info_heading {
        font-family: montserrat, sans-serif;
        font-size: 4.5rem;
        font-style: normal;
        font-weight: 300;
        line-height: 1.25;
        text-align: left;
        letter-spacing: 0.315rem;
        text-align: left;
        margin-bottom: 2.5rem;
      }

      .works_info_subheading {
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 400;
        font-style: normal;
        text-align: left;
        font-size: 1.3rem;
        letter-spacing: 0.273rem;
      }
    }

    .works_info_right {
      width: 40%;
      padding-top: 0.6rem;

      .works_info_sentence {
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 400;
        font-style: normal;
        text-align: left;
        font-size: 1.4rem;
        letter-spacing: 0.294rem;
        line-height: 2.28;
      }
    }
  }

  // 製作物画像リスト
  .img_list {
    .img_picture {
      padding-bottom: 1.5rem;
      position: relative;

      img {
        width: 100%;
        object-fit: cover;
        display: inline-block;
        opacity: 0;
      }

      & .isShowAnime {
        animation-name: FadeIn;
        animation-duration: 0.5s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
      }

      // .lazy_loaded_cover{
      //   position: absolute;
      //   top: 0;
      //   left: 0;
      //   width: 100%;
      //   height: 100%;
      //   background-color: #c4c4c4;
      //   opacity: 0.2;
      //   transition: opacity .6s;
      //   z-index: 100;
      // }
    }
  }
}

// アニメーションの作成

// 閉じるボタン

  @keyframes LineOutIN{
    0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);-webkit-transform-origin:100% 0;transform-origin:100% 0}
    50%{-webkit-transform:scale3d(0,1,1);transform:scale3d(0,1,1);-webkit-transform-origin:100% 0;transform-origin:100% 0}
    51%{-webkit-transform:scale3d(0,1,1);transform:scale3d(0,1,1);-webkit-transform-origin:0 0;transform-origin:0 0}
    100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);-webkit-transform-origin:0 0;transform-origin:0 0}
}

//画像リストの出現
@keyframes FadeIn {
  0% {

    opacity: 0;
  }

  100% {
    opacity: 1;
  }

}
</style>