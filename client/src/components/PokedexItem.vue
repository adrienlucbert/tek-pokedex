<template>
    <div class="pokedex-item">
        <img
            v-if="challenge.complete"
            :src="pokemon.sprites.animated"
            :alt="pokemon.name"
        />
        <img
            v-else
            class="locked"
            :src="pokemon.sprites.normal"
            alt="undiscovered pokemon"
        />
    </div>
</template>

<script>
import Pokedex from 'pokedex'
const pokedex = new Pokedex()

export default {
    name: 'pokedex-item',
    props: {
        challenge: Object
    },
    computed: {
        pokemon() {
            return pokedex.pokemon(this.challenge.pokemonID)
        }
    }
}
</script>

<style scoped>
.locked {
    filter: contrast(0%);
}
</style>
