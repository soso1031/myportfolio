<template>
  <header>
    <div>
      <div class="menu_content">
        <ul class="menu_list">
          <li class="menu_tag"><router-link to="/" class="header_link">Work</router-link></li>
          <li class="menu_tag"><router-link to="/about" class="header_link">About</router-link></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  .menu_content{
    .menu_list{
      display: flex;
      .menu_tag{

        .header_link{
          text-align: center;
          font: normal normal 800 14px/18px Montserrat;
          color: #FFFFFF;
          padding:3.1rem 1.7rem;
        }
      }
    }
  }
</style>