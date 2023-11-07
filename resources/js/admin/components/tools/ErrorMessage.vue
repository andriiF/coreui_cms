<template>
    <p class="error" v-if="message.length > 0">
        <span v-for="msg in message">{{ msg }}</span><br>
    </p>
</template>

<script setup>
const props = defineProps({
    message: {
        type: [String, Array],
        default: ''
    }
})

</script>

<style scoped>

</style>
