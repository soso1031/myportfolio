<template>
  <header>
    <div class="menu_exstyle">
      <div class="menu_content">
        <ul class="menu_list">
          <li class="menu_tag01 current_item" @click="slideLeft">
            <router-link to="/" class="header_link">Work</router-link>
          </li>
          <li class="menu_tag02" @click="slideRight">
            <router-link to="/about" class="header_link">About</router-link>
          </li>
        </ul>
        <span class="slide_line isactive" ref="slideElement" style="transform: translate(4rem, 0rem) scale(1, 1);"></span>
      </div>
    </div>

  </header>
</template>

<script>

import { ref, onMounted } from "vue"
export default {

  setup(){

    // refで要素を取得
    const slideElement = ref(null)

     const slideLeft = () =>{
      slideElement.value.style.opacity = 0;
    }

    const slideRight = () =>{
      slideElement.value.style.opacity = 1;
    }

    onMounted(() => {
      slideLeft();
      slideRight();
    })

    return{
      slideElement,
      slideLeft,
      slideRight
    }
  }
 
}
</script>

<style scoped lang="scss">
header {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 3.5rem;
  z-index: 1000;

  .menu_exstyle {
    backdrop-filter: blur(12px);
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    .menu_content {
      background-color: rgba(29, 27, 27, 0.4);
      border-radius: 12px;
      position: relative;

      .menu_list {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;

        .menu_tag01 {
          list-style: none;
          padding-left: 1.8rem;
          padding-right: 0.3rem;

          .header_link {
            text-align: center;
            font: normal normal 800 14px/18px Montserrat;
            color: #FFFFFF;
            padding: 1.7rem 1.7rem;
            height: 5.2rem;
            text-decoration: none;
            display: inline-block;
          }
        }

        .menu_tag02 {
          list-style: none;
          padding-left: 0.2rem;
          padding-right: 1.8rem;

          .header_link {
            text-align: center;
            font: normal normal 800 14px/18px Montserrat;
            color: #FFFFFF;
            padding: 1.7rem 1.7rem;
            height: 5.2rem;
            text-decoration: none;
            display: inline-block;
          }
        }
      }

      .slide_line {
        position: absolute;
        bottom: 1.1rem;
        height: 0.25rem;
        width: 3.2rem;
        -webkit-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;

        &.isactive {
          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #FFFFFF;
            transform: translateZ(0) scaleX(1);
            transform-origin: top center;
            transition: transform .6s;
          }
        }

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #FFFFFF;
          transform: translateZ(0) scaleX(0);
          transform-origin: top center;
          transition: transform .6s;
        }
      }
    }
  }

}
</style>