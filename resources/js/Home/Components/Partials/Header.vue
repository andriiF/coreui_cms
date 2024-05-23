<template>
    <nav class="relative px-4 py-4 flex justify-between items-center bg-white">
        <a class="text-2xl font-bold leading-none" href="#">
            Logo
        </a>
        <div class="lg:hidden">
            <button class="navbar-burger flex items-center text-blue-600 p-3 " @click="toggleMenu" v-if="hideMobileMenu">
                <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" color="gray" xmlns="http://www.w3.org/2000/svg">
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </button>
        </div>
        <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <li><a class="text-sm text-gray-400 hover:text-gray-500" href="/">Home</a></li>
            <li class="text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill"
                     viewBox="0 0 24 24" >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                </svg>
            </li>
            <li><a class="text-sm text-blue-600 font-bold" href="/superadmin">Admin</a></li>
        </ul>
        <a class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
           href="/login">Sign In</a>
    </nav>
    <div class="navbar-menu relative z-50 " :class="{'hidden':hideMobileMenu}">
        <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25 z-0"></div>
        <nav
            class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-4 px-4 bg-white border-r overflow-y-auto">
            <div class="flex items-center mb-8">
                <a class="mr-auto text-xl font-bold leading-none" href="#">
                    Logo Menu mobile
                </a>
                <button class="navbar-close" @click="toggleMenu">
                    <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div>
                <ul>
                    <li class="mb-1">
                        <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                           href="#">
                            <router-link to="/">Home</router-link>
                        </a>
                    </li>
                    <li class="mb-1">
                        <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                           href="/superadmin">
                            Admin
                        </a>
                    </li>

                </ul>
            </div>
            <div class="mt-auto">
                <div class="pt-6">
                    <a class="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                       href="/login">Sign in</a>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>

import {ref} from "vue";

const hideMobileMenu = ref(true);

const toggleMenu = () => {
    hideMobileMenu.value = !hideMobileMenu.value;
}


</script>

<style scoped>

</style>
