<template>
<div class=layout>
    <button class="close_button layout_right" aria-label="戻る">
        <span></span>
        <span></span>
    </button>
</div>


</template>

<style scoped lang="scss">

.layout{
  padding-top: 4.8rem;
  padding-right: 4.5rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: end;
  background-color: #F4F2F0;
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
    }
  }
}



  // アニメーション情報

  @keyframes LineOutIN{
    0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);-webkit-transform-origin:100% 0;transform-origin:100% 0}
    50%{-webkit-transform:scale3d(0,1,1);transform:scale3d(0,1,1);-webkit-transform-origin:100% 0;transform-origin:100% 0}
    51%{-webkit-transform:scale3d(0,1,1);transform:scale3d(0,1,1);-webkit-transform-origin:0 0;transform-origin:0 0}
    100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);-webkit-transform-origin:0 0;transform-origin:0 0}
}
</style>