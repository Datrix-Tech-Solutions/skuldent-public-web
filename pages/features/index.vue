<template>
    <div>
        <!-- hero -->
        <section class="maximum-width">
            <div class="max-w-[900px] mx-auto text-center py-32">
                <h1 class="text-3xl md:text-5xl font-bold">Discover Skuldent's Powerful Features</h1>
                <h3 class="text-xl mt-3 mb-5">Effortlessly Manage Your School with Advanced Tools</h3>
                <p class="text-neutral-500 mx-auto max-w-[600px]">Skuldent offers a comprehensive set of features designed
                    to streamline school
                    management and enhance
                    collaboration. Explore our key features below to see how Skuldent can benefit your educational
                    institution.
                </p>
            </div>
        </section>

        <!-- Feature -->
        <template v-for="feature in features" :key="feature.category.title">
            <section class="feature py-20">
                <div class="maximum-width flex gap-10 md:flex-row flex-col">

                    <!-- Category -->
                    <div class="md:w-[50%]">
                        <div class="max-w-[600px] py-5 sticky top-20">
                            <h2 class="text-2xl md:text-4xl font-bold"><span class="relative text-3xl md:text-5xl">
                                    <UIcon :name="`i-heroicons-${feature.category.icon}`" dynamic></UIcon>
                                </span> {{ feature.category.title }}</h2>
                            <p class="mt-3 mb-6">{{ feature.category.detailedDescription }}</p>
                            <button class="btn-primary">Sign up now</button>
                        </div>
                    </div>

                    <!-- features -->
                    <div class="flex flex-wrap md:w-[50%]">
                        <template v-for="item in feature.items">
                            <div class="w-1/2">
                                <UiFeatureCard :feature="item" />
                            </div>
                        </template>
                    </div>
                </div>
            </section>
        </template>

        <section class="my-44 maximum-width">
            <GetStarted />
        </section>
    </div>
</template>

<script setup>
import { features } from '~/data/features'
</script>

<style scoped>
.feature:nth-child(even) {
    @apply bg-blue-faded
}
</style>