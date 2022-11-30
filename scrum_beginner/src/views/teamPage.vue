<script setup>
import { onMounted, ref, nextTick } from "vue";
import gsap from "@/utils/gsap.js";
import Sprint from "@/components/SprintLines.jsx";

let animation = null;
const isShowNextStep = ref(true);
const isShowNextPage = ref(false);
const isGoNextTask = ref(false);
let lineType = ref(0);

const pageProgress = {
  0: () => {
    animation = gsap.timeline();
    animation.to(".po", { duration: 1 });
    animation.to(".po", { x: "20%", duration: 1 });
    animation.to(".dialog", { opacity: 1, duration: 1 }, "<");
    nextTick(() => {
      animation.to(".triangle", { opacity: 1, duration: 1 }, "<");
    });
  },
  1: () => {
    isShowNextStep.value = true;
    isShowNextPage.value = false;
    animation.revert();
    animation.kill();
    animation = gsap.timeline();
    animation.to(".scrum_master", { duration: 1 });
    animation.to(".scrum_master", { x: "120%", duration: 1 });
    animation.to(".dialog", { opacity: 1, duration: 1 }, "<");
    nextTick(() => {
      animation.to(".triangle", { opacity: 1, duration: 1 }, "<");
    });
  },
  2: () => {
    isShowNextStep.value = false;
    isShowNextPage.value = false;
    animation.revert().kill();
    animation = gsap.timeline();
    nextTick(async () => {
      await animation
        .to(".scrum_master", { duration: 1 })
        .to(".scrum_master", { x: "120%", duration: 1 })
        .to(".dialog", { opacity: 1, duration: 1 }, "<")
        .to(".scrum_master_text", { opacity: 1, duration: 1 }, "<")
        .to(".scrum_master", { duration: 2 })
        .to(".scrum_master", { x: "250%", duration: 1 })
        .to(".scrum_master_text", { opacity: 0, duration: 1 }, "<")
        .to(".scrum_master_text", { display: "none" });
      await animation
        .to(".dev_1", { duration: 0.5 })
        .to(".dev_1", { x: "0%", duration: 1 })
        .to(".dev1_text", { opacity: 1, duration: 1 }, "<")
        .to(".dev_1", { duration: 2 })
        .to(".dev_1", { x: "-100%", duration: 1 })
        .to(".dev1_text", { opacity: 0, duration: 1 }, "<")
        .to(".dev1_text", { display: "none" });
      await animation
        .to(".dev_2_right", { duration: 0.5 })
        .to(".dev_2_right", { x: "110%", duration: 1 })
        .to(".dev2_text", { opacity: 1, duration: 1 }, "<");
      isGoNextTask.value = true;
      isShowNextStep.value = false;
    });
  },
};

const textProgress = {
  0: () => {},
  1: () => {
    animation.to(".dev_1", { x: "40%", duration: 1 }, "<");
    animation.to(".dev_2_left", { x: "-10%", duration: 1 });
  },
};

onMounted(() => {
  pageProgress[0]();
});

const nextText = () => {
  animation.to(".dialog-text", { y: "-14vw", duration: 0.5 });
  isShowNextStep.value = false;
  nextTick(() => {
    animation.to(".touch_panel", { opacity: 1, duration: 0.2 });
  });
  isShowNextPage.value = true;
  textProgress[lineType.value]();
};

const reload = () => {
  isShowNextPage.value = false;
  isShowNextStep.value = true;
  isGoNextTask.value = false;
  animation.revert();
  animation.kill();
  pageProgress[lineType.value]();
};

const goNextPage = () => {
  lineType.value += 1;
  pageProgress[lineType.value]();
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
      src="@/assets/images/dev_2.png"
      class="dev_2_left absolute w-[35.9895vw] bottom-[17.5vw] transform translate-x-[-100%]"
      alt=""
    />
    <img
      src="@/assets/images/dev_1.png"
      class="dev_1 absolute w-[34.01vw] bottom-[19.2vw] transform translate-x-[-100%]"
      alt=""
    />
    <img
      src="@/assets/images/scrum_master.png"
      class="scrum_master absolute w-[32.34375vw] bottom-[18vw] transform translate-x-[250%]"
      alt=""
    />
    <img
      src="@/assets/images/dev_2.png"
      class="dev_2_right absolute w-[35.9895vw] bottom-[17.5vw] transform translate-x-[200%]"
      alt=""
    />
    <DialogBlock>
      <div class="leading-[2.5vw]">
        <div class="dialog opacity-0">
          <Sprint :types="lineType" />
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
        class="absolute right-[5.052vw] bottom-[4.114vw] cursor-pointer z-10 w-[2.5vw]"
        alt=""
      />
      <div
        v-if="isShowNextPage"
        class="absolute left-0 top-0 right-0 bottom-0 z-0"
        @click="goNextPage"
      ></div>
      <router-link v-if="isGoNextTask" to="/sprint-point">
        <img
          src="@/assets/images/go.png"
          class="go w-[14.27vw] absolute left-1/2 bottom-[0.1vw] transform -translate-x-1/2 cursor-pointer"
          alt=""
        />
      </router-link>
    </DialogBlock>
  </div>
</template>
