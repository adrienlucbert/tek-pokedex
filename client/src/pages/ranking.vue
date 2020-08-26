<template>
    <div class="ranking-page">
        <city-leaderboard/>
        <team-leaderboard/>
        <student-details/>
    </div>
</template>

<script>
import CityLeaderboard from '@/components/CityLeaderboard'
import TeamLeaderboard from '@/components/TeamLeaderboard'
import StudentDetails from '@/components/StudentDetails'

export default {
    name: 'ranking-page',
    components: {
        CityLeaderboard,
        TeamLeaderboard,
        StudentDetails
    }
}
</script>

<style scoped>
.city-leaderboard, .team-leaderboard {
    margin-bottom: 3em;
}
</style>
