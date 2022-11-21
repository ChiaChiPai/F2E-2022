<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
import { TextPlugin } from 'gsap/TextPlugin.js'
gsap.registerPlugin(ScrollTrigger, TextPlugin)

onMounted(() => {
  const scrollAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: '#index_page',
      start: 'top -0.5%',
      // pin: true,
      markers: true,
      toggleActions: 'play none none none'
    }
  })

  scrollAnimation.to('.cup-girl', { x: 250, y: -90, width: '10.5%', duration: 1 })
  scrollAnimation.to('.pen-boy', { x: 50, y: -100, width: '8.5%', duration: 1 }, '<')
  scrollAnimation.fromTo('.table', { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.3, delay: 0.3 }, '<')
  scrollAnimation.fromTo('.index-monitor--active', { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.3, delay: 0.3 }, '<')
})
</script>

<template>
  <section id="index_page" class="bg-grid-background h-screen overflow-hidden flex relative">
    <img src="@/assets/images/index-title.png" class="absolute top-[17.5%] left-1/2 transform -translate-x-1/2" alt="">
    <div>
      <img src="@/assets/images/index-monitor.png" class="absolute bottom-[12.5%] right-[16.5%] w-[18.82%]" alt="">
      <img src="@/assets/images/index-monitor_active.png" class="index-monitor--active absolute bottom-[12.5%] right-[16.5%] w-[23.55%]" alt="">
    </div>
    <div>
      <img src="@/assets/images/index-chart.png" class="absolute top-[49%] left-[22%] w-[25%]" alt="">
      <img src="@/assets/images/index-cup_girl.png" class="cup-girl absolute top-[61%] left-[3.5%] w-[21.4%]" alt="">
      <img src="@/assets/images/index-pen_boy.png" class="pen-boy absolute top-[61%] left-[44%] w-[20.9%]" alt="">
    </div>
    <div class="table">
      <img src="@/assets/images/index-table_girl.png" class="absolute top-[34%] left-[2%] w-[10%]" alt="">
      <img src="@/assets/images/index-write_girl.png" class="absolute top-[32%] right-[1.5%] w-[13%]" alt="">
    </div>
    <img src="@/assets/images/unused.png" class="absolute top-[21%] left-0" alt="">
  </section>
</template>

<style lang="postcss" scoped>

</style>
