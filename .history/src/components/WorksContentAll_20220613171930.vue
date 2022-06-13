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

  <div class="works_grid_type01">
      <router-link class="link_type00" to="/works/cubi">
        <img src="../assets/cubi.svg">
      </router-link>
  </div>
    <div class="works_grid_type01">
      <router-link class="link_type00" to="/works/oneroute">
        <img src="../assets/oneroute-top.png">
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
          transition: .3s ease;
          width:100%;
          max-height: 100vh;
          img{
            object-fit: cover;
          }&:hover{
            filter: brightness(80%) ;
          }
        }
      }
      .works_grid_type01{
        padding-bottom: 1.65rem;
        .link_type00{
          transition: .3s ease;
          img{
            width:100%;
            max-height: 103vh;
            object-fit: cover;
          } &:hover{
            filter: brightness(80%) ;
          }
        }
      }


  }

</style>