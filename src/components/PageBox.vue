<script setup>
import { defineProps } from 'vue';

defineProps({
    page: {
        type: Object,
        required: true
    }
})



</script>

<template>
    <div class="bg-white rounded-xl flex gap-5" :class="page.items.length > 1 ? 'flex-col' : 'items-center'">
        <a href="#" class="p-5 flex items-center gap-2.5">
            {{ page.title }} <img src="@/assets/icons/caret-right.svg" alt="">
        </a>
        <div class="flex">

            <a v-for="item in page.items" href="#"
                :class="page.items.length > 1 ? 'flex-col pb-3.5' : 'gap-2.5 pr-3.5'"
                class="
                    grow flex items-center
                    border-[#F3F3F3] nth-of-type-[n+2]:border-l-1
                "
                :title="item.title"
            >
                <span class="rounded-full size-[7px]"
                    :class="{
                        'bg-[#5DD424]': item.state === 'new',
                        'bg-[#FFC90A]': item.state === 'changed',
                    }"
                ></span>
                <span :style='{backgroundImage: `url(${item.icon})`}' class="
                    size-[30px]
                    bg-no-repeat bg-center
                "></span>
                <span :class="{'opacity-0': !item.visited}" class="bg-[url(@/assets/icons/eye.svg)] w-[12px] h-[6px]"></span>
            </a>

        </div>
    </div>
</template>