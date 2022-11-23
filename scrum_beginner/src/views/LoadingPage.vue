<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push({ name: "index" });
  }, 3000);
});
</script>

<template>
  <div class="">
    <div class="clock-lg">
      <img
        src="@/assets/animations/clock.gif"
        class="top-[11.875vw] left-1/2 transform -translate-x-1/2"
        alt=""
      />
    </div>
    <div class="clock-lg clock-lg-slope">
      <img
        src="@/assets/animations/clock.gif"
        class="top-[15.5vw] left-[-7.1vw]"
        alt=""
      />
      <img
        src="@/assets/animations/clock.gif"
        class="bottom-[-17vw] left-[6.25vw]"
        alt=""
      />
      <img
        src="@/assets/animations/clock.gif"
        class="top-[-11.5vw] right-[6.25vw]"
        alt=""
      />
      <img
        src="@/assets/animations/clock.gif"
        class="top-[20vw] right-[-7vw]"
        alt=""
      />
    </div>
    <div class="clock-md clock-md-slope">
      <img
        src="@/assets/animations/clock.gif"
        class="left-[16vw] top-[3vw]"
        alt=""
      />
      <img
        src="@/assets/animations/clock.gif"
        class="right-[18vw] bottom-[1.8vw]"
        alt=""
      />
    </div>
    <img
      src="@/assets/images/loading.png"
      class="absolute left-1/2 bottom-[10.7812vw] transform -translate-x-1/2"
      alt=""
    />
  </div>
</template>

<style lang="postcss" scoped>
.clock-lg img {
  @apply w-[25vw] h-[25.52vw] absolute;
}

.clock-lg-slope img {
  @apply opacity-[0.2] -rotate-[25.76deg];
}
.clock-md img {
  @apply w-[13.35vw] h-[13.62vw] absolute;
}

.clock-md-slope img {
  @apply opacity-[0.05] rotate-[30deg];
}
</style>
