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
    font-family: var(--hdr-font);
    font-weight: 500;
    box-shadow: 0 2px 3px rgba(75, 75, 75, .3);
}
</style>
