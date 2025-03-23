<template>
    <header>
        <nav>
            <RouterLink to="/">Главная</RouterLink>
            <RouterLink to="/second">Вторая страница</RouterLink>
        </nav>
    </header>

    <main>
        <slot></slot>
    </main>

    <footer></footer>
</template>