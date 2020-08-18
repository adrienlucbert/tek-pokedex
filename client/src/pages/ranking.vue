<template>
    <div class="ranking-page">
        <city-leaderboard/>
        <team-leaderboard/>
    </div>
</template>

<script>
import CityLeaderboard from '@/components/CityLeaderboard'
import TeamLeaderboard from '@/components/TeamLeaderboard'

export default {
    name: 'ranking-page',
    components: {
        CityLeaderboard,
        TeamLeaderboard
    },
    data() {
        return {
        }
    },
    apollo: {
    }
}
</script>

<style scoped>
.city-leaderboard {
    margin-bottom: 3em;
}
</style>
