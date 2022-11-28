<script setup>
import { onMounted } from "vue";
import gsap from "@/utils/gsap.js";

onMounted(() => {
  const animation = gsap.timeline();
  animation.to(".scrum_stripe--top", { x: "100%", duration: 1 });
  animation.to(".scrum_stripe--bottom", { x: "-100%", duration: 1 }, "<");
  animation.to(".character--left", { y: "-75%", duration: 0.5 });
  animation.to(".character--right", { y: "-75%", duration: 0.5 });
  animation.to(".start", { scale: "1", duration: 0.5 });
});
</script>

<template>
  <div>
    <img
      src="@/assets/images/scrum_stripe.png"
      class="scrum_stripe--top absolute top-0 left-[-100%] w-[81vw]"
      alt=""
    />
    <div class="flex items-center flex-col">
      <div class="mt-[9.791vw] w-[21.45vw]">
        <img src="@/assets/images/scrum.png" alt="" />
      </div>
      <div class="mt-[2.5vw] w-[27.76vw]">
        <img src="@/assets/images/village.png" alt="" />
      </div>
      <p class="text-[#E6E6E6] opacity-[0.6] mt-[13.9vw]">design by Rong</p>
    </div>
    <img
      src="@/assets/images/po.png"
      class="character--left absolute left-0 w-[27vw] transform translate-y-[100%]"
      alt=""
    />
    <router-link
      to="/welcome"
      class="start absolute left-1/2 transform -translate-x-1/2 bottom-[15vw] w-[10.416vw] scale-0 hover:w-[12.416vw]"
    >
      <img src="@/assets/images/start.png" alt="" />
    </router-link>
    <img
      src="@/assets/images/user.png"
      class="character--right absolute right-0 w-[30vw] transform translate-y-[100%]"
      alt=""
    />
    <img
      src="@/assets/images/scrum_stripe.png"
      class="scrum_stripe--bottom absolute bottom-0 right-[-100%] w-[81vw]"
      alt=""
    />
  </div>
</template>

<style scoped></style>
