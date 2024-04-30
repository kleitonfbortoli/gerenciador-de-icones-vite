<template>
    <div class="size-full overflow-scroll grid gap-1">
        <div v-for="(iconName, key) in IconsNames" :key="key" @click="changeIcon(iconName)" class="p-1 bg-slate-100 cursor-pointer hover:bg-fuchsia-300">
            {{ iconName }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { IconsNames } from '@/helper/IconHelper';

const emits = defineEmits<{
    changeIconSelected: [iconName:string]
}>()

function changeIcon(iconName: string) {
    emits('changeIconSelected', iconName)
}

</script>