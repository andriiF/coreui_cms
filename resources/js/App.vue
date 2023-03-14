<template>
    <h1>
        {{title}}
    </h1>
    <router-link to="/">Home</router-link>
    <div>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "App",
    setup() {
        const title = 'Hello world';

        return {title}
    }
}
</script>

<style scoped>


</style>
