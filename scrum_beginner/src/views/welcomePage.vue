<script setup>
import { onMounted } from "vue";
import gsap from "@/utils/gsap.js";

onMounted(() => {
  setTimeout(() => {
    gsap.to(".ipad", { scale: 1.15, y: "-34%", duration: 1 });
  }, 1500);
});
</script>

<template>
  <div>
    <img
      src="@/assets/images/po_left.png"
      class="w-[27.08vw] absolute left-1/2 transform -translate-x-1/2 top-[-0.5vw]"
      alt=""
    />
    <div
      class="ipad bg-twoHandsIpad w-[75vw] h-[56.25vw] absolute left-0 bottom-[-21vw]"
    >
      <p
        class="text-[2.083vw] text-center text-primary absolute left-1/2 transform -translate-x-1/2 top-[21vw]"
      >
        Welcome to TT 資訊<br />， 在加入我們之前，請先<br />了解 Scrum
        的精神並通過任務!
      </p>
      <router-link to="/introduce">
        <img
          src="@/assets/images/accept.png"
          class="absolute left-1/2 transform -translate-x-1/2 top-[37vw] hover:scale-[1.1]"
          alt=""
        />
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
