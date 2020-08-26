<template>
    <div class="team-leaderboard">
        <center>
            <h2>Team leaderboard</h2>
            <leaderboard>
                <leaderboard-item
                    v-for="(student, index) in orderedStudents"
                    :key="student.id"
                    :rank="index + 1"
                    :name="student.login"
                    :points="student.total"
                    :highlighted="student.id == $store.state.student.id"
                >
                </leaderboard-item>
            </leaderboard>
        </center>
   </div>
</template>

<script>
import Leaderboard from '@/components/Leaderboard'
import LeaderboardItem from '@/components/LeaderboardItem'
import teamStudentsQuery from '@/apollo/queries/team/students.gql'

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
        orderedStudents() {
            if (!this.team)
                return []
            return this.team.students.map(student => {
                student.total = 0
                for (let achievement of student.achievements)
                    student.total += Number(achievement.challenge.points)
                return student
            }).sort((a, b) => b.total - a.total)
        }
    },
    apollo: {
        team() {
            return {
                prefetch: true,
                query: teamStudentsQuery,
                variables: {
                    id: this.$store.getters.ownTeam.id
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
