<script setup>

</script>

<template>
  <section class="bg-primary h-screen pt-[126px]">
    <h2 class="text-center text-[60px] font-bold tracking-[18px] mb-[50px]"> 區區修煉已經無法滿足了嗎？<br>還有比賽等著你！</h2>
    <ul class="description flex justify-center">
      <li>
        <h3 class="bg-[#EEBBC3]">評審機制</h3>
        <div class="pl-[70px] pr-[80px] pt-[23px] font-bold">
          <h4>初選</h4>
          <p class="text-[23px]">將由六角學院前端、UI 評審進行第一波篩選，並於 <span class="text-[#2B4EFA]">12/5（五）公布初選佳作名單</span></p>
          <hr class="mx-[30px] my-[12px] text-[#DFDFDC]">
          <h4>決選</h4>
          <p class="text-[23px]">由三大企業針對該企業主題進行入圍獎最後篩選，並於 <span class="text-[#2B4EFA]">12/23（五）公布企業得獎名單</span></p>
        </div>
      </li>
      <li class="award relative">
        <h3 class="bg-[#FCDA6F]">獎項</h3>
        <div class="absolute top-[26%] left-[10%]">
          <h4>初選佳作</h4>
          <p class="award_people">共六十位 <span>數位獎狀</span></p>
          <p class="award_count">每週主題個人組十位、團體組十組</p>
        </div>
        <div class="absolute top-[40%] right-[7%]">
          <h4>個人企業獎</h4>
          <p class="award_people">共六位 <span>NTD 3,000/位</span></p>
          <p class="award_count">每週主題各 2 名，設計 1 位、前端 1 位</p>
        </div>
        <div class="absolute top-[65%] left-[20%]">
          <h4>團體企業獎</h4>
          <p class="award_people">共三組 <span>NTD 10,000/組</span></p>
          <p class="award_count">每週主題各 1 組</p>
        </div>
        <img src="@/assets/images/award.png" class="absolute left-[-3%] bottom-[-3%] z-10" alt="">
        <div class="font-bold text-[22px] absolute bottom-[2%] right-[5%]">*以上皆提供完賽數位獎狀</div>
      </li>
    </ul>
  </section>
</template>

<style lang="postcss" scoped>
.description li {
  @apply w-[33.194vw] h-[24.707vw] bg-white rounded-[8%] mx-[54.5px] overflow-hidden
}
.description h3 {
  @apply text-[45px] font-bold text-center py-[20px]
}

.description h4 {
  @apply text-[35px] font-bold
}

.award_people {
  @apply text-[20px] font-bold
}

.award_people span {
  @apply text-[#2B4EFA]
}

.award_count {
  @apply text-[16px]
}
</style>
