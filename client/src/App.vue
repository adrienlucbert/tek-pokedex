<template>
    <div id="app">
        <top-bar></top-bar>
        <router-view></router-view>
        <!-- TODO: footer -->
    </div>
</template>

<script>
import TopBar from '@/components/TopBar'

export default {
    name: 'App',
    components: {
        TopBar
    }
}
</script>

<style>
/* FONTS */

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

/* VARIABLES */

:root {
    --l-hdr-background: #e4e4e4;
    --l-hdr-foreground: #171717;
    --l-hdr-focus-background: var(--l-hdr-foreground);
    --l-hdr-focus-foreground: var(--l-hdr-background);
}

/* GENERAL STYLES */

body {
    margin: 0;
}

* {
    box-sizing: border-box;
}
</style>
