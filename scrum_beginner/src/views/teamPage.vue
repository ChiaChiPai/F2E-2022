<script setup>
import { onMounted, ref, nextTick } from "vue";
import gsap from "@/utils/gsap.js";

let animation = null;
const isShowNextStep = ref(true);
const isShowNextPage = ref(false);

const initAnimation = () => {
  animation = gsap.timeline();
  animation.to(".po", { duration: 1 });
  animation.to(".po", { x: "20%", duration: 1 });
  animation.to(".dialog", { opacity: 1, duration: 1 }, "<");
  nextTick(() => {
    animation.to(".triangle", { opacity: 1, duration: 1 }, "<");
  });
};

onMounted(() => {
  initAnimation();
});

const nextText = () => {
  animation.to(".dialog-text", { y: "-14vw", duration: 0.5 });
  isShowNextStep.value = false;
  nextTick(() => {
    animation.to(".touch_panel", { opacity: 1, duration: 0.2 });
  });
  isShowNextPage.value = true;
};

const reload = () => {
  isShowNextPage.value = false;
  isShowNextStep.value = true;
  animation.revert();
  animation.kill();
  initAnimation();
};

const test = () => {
  console.log("test");
};
</script>

<template>
  <div>
    <img
      src="@/assets/images/po_2.png"
      class="po absolute w-[27.083vw] bottom-[19.5vw] transform translate-x-[-100%]"
      alt=""
    />
    <DialogBlock>
      <div class="leading-[2.5vw]">
        <div class="dialog opacity-0">
          <p>PO:</p>
          <div class="overflow-hidden">
            <div class="dialog-text">
              <p class="mb-[9vw]">
                產品待辦清單好了之後，我們來召集 Scrum Master 和開發團隊共同召
                開短衝規劃會議(Sprint Planning)。
              </p>
              <p>
                短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求，列出短衝待辦清單（Sprint
                Backlog），並由開發團隊在接下來的產品開發週期裡執行。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="isShowNextStep"
        @click="nextText"
        class="opacity-0 absolute triangle left-1/2 bottom-[2vw] transform -translate-x-1/2 cursor-pointer"
      ></div>
      <div
        v-else
        class="opacity-0 touch_panel text-secondary text-[1.0416vw] absolute bottom-[2vw] left-1/2 transform -translate-x-1/2"
      >
        點擊畫面繼續 >>
      </div>
      <img
        v-if="!isShowNextStep"
        @click="reload"
        src="@/assets/icon/icon_refresh.svg"
        class="absolute right-[5.052vw] bottom-[4.114vw] cursor-pointer z-10"
        alt=""
      />
      <div
        v-if="isShowNextPage"
        class="absolute left-0 top-0 right-0 bottom-0 z-0"
        @click="test"
      ></div>
    </DialogBlock>
  </div>
</template>
