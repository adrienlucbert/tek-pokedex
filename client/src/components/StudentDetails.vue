<template>
    <div class="student-details">
        {{ student }}
    </div>
</template>

<script>
import studentPointsQuery from '@/apollo/queries/students/points.gql'

export default {
    name: 'student-details',
    data() {
        return {
            student: []
        }
    },
    apollo: {
        student() {
            return {
                prefetch: true,
                query: studentPointsQuery,
                variables: {
                    id: this.$store.getters.own.id
                }
            }
        }
    }
}
</script>

<style scoped>

</style>
