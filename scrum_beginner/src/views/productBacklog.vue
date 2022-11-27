<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const candidate = document.querySelector(".candidate");
  const panelAnswer = document.querySelector(".panel_answer");
  let dragging = null;
  candidate.addEventListener("dragstart", (event) => {
    dragging = event.target;
  });
  panelAnswer.addEventListener("dragover", (event) => {
    console.log(event);
    panelAnswer.appendChild(dragging);
  });
  panelAnswer.addEventListener("dragstart", (event) => {
    dragging = event.target;
  });
  candidate.addEventListener("dragover", () => {
    candidate.appendChild(dragging);
  });
});
</script>

<template>
  <div class="pt-[1vw]">
    <h2 class="text-white text-[1.5625vw] text-center">
      請把需求放到產品待辦清單，並調整待辦的優先度順序。
    </h2>
    <img
      src="@/assets/images/po_left.png"
      class="w-[27.08vw] h-[30.2vw] absolute top-[2vw] right-[2.291vw]"
      alt=""
    />
    <div
      class="origin-bottom-left rotate-[22deg] pt-[16.6667vw] pl-[18.9062vw] text-primary bg-productBacklog w-[84.98vw] h-[63.72vw] bg-cover absolute bottom-[-7.5vw] left-[-5vw]"
    >
      <img
        src="@/assets/icon/icon_question.png"
        class="w-[2.5vw] h-[2.5vw] absolute top-[14.21vw] right-[15.9375vw]"
        alt=""
      />
      <h3 class="text-[1.0416vw] opacity-[0.6]">
        Projects / TT / 人才招募系統
      </h3>
      <h4 class="text-[1.5625vw]">
        產品待辦清單 <span class="text-[1.0416vw]">(Product Backlog)</span>
      </h4>
      <div class="candidate">
        <img
          draggable="true"
          class="w-[14.375vw] h-[6.25vw]"
          src="@/assets/images/answer-1.png"
          alt=""
        />
        <img
          draggable="true"
          class="w-[14.375vw] h-[6.25vw]"
          src="@/assets/images/answer-2.png"
          alt=""
        />
        <img
          draggable="true"
          class="w-[14.375vw] h-[6.25vw]"
          src="@/assets/images/answer-3.png"
          alt=""
        />
        <img
          draggable="true"
          class="w-[14.375vw] h-[6.25vw]"
          src="@/assets/images/answer-4.png"
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
  @apply absolute left-[2.76vw] top-[3.645vw];
}
.panel_answer img:nth-child(2) {
  @apply absolute left-[2.76vw] top-[11.145vw];
}
.panel_answer img:nth-child(3) {
  @apply absolute left-[2.76vw] top-[18.645vw];
}
.panel_answer img:nth-child(4) {
  @apply absolute left-[2.76vw] top-[26.145vw];
}
</style>
