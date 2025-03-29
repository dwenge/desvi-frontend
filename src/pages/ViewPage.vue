<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import ViewListContainer from '@/containers/ViewListContainer.vue';
import ChangeNotify from '@/components/ChangeNotify.vue';
import ImageView from '@/components/ImageView.vue';

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
    <ImageView
        @touchstart="onTabShowModal"
        @touchmove="(e) => {
            onTabShowModal(e)
            onSwipeChangeNotify(e)
        }"
        @touchend="onTabShowModal"
    />

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
