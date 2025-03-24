<script>
export default {
    name: 'DefaultLayout'
}
</script>

<template>
    <div class="bg-(--layout-color) py-10 px-5 min-h-screen">
        <div class="container mx-auto">

            <header class="shrink">
                <img src="@/assets/icons/logo-itj.svg?no-inline" alt="">
            </header>

            <main class="grow flex flex-col gap-3 lg:flex-row lg:gap-5">
                
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
                            
                            <div class="flex flex-col gap-5">
                                <div>Фильтр макетов</div>
                                <label class="group flex items-center gap-3 cursor-pointer">
                                    <input type="checkbox" class="peer hidden" checked />
                                    <div class="
                                    relative w-[30px] h-[30px] border-1 border-[#D3D3D3] rounded-md
                                    transition-discrete duration-250
                                    group-hover:contrast-75
                                    before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0
                                    peer-checked:before:bg-[url(@/assets/icons/check.svg)] before:bg-center
                                    not-peer-checked:before:opacity-0
                                    before:transition-opacity before:duration-250
                                    "></div>
                                    <div class="text-sm">Только новые и исправленные</div>
                                </label>
                            </div>

                            <div class="flex flex-col gap-5">
                                <div>Отображать макеты для</div>
                                <label class="group flex items-center gap-3 cursor-pointer">
                                    <input type="checkbox" class="peer hidden" checked />
                                    <div class="
                                    relative w-[30px] h-[30px] border-1 border-[#D3D3D3] rounded-md
                                    transition-discrete duration-250
                                    group-hover:contrast-75
                                    before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0
                                    peer-checked:before:bg-[url(@/assets/icons/check.svg)] before:bg-center
                                    not-peer-checked:before:opacity-0
                                    before:transition-opacity before:duration-250
                                    "></div>
                                    <div class="w-[30px] h-[30px] bg-[url(@/assets/icons/lamp.png)] bg-no-repeat bg-center"></div>
                                    <div class="text-sm text-[#838383]">1920px</div>
                                    <div class="text-sm">Большие экраны FullHD</div>
                                </label>
                            </div>

                        </div>

                    </div>
                </div>

                <div class="flex flex-col gap-3 grow">

                    <div class="bg-white rounded-xl flex h-[50px]">
                        <input type="search" placeholder="Поиск страницы"
                        class="grow pl-5"
                        >
                        <button class="
                        shrink w-[20px] h-full
                        bg-[url(@/assets/icons/search.svg)] bg-no-repeat bg-center
                        cursor-pointer
                        px-5 box-content
                        "></button>
                    </div>


                    <div class="bg-white rounded-xl flex flex-col gap-5">
                        <div class="p-5">Главная ></div>
                        <div class="flex">
                            <div class="grow flex flex-col items-center pb-3.5
                            border-[#F3F3F3] nth-of-type-[n+2]:border-l-1
                            ">
                                <div class="rounded-full bg-[#5DD424] size-[7px]"></div>
                                <div class="
                                size-[30px]
                                bg-[url(@/assets/icons/search.svg)] bg-no-repeat bg-center
                                "></div>
                                <div class="bg-[#858585] w-[10px] h-[6px]"></div>
                            </div>

                            <div class="grow flex flex-col items-center pb-3.5
                            border-[#F3F3F3] nth-of-type-[n+2]:border-l-1
                            ">
                                <div class="rounded-full bg-[#5DD424] size-[7px]"></div>
                                <div class="
                                size-[30px]
                                bg-[url(@/assets/icons/search.svg)] bg-no-repeat bg-center
                                "></div>
                                <div class="bg-[#858585] w-[10px] h-[6px]"></div>
                            </div>
                        </div>
                    </div>

                </div>

            </main>

            <footer class="shrink">
            </footer>

        </div>
    </div>
</template>
