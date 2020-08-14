<template>
    <div :class="`bar-item ${isActive ? 'active' : ''}`" @click="blur">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'BarItem',
    props: {
        isActive: Boolean
    },
    methods: {
        blur({ target }) {
            target.blur()
        }
    }
}
</script>

<style scoped>
.bar-item {
    display: inline-block;
    line-height: 2.2em;
    text-align: center;
}

.bar-item > * {
    color: inherit;
    display: inline-block;
    padding: .4em 1.5em;
    transition: all .1s ease-in-out;
}

.bar-item a {
    text-decoration: none;    
}

.bar-item a:hover, .bar-item a:focus, .bar-item.active a {
    box-shadow: 0 -3px inset var(--l-secondary);
}
</style>
