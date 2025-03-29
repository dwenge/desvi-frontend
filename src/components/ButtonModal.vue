<script setup>
import { computed } from 'vue';

const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    textClass: [String, Array],
    textPosition: {
        type: String,
        validator: v => ['left'].includes(v)
    },
})

defineEmits(['click'])

const wrapClasses = computed(() => {
    let cls = [];
    if (props.textPosition === 'left') {
        cls.push('flex-row-reverse')
    }
    return cls;
})
</script>

<template>
    <div class="flex items-center gap-5" :class="wrapClasses">
        <button class="btn-modal"
            @click="$emit('click', $event)"
        >
            <i :class="icon"></i>
            <span class="sr-only">{{text}}</span>
        </button>
        <div class="text-lg font-bold" :class="textClass">{{text}}</div>
    </div>
</template>

<style>
@import 'tailwindcss';

@layer components {
    .btn-modal {
        @apply size-[72px] bg-black/25 cursor-pointer hover:bg-black/35 transition-colors duration-250
    }
}

</style>