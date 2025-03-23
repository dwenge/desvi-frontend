<template>
    <header>
        <nav>
            <RouterLink :to="{name: 'home'}">Главная</RouterLink>
        </nav>
    </header>

    <main>
        <slot></slot>
    </main>

    <footer></footer>
</template>