<script setup lang="ts">
import { ref } from "vue";

const form = ref({
    name: "",
});

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

    console.warn("[data]", data?.value);
    console.warn("[error]", error?.value);
};
</script>

<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="form.name" required />
            </div>
            <button type="submit">Submit</button>
        </form>
        <div v-if="submitted">
            <p>Form submitted with the following data:</p>
            <pre>{{ form }}</pre>
        </div>
    </div>
</template>

<style scoped>
form {
    max-width: 400px;
    margin: auto;
}

div {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    width: 100%;
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
