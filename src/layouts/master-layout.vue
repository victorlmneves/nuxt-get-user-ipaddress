<script setup lang="ts">
import TheFooter from "~/components/TheFooter.vue";
import TheHeader from "~/components/TheHeader.vue";
</script>

<template>
    <span>
        <TheHeader />
        <slot></slot>
        <TheFooter />
    </span>
</template>
