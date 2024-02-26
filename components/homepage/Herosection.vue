
<template>
    <div class="bg-[url('~/assets/images/hero.jpg')] bg-cover bg-center relative">
        <div class="absolute bg-black/50 top-0 left-0 right-0 bottom-0"></div>
        <div class="relative">
            <!-- <AppHeader></AppHeader> -->
            <section class="maximum-width">
                <div class="flex py-36">
                    <!-- Text -->
                    <div class="md:w-4/5">
                        <h1 class="font-bold text-4xl md:text-6xl lg:text-8xl text-gray-20 text-white">
                            Empower Your School with <span class="">Skuldent</span>
                        </h1>
                        <p class="font-semibold text-lg my-5 text-neutral-300">
                            Effortless School Management, Seamless Education Experience
                        </p>
                        <NuxtLink to="/subscription">
                            <button class="btn-primary mt-7 px-5 py-3"> Get Started Now</button>
                        </NuxtLink>
                    </div>

                    <!-- image -->
                    <div class="md:w-3/5">
                        <div>
                            <!-- <img src="~/assets/images/hero-image.jpg"> -->
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>