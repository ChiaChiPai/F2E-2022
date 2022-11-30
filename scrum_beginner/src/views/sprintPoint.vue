<script setup>
import gsap from "@/utils/gsap.js";
import Sortable from "sortablejs";
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const animation = gsap.timeline();
let point = ref(0);
let isShowGo = ref(false);

watch(point, (newValue) => {
  newValue === 0 ? (isShowGo.value = false) : (isShowGo.value = true);
});

const doAnimate = () => {
  animation.to(".ipad", { duration: 1.5 });
  animation.to(".ipad", { y: "-29%", scale: 1.2, duration: 0.5 });
  animation.to(".character", { opacity: 0, duration: 0.5 }, "<");
  animation.to(".notice", { opacity: 1, duration: 1 }, "<");
};

const initializeDragging = () => {
  const candidateDOM = document.querySelector(".candidate");
  const panelAnswerDOM = document.querySelector(".panel_answer");
  Sortable.create(candidateDOM, {
    group: "backlog",
    animation: 500,
  });

  Sortable.create(panelAnswerDOM, {
    group: "backlog",
    animation: 500,
    onAdd(e) {
      point.value =
        parseInt(point.value, 10) + parseInt(e.clone.dataset.id, 10);
    },
    onRemove(e) {
      point.value =
        parseInt(point.value, 10) - parseInt(e.clone.dataset.id, 10);
    },
  });
};

onMounted(() => {
  doAnimate();
  initializeDragging();
});

const checkout = () => {
  if (point.value >= 13 && point.value <= 20) {
    router.push({ name: "focusPoint" });
  } else {
    animation.fromTo(
      ".panel_answer img",
      { rotation: -1.5 },
      { rotation: 1.5, ease: "none", duration: 0.15 }
    );
    animation.fromTo(
      ".panel_answer img",
      { rotation: 1.5 },
      { rotation: -1.5, ease: "none", duration: 0.15 }
    );
    animation.fromTo(
      ".panel_answer img",
      { rotation: -1.5 },
      { rotation: 1.5, ease: "none", duration: 0.15 }
    );
    animation.fromTo(
      ".panel_answer img",
      { rotation: 1.5 },
      { rotation: 0, ease: "none", duration: 0.15 }
    );
  }
};
</script>

<template>
  <div class="pt-[1vw]">
    <h2 class="notice text-white text-[1.5625vw] text-center opacity-0">
      將產品待辦清單，拖拉過去短衝清單，短衝是有限制可完成的 Point。
    </h2>
    <div class="character opacity-1">
      <img
        src="@/assets/images/dev_2.png"
        class="w-[33vw] absolute left-[13.6vw] top-[-4vw]"
        alt=""
      />
      <img
        src="@/assets/images/dev_1.png"
        class="w-[33vw] absolute left-[2vw] top-[6vw]"
        alt=""
      />
      <img
        src="@/assets/images/scrum_master.png"
        class="w-[31.8vw] absolute right-[16vw] top-[-1vw]"
        alt=""
      />
      <img
        src="@/assets/images/po_left.png"
        class="w-[29vw] absolute right-[2.55vw] top-[7.5vw]"
        alt=""
      />
    </div>
    <div
      class="ipad bg-oneHandsIpad w-[74.21875vw] h-[55.625vw] bg-cover absolute bottom-[-20vw] left-[1vw] pt-[12.6667vw] pl-[17.3182vw]"
    >
      <img
        src="@/assets/icon/icon_question.svg"
        class="w-[2.1578vw] absolute top-[12vw] right-[13.3vw]"
        alt=""
      />
      <h3 class="text-[0.8989vw] opacity-[0.6]">
        Projects / TT / 人才招募系統
      </h3>
      <div class="flex text-[1.3484vw]">
        <h4 class="mr-[3.086vw]">
          產品待辦清單 <span class="text-[0.8989vw]">(Product Backlog)</span>
        </h4>
        <h4>
          短衝待辦清單
          <span class="text-[0.8989vw]">(20 點 / 5 人)</span>
        </h4>
      </div>
      <div class="candidate" ref="candidateRef">
        <img
          draggable="true"
          class="w-[13.216667vw]"
          src="@/assets/images/text-point_1.png"
          data-id="8"
          alt=""
        />
        <img
          draggable="true"
          class="w-[13.216667vw]"
          src="@/assets/images/text-point_2.png"
          data-id="8"
          alt=""
        />
        <img
          draggable="true"
          class="w-[13.216667vw]"
          src="@/assets/images/text-point_3.png"
          data-id="5"
          alt=""
        />
        <img
          draggable="true"
          class="w-[13.216667vw]"
          src="@/assets/images/text-point_4.png"
          data-id="15"
          alt=""
        />
      </div>
      <div
        class="panel_answer bg-sprintBlock w-[16.6781vw] h-[26.8375vw] bg-cover absolute top-[16.66667vw] right-[21vw]"
      ></div>
      <img
        v-if="isShowGo"
        src="@/assets/images/go_arrow.png"
        class="absolute right-[10vw] top-[23vw]"
        @click="checkout"
        alt=""
      />
    </div>
  </div>
</template>

<style scoped lang="postcss">
.candidate {
  @apply w-[16vw] h-[30vw];
}
.candidate img:nth-child(1) {
  @apply absolute left-[18.2vw] top-[17.6vw];
}
.candidate img:nth-child(2) {
  @apply absolute left-[18.2vw] top-[24vw];
}
.candidate img:nth-child(3) {
  @apply absolute left-[18.2vw] top-[30.4vw];
}
.candidate img:nth-child(4) {
  @apply absolute left-[18.2vw] top-[36.8vw];
}
.panel_answer img:nth-child(1) {
  @apply absolute left-[1.9vw] top-[0.8vw];
}
.panel_answer img:nth-child(2) {
  @apply absolute left-[1.9vw] top-[7.2vw];
}
.panel_answer img:nth-child(3) {
  @apply absolute left-[1.9vw] top-[13.6vw];
}
.panel_answer img:nth-child(4) {
  @apply absolute left-[1.9vw] top-[20vw];
}
</style>
