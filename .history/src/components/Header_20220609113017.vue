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
  <div class="relative menu__inner bg-black/40 z-2 rounded-[12px] overflow-hidden">
        <div class="menu__content relative w-full">
            <ul class="flex text-white">

                                    <li class="flex-1">
                        <a href="https://kirschberg.co.nz/" class="cursor-pointer flex items-center justify-center px-[18px] pb-[2px] text-[14px] font-bold h-[50px] leading-none js-menu-link"><span class="js-menu-link-elem">Home</span></a>
                    </li>
                                    <li class="flex-1">
                        <a href="https://kirschberg.co.nz/work" class="cursor-pointer flex items-center justify-center px-[18px] pb-[2px] text-[14px] font-bold h-[50px] leading-none js-menu-link"><span class="js-menu-link-elem">Work</span></a>
                    </li>
                                    <li class="flex-1">
                        <a href="https://kirschberg.co.nz/archive" class="cursor-pointer flex items-center justify-center px-[18px] pb-[2px] text-[14px] font-bold h-[50px] leading-none js-menu-link"><span class="js-menu-link-elem">Archive</span></a>
                    </li>
                                    <li class="flex-1">
                        <a href="https://kirschberg.co.nz/about" class="cursor-pointer flex items-center justify-center px-[18px] pb-[2px] text-[14px] font-bold h-[50px] leading-none js-menu-link"><span class="js-menu-link-elem">About</span></a>
                    </li>
                
            </ul>
            <div class="absolute left-0 bottom-1/4 w-full h-[3px] bg-white origin-left rounded-full js-menu-line" style="transform: translate(22px, 0px) scale(0.0994, 1);"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
  .menu_content{
    background-color: rgba(29, 27, 27, 0.4);
    .menu_list{
      display: flex;
      align-items: center;
      justify-content: center;

      .menu_tag{
        list-style: none;
        .header_link{
          text-align: center;
          font: normal normal 800 14px/18px Montserrat;
          color: #FFFFFF;
          padding: 1.7rem 3.1rem;
          text-decoration: none;
          display: inline-block;
        }
      }
    }
  }
</style>