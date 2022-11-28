<script setup>
import { onMounted, ref, nextTick } from "vue";
import gsap from "@/utils/gsap.js";

const animation = gsap.timeline();
const isShowNext = ref(true);

onMounted(() => {
  animation.to(".po", { duration: 1 });
  animation.to(".po", { x: "20%", duration: 1 });
  animation.to(".dialog-text", { opacity: 1, duration: 1 }, "<");
  animation.to(".triangle", { opacity: 1, duration: 1 }, "<");
});

const nextText = () => {
  animation.to(".dialog-text", { y: "-17vw", duration: 1 });
  animation.to(".blablabla", { opacity: 1, duration: 1 }, "<");
  isShowNext.value = false;
  nextTick(() => {
    animation.to(".go", { opacity: 1, duration: 1 });
  });
};

const reload = () => {
  location.reload();
};
</script>

<template>
  <div>
    <img
      src="@/assets/images/po_2.png"
      class="po absolute w-[27.083vw] bottom-[19.5vw] transform translate-x-[-100%]"
      alt=""
    />
    <img
      src="@/assets/animations/bababa.gif"
      class="blablabla opacity-0 w-[9.947vw] rotate-[12deg] absolute left-[29vw] bottom-[38.5vw]"
      alt=""
    />
    <DialogBlock>
      <div class="dialog-text leading-[2.5vw]">
        <p class="dialog-text opacity-0 mb-[7vw]">
          我是 TT 資訊，開發組的 PO。<br />
          PO 就是產品負責人（Product
          Owner），產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。<br />
          最後排出產品待辦清單（Product Backlog）唷！<br />
        </p>
        <p>
          剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。
          既然你都來了，就讓你來試試看調整產品優先度，排出產品待辦清單吧！
        </p>
      </div>
      <div
        v-if="isShowNext"
        @click="nextText"
        class="opacity-0 absolute triangle left-1/2 bottom-[2vw] transform -translate-x-1/2 cursor-pointer"
      ></div>
      <router-link v-else to="/product-backlog">
        <img
          src="@/assets/images/go.png"
          class="go opacity-0 w-[14.27vw] absolute left-1/2 bottom-[0.1vw] transform -translate-x-1/2 cursor-pointer"
          alt=""
        />
      </router-link>
      <img
        v-if="!isShowNext"
        @click="reload"
        src="@/assets/icon/icon_refresh.svg"
        class="absolute right-[5.052vw] bottom-[4.114vw] cursor-pointer"
        alt=""
      />
    </DialogBlock>
  </div>
</template>

<style scoped lang="postcss">
.triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 1.302vw 0.78125vw 0 0.78125vw;
  border-color: #000 transparent transparent transparent;
}
</style>
