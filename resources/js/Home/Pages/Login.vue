<template>
    <section class="h-screen">
        <div class="container h-full m-auto">
            <div class="g-6 flex h-full flex-wrap items-center justify-center w-100">
                <div class="md:w-1/2 w-full">
                    <div class="md:w-1/2 w-full mb-8">
                        <h1 class="text-4xl">Logowanie</h1>
                    </div>
                    <!-- Email input -->
                    <div class="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="text"
                            v-model="form.email"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear border-2 "
                            autocomplete="off"
                            placeholder="E-mail"/>
                        <label
                            for="exampleFormControlInput3"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.15rem] scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary bg-white"
                        >Email address
                        </label>

                        <div v-if="errors.email && errors.email.length > 0">
                            <p class="text-red-600" v-for="item in errors.email">{{ item }}</p>
                        </div>
                    </div>
                    <!-- Password input -->
                    <div class="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="password"
                            v-model="form.password"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear border-2 "
                            placeholder="Hasło"/>
                        <label
                            for="exampleFormControlInput33"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.15rem] scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary bg-white"
                        >Password
                        </label>
                        <div v-if="errors.password && errors.password.length > 0">
                            <p class="text-red-100" v-for="item in errors.password">{{ item }}</p>
                        </div>
                    </div>

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
