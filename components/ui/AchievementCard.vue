<template>
    <div class="rounded-lg border p-7 w-[300px]  flex items-center">
        <!-- image -->
        <div class="w-1/2">
            <div class="max-w-[100px] mx-auto">
                <img :src="`_nuxt/assets/images/${img}`" class="w-full">
            </div>
        </div>

        <!-- text -->
        <div class="w-1/2">
            <p class="font-bold text-4xl">{{ stat }}</p>
            <p>{{ text }}</p>
        </div>

    </div>
</template>

<script setup lang="ts">
defineProps(['img', 'stat', 'text'])
</script>

<style scoped></style>