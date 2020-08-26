<template>
    <div class="city-leaderboard">
        <center>
            <h2>City leaderboard</h2>
            <leaderboard>
                <leaderboard-item
                    v-for="(team, index) in orderedTeams"
                    :key="team.id"
                    :rank="index + 1"
                    :name="team.name"
                    :points="team.total"
                    :highlighted="team.id == $store.state.student.team.id"
                />
            </leaderboard>
        </center>
    </div>
</template>

<script>
import Leaderboard from '@/components/Leaderboard'
import LeaderboardItem from '@/components/LeaderboardItem'
import teamsPointsQuery from '@/apollo/queries/team/points.gql'

export default {
    name: 'city-leaderboard',
    components: {
        Leaderboard,
        LeaderboardItem
    },
    data() {
        return {
            teams: []
        }
    },
    computed: {
        orderedTeams() {
            return this.teams.map(team => {
                team.total = 0
                for (let achievement of team.achievements)
                    team.total += Number(achievement.challenge.points)
                for (let adjustment of team.adjustments)
                    team.total += Number(adjustment.points)
                return team
            }).sort((a, b) => b.total - a.total)
        }
    },
    apollo: {
        teams: {
            prefetch: true,
            query: teamsPointsQuery
        }
   }
}
</script>

<style scoped>
h2 {
    margin-top: 0;
}
</style>
