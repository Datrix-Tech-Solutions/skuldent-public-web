<template>
    <div class="maximum-width flex gap-5 justify-center md:flex-row flex-col">
        <template v-for="subscription in subscriptionPlan" :key="subscription.name">
            <SubscriptionCard :subscription="subscription" />
        </template>
    </div>
</template>

<script setup>
import { subscriptionPlan } from '~/data/subscription';
</script>

<style scoped></style>