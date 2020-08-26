<template>
    <div class="login-page">
        <center>
            <form @submit="login">
                <p
                    id="status-message"
                    :class="`status-${status.type}`"
                    v-if="status.message"
                >
                    {{ status.message }}
                </p>
                <label for="city">City</label>
                <select
                    name="city"
                    id="city"
                >
                    <option
                        v-for="city in cities"
                        :key="city.id"
                        :value="city.id"
                    >
                        {{ city.name }}
                    </option>
                </select>
                <label for="username">Username</label>
                <input
                    autofocus 
                    required 
                    type="text" 
                    name="username"
                    id="username"
                />
                <input type="submit" value="LOGIN"/>


                <p id="login-info">
                    <fa icon="info-circle" :style="{ color: '#171717' }"/>
                    Login with just your Epitech login (email address).
                </p>
        </form>
        <form >
            <input @click="loginWithMicrosoft" class="microsoft" type="submit" value="LOGIN with office365"/>
        </form>
        </center>
    </div>
</template>

<script>
import citiesQuery from '@/apollo/queries/city/cities.gql'
import studentsQuery from '@/apollo/queries/students/students.gql'

export default {
    name: 'login-page',
    data() {
        return {
            cities: [],
            status: {
                type: null,
                message: null
            }
        }
    },
    apollo: {
        cities: {
            prefetch: true,
            query: citiesQuery
        }
    },
    mounted() {
        if (this.$store.getters.isLoggedIn) {
            this.redirect()
        }
    },
    methods: {
        setStatus(type = null, message = null) {
            this.status.type = type
            this.status.message = message
        },
        loginWithMicrosoft(e) {
            e.preventDefault();
            window.location.href = 'http://localhost:1337/connect/microsoft';
        },
        redirect() {
            this.$router.push('ranking')
        },
        login(e) {
            e.preventDefault()
            const validFormat = /^([a-zA-Z0-9]+\.[a-zA-Z0-9]+)(@epitech\.eu)?$/
            const usernameMatch = e.target.username.value.match(validFormat)
            if (!usernameMatch) {
                this.setStatus('error', 'Invalid username format.')
                return
            }
            const username = usernameMatch[1]
            this.$apollo.query({
                query: studentsQuery,
                variables: {
                    city: e.target.city.value,
                    login: username
                }
            })
                .then(({ data }) => {
                    if (!data.studentByLogin) {
                        this.setStatus('error', 'Unknown username in this city.')
                        return
                    }
                    this.$store.dispatch('login', data.studentByLogin)
                    this.setStatus('success', 'Logged in successfully.')
                    this.redirect()
                })
                .catch(() => {
                    this.setStatus('error', 'Internal error. Please try again later.')
                })
        } 
    }
}
</script>

<style scoped>
form {
    text-align: left;
    background: white;
    box-shadow: 2px 2px 6px rgba(75, 75, 75, .3);
    max-width: 400px;
    padding: 2em;
}

#status-message {
    background: var(--l-secondary);
    color: white;
    padding: 1em;
    border-radius: 5px;
}

#status-message.status-error {
    background: #dc3545;
}

#status-message.status-success {
    background: #28a745;
}

form input, form select {
    border-radius: 5px;
    padding: 1em;
    margin: 1em 0;
    width: 100%;
    font: inherit;
    border: none;
    color: inherit;
    background: var(--l-body-background);
    transition: all .1s ease-in-out;
    outline: none;
}

form input:not([type="submit"]):focus {
    box-shadow: 0 0 0 2px inset var(--l-secondary);
}

form input[type="submit"] {
    background: var(--l-secondary);
    color: var(--l-body-background);
    cursor: pointer;
    transition: all .1s ease-in-out;
    box-shadow: 0 0 0 2px inset var(--l-secondary);
}

form input[type="submit"]:hover, form input[type="submit"]:focus {
    background: var(--l-body-background);
    color: var(--l-secondary);
}

label {
    margin: 1em 0;
}
</style>
