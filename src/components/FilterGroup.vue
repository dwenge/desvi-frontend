<script setup>
import { defineProps } from 'vue';

defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="flex flex-col gap-2.5">
        <div>{{ title }}</div>
        <slot></slot>
    </div>
</template>