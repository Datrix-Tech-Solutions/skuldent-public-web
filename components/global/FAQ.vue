<template>
    <div class="max-w-[800px] mx-auto">
        <h2 class="text-center font-semibold text-2xl md:text-4xl mb-5">Frequently Asked Questions</h2>
        <UAccordion :items="faqs" variant="outline" size="xl" color="" :ui="{
            color: {
                skuldent: {
                    outline: 'bg-skuldent-blue'
                }
            }
        }" />
    </div>
</template>

<script setup>
import { faqs } from '~/data/faqs'
</script>

<style lang="scss" scoped></style>