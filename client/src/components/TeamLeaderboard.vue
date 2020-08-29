<template>
    <div class="team-leaderboard">
        <center>
            <h2>Team leaderboard</h2>
            <leaderboard>
                <leaderboard-item
                    v-for="(user, index) in orderedUsers"
                    :key="user.id"
                    :rank="index + 1"
                    :name="user.username.replace('@epitech.eu', '')"
                    :points="user.total"
                    :highlighted="user.id == $store.getters.user.id"
                >
                </leaderboard-item>
            </leaderboard>
        </center>
   </div>
</template>

<script>
import Leaderboard from '@/components/Leaderboard'
import LeaderboardItem from '@/components/LeaderboardItem'
import teamUsersQuery from '@/apollo/queries/team/users.gql'

export default {
    name: 'team-leaderboard',
    components: {
        Leaderboard,
        LeaderboardItem
    },
    data() {
        return {
            team: null
        }
    },
    computed: {
        orderedUsers() {
            if (!this.team)
                return []
            return this.team.users.map(user => {
                user.total = 0
                for (let achievement of user.achievements)
                    user.total += Number(achievement.challenge.points)
                return user
            }).sort((a, b) => b.total - a.total)
        }
    },
    apollo: {
        team() {
            return {
                prefetch: true,
                query: teamUsersQuery,
                variables: {
                    id: this.$store.getters.user.team.id
                }
            }
        }
    }
}
</script>

<style scoped>
h2 {
    margin-top: 0;
}
</style>
