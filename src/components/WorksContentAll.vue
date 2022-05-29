<template>
<section class="works_index">

  <div class="works_grid_type02">
    <div class="grid_type02">
      <router-link class="link_type00" to="/works/">
        <img src="../assets/island.jpg">
      </router-link>
    </div>
    <div class="grid_type02">
      <router-link class="link_type00" to="/works/">
        <img src="../assets/island.jpg">
      </router-link>
    </div>
  </div>

  <div class="works_grid_type01">
      <router-link class="link_type00" to="/works/">
        <img src="../assets/cubi.svg">
      </router-link>
  </div>

</section>

</template>

<style scoped lang="scss">
  $background:#F4F2F0;

  .works_index{
    background-color: $background;
    padding: 0 1rem;
      .works_grid_type02{
        display: grid;
        gap:1.1rem;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        padding-bottom: 1.1rem;
        .grid_type02{
          img{
            border-radius: 0.875rem;
            object-fit: cover;
          }
        }
      }
      .works_grid_type01{
        padding-bottom: 1.1rem;
        .link_type00{
          img{
            width:100%;
            max-height: 103vh;
            object-fit: cover;
            border-radius: 0.875rem;
          }
        }
      }


  }

</style>