<script setup>
import { computed } from 'vue'
const props = defineProps({
    title: String,
    subTitle: [String, Array],
    count: Number,
    current: Number,
})

const subTitle = computed(() => {
    if (typeof props.subTitle === 'string') {
        return [props.subTitle]
    }
    return props.subTitle
})
</script>

<template>
    <div class="
            fixed bottom-8 left-[50%] -translate-x-1/2
            text-white font-bold
            p-[30px] rounded-[20px] bg-[#383838]/70 backdrop-blur-[35px]
            flex flex-col items-center gap-1
            min-w-64
    ">
        <div class="text-lg">{{title}}</div>
        <div class="size-[60px] bg-red-500"></div>
        <div v-for="st in subTitle" class="text-sm">{{st}}</div>

        <div class="flex gap-3.5 mt-2.5">
            <div v-for="p in count" class="rounded-full bg-white size-1.5" :class="{'opacity-30': p!==current}"></div>
        </div>
    </div>
</template>