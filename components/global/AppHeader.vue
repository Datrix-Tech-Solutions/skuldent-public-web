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
                <div class="hidden md:block">
                    <ul class="flex lg:gap-10 gap-5">
                        <template v-for="link in links" :key="link.name">
                            <NuxtLink :to="link.to">
                                <li class="font-semibold hover:text-skuldent-yellow transition-colors"> {{ link.name }}
                                </li>
                            </NuxtLink>
                        </template>
                    </ul>
                </div>

                <!-- sign in / sign up -->
                <div class="hidden md:block">
                    <div class="flex gap-1">
                        <button class="btn-primary">Sign in</button>

                    </div>
                </div>


                <!-- hamburgar -->
                <div class=" md:hidden">
                    <Icon name="heroicons:bars-3-bottom-right-16-solid" class="w-10 h-10 inline cursor-pointer"
                        @click="() => { showMobileNav = true }" />
                </div>
            </div>

            <!-- Mobile navigation -->
            <div class="md:hidden">
                <!-- mobile nav -->
                <Transition name="mobile">
                    <MobileNav v-if="showMobileNav" />
                </Transition>

                <!-- overlay -->
                <Transition name="overlay">
                    <div class="inset-0 fixed backdrop-blur-sm bg-black/40" v-if="showMobileNav"
                        @click="() => { showMobileNav = false }"></div>
                </Transition>

                <!-- close button -->
                <Transition name="close">
                    <Icon name="heroicons:x-mark"
                        class="inline w-10 h-10 z-30 fixed top-2 left-2 cursor-pointer text-white bg-skuldent-blue rounded-full p-1"
                        v-if="showMobileNav" @click="() => { showMobileNav = false }" />
                </Transition>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { links } from '~/data/links';

const showMobileNav = ref(false)

</script>


<style scoped>
/* Mobile transition */
.mobile-enter-active,
.mobile-leave-active {
    transition: transform 0.5s ease;
    transform: translateX(0)
}

.mobile-enter-from,
.mobile-leave-to {
    transform: translateX(100%);
}

/* Overlay transition */
.overlay-enter-active,
.overlay-leave-active {
    transition: opacity 0.5s ease;
}

.overlay-enter-from,
.overlay-leave-to {
    opacity: 0;
}

/* close icon transition */
.close-enter-active,
.close-leave-active {
    transition: transform 0.4s ease 0.5s;
    transform: scale(1, 1);
}

.close-enter-from,
.close-leave-to {
    transition: transform 0.2s ease 0s;
    transform: scale(0)
}

.router-link-exact-active {
    @apply font-bold underline underline-offset-8 decoration-[3px] hover:decoration-skuldent-yellow decoration-skuldent-yellow text-skuldent-yellow
}
</style>