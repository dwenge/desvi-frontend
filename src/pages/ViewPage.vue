<script setup>
import { computed, onMounted, onUnmounted, onUpdated, ref, watchEffect } from 'vue';
import ViewListContainer from '@/containers/ViewListContainer.vue';
import ChangeNotify from '@/components/ChangeNotify.vue';


const imgContainer = ref(null)
const overflowPx = ref(true)
const calcOverflow = () => {
    overflowPx.value = imgContainer?.value?.scrollWidth - imgContainer?.value?.clientWidth
}

const showViewList = ref(false)
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
                showViewList.value = true
            }
            _tap = false
            break;
    }
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
        @touchmove="(e) => {
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

    <ViewListContainer v-model:show="showViewList" />

    <Transition
        enter-active-class="duration-300 ease-out"
        enter-from-class="transform opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="transform opacity-0"
    >
        <ChangeNotify v-if="showChangeNotify" title="Главная" :sub-title="['Мониторы FullHD', '1920px']" :count="5" :current="3" />
    </Transition>

</template>
