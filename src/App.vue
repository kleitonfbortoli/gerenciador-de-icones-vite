<template>
  <div class="w-screen h-screen flex">
    <div class="h-full w-1/4">
      <IconList @changeIconSelected="setNewIconName"/>
    </div>
    <div class="h-full w-3/4 flex flex-col items-center justify-center ">
      <div class="w-fit font-bold text-2xl">{{iconName}}</div>
      <IconPreview :icon-name="iconName" />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconList from '@/components/IconList.vue';
import IconPreview from '@/components/IconPreview.vue';
import { ref } from 'vue';

const iconName = ref('')

function setNewIconName(iconNameNew:string) {
  iconName.value = iconNameNew
}
</script>