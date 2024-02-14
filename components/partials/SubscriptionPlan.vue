<template>
    <div class="maximum-width flex gap-6 justify-center">
        <template v-for="subscription in subscriptionPlan" :key="subscription.name">
            <SubscriptionCard :subscription="subscription" />
        </template>
    </div>
</template>

<script setup>
import { subscriptionPlan } from '~/data/subscription';
</script>

<style scoped></style>