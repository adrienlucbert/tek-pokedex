<template>
    <table class="leaderboard">
        <slot/>
    </table>
</template>

<script>
export default {
    name: 'leaderboard'
}
</script>

<style scoped>
.leaderboard {
    background: var(--l-hdr-background);
    width: 100%;
    max-width: 400px;
    border-collapse: collapse;
    box-shadow: 2px 2px 6px rgba(75, 75, 75, .3);
}
</style>
