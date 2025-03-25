<script setup>
import { defineProps, ref, defineEmits } from 'vue';

const props = defineProps({
    icon: {
        type: String,
        default: '',
    },
    text: {
        type: String,
        default: '',
    },
    textWidth: {
        type: String,
        default: '50px'
    },

    modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])

const input = ref(null)

const changeChecked = () => {
    input.value.checked = !input.value.checked
    emit('update:modelValue', input.value.checked)
}

</script>

<template>
    <label class="group flex items-center gap-2.5 cursor-pointer outline-0" tabindex="0"
        @keydown.space.prevent="changeChecked"
        @keydown.enter="changeChecked"
    >
        <input type="checkbox" class="peer hidden"
            ref="input"
            :checked="modelValue"
            @change="$emit('update:modelValue', $event.target.checked)"
        />
        <div class="
            relative w-[30px] h-[30px] border-1 border-[#D3D3D3] rounded-md
            transition-discrete duration-250
            group-hover:contrast-75
            group-focus-visible:outline-1
            before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0
            peer-checked:before:bg-[url(@/assets/icons/check.svg)] before:bg-center
            not-peer-checked:before:opacity-0
            before:transition-opacity before:duration-250
        "></div>
        <div v-if="icon.length > 0" :style='{backgroundImage: `url(${icon})`}' class="
            w-[30px] h-[30px]
            bg-no-repeat bg-center
        "></div>
        <div v-if="text.length > 0"
            :style="{'--fc-text-width': textWidth}"
            class="text-sm w-(--fc-text-width) text-[#838383]"
        >{{ text }}</div>
        <div v-if="$slots.default" class="text-sm"><slot></slot></div>
    </label>
</template>