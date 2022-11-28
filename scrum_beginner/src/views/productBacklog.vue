<script setup>
import gsap from "@/utils/gsap.js";
import Sortable from "sortablejs";
import { onMounted, ref, reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
let order = reactive([]);
let isShowDone = ref(false);
const animation = gsap.timeline();
const candidateRef = ref(null);

const doAnimate = () => {
  animation.to(".notice", { x: 0, duration: 1 });
  animation.to(".ipad", { duration: 1.5 });
  animation.to(".po", { opacity: 0, duration: 1 });
  animation.to(".ipad", { rotation: 0, duration: 1 }, "<");
};

const initializeDragging = () => {
  const candidateDOM = document.querySelector(".candidate");
  const panelAnswerDOM = document.querySelector(".panel_answer");
  // let dragging = null;
  const candidate = Sortable.create(candidateDOM, {
    group: "backlog",
    animation: 500,
    onAdd() {
      isShowDone.value = false;
    },
    onEnd() {
      if (candidate.toArray().length <= 0) {
        isShowDone.value = true;
      }
    },
  });

  const panelAnswer = Sortable.create(panelAnswerDOM, {
    group: "backlog",
    animation: 500,
    onAdd() {
      order = panelAnswer.toArray();
    },
    onUpdate() {
      order = panelAnswer.toArray();
    },
  });
};

onMounted(() => {
  doAnimate();
  initializeDragging();
  if (candidateRef.value.childElementCount === 0) {
    isShowDone.value = true;
  }
});

const clickDone = () => {
  if (order.join("") === "1234") {
    router.push({ name: "team" });
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
    <h2
      class="notice text-white text-[1.5625vw] text-center transform translate-x-full"
    >
      請把需求放到產品待辦清單，並調整待辦的優先度順序。
    </h2>
    <img
      src="@/assets/images/po_left.png"
      class="po w-[27.08vw] h-[30.2vw] absolute top-[2vw] right-[2.291vw]"
      alt=""
    />
    <div
      class="ipad origin-bottom-left rotate-[22deg] pt-[16.6667vw] pl-[18.9062vw] text-primary bg-productBacklog w-[84.98vw] h-[63.72vw] bg-cover absolute bottom-[-7.5vw] left-[-5vw]"
    >
      <img
        src="@/assets/icon/icon_question.svg"
        class="w-[2.5vw] h-[2.5vw] absolute top-[14.21vw] right-[15.9375vw]"
        alt=""
      />
      <h3 class="text-[1.0416vw] opacity-[0.6]">
        Projects / TT / 人才招募系統
      </h3>
      <h4 class="text-[1.5625vw]">
        產品待辦清單 <span class="text-[1.0416vw]">(Product Backlog)</span>
      </h4>
      <img
        v-if="isShowDone"
        @click="clickDone"
        src="@/assets/images/done.png"
        class="absolute left-[28%] top-[45%] hover:scale-[1.1] cursor-pointer"
        alt=""
      />
      <div class="candidate" ref="candidateRef">
        <img
          draggable="true"
          class="w-[13.33333vw] h-[5.416667vw]"
          src="@/assets/images/answer-1.png"
          data-id="1"
          alt=""
        />
        <img
          draggable="true"
          class="w-[13.33333vw] h-[5.416667vw]"
          src="@/assets/images/answer-2.png"
          data-id="2"
          alt=""
        />
        <img
          draggable="true"
          class="w-[13.33333vw] h-[5.416667vw]"
          src="@/assets/images/answer-3.png"
          data-id="3"
          alt=""
        />
        <img
          draggable="true"
          class="w-[13.33333vw] h-[5.416667vw]"
          src="@/assets/images/answer-4.png"
          data-id="4"
          alt=""
        />
      </div>
      <div
        class="panel_answer bg-backlogPanel w-[22.3958vw] h-[33.75vw] bg-cover absolute top-[16.66667vw] right-[19.0625vw]"
      ></div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.candidate {
  @apply w-[22vw] h-[30vw];
}
.candidate img:nth-child(1) {
  @apply absolute left-[22.1875vw] top-[21.927vw];
}
.candidate img:nth-child(2) {
  @apply absolute left-[27.395vw] top-[28.85vw];
}
.candidate img:nth-child(3) {
  @apply absolute left-[23.8vw] top-[35.36vw];
}
.candidate img:nth-child(4) {
  @apply absolute left-[27.65vw] top-[43.3333vw];
}
.panel_answer img:nth-child(1) {
  @apply absolute left-[2.76vw] top-[3.645vw] w-[14.375vw] h-[6.25vw];
}
.panel_answer img:nth-child(2) {
  @apply absolute left-[2.76vw] top-[11.145vw] w-[14.375vw] h-[6.25vw];
}
.panel_answer img:nth-child(3) {
  @apply absolute left-[2.76vw] top-[18.645vw] w-[14.375vw] h-[6.25vw];
}
.panel_answer img:nth-child(4) {
  @apply absolute left-[2.76vw] top-[26.145vw] w-[14.375vw] h-[6.25vw];
}
</style>
