<template>
<div class="overflow">
  <div class="title">
    <h1 class="works_title">MyWorks</h1>
    <div class="Works_title_explain_layout">
      <p class="Works_title_explain_sentence">A collection of work, past and present.Some built for today, for tomorrow and others.
      <br>From editional and web, to product and vision work.</p>
    </div>
  </div>

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
</div>


</template>

<style scoped lang="scss">
  $background:#F4F2F0;
.overflow{
  overflow: hidden;
   .title{
  background-color: $background;
  padding-top: 50px;
  padding-bottom: 83px;
  .works_title{
    text-align: center;
    font: normal normal bold 260px/340px Ysans Std;
    letter-spacing: 7.8px;
    color: #000000;
  }
  .Works_title_explain_layout{
    padding-top: 45px;
  .Works_title_explain_sentence{
    text-align: center;
    font: normal normal medium 14.5px/21px Montserrat;
    line-height: 1.4;
    letter-spacing: 0.9px;
    color: #4E4E4E;
    }
  }
}

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
}
 

</style>