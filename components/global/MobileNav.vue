<script setup>
import { links } from '~/data/links';
</script>

<template>
    <nav class="m v-width top-0 bottom-0 right-0 fixed bg-white z-20 py-4 px-6">
        <div class="flex flex-col justify-between h-full">
            <div class="overflow-y-auto scrollbar">
                <div class="image pb-4">
                    <img src="~/assets/images/logo.png" alt="skuldent" class="w w-40 mx-auto">
                </div>

                <hr class="mx-auto">

                <!-- Links -->
                <div class="">
                    <div class="my-3" v-for="(link, index) in links" :key="index">

                        <!-- Home or category -->
                        <NuxtLink :to="link.to">
                            <p class="font-semibold">{{ link.name }}
                            </p>
                        </NuxtLink>
                    </div>
                </div>

            </div>

            <!-- buttons -->
            <div class="flex py-3 justify-center">
                <a href="#" class="btn-primary w-1/2 text-center">Sign in</a>
            </div>
        </div>
    </nav>
</template>


<style scoped>
.v-width {
    width: min(100%, 320px);
}

.router-link-exact-active {
    @apply font-bold text-skuldent-yellow
}
</style>