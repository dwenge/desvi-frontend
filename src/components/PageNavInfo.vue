<template>
    <div class="flex flex-col gap-4">
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
</template>