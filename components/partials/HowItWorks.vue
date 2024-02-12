<template>
    <div>
        <!-- Sign up -->
        <div class="flex  justify-center items-center flex-item">
            <div class="w-1/2">
                <div class="max-w-[500px] mx-auto">
                    <h2 class="text-4xl font-bold ">Sign Up With Skuldent</h2>
                    <p class="text-neutral-500 my-5">Choose a subscription package and sign up to Skuldent school management
                        system</p>
                    <button class="btn-transparent px-4">See Subscription Plan</button>
                </div>
            </div>
            <div class="w-1/2">
                <div class="w-full ">
                    <img src="~/assets/images/signup.jpg" class=" w-full">
                </div>
            </div>
        </div>

        <!-- how to setup -->
        <div class="flex  justify-center items-center flex-item flex-row-reverse">
            <div class="w-1/2">
                <div class="max-w-[500px] mx-auto">
                    <h2 class="text-4xl font-bold ">Setup Your School</h2>
                    <p class="text-neutral-500 my-5">Provide relevant data eg (name, school name, emails) and other equally
                        important information to setup a dashboard to manage your school on Skuldent</p>
                    <button class="btn-transparent px-4">Watch Demo Video</button>
                </div>
            </div>
            <div class="w-1/2">
                <div class="w-full ">
                    <img src="~/assets/images/setup.jpg" class=" w-full">
                </div>
            </div>
        </div>

        <!-- Explore features -->
        <div class="flex  justify-center items-center flex-item">
            <div class="w-1/2">
                <div class="max-w-[500px] mx-auto">
                    <h2 class="text-4xl font-bold ">Explore Exlusive Features</h2>
                    <p class="text-neutral-500 my-5">Discover the comprehensive suite of features offered by Skuldent that
                        revolutionize school management.</p>
                    <NuxtLink to="/features">
                        <button class="btn-transparent px-4">See Features</button>
                    </NuxtLink>
                </div>
            </div>
            <div class="w-1/2">
                <div class="w-full ">
                    <img src="~/assets/images/explore.jpg" class=" w-full">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>