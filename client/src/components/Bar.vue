<template>
    <div class="bar">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'Bar'
}
</script>

<style scoped>
.bar {
    background-color: var(--l-hdr-background);
    color: var(--l-hdr-foreground);
    font-size: 1.2em;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
}
</style>
