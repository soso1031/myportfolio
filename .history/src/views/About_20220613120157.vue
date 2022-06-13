<template>

  <div class="contnair_top">
    <div class="selfintroduction_contnair">
      <div class="myinfo_contnair">
        <p class="my_name">小島聡太</p>
        <p class="my_job">Frontend Engineer / Designer</p>
      </div>
      <div class="myexplain_contnair">
        <p class="myexplain">名古屋の大学に通う経済学部4年生。<br>
          うどんが好物。大学3年からデザイン、プログラミング、開発を始める。<br>
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
  </div>

  <div class="ex_contnair">
    <p class="about_title">Design</p>
    <p class="about_sentence">アプリケーションのUIデザインを中心に、WEBデザイン、モーショングラフィックスを作成します。<br>
      対話、検証を常に繰り返し、熱量を共有し合い、課題と真正面に向き合い、より良い未来を作るためのクリエイティブを生み出すことを常に意識しています。<br>
      そこに妥協はありません。<br>
      多くの人が笑顔で幸せになれる未来を創りたいから。 誰か成し遂げたい「目標」「夢」「想い」、それらに少しでも近づけるようにクリエイティブで後押しし伴走する。 それが私のデザイナーとしてのミッション、使命です。</p>
  </div>

    <div class="ex_contnair">
    <p class="about_title">Develop</p>
    <p class="about_sentence">フロントエンドの開発を<br>
      対話、検証を常に繰り返し、熱量を共有し合い、課題と真正面に向き合い、より良い未来を作るためのクリエイティブを生み出すことを常に意識しています。<br>
      そこに妥協はありません。<br>
      多くの人が笑顔で幸せになれる未来を創りたいから。 誰か成し遂げたい「目標」「夢」「想い」、それらに少しでも近づけるようにクリエイティブで後押しし伴走する。 それが私のデザイナーとしてのミッション、使命です。</p>
  </div>

</template>

<style scoped lang="scss">
// import google fonts
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');

.contnair_top {
  position: relative;
  display: flex;
  padding-top: 12.2rem;
  padding-bottom: 3.5rem;
  justify-content: center;
  align-items: center;

  .selfintroduction_contnair {
    margin-right: 9.6rem;
    padding-top: 3.3rem;

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
        margin-top: 2.7rem;
      }

    }
  }
}
  .ex_contnair{
    max-width: 91.2rem;
    padding-bottom: 12rem;
    padding-top: 9rem;
    border-bottom: solid 1px #FFD39B;
    .about_title{
      text-align: left;
      font: normal normal normal 5rem/6.1rem Montserrat;
      letter-spacing: 0.225rem;
      // color: #3E3E3E;
      margin-bottom: 3.3rem;
    }
    .about_sentence{
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 1.6rem;
        line-height: 2.06;
        letter-spacing: 0.336rem;
        // color: #3E3E3E;
        opacity: 1;
    }
  }
</style>