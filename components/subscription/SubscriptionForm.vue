<script setup>
const selectedPlan = ref('')

const submitDetails = () => {
    useRouter().push('/subscription')
}
onMounted(() => {
    selectedPlan.value = useRoute().query.plan
})
</script>

<template>
    <div class="max-w-[600px] mx-auto">
        <h2 class="text-center mb-5 text-lg">Skuldent is committed to providing prompt support. Submit your details, our
            team
            will
            reach out
            to assist you with
            onboarding promptly.</h2>

        <form @submit.prevent="submitDetails">
            <!-- Name -->
            <div class=" mb-3">
                <!-- <label class="mb-1 block">Plan:</label> -->
                <select class="w-full" v-model="selectedPlan" disabled>
                    <option disabled value="basic">Basic Plan</option>
                    <option disabled value="standard">Standard Plan</option>
                    <option disabled value="premium">Premium Plan</option>
                </select>
            </div>

            <!-- Name and  Email -->
            <div class="flex gap-3 justify-between mb-3 xs:flex-row flex-col">
                <!-- Name -->
                <div class="xs:w-1/2">
                    <label for="name" class="mb-1 block">Name</label>
                    <input type="name" name="name" id="name" class="w-full" placeholder="Enter your full name" required>

                </div>
                <!-- Email -->
                <div class="xs:w-1/2">
                    <label for="email" class="mb-1 block">Email</label>
                    <input type="email" name="email" id="email" class="w-full" placeholder="Enter your email" required>
                </div>
            </div>
            <!-- Name and  Email -->
            <div class="flex gap-3 justify-between mb-3  xs:flex-row flex-col">
                <!-- Phone -->
                <div class="xs:w-1/2">
                    <label for="phone" class="mb-1 block">Phone number</label>
                    <input type="phone" name="phone" id="phone" class="w-full" placeholder="Enter your phone number"
                        required>

                </div>
                <!-- Instituition -->
                <div class="xs:w-1/2">
                    <label for="institution" class="mb-1 block">Institution</label>
                    <input type="institution" name="institution" id="institution" class="w-full"
                        placeholder="Name of your institution" required>
                </div>
            </div>

            <button class="btn-transparent w-full">Submit</button>
        </form>
    </div>
</template>

<style scoped>
input,
select,
textarea {
    /* background: transparent; */
    border: 1px solid #dcdcdc;
    border-radius: 8px;
    padding: 12px;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}

input:focus,
select:focus {
    /* @apply outline-2 outline-skuldent-blue */
}
</style>