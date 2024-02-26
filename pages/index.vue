<template>
    <div class="min-h-dvh">

        <!-- hero section -->
        <div class="">
            <HomepageHerosection />
        </div>

        <div class="">

            <!-- Achievements -->
            <section class="md:my-44 my-28 text-center maximum-width">
                <!-- <h2 class="font-semibold text-5xl mb-4">Our Achievements</h2> -->
                <p class="text-neutral-500">With our super powers we have reached this</p>

                <div class="flex justify-center md:gap-10 gap-2 my-10 xs:flex-row flex-col">
                    <UiAchievementCard stat="125+" text="University" img="university.png">
                    </UiAchievementCard>
                    <UiAchievementCard stat="300+" text="School" img="school.png"></UiAchievementCard>
                    <UiAchievementCard stat="50K+" text="Students" img="graduated.png"></UiAchievementCard>
                </div>
            </section>

            <!-- Features -->
            <section class="md:my-44 my-28">
                <div class="maximum-width mb-10">
                    <div class="text-center max-w-[500px] mx-auto">
                        <h2 class="font-semibold text-3xl md:text-5xl mb-4">Powerful Features</h2>
                        <p class="text-neutral-500">Special features which help you keep students on track and engaged
                            during
                            class
                            time</p>
                    </div>
                </div>

                <div class="my- bg-blue-faded py-14">
                    <div class="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5   maximum-width">
                        <template v-for="feature in features" :key="feature.category.title">
                            <UiFeatureCard :feature="feature.category" :clamp="true" />
                        </template>
                    </div>


                    <div class="maximum-width flex justify-end">
                        <NuxtLink to="/features" class="mt-10">
                            <span class="ml-auto hover:underline">See all features
                                <UIcon name="i-heroicons-arrow-small-right-solid" class="relative top-[2px]" />
                            </span>
                        </NuxtLink>
                    </div>
                </div>
            </section>

            <!-- How it works -->
            <section class="md:my-44 my-28 maximum-width">
                <PartialsHowItWorks />
            </section>

            <section class="md:my-44 my-28 maximum-width">
                <GetStarted />
            </section>

        </div>
    </div>
</template>

<script setup >
import { features } from '~/data/features'

</script>

<style scoped></style>