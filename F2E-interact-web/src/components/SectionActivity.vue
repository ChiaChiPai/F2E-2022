<script setup>

</script>

<template>
  <section class="h-screen relative">
    <div class="text-white bg-monitor_girl w-[78vw] h-[41.89vw] bg-cover absolute top-[9.2%] left-[5%] pt-[3%] pl-[20%]">
      <h2 class="text-[60px] tracking-[18px] mb-[40px]">活動說明</h2>
      <ul class="description">
        <li class="flex items-center">
          <img src="@/assets/svg/alarm.svg" alt="">
          <h3>開放時間</h3>
          <p>10/13(四)11:00 ~ 11/6(日)23:59</p>
        </li>
        <li>
          <img src="@/assets/svg/person.svg" alt="">
          <h3>各組別開賽</h3>
          <p>10/31(一）UI組、團體組開賽<br/>11/7(一)前端組開賽</p>
        </li>
        <li>
          <img src="@/assets/svg/plus.svg" alt="">
          <h3>登陸作品</h3>
          <p>10/31(一) 12:00 ~11/28(一) 12:00</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.description li{
  @apply flex items-center mb-[30px]
}
.description h3 {
  @apply text-[45px] mr-[32px]
}
.description p {
  @apply text-[40px]
}
</style>
