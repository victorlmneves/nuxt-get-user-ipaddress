<script setup lang="ts">
import { ref } from "vue";

const form = ref({
    name: "",
});
const ipAddress = ref("");
const submitted = ref(false);

const handleSubmit = async () => {
    submitted.value = true;
    // Here you can handle the form submission, e.g., send it to an API

    const { data, error } = await useFetch("/api/client-ip-address", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (data.value) {
        ipAddress.value = typeof data.value === 'string' ? data.value : '';
    }

    console.info("[data]", data?.value);
    console.info("[error]", error?.value);
};
</script>

<template>
    <div>
        <form action="https://dev-mein.yello.de/auth/login?redirect=/auth/logout" method="GET">
            <input type="hidden" name="redirect" value="/auth/logout">
            <input type="submit" value="Submit">
        </form>

        <!-- <form @submit.prevent="handleSubmit">
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="form.name" required />
            </div>
            <button type="submit">Submit</button>
        </form>
        <div v-if="submitted">
            <p>Form submitted from the following IP Address:</p>
            <pre>{{ ipAddress }}</pre>
        </div> -->
    </div>
</template>

<style scoped>
form {
    width: 100%;
    margin: auto;
}

div {
    display: flex;
    flex-direction: column;
    margin: 0 auto 1rem;
    max-width: 400px;
    width: 100%;
}

label {
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    width: calc(100% - 1rem);
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    display: block;
    width: 100%;
    padding: 0.5rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>
