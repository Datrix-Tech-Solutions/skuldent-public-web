<template>
    <div>
        <!-- hero -->
        <section class="maximum-width">
            <div class="max-w-[900px] mx-auto text-center py-32">
                <h1 class="text-3xl md:text-5xl font-bold">Get in Touch with Skuldent</h1>
                <h3 class="text-xl mt-3 mb-5">Have questions or need assistance? Reach out to us!</h3>
                <p class="text-neutral-500 mx-auto max-w-[600px]">Have a question about Skuldent or need assistance with our
                    school management solutions? Our team is here to help! Whether you're seeking information, support, or
                    exploring collaboration opportunities, we're just a message away. Reach out to us today and let's work
                    together to elevate your school management experience with Skuldent.
                </p>
            </div>
        </section>

        <!-- Contact -->
        <section class=" py-20 bg-blue-faded">
            <div class="maximum-width flex justify-center gap-10 md:gap-0 md:flex-row flex-col-reverse">
                <!-- How to reach us -->
                <div class="md:w-[600px]">
                    <h3 class="text-2xl md:text-4xl text-skuldent-blue font-semibold mb-5">How to Reach Us:</h3>
                    <p class="mb-5 text-gray-600 flex gap-2 text-lg">
                        <UIcon name="i-heroicons-map-pin"
                            class="w-8 h-8 text-skuldent-blue inline shrink-0  relative -top-0.5" />
                        <span class="w-[300px]">Amasaman, Accra , 857 Aklo street</span>
                    </p>

                    <p class="mb-5 text-gray-600 flex gap-2 items-start text-lg">
                        <UIcon name="i-heroicons-envelope"
                            class="w-8 h-8 text-skuldent-blue inline shrink-0  relative -top-0.5" />
                        <a href="mailto:info@skulbook.com" class="hover:text-skuldent-blue">info@skulbook.com</a>
                    </p>

                    <p class="mb-5 text-gray-600  flex gap-2 items-start text-lg">
                        <UIcon name="i-heroicons-phone"
                            class="w-8 h-8 text-skuldent-blue inline shrink-0   relative -top-0.5" />
                    <div>
                        <a href="">+233 0244 939 782</a>
                    </div>
                    </p>

                    <p class="mb-5 text-gray-600  flex gap-2 items-start text-lg">
                        <UIcon name="i-heroicons-calendar-days" dynamic
                            class="w-8 h-8 text-skuldent-blue inline shrink-0 relative -top-0.5" />
                    <div>
                        <p>Monday - Friday
                        </p>
                    </div>
                    </p>

                    <p class="mb-5 text-gray-600 flex gap-2 items-start text-lg">
                        <UIcon name="i-heroicons-clock" dynamic
                            class="w-8 h-8 text-skuldent-blue inline shrink-0 relative -top-0.5" />
                    <div>
                        <p>8:00 AM - 05:00 PM</p>
                    </div>
                    </p>
                </div>

                <!-- Contact form -->
                <div class="md:w-[600px]">
                    <h3 class="text-2xl md:text-4xl text-skuldent-blue font-semibold mb-5">Send Us a Message</h3>
                    <p class="text-gray-600 text-lg mb-5">We're happy to answer any questions you have or provide you with
                        an
                        estimate.
                        Just send us a message in the form below with any questions you may have.</p>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>

</script>