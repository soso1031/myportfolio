<template>

    <button class="close_button is-hover" aria-label="戻る">
        <span></span>
        <span></span>
    </button>

</template>

<style scoped lang="scss">
.close_button{
  width: 17.8rem;
  height: 4.74rem;
  position: relative;
  border: none;
  background-color: transparent;
  cursor: pointer;
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
    background-color: #313131;
    transition: 0.2s;
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
    background-color: #313131;
    transition: 0.2s;
  }

  // アニメーション情報

  @keyframes line-outin{
    0%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);-webkit-transform-origin:100% 0;transform-origin:100% 0}
    50%{-webkit-transform:scale3d(0,1,1);transform:scale3d(0,1,1);-webkit-transform-origin:100% 0;transform-origin:100% 0}
    50.00001%{-webkit-transform:scale3d(0,1,1);transform:scale3d(0,1,1);-webkit-transform-origin:0 0;transform-origin:0 0}
    100%{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);-webkit-transform-origin:0 0;transform-origin:0 0}
}
</style>