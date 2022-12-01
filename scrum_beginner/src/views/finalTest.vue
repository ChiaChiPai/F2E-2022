<script setup>
import { onMounted, ref, reactive } from "vue";
import gsap from "@/utils/gsap.js";
import Sortable from "sortablejs";
import { useRouter } from "vue-router";

const router = useRouter();
const animation = gsap.timeline();
let order = reactive([]);
let isShowSubmit = ref(false);

const initializeDragging = () => {
  const candidateDOM = document.querySelector(".candidate");
  const sprintDOM = document.querySelector(".sprint_progress");
  const candidate = Sortable.create(candidateDOM, {
    group: "backlog",
    animation: 500,
    onAdd() {
      isShowSubmit.value = false;
    },
    onEnd() {
      if (candidate.toArray().length <= 0) {
        isShowSubmit.value = true;
      }
    },
  });
  const sprint = Sortable.create(sprintDOM, {
    group: "backlog",
    animation: 500,
    onAdd() {
      order = sprint.toArray();
    },
    onUpdate() {
      order = sprint.toArray();
    },
  });
};

onMounted(() => {
  initializeDragging();
});

const nextTasks = () => {
  animation.to(".board", { y: "-900", duration: 1.5 });
};

const clickDone = () => {
  if (order.join("") === "123") {
    router.push({ name: "endPage" });
  } else {
    animation.fromTo(
      ".sprint_progress img",
      { rotation: -1.5 },
      { rotation: 1.5, ease: "none", duration: 0.15 }
    );
    animation.fromTo(
      ".sprint_progress img",
      { rotation: 1.5 },
      { rotation: -1.5, ease: "none", duration: 0.15 }
    );
    animation.fromTo(
      ".sprint_progress img",
      { rotation: -1.5 },
      { rotation: 1.5, ease: "none", duration: 0.15 }
    );
  }
};
</script>

<template>
  <div class="board">
    <img
      src="@/assets/images/group.png"
      class="absolute left-[50%] transform -translate-x-1/2 top-0"
      alt=""
    />
    <DialogBlock :height="80.208" :padding-top="0" class="absolute top-[28vw]">
      <img src="@/assets/images/final.png" class="mx-auto" alt="" />
      <p class="text-center mt-[-2vw] mb-[2vw]">
        Sprint 流程記憶大考驗<br />把貼紙貼到對應的格子內，全部正確才會出現提交按鈕！
      </p>
      <div
        class="triangle cursor-pointer mx-auto mb-[3vw]"
        @click="nextTasks"
      ></div>
      <h2
        class="mx-auto text-center leading-[3.28vw] w-[15.36vw] h-[3.28vw] bg-[#D9D9D9] mb-[5.468vw]"
      >
        Sprint 流程圖
      </h2>
      <div
        class="sprint_progress bg-sprintProgress w-[59.375vw] h-[22.5vw] bg-cover relative"
      ></div>
      <div class="candidate relative">
        <img src="@/assets/images/retro.png" data-id="1" alt="" />
        <img src="@/assets/images/daily_scrum.png" data-id="2" alt="" />
        <img src="@/assets/images/sprint_review.png" data-id="3" alt="" />
      </div>
      <img
        v-if="isShowSubmit"
        @click="clickDone"
        src="@/assets/images/submit.png"
        class="absolute left-1/2 transform -translate-x-1/2 bottom-[17vw]"
        alt=""
      />
    </DialogBlock>
  </div>
</template>

<style scoped lang="postcss">
.sprint_progress img {
  @apply w-[15vw] absolute;
}
.sprint_progress img:nth-child(1) {
  @apply left-[21.5vw] top-[11vw];
}
.sprint_progress img:nth-child(2) {
  @apply left-[38.5vw] top-[5vw];
}
.sprint_progress img:nth-child(3) {
  @apply left-[42vw] top-[16.5vw];
}
.candidate img {
  @apply w-[15vw] absolute;
}
.candidate img:nth-child(1) {
  @apply left-[5vw];
}
.candidate img:nth-child(2) {
  @apply left-[22vw] top-[2vw];
}
.candidate img:nth-child(3) {
  @apply left-[39vw];
}
</style>
