<script>
export default {
    name: 'DefaultLayout'
}
</script>

<template>
    <div class="bg-(--layout-color) py-10 px-5 min-h-screen select-none">
        <div class="container mx-auto"> 

            <header class="shrink">
                <img src="@/assets/icons/logo-itj.svg?no-inline" alt="">
            </header>

            <slot></slot>

            <footer class="shrink">
            </footer>

        </div>
    </div>
</template>
