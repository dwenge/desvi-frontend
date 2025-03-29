<script setup>
import { ref, onMounted, onUnmounted, onUpdated } from 'vue'

const imgContainer = ref(null)
const overflowPx = ref(true)
const calcOverflow = () => {
    overflowPx.value = imgContainer?.value?.scrollWidth - imgContainer?.value?.clientWidth
}

onMounted(() => {
    window.addEventListener('resize', calcOverflow)
})
onUnmounted(() => {
    window.removeEventListener('resize', calcOverflow)
})
onUpdated(() => {
    calcOverflow()
})
</script>


<template>
    <div class="max-w-screen overflow-x-hidden relative" ref="imgContainer"
        
    >
        <img class="mx-auto max-w-none" src="@/assets/1920_index.png" alt="" @load="calcOverflow">
        <div v-if="overflowPx > 0" class="fixed right-0 top-0 bottom-0 w-10
            bg-linear-to-r from-transparent to-red-400
            font-bold text-center text-white
        " style="writing-mode: tb;">Выход за границу на {{ overflowPx }}px</div>
    </div>
</template>