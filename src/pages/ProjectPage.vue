<script setup>
import { ref } from 'vue';

import FilterGroup from '@/components/FilterGroup.vue';
import FilterCheckbox from '@/components/FilterCheckbox.vue';
import FilterSearch from '@/components/FilterSearch.vue';
import PageBox from '@/components/PageBox.vue';

import iconOther from '@/assets/icons/other.svg?no-inline'
import icon320 from '@/assets/icons/320.svg?no-inline'
import icon768 from '@/assets/icons/768.svg?no-inline'
import icon1024 from '@/assets/icons/1024.svg?no-inline'
import icon1366 from '@/assets/icons/1366.svg?no-inline'
import icon1600 from '@/assets/icons/1600.svg?no-inline'
import icon1920 from '@/assets/icons/1920.svg?no-inline'

const filterItems = ref([
    {
        title: 'Фильтр макетов',
        items: [
            { text: 'Только новые и исправленные' },
            { text: 'Только не просмотренные' },
        ],
    },
    {
        title: 'Отображать макеты для',
        items: [
            { icon: icon1920, size: '1920px', text: 'Большие экраны FullHD' },
            { icon: icon1600, size: '1600px', text: 'Средние экраны HD++' },
            { icon: icon1366, size: '1366px', text: 'Малые экраны HD+' },
            { icon: icon1024, size: '1024px', text: 'Планшеты горизонтально' },
            { icon: icon768, size: '768px', text: 'Планшеты вертикально' },
            { icon: icon320, size: '320px', text: 'Телефоны' },
            { icon: iconOther, size: 'Прочее'},
        ],
    },
    
])

const pages = ref([
    {
        title: 'Главная',
        items: [
            { icon: icon1920, visited: true, state: 'new' },
            { icon: icon1600, visited: true, state: 'new' },
            { icon: icon1366, visited: true, state: 'new' },
            { icon: icon1024, visited: true, state: 'new' },
            { icon: icon768, visited: true, state: 'new' },
            { icon: icon320, visited: true, state: 'new' },
            { icon: iconOther, visited: true, state: 'new' },
        ]
    },
    {
        title: 'Главная 2',
        items: [
            { icon: icon1920, visited: true, state: 'new' },
            { icon: icon1600, visited: false, state: 'new' },
            { icon: icon1366, visited: true, state: 'changed' },
            { icon: icon1024, visited: true, state: 'new' },
            { icon: icon768, visited: true, state: 'new' },
        ]
    },
    {
        title: 'Главная 3',
        items: [
            { icon: icon1920, visited: false, state: 'old' },
            { icon: icon1600, visited: false, state: 'old' },
            { icon: icon1366, visited: false, state: 'old' },
            { icon: icon1024, visited: false, state: 'old' },
            { icon: icon768, visited: false, state: 'old' },
        ]
    },
    {
        title: 'Главная 4',
        items: [
            { icon: iconOther, visited: true, state: 'new' },
        ]
    },
    
])

</script>

<template>
    <div class="grow flex flex-col gap-3 lg:flex-row lg:gap-5">
                
        <div class="shrink lg:max-w-[340px]">
            <div class="flex flex-col my-7">
                <div class="text-base font-bold text-[#a0a0a0]">Проект</div>
                <div class="text-4xl font-bold">Пуговки</div>
            </div>

            <div class="flex flex-col gap-3">

                <div class="flex gap-4 bg-[#FFF7DC] px-5 py-3 rounded-xl">
                    <img src="@/assets/icons/lamp.png?no-inline" alt="">
                    <div class="text-black/50">Жесты навигации по макету</div>
                </div>

                <div class="p-5 bg-white rounded-xl flex flex-col gap-5">
                    
                    <FilterGroup
                        v-for="group in filterItems"
                        :title="group.title"
                    >
                        <FilterCheckbox
                            v-for="item in group.items"
                            :icon="item.icon"
                            :text="item.size"
                        >{{ item.text }}</FilterCheckbox>
                    </FilterGroup>

                </div>

            </div>
        </div>

        <div class="flex flex-col gap-3 grow">

            <FilterSearch />

            <PageBox v-for="page in pages" :page="page" />

        </div>

    </div>
</template>