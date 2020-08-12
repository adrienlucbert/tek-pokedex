<template>
    <div class="login-page">
        {{ teams }}
    </div>
</template>

<script>
import teamsQuery from '@/apollo/queries/team/teams.gql'

export default {
    name: 'login-page',
    data() {
        return {
            teams: []
        }
    },
    apollo: {
        teams: {
            prefetch: true,
            query: teamsQuery
        }
    }
}
</script>

<style scoped>

</style>
