<template>
  <header>
    <div class="menu_exstyle">
      <div class="menu_content" id="navigation">
        <ul class="menu_list">
          <li class="menu_tag01 current_item"><router-link to="/" class="header_link">Work</router-link></li>
          <li class="menu_tag02"><router-link to="/about" class="header_link">About</router-link></li>
        </ul>
        <span id="slide_line"></span>
      </div>
    </div>

  </header>
</template>

<script>
export default{
  setup(){

  }
}
</script>

<style scoped lang="scss">

header{
  position: fixed;
  left:50%;
  transform: translateX(-50%);
  bottom: 3.5rem;
  z-index: 1000;
  .menu_exstyle{
    backdrop-filter: blur(12px);
    border-radius: 12px;
    box-shadow:  0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
 .menu_content{
    background-color: rgba(29, 27, 27, 0.4);
    border-radius: 12px;
    & #navigation{
      position:relative;
    }
    .menu_list{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      margin:0;

      .menu_tag01{
        list-style: none;
        padding-left: 1.8rem;
        padding-right: 0.3rem;
        .header_link{
          text-align: center;
          font: normal normal 800 14px/18px Montserrat;
          color: #FFFFFF;
          padding: 1.7rem 1.7rem;
          height: 5.2rem;
          text-decoration: none;
          display: inline-block;
        }
      }
     .menu_tag02{
        list-style: none;
        padding-left: 0.2rem;
        padding-right: 1.8rem;
        .header_link{
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
    #slide_line{
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color:#FFFFFF;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    }
  }
  }
 
}

</style>