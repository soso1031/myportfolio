<template>
  <header>
      <div class="menu_content">
        <ul class="menu_list">
          <li class="menu_tag01"><router-link to="/" class="header_link">Work</router-link></li>
          <li class="menu_tag02"><router-link to="/about" class="header_link">About</router-link></li>
        </ul>
      </div>
  </header>
</template>

<style scoped lang="scss">

header{
  position: fixed;
  left:50%;
  transform: translateX(-50%);
  bottom: 4rem;
  .menu_content{
    background-color: rgba(29, 27, 27, 0.4);
    .menu_list{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      margin:0;

      .menu_tag01{
        list-style: none;
        padding-left: 0.1rem;
        padding-right: 1.4rem;
        .header_link{
          text-align: center;
          font: normal normal 800 14px/18px Montserrat;
          color: #FFFFFF;
          padding: 1.7rem 3.1rem;
          height: 5.2rem;
          text-decoration: none;
          display: inline-block;
        }
      }
     .menu_tag02{
        list-style: none;
        padding-left: 1.4rem;
        padding-right: 0.1rem;
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
  }
}

</style>