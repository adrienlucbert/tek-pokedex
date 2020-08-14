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
    --l-secondary: #0766AD;
    
    --hdr-font: Montserrat, 'sans-serif';
    --l-hdr-background: #ffffff;
    --l-hdr-foreground: #171717;
    --l-hdr-focus-background: var(--l-hdr-foreground);
    --l-hdr-focus-foreground: var(--l-hdr-background);

    --body-font: Montserrat, 'sans-serif';
    --l-body-background: #f7f7f7;
    --l-body-foreground: #171717;
}

/* GENERAL STYLES */

body {
    margin: 0;
    background: var(--l-body-background);
    color: var(--l-body-foreground);
    font-family: var(--body-font);
}

* {
    box-sizing: border-box;
}
</style>
