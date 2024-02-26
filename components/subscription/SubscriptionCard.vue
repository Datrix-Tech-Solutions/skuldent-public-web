<template>
    <div class="rounded-2xl border p-5 pb-8 xs:w-[350px] min-h-[500px] bg-white mx-auto md:mx-0"
        :class="subscription?.popular ? ' text-white xl:scale-105 !bg-gradient-to-b from-skuldent-blue to-cyan-600' : ''">
        <div class="flex flex-col justify-between gap-14 h-full">
            <!-- content -->
            <div>
                <div>
                    <h3 class="text-xl font-semibold">{{ subscription?.name }}</h3>
                    <p class="mt-6 mb-4">
                        <span class="font-bold text-3xl">&#8373; {{ subscription?.price }}</span>
                        <span class="text-xl text-neutral-500 font-light"
                            :class="subscription?.popular ? '!text-neutral-400' : ''">/month</span>
                    </p>

                    <p>{{ subscription?.description }}</p>
                </div>

                <hr class="my-4">

                <div v-for="(feature, index) in subscription?.featureSupport" :key="index">
                    <p class=" mb-2">
                        <UIcon name="i-heroicons-check" class="text-xl relative top-1"></UIcon> <span>{{ feature
                        }}</span>
                    </p>
                </div>
                <p class="text-sm text-skuldent-yellow mt-4 hover:underline inline cursor-pointer">See available features
                    <UIcon name="i-heroicons-arrow-right" class="relative top-0.5">
                    </UIcon>
                </p>
            </div>

            <!-- button -->
            <div>
                <!-- <NuxtLink :to="`/subscription#form?plan=${subscription?.slug}`"> -->
                <NuxtLink :to="{ name: 'Subscription', query: { plan: subscription?.slug }, hash: '#form' }">
                    <button class="btn-primary w-full"
                        :class="subscription?.popular ? 'bg-white text-skuldent-blue border-white' : ''">Select
                        Plan</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    subscription: {
        // type: Object,
        required: true,
    }
})
</script>

<style scoped></style>