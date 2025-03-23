<template>
    <header>
        <nav>
            <RouterLink :to="{name: 'home'}">Главная</RouterLink>
            <RouterLink :to="{name: 'second'}">Second</RouterLink>
        </nav>
    </header>

    <main>
        <slot></slot>
    </main>

    <footer></footer>
</template>