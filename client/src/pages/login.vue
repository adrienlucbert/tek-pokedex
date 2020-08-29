<template>
    <div class="login-page">
        <center>
            <h1>Sign in</h1>
            <form :action="PROVIDER_URL" method="GET">
                <input type="submit" value="Log-in with Office365"/>
            </form>
        </center>
    </div>
</template>

<script>
export default {
    name: 'login-page',
    data() {
        return {
            PROVIDER_URL: `http://localhost:1337/connect/microsoft`,
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
