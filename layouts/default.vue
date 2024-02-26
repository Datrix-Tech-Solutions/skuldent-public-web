<template>
    <div class="text-skuldent-blue bg-neutral-100 font-dm-sans">
        <!-- <div v-if="$route.path !== '/'"> -->
        <AppHeader :key="$route.path"></AppHeader>
        <!-- </div> -->
        <div class="">
            <slot></slot>
        </div>
        <AppFooter></AppFooter>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
</script>

<style scoped>
.font-dm-sans {
    font-family: "DM Sans", sans-serif
}
</style>