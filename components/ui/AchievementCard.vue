<template>
    <div class="rounded-lg border md:p-7 py-4 px-2 w-[300px] mx-auto  flex items-center">
        <!-- image -->
        <div class="md:w-1/2 w-[40%]">
            <div class="md:max-w-[100px] max-w-[40px] mx-auto">
                <img :src="`/images/${img}`" class="w-full">
            </div>
        </div>

        <!-- text -->
        <div class="md:w-1/2 w-[60%]">
            <p class="font-bold md:text-4xl text-2xl">{{ stat }}</p>
            <p>{{ text }}</p>
        </div>

    </div>
</template>

<script setup lang="ts">
defineProps(['img', 'stat', 'text'])
</script>

<style scoped></style>