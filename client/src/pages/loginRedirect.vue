<template>
    <div class="login-redirect">
        <center>
            <p v-html="status"></p>
        </center>
    </div>
</template>

<script>
export default {
    name: 'login-redirect',
    data() {
        return {
            status: 'Signin you in, please wait...'
        }
    },
    mounted() {
        this.$store.dispatch('login', location.search)
            .then(() => {
                this.status = `You have been successfully logged in. You will be redirected in a few seconds...`
                this.$router.push('/')
            })
            .catch(err => {
                console.error(err)
                if (err.message === `User belongs to no team`) {
                    this.status = `You were not registered by an admin. Ask your educational team.`
                } else {
                    this.status = `An error occured. Please <a href="/">try again</a> or contact an admin.`
                }
            })
    }
}
</script>

<style scoped>

</style>
