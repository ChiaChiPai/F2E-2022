<script setup>
const props = defineProps(["path"]);
</script>

<template>
  <img :src="`@/assets/images/${props.path}`" alt="" />
</template>
