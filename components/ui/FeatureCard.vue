
<template>
    <div class="  w-[300px] transition-colors rounded-md hover:bg-blue-100 p-5">
        <!-- icon -->
        <div class="flex items-start" v-if="feature.icon">

            <div class=" rounded-md">
                <UIcon :name="`i-heroicons-${feature.icon}`" class="text-3xl text-skuldent-blue" dynamic />
            </div>

        </div>

        <div>
            <h3 class="font-semibold text-2xl mt-4 mb-3 text-skuldent-blue">{{ feature.title }}</h3>
            <p v-if="clamp" class="text-neutral-500 line-clamp-4">{{ feature.description }}
            </p>
            <p v-else class="text-neutral-500">{{ feature.description }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps(['feature', 'clamp'])
</script>

<style scoped></style>