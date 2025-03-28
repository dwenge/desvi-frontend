<script setup>
import { ref, onMounted, onUnmounted, watchEffect, defineProps } from 'vue'
import ButtonModal from './ButtonModal.vue'

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    touchElement: {
        type: HTMLElement,
    },
    hideClose: Boolean
})

const emit = defineEmits(['update:show'])
const closeModal = () => emit('update:show', false)

onMounted(() => {
    console.log(props.touchElement)
})
onUnmounted(() => {
    document.body.classList.remove('overflow-hidden')
})
watchEffect(() => {
    if (props.show) {
        document.body.classList.add('overflow-hidden')
    } else {
        document.body.classList.remove('overflow-hidden')
    }
})
</script>

<template>
    <div v-if="show" class="fixed top-0 w-full h-screen bg-black/30 backdrop-blur-lg text-white"
        @keydown.left="closeModal"
    >
        <slot name="header">
            <div class="flex justify-between">
                <div><slot name="buttons"></slot></div>
                <div>
                    <ButtonModal
                        v-if="!hideClose"
                        icon="i-close-white"
                        text="Закрыть"
                        text-class="not-md:hidden"
                        text-position="left"
                        @click="closeModal"
                    />
                </div>
            </div>
        </slot>

        <div class="grow flex flex-col justify-center">
            <slot></slot>
        </div>

        <slot name="footer"></slot>

    </div>
</template>