<template>
    <IconInstance></IconInstance>
</template>

<script lang="ts" setup>
import IconList from '@/helper/IconHelper';
import { computed, defineAsyncComponent } from 'vue';

const props = defineProps<{
    iconName: string
}>()

const iconImport = computed(() => IconList[props.iconName] ?? '')
const IconInstance = computed(() => {
    if(!iconImport.value) {
        return defineAsyncComponent(() => import('@/assets/icons/all-covered.svg'))
    }

    return defineAsyncComponent(iconImport.value)
})


</script>