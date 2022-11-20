<script setup></script>

<template>
  <header class="bg-header pt-[39px] pb-[1px] pr-[30px] fixed top-0 left-0 w-full">
    <div class="container mx-auto">
      <div class="flex justify-between">
        <div class="flex items-end">
          <img src="@/assets/images/F2E_logo.svg" alt="">
          <ul class="flex header_option">
            <li>關卡資訊</li>
            <li>攻略資源</li>
            <li>求職專區</li>
          </ul>
        </div>
        <ul class="header_member flex self-end mb-[8px]">
          <li>註冊</li>
          <li>登入</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped lang="postcss">
.header_option > li {
  @apply mr-[24px] mb-[8px]
}
.header_member > li {
  @apply bg-[#BCBCBC] py-[8px] px-[24px] rounded-[50px] ml-[12px]
}
</style>
