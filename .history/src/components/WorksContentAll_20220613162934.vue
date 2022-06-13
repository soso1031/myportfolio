<template>
<section class="works_index">

    <div class="works_grid_type02">
    <div class="grid_type02">
      <router-link class="link_type00" to="/works/trim">
        <img src="../assets/trim-top00.png">
      </router-link>
    </div>
    <div class="grid_type02">
      <router-link class="link_type00" to="/works/tsugitasu">
        <img src="../assets/tsugitasu-top.png">
      </router-link>
    </div>
  </div>

  <div class="works_grid_type02">
    <div class="grid_type02">
      <router-link class="link_type00" to="/works/oneroute">
        <img src="../assets/oneroute-top.png">
        <p class="hover_sentence">View Detail</p>
      </router-link>
    </div>
    <div class="grid_type02">
      <router-link class="link_type00" to="/works/">
        <img src="../assets/dottop.png">
      </router-link>
    </div>
  </div>

  <div class="works_grid_type01">
      <router-link class="link_type00" to="/works/cubi">
        <img src="../assets/cubi.svg">
      </router-link>
  </div>

</section>

</template>

<style scoped lang="scss">

  .works_index{
    padding: 0 2rem;
      .works_grid_type02{
        display: grid;
        gap:1.65rem;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        padding-bottom: 1.65rem;
        .grid_type02{
          overflow:hidden ;
          transition: .3s ease;
          img{
            width:100%;
            border-radius: 1.1rem;
            max-height: 100vh;
            object-fit: cover;
          }&:hover{
            filter: brightness(60%) ;
          }
          .hover_sentence{
            font: normal normal 300 1.3rem/6.4rem Montserrat;
            letter-spacing: 0.37rem;
            position:absolute;
            color: #FFFFFF;
            opacity: 0;
          }
        }
      }
      .works_grid_type01{
        padding-bottom: 1.65rem;
        .link_type00{
          img{
            width:100%;
            max-height: 103vh;
            object-fit: cover;
            border-radius: 1.1rem;
          }
        }
      }


  }

</style>