<template>
    <div class="user-details">
        {{ achievements }}
    </div>
</template>

<script>
export default {
    name: 'user-details',
    data() {
        return {
            achievements: this.$store.getters.user
        }
    }
}
</script>

<style scoped>

</style>
