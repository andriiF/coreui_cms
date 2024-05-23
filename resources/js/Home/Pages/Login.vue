<template>
    <section class="h-screen">
        <div class="container h-full m-auto">
            <div class="g-6 flex h-full flex-wrap items-center justify-center w-100 mx-3">
                <div class="md:w-1/2 w-full">
                    <div class="md:w-1/2 w-full mb-8">
                        <h1 class="text-4xl">Logowanie</h1>
                    </div>
                    <!-- Email input -->
                    <TextInput
                        v-model="form.email"
                        placeholder="E-mail"
                        label="Email"
                        :errors="errors.email"
                    />
                    <TextInput
                        v-model="form.password"
                        placeholder="Password"
                        label="Password"
                        type="password"
                        :errors="errors.password"
                    />

                    <!-- Submit button -->
                    <button
                        type="button"
                        @click="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded w-full"
                    >
                        Zaloguj się
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import axios from "axios";
import {ref} from "vue";

import TextInput from '@/Home/Components/Form/Input/TextInput';

const errors = ref({});

const form = {
    'email': null,
    'password': null
};

const submit = () => {
    axios.post('/login', form)
        .then(response => {
            window.location.href = "/superadmin";
        }).catch(err => {
        errors.value = err.response.data.errors;
    })
}


</script>

<style scoped>

</style>
