<template>
    <div class="bg-skuldent-blue text-neutral-300 py-20">
        <div class="maximum-width flex gap-2">
            <div class="w-1/2">
                <img src="~/assets/images/logo-white.png" alt="" class="max-w-[300px]">
                <p class="text-skuldent-yellow text-4xl w-[400px] my-6 leading-[50px]">
                    Empower Your School with <span class="">Skuldent</span>
                </p>
                <p class="">Contact@skuldent.com</p>
            </div>

            <!-- pages -->
            <div class="w-[300px]">
                <ul class="">
                    <template v-for="link in links" :key="link.name">
                        <li class="mb-8">
                            <NuxtLink :to="link.to" class="font-semibold hover:text-skuldent-yellow transition-colors ">
                                {{ link.name }}

                            </NuxtLink>
                        </li>
                    </template>
                </ul>
            </div>

            <!-- other pages -->
            <div class="w-[300px]">
                <ul class="">
                    <template v-for="link in otherLinks" :key="link.name">
                        <li class="mb-8">
                            <NuxtLink :to="link.to" class="font-semibold hover:text-skuldent-yellow transition-colors ">
                                {{ link.name }}

                            </NuxtLink>
                        </li>
                    </template>
                </ul>
            </div>

            <!-- icons -->
            <div>
                <div class="mb-4 hover:text-skuldent-yellow transition-colors cursor-pointer">
                    <UIcon name="i-brandico-instagram" dynamic />
                </div>
                <div class="mb-4 hover:text-skuldent-yellow transition-colors cursor-pointer">
                    <UIcon name="i-brandico-facebook" dynamic />
                </div>
                <div class="mb-4 hover:text-skuldent-yellow transition-colors cursor-pointer">
                    <UIcon name="i-brandico-twitter-bird" dynamic />
                </div>
                <div class="mb-4 hover:text-skuldent-yellow transition-colors cursor-pointer">
                    <UIcon name="i-brandico-linkedin" dynamic />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Links {
    name: string;
    to: string;
}

const links: Links[] = [
    {
        name: 'Home',
        to: '/'
    },
    {
        name: 'Features',
        to: '/features'
    },
    {
        name: 'Subscription Plan',
        to: '/subscription'
    },
    {
        name: 'Contact Us',
        to: '/contact-us'
    },
]

const otherLinks: Links[] = [
    // {
    //     name: 'Partners',
    //     to: '/'
    // },
    {
        name: 'Privacy Policy',
        to: '/features'
    },
    // {
    //     name: 'Cookie Usage',
    //     to: '/subscription'
    // },
    {
        name: 'Terms of Use',
        to: '/contact-us'
    },
]
</script>

<style scoped></style>