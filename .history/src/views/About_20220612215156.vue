<template>
  <!-- 自己紹介 -->
  <article>
    <div class="selfintroduction_contnair">
      <div class="myinfo_contnair">
        <p class="my_name">小島聡太</p>
        <p class="my_job">Frontend Engineer / Designer</p>
      </div>
      <div class="myexplain_contnair">
        <p class="myexplain">名古屋の大学に通う経済学部4年生。<br>
          うどんが好物。大学3年からプログラミング及び開発を始める。<br>
          アプリケーションの企画、デザインからフロントエンドの実装まで幅広く開発に関わります。</p>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="526" height="342"
      viewBox="0 0 526 342">
      <defs>
        <clipPath id="a">
          <rect width="526" height="342" transform="translate(622 130)" fill="#fff" />
        </clipPath>
      </defs>
      <g transform="translate(-622 -130)" clip-path="url(#a)">
        <path
          d="M-431.256,2410.239s4.184-71.6,44.779-136.527c32.476-51.939,87.223-100.127,147.252-99.111,134.9,2.281,94.456,266.227,0,283.63-61.25,11.777-65.579-67.439-29.888-143.975,31.077-66.642,92.685-131.49,172.861-129.01,172.053,5.323,125.2,242.569,47.658,242.569s-30.695-240.288,184.169-242.569"
          transform="translate(1138.046 2598.568) rotate(170)" fill="none" stroke="#3e3e3e" stroke-width="2" />
      </g>
    </svg>

    <!-- ページ内リンクの作成 -->
    <div class="link_layout">

        <div class="link_contnair">

        </div>

    </div>


  </article>

</template>

<style scoped lang="scss">
// import google fonts
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');

article {
  position: relative;
  display: flex;
  padding: 0rem 12rem;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .selfintroduction_contnair {

    .myinfo_contnair {
      display: flex;
      align-items: center;

      .my_name {
        text-align: left;
        color: #3E3E3E;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 400;
        font-style: normal;
        text-align: left;
        font-size: 2.3rem;
        letter-spacing: 0.46rem;
        margin-right: 1.8rem;
      }

      .my_job {
        text-align: left;
        color: #838383;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 400;
        font-style: normal;
        text-align: left;
        font-size: 1.2rem;
        letter-spacing: 0.12rem;
        padding-top: 0.3rem;
      }
    }

    .myexplain_contnair {
      .myexplain {
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 1.5rem;
        line-height: 2.13;
        letter-spacing: 3px;
        color: #3E3E3E;
        opacity: 1;
        max-width: 38.6rem;
        margin-top: 3.2rem;
      }

    }
  }
}

// ページ内リンク
.link_layout {
  .link_nondecoration {
    text-decoration: none;

    .link_contnair {
      width: 5.6rem;
      height: 5.6rem;

      .link_icon {
        position: relative;
      }
    }
  }
}
</style>