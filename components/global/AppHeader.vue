<template>
    <div class="bg-white sticky top-0 z-20">
        <nav class="py-3">
            <div class="flex justify-between items-center maximum-width">
                <!-- logo -->
                <div>
                    <div class="max-w-[180px]">
                        <img src="~/assets/images/logo.png" class="w-full">
                    </div>
                </div>

                <!-- links -->
                <div>
                    <ul class="flex gap-10">
                        <template v-for="link in links" :key="link.name">
                            <NuxtLink :to="link.to">
                                <li class="font-semibold hover:text-skuldent-yellow transition-colors"> {{ link.name }}</li>
                            </NuxtLink>
                        </template>
                    </ul>
                </div>

                <!-- sign in / sign up -->
                <div>
                    <div class="flex gap-1">
                        <button class="btn-primary">Sign in</button>

                    </div>
                </div>
            </div>
        </nav>
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
        to: '/subscription-plan'
    },
    {
        name: 'Contact Us',
        to: '/contact-us'
    },
]
</script>

<style scoped>
.router-link-exact-active {
    @apply font-bold underline underline-offset-8 decoration-[3px] hover:decoration-skuldent-yellow decoration-skuldent-yellow text-skuldent-yellow
}
</style>