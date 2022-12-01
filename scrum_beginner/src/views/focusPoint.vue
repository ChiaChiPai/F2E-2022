<script setup>
import gsap from "@/utils/gsap.js";
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

let animation = gsap.timeline();
const pageIndex = ref(0);

const doAnimate = () => {
  animation.to(".dialog-text", { duration: 1 });
  animation.to(".dialog-text", { opacity: 1, duration: 1.5 });
  animation.to(".dev_1", { x: "134%", duration: 1.5 }, "<");
  animation.to(".dev_2", { x: "-134%", duration: 1.5 }, "<");
  animation.to(".initPage", { duration: 1.5 });
  animation.to(".initPage", { y: "-100%", duration: 1 });
};

onMounted(() => {
  doAnimate();
});

const onSlideChange = (e) => {
  pageIndex.value = e.activeIndex;
  if (pageIndex.value === 1) {
    animation.to(".dev_1--bottom", { y: "-120%", duration: 1 });
  }
  if (pageIndex.value === 2) {
    animation.to(".dev_2--bottom", { y: "-120%", duration: 1 });
  }
};

const resetAnimation = () => {
  animation.revert();
  animation.kill();
  animation = gsap.timeline();
  doAnimate();
};
</script>

<template>
  <div>
    <h1
      class="title text-white text-[1.5625vw] absolute top-[3vw] left-[50%] transform -translate-x-1/2"
    >
      快速劃重點
    </h1>
    <DialogBlock
      class="top-[8.5vw] overflow-auto"
      :width="54.79"
      :height="29.739"
      :padding-x="6"
    >
      <img
        src="@/assets/images/stars.png"
        class="absolute right-[5.9vw] top-[2vw] width-[5.416667vw]"
        alt=""
      />
      <img
        src="@/assets/icon/icon_refresh.svg"
        class="absolute right-[2.3vw] top-[4.5vw] cursor-pointer w-[2.5vw]"
        @click="resetAnimation"
        alt=""
      />
      <Swiper :slides-per-view="1" @slideChange="onSlideChange">
        <swiper-slide>
          <h2 class="mb-[1.6667vw] text-[1.5625vw]">
            每日站立會議 <span class="text-[1.041vw]">(Daily Scrum)</span>
          </h2>
          <p>
            每天都要進行的會議，以 15 分鐘為限制<br />
            昨天為團隊的短衝目標（Sprint Goal）做了那些進度<br />
            今天我會如何準備來幫助團隊達到短衝目標<br />
            過程中有遇到什麼問題、難題<br />透過團隊分享，追蹤大家的工作狀況。
          </p>
        </swiper-slide>
        <swiper-slide>
          <h2 class="mb-[1.6667vw] text-[1.5625vw]">
            短衝檢視會議 <span class="text-[1.041vw]">(Sprint Review)</span>
          </h2>
          <p>用來檢視該次短衝增量的成果，以蒐集相關的回饋數據或意見。</p>
        </swiper-slide>
        <swiper-slide>
          <h2 class="mb-[1.6667vw] text-[1.5625vw]">
            短衝自省會議 <span class="text-[1.041vw]">(Retro)</span>
          </h2>
          <p>
            團隊在自省會議裡，會共同回顧該短衝歷程發生的事情，好的地方、可以改進的地方，以及如何維持我們已有的成功經驗、優化工作流程、讓團隊有變得更好的機會。
          </p>
          <router-link to="/final-test">
            <img
              src="@/assets/images/understand.png"
              class="absolute bottom-[-2vw] left-[50%] transform -translate-x-1/2 w-[14.27vw] hover:scale-[1.1]"
              alt=""
            />
          </router-link>
        </swiper-slide>
      </Swiper>
      <ul
        class="pagination flex absolute left-[50%] transform -translate-x-1/2 bottom-[3vw]"
      >
        <li class="pagination_item" :class="{ active: pageIndex === 0 }"></li>
        <li class="pagination_item" :class="{ active: pageIndex === 1 }"></li>
        <li class="pagination_item" :class="{ active: pageIndex === 2 }"></li>
      </ul>
    </DialogBlock>
  </div>
  <img
    src="@/assets/images/dev_2.png"
    class="dev_2--bottom absolute w-[35.604vw] bottom-[-100%] right-[-8vw]"
    alt=""
  />
  <img
    src="@/assets/images/dev_1.png"
    class="dev_1--bottom absolute w-[35.4479vw] bottom-[-100%] left-[-8vw]"
    alt=""
  />
  <div class="initPage bg-primary w-[75vw] h-[53.33333vw] absolute">
    <img
      src="@/assets/images/dev_2.png"
      class="dev_2 absolute w-[35.604vw] top-[-2.5vw] right-[-50%]"
      alt=""
    />
    <img
      src="@/assets/images/dev_1.png"
      class="dev_1 absolute w-[35.4479vw] top-[-3vw] left-[-50%]"
      alt=""
    />

    <DialogBlock class="bottom-[7vw]">
      <div class="dialog-text leading-[2.5vw] opacity-0">
        <p>Dev 小貓、小熊:</p>
        <div class="overflow-hidden">
          <div class="dialog-text">
            <p class="mb-[9vw]">
              等等等等等，你都還不知道什麼是 Sprint 吧！<br />讓我先為你介紹一下～
              仔細聽好唷，等等會考考你！
            </p>
          </div>
        </div>
      </div>
    </DialogBlock>
  </div>
</template>

<style scoped lang="postcss">
.title::before {
  content: "";
  background: url("@/assets/animations/three_line.gif");
  width: 1.51vw;
  height: 1.5vw;
  background-size: cover;
  position: absolute;
  right: -1.1vw;
  top: -0.8vw;
}

.swiper-slide {
  height: 20vw;
}
.pagination_item {
  @apply w-[1.25vw] h-[1.25vw] bg-[#9E9D9C] mx-[0.416667vw] opacity-50;
}

.pagination_item.active {
  @apply opacity-100;
}
</style>
