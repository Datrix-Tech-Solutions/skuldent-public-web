<template>
    <div>
        <!-- hero -->
        <section class="maximum-width">
            <div class="max-w-[900px] mx-auto text-center py-32">
                <h1 class="text-5xl font-bold">Choose the Right Plan for Your School</h1>
                <h3 class="text-xl mt-3 mb-5">Unlock Premium Features with Skuldent Subscription Plans</h3>
                <p class="text-neutral-500 mx-auto max-w-[600px]">Unlock the full potential of Skuldent with our flexible
                    subscription plans tailored to meet the diverse needs of educational institutions. Choose from a range
                    of options designed to suit schools of all sizes and budgets.
                </p>
            </div>
        </section>

        <!-- subscription -->
        <section class="py-28 bg-blue-faded">
            <PartialsSubscriptionPlan />
        </section>

        <!-- subscription form -->
        <section class="maximum-width my-28">
            <SubscriptionForm />
        </section>

        <!-- How it works -->
        <section class="my-44 maximum-width">
            <PartialsHowItWorks />
        </section>

        <!-- FaQs -->
        <section class="my-44 maximum-width">
            <FAQ />
        </section>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>