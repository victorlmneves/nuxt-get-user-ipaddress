<template>
    <header class="header">
        <ul class="header__menu">
            <NuxtLink to="/" class="header__link">Home</NuxtLink>
        </ul>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: #f1f1f1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
}

.header__menu {
    display: flex;
    gap: 1rem;
}

.header__link {
    list-style: none;
    cursor: pointer;
}
</style>
