<template>
    <div class="challenges-page">
        <pokedex
            :challenges="challengesProgress"
        ></pokedex>
    </div>
</template>

<script>
import Pokedex from '@/components/Pokedex'
import PokedexAPI from 'pokedex'
const pokedex = new PokedexAPI()

import challengesQuery from '@/apollo/queries/challenges/challenges.gql'
import teamAchievementsQuery from '@/apollo/queries/team/achievements.gql'

export default {
    name: 'challenges-page',
    components: {
        Pokedex
    },
    data() {
        return {
            challenges: [],
            team: null
        }
    },
    computed: {
        challengesProgress() {
            return this.challenges.map(challenge => {
                challenge.complete = Boolean(this.team?.achievements.find(achievement => {
                    return achievement.challenge.id == challenge.id
                }))
                challenge.pokemon = pokedex.pokemon(challenge.pokemonID)
                return challenge
            })
        }
    },
    apollo: {
        challenges: {
            prefetch: true,
            query: challengesQuery
        },
        team() {
            return {
                prefetch: true,
                query: teamAchievementsQuery,
                variables: {
                    id: this.$store.getters.ownTeam.id
                }
            }
        }
    }
}
</script>

<style scoped>

</style>
