<template>
    <div class="min-h-dvh">

        <!-- hero section -->
        <div class="">
            <HomepageHerosection />
        </div>

        <div class="">

            <!-- Achievements -->
            <section class="my-44 text-center maximum-width">
                <!-- <h2 class="font-semibold text-5xl mb-4">Our Achievements</h2> -->
                <p class="text-neutral-500">With our super powers we have reached this</p>

                <div class="flex justify-center gap-10 my-10">
                    <UiAchievementCard stat="125+" text="University" img="university.png">
                    </UiAchievementCard>
                    <UiAchievementCard stat="300+" text="School" img="school.png"></UiAchievementCard>
                    <UiAchievementCard stat="50K+" text="Students" img="graduated.png"></UiAchievementCard>
                </div>
            </section>

            <!-- Features -->
            <section class="my-44">
                <div class="maximum-width mb-10">
                    <div class="text-center max-w-[500px] mx-auto">
                        <h2 class="font-semibold text-5xl mb-4">Powerful Features</h2>
                        <p class="text-neutral-500">Special features which help you keep students on track and engaged
                            during
                            class
                            time</p>
                    </div>
                </div>

                <div class="my- bg-blue-faded py-14">
                    <div class="grid grid-cols-4 gap-5 place-items-center  maximum-width">
                        <UiFeatureCard />
                        <UiFeatureCard />
                        <UiFeatureCard />
                        <UiFeatureCard />
                        <UiFeatureCard />
                        <UiFeatureCard />
                        <UiFeatureCard />
                        <UiFeatureCard />
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
            <section class="my-44 maximum-width">
                <PartialsHowItWorks />
            </section>

            <section class="my-44 maximum-width">
                <div class="max-w-[700px] mx-auto text-center ">
                    <p>Skuldent simplifies school management, allowing educators
                        to
                        focus on what
                        they do
                        best - educating. Explore the benefits of streamlined administrative processes and enhanced
                        communication within your school community.</p>
                    <button class="btn-primary mt-5 px-4">Get Started</button>
                </div>
            </section>

        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>