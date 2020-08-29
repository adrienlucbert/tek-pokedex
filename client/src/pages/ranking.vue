<template>
    <div class="ranking-page">
        <city-leaderboard/>
        <team-leaderboard/>
        <user-details/>
    </div>
</template>

<script>
import CityLeaderboard from '@/components/CityLeaderboard'
import TeamLeaderboard from '@/components/TeamLeaderboard'
import UserDetails from '@/components/UserDetails'

export default {
    name: 'ranking-page',
    components: {
        CityLeaderboard,
        TeamLeaderboard,
        UserDetails
    }
}
</script>

<style scoped>
.city-leaderboard, .team-leaderboard {
    margin-bottom: 3em;
}
</style>
