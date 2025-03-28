<script setup>
import { ref, onMounted, onUnmounted, toRef } from 'vue'
import Modal from '@/components/Modal.vue'
import ButtonModal from '@/components/ButtonModal.vue'

import iconOther from '@/assets/icons/other.svg?no-inline'
import icon320 from '@/assets/icons/320.svg?no-inline'
import icon768 from '@/assets/icons/768.svg?no-inline'
import icon1024 from '@/assets/icons/1024.svg?no-inline'
import icon1366 from '@/assets/icons/1366.svg?no-inline'
import icon1600 from '@/assets/icons/1600.svg?no-inline'
import icon1920 from '@/assets/icons/1920.svg?no-inline'
import AdaptiveNavInfo from '@/components/AdaptiveNavInfo.vue'
import PageNavInfo from '@/components/PageNavInfo.vue'
const page = ref({
    title: 'Главная',
    items: [
        { icon: icon1920, visited: false, state: 'new', active: true },
        { icon: icon1600, visited: true, state: 'new' },
        { icon: icon1366, visited: true, state: 'new' },
        { icon: icon1024, visited: true, state: 'new' },
        { icon: icon768, visited: true, state: 'new' },
        { icon: icon320, visited: true, state: 'old' },
        { icon: iconOther, visited: false, state: 'old' },
    ]
})

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    }
})
const emit = defineEmits(['update:show'])

const updateShow = (show) => emit('update:show', show)

const _showNavModalHandler = (e) => {
    if (e.keyCode === 27) {
        emit('update:show', !props.show)
    }
}
onMounted(() => {
    document.addEventListener('keydown', _showNavModalHandler)
})
onUnmounted(() => {
    document.removeEventListener('keydown', _showNavModalHandler)
})
</script>


<template>
    <Transition
        enter-active-class="duration-250 ease-out"
        enter-from-class="transform mt-[100%]"
        enter-to-class="mt-0"
        leave-active-class="duration-250 ease-in"
        leave-from-class="mt-0"
        leave-to-class="transform mt-[100%]"
    >
        <Modal class="flex flex-col gap-5" :show="show" @update:show="updateShow" :touch-element="props.touchElement">
            <template #buttons>
                <ButtonModal
                    icon="i-arrow-left-white"
                    text="Главное меню"
                    @click="$router.push({name: 'project'})"
                />
            </template>

            <template #default>
                <div class="flex flex-col gap-5 justify-center items-center px-5">

                    <h1 class="text-4xl text-center">Главная страница</h1>

                    <div class="flex flex-wrap justify-center gap-x-1.5 gap-y-5">
                        <a v-for="item in page.items"
                            href="#"
                            class="group relative flex flex-col items-center outline-0"
                        >
                            <span class="relative z-10 size-3.5 -mb-1.5 rounded-full border-2 border-white"
                                :class="{
                                    'bg-[#5DD424]': item.state === 'new',
                                    'bg-[#FFC90A]': item.state === 'changed',
                                    'opacity-0': !['new', 'changed'].includes(item.state)
                                }"
                            ></span>
                            <span :style="{backgroundImage: `url(${item.icon})`}" 
                                class="
                                relative z-0
                                size-[72px] bg-no-repeat bg-center rounded-xl
                                group-hover:contrast-125 transition-discrete duration-1000
                                group-focus-visible:outline-1 group-focus-visible:outline-white
                                "
                                :class="item.active ? 'bg-[#18A0FB]' : 'bg-black/25'"
                            ></span>
                            <span :class="{'opacity-0': !item.visited}"
                                class="w-[24px] h-[12px] bg-[url(@/assets/icons/eye.svg)] bg-no-repeat bg-center"
                            ></span>
                        </a>
                    </div>

                    <p class="text-lg font-bold text-center">Мониторы FullHD [ 1920px ]</p>

                </div>
            </template>

            <template #footer>
                <div class="flex justify-between p-8">
                    <AdaptiveNavInfo />
                    <PageNavInfo class="items-end text-right" />
                </div>
            </template>
        </Modal>
    </Transition>
</template>