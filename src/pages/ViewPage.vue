<script setup>
import { computed, onMounted, onUnmounted, onUpdated, ref, watchEffect } from 'vue';

import iconOther from '@/assets/icons/other.svg?no-inline'
import icon320 from '@/assets/icons/320.svg?no-inline'
import icon768 from '@/assets/icons/768.svg?no-inline'
import icon1024 from '@/assets/icons/1024.svg?no-inline'
import icon1366 from '@/assets/icons/1366.svg?no-inline'
import icon1600 from '@/assets/icons/1600.svg?no-inline'
import icon1920 from '@/assets/icons/1920.svg?no-inline'

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

const showModal = ref(false)
const closeModal = () => showModal.value = false
const onShowModal = (e) => {
    if (e.keyCode===27) {
        showModal.value = !showModal.value
    }
}

let _tap = false;
const onTabShowModal = (e) => {
    switch (e.type) {
        case 'touchstart':
            _tap = true
            break;
        case 'touchmove':
            _tap = false
            break;
        case 'touchend':
            if (_tap) {
                showModal.value = true
            }
            _tap = false
            break;
    }
}
onMounted(() => {
    document.addEventListener('keydown', onShowModal)
})
onUnmounted(() => {
    document.removeEventListener('keydown', onShowModal)
    document.body.classList.remove('overflow-hidden')
})
watchEffect(() => {
    if (showModal.value) {
        document.body.classList.add('overflow-hidden')
    } else {
        document.body.classList.remove('overflow-hidden')
    }
})


const imgContainer = ref(null)
const overflowPx = ref(true)
const calcOverflow = () => {
    overflowPx.value = imgContainer?.value?.scrollWidth - imgContainer?.value?.clientWidth
}
onMounted(() => {
    calcOverflow()
    window.addEventListener('resize', calcOverflow)
})
onUnmounted(() => {
    window.removeEventListener('resize', calcOverflow)
})
onUpdated(() => {
    calcOverflow()
})


const showChangeNotify = ref(false)
let _tmr;
const showChangeNotifyHandler = () => {
    showChangeNotify.value = true
    clearTimeout(_tmr)
    _tmr = setTimeout(() => {
        showChangeNotify.value = false
    }, 2* 1000)
}

const onChangeNotify = (e) => {
    if ([37, 39].includes(e.keyCode)) {
        showChangeNotifyHandler()
    }
}
// TODO: swipe left/right
const onSwipeChangeNotify = (e) => {
    if (e.type === 'touchmove') {
        showChangeNotifyHandler()
    }
}
onMounted(() => {
    document.addEventListener('keydown', onChangeNotify)
})
onUnmounted(() => {
    document.removeEventListener('keydown', onChangeNotify)
})
</script>

