<template>
  <main key="3">
    <!-- 布局参考：https://www.swiper.com.cn/demo/slides-scale.html -->

    <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
      <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-1166px, 0, 0)">
        <div class="swiper-slide" data-swiper-slide-index="4" style="width: 358.667px; margin-right: 30px">
          <router-link to="/main/早睡觉身体好">
            <img src="/images/zs.png" alt="" />
          </router-link>
        </div>
        <div
          class="swiper-slide swiper-slide-prev"
          data-swiper-slide-index="0"
          style="width: 358.667px; margin-right: 30px"
        >
          <router-link to="/main/尊重他人">
            <img src="/images/zztr.png" alt="" />
          </router-link>
        </div>
        <div
          class="swiper-slide swiper-slide-active"
          data-swiper-slide-index="1"
          style="width: 358.667px; margin-right: 30px"
        >
          <router-link to="/main/学会谦让">
            <img src="/images/qr.png" alt="" />
          </router-link>
        </div>
        <div
          class="swiper-slide swiper-slide-next"
          data-swiper-slide-index="2"
          style="width: 358.667px; margin-right: 30px"
        >
          <router-link to="/main/爱干净勤洗手">
            <img src="/images/qxs.png" alt="" />
          </router-link>
        </div>
        <div class="swiper-slide" data-swiper-slide-index="3" style="width: 358.667px; margin-right: 30px">
          <router-link to="/main/堆雪人">
            <img src="/images/dxr.png" alt="" />
          </router-link>
        </div>
        <div class="swiper-slide" data-swiper-slide-index="3" style="width: 358.667px; margin-right: 30px">
          <router-link to="/main/知错就改">
            <img src="/images/zcjg.png" alt="" />
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  mounted() {
    // import TheWelcome from '@/components/TheWelcome.vue';
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  },
};
</script>

<style scoped>
main {
  height: 100vh;
  background: url('/images/bg.png') center no-repeat;

  /* background-size: 100% 100%; */
  background-size: cover;
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  font-size: 18px;
  text-align: center;

  /* align-items: center; */
  transition: 300ms;
  transform: scale(0.8);
}

.swiper-slide a {
  width: 25rem;
  margin-top: 26rem;
  overflow: hidden;
}

.swiper-slide a img {
  width: 100%;
}

.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1.2);
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: Montserrat, sans-serif;

  /* background-color: #eee; */
  color: #111;
  background: #72bbd1;
}

header {
  position: absolute;
  top: 4rem;
  left: 50%;
  z-index: 99;
  margin-left: -8rem;
  color: #ffe400;
}

header p {
  font-size: 5rem;
  color: #ffe282;
  text-align: center;
}

.container {
  display: grid;
  grid-template-areas: 'a a a a';
  gap: 20px;
  justify-content: center;
}

.theme-item {
  width: 10rem;
  height: 8rem;
}

img {
  width: 100%;
}

a {
  font-size: 2rem;
  color: #ffe400;
}
</style>
