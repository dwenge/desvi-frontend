<template>
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
</template>