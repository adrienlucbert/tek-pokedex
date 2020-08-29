<template>
    <div class="logout-page">
    </div>
</template>

<script>
export default {
    name: 'logout-page',
    mounted() {
        this.$store.dispatch('logout')
        this.$router.push('/auth/login')
    }
}
</script>

<style scoped>

</style>
