<template>
    <div class="top-bar">
        <bar>
            <div class="top-bar-left">
                <bar-item
                    :isActive="$route.path == '/ranking'"
                >
                    <router-link to="/ranking">Ranking</router-link>
                </bar-item>
                <bar-item
                    :isActive="$route.path == '/challenges'"
                >
                    <router-link to="/challenges">Challenges</router-link>
                </bar-item>
            </div>
            <div class="top-bar-middle">
                <bar-item class="top-bar-title">
                    <router-link to="/">
                        <span class="hashtag">#</span>CPool2020
                    </router-link>
                </bar-item>
            </div>
            <div class="top-bar-right">
                <bar-item
                    :isActive="$route.path == '/login' || $route.path == '/'"
                    v-if="!$store.getters.isLoggedIn"
                >
                    <router-link to="/login">Login</router-link>
                </bar-item>
                <bar-item
                    :isActive="$route.path == '/logout'"
                    v-else
                >
                    <router-link to="/logout">Logout</router-link>
                </bar-item>
            </div>
        </bar>
    </div>
</template>

<script>
import Bar from '@/components/Bar.vue'
import BarItem from '@/components/BarItem.vue'

export default {
    name: 'TopBar',
    components: {
        Bar,
        BarItem
    }
}
</script>

<style scoped>
.bar {
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    display: flex;
}

.top-bar-left, .top-bar-right {
    flex: 1;
}

.top-bar-left {
    text-align: left;
}

.top-bar-right {
    text-align: right;
}

.top-bar-title {
    font-weight: 600;
}

.hashtag {
    color: var(--l-secondary);
}
</style>
