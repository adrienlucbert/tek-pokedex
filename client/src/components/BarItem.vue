<template>
    <div class="bar-item">
        <slot/>
    </div>
</template>

<script>
export default {
   name: 'BarItem' 
}
</script>

<style scoped>
.bar-item {
    display: inline-block;
    line-height: 2.2em;
    text-align: center;
}

.bar-item a {
    transition: all .1s ease-in-out;
}

.bar-item a:hover {
    background: var(--l-hdr-focus-background);
    color: var(--l-hdr-focus-foreground);
}

.bar-item a {
    color: inherit;
    text-decoration: none;    
    display: inline-block;
    padding: .2em 1.5em;
}
</style>
