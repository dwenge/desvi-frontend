<script setup>
import { defineProps, defineEmits, ref } from 'vue';

defineProps({
    modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const input = ref(null)

const submit = () => {
    emit('update:modelValue', input.value.value)
}

</script>

<template>
    <form class="bg-white rounded-xl flex h-[50px]"
        role="search" aria-label="Поиск страниц"
        @submit.prevent="submit"
    >
        <input type="text" placeholder="Поиск страницы" 
            class="grow pl-5 rounded-l-xl"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            ref="input"
        >
        <button type="submit" class="
            shrink w-[20px] h-full
            bg-[url(@/assets/icons/search.svg)] bg-no-repeat bg-center
            cursor-pointer
            px-5 box-content
            rounded-r-xl
        "><span class="sr-only">Поиск</span></button>
    </form>
</template>