<template>
    <div class="max-w-screen overflow-x-hidden relative" ref="imgContainer"
        @touchstart="onTabShowModal"
        @touchmove="(e)=>{
            onTabShowModal(e)
            onSwipeChangeNotify(e)
        }"
        @touchend="onTabShowModal"
    >
        <img class="mx-auto max-w-none" src="@/assets/1920_index.png" alt="">
        <div v-if="overflowPx > 0" class="fixed right-0 top-0 bottom-0 w-10
            bg-linear-to-r from-transparent to-red-400
            font-bold text-center text-white
        " style="writing-mode: tb;">Выход за границу на {{ overflowPx }}px</div>
    </div>

    <Transition
        enter-active-class="duration-250 ease-out"
        enter-from-class="transform mt-[100%]"
        enter-to-class="mt-0"
        leave-active-class="duration-250 ease-in"
        leave-from-class="mt-0"
        leave-to-class="transform mt-[100%]"
    >
        
        <div v-if="showModal" class="fixed top-0 w-full h-screen flex flex-col gap-5 bg-black/30 backdrop-blur-lg text-white" @scroll.stop.prevent="">
            <div class="flex justify-between">
                <div class="flex items-center gap-5">
                    <button class="size-[72px] bg-black/25 cursor-pointer hover:bg-black/35 transition-colors duration-250"
                        @click="$router.push({name: 'project'})"
                    >
                        <i class="i-arrow-left-white"></i>
                        <span class="sr-only">Главное меню</span>
                    </button>
                    <div class="text-lg font-bold">Главное меню</div>
                </div>

                <div class="flex items-center flex-row-reverse gap-5">
                    <button class="size-[72px] bg-black/25 cursor-pointer hover:bg-black/35 transition-colors duration-250"
                        @click="closeModal"
                    >
                        <i class="i-close-white"></i>
                        <span class="sr-only">Закрыть</span>
                    </button>
                    <div class="text-lg font-bold not-md:hidden">Закрыть</div>
                </div>
            </div>

            <div class="grow flex flex-col gap-5 justify-center items-center px-5">

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

            <div class="flex justify-between p-8">

                <div class="flex flex-col gap-4">
                    <div class="font-bold text-lg">Навигация по адаптивам:</div>
                    <div class="flex gap-1.5 items-center lg:hidden">
                        <div class="i-arrow-left-white"></div>
                        <div class="
                            i-handle-white
                            animation-move-handle
                            "></div>
                        <div class="i-arrow-right-white"></div>
                    </div>

                    <div class="flex gap-0.5 items-end not-lg:hidden">
                        <div class="key border-white"><i class="i-arrow-left-white"></i></div>
                        <div class="flex flex-col gap-0.5 opacity-20">
                            <div class="key"><i class="i-arrow-top"></i></div>
                            <div class="key"><i class="i-arrow-bottom"></i></div>
                        </div>
                        <div class="key border-white"><i class="i-arrow-right-white"></i></div>
                    </div>
                </div>

                <div class="flex flex-col gap-4 items-end text-right">
                    <div class="font-bold text-lg">Навигация по страницам:</div>
                    <div class="flex items-end">

                        <div class="flex items-end not-lg:hidden">
                            <div class="key border-white">Ctrl</div>

                            <div class="mx-2.5"><i class="i-plus-white"></i></div>

                            <div class="flex gap-0.5 items-end">
                                <div class="key border-white"><i class="i-arrow-left-white"></i></div>
                                <div class="flex flex-col gap-0.5 opacity-20">
                                    <div class="key"><i class="i-arrow-top"></i></div>
                                    <div class="key"><i class="i-arrow-bottom"></i></div>
                                </div>
                                <div class="key border-white"><i class="i-arrow-right-white"></i></div>
                            </div>

                            <i class="i-or-white opacity-40 mx-5"></i>
                        </div>

                        <div class="flex gap-1.5 items-center">
                            <button
                                class="rounded-full size-[72px] bg-white flex items-center justify-center"
                            ><i class="i-caret2-left"></i></button>
                            <button
                                class="rounded-full size-[72px] bg-white flex items-center justify-center"
                            ><i class="i-caret2-right"></i></button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </Transition>

    <Transition
        enter-active-class="duration-300 ease-out"
        enter-from-class="transform opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="transform opacity-0"
    >
        <div class="
            fixed bottom-8 left-[50%] -translate-x-1/2
            text-white font-bold
            p-[30px] rounded-[20px] bg-[#383838]/70 backdrop-blur-[35px]
            flex flex-col items-center gap-1
            min-w-64
        " v-if="showChangeNotify">
            <div class="text-lg">Главная страница</div>
            <div class="size-[60px] bg-red-500"></div>
            <div class="text-sm">Мониторы FullHD</div>
            <div class="text-sm">1920px</div>

            <div class="flex gap-3.5 mt-2.5">
                <div class="rounded-full bg-white size-1.5"></div>
                <div class="rounded-full bg-white opacity-30 size-1.5"></div>
                <div class="rounded-full bg-white opacity-30 size-1.5"></div>
                <div class="rounded-full bg-white opacity-30 size-1.5"></div>
            </div>
        </div>
    </Transition>

</template>
