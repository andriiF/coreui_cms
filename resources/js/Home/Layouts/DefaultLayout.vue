<template>
    <Header/>
    <div class="container mx-auto">
        <slot/>
    </div>
</template>
<script setup>
import Header from "@/Home/Components/Partials/Header";

</script>
<style lang="scss">
.progress-load-bar {
    height: 4px;
}
</style>

