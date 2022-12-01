<script setup>
import { defineProps } from "vue";

const props = defineProps({
  width: {
    type: Number,
    default: 66.66667,
  },
  height: {
    type: Number,
    default: 20.83,
  },
  paddingX: {
    type: Number,
    default: 3.125,
  },
  paddingTop: {
    type: Number,
    default: 2.8,
  },
});
</script>

<template>
  <div
    class="overflow-hidden absolute left-1/2 transform -translate-x-1/2 bottom-[2.5vw] bg-[#9E9D9C] border-[0.208vw] border-[#201C1B] rounded-[0.416vw]"
    :style="[`width: ${props.width}vw`, `height: ${props.height}vw`]"
  >
    <div
      class="bg-[#F3EEE9] border-[0.208vw] border-[#201C1B] rounded-[0.416vw] m-[0.83333vw] text-[1.66667vw] text-primary"
      :style="[
        `padding: ${props.paddingTop}vw ${props.paddingX}vw 0 ${props.paddingX}vw`,
        `width: ${props.width - 2.08}vw`,
        `height: ${props.height - 2.08}vw`,
      ]"
    >
      <slot></slot>
    </div>
  </div>
</template>
