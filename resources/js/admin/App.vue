<template>
  <router-view />
</template>


<script setup>
import {onMounted} from "vue";
import store from "./store";

onMounted(()=>{
    store.dispatch('getGlobalVariables');
})

</script>
<style lang="scss">
// Import Main styles for this application
@import 'styles/style';
</style>
