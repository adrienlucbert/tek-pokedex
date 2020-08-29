import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import store from '@/store'

import config from '@/config'

Vue.use(VueApollo)

const getHeaders = () => {
    const headers = {}
    const token = store.state.user.jwt
    if (token) {
        headers.authorization = `Bearer ${ token }`
    }
    return headers
}

const link = new HttpLink({
    uri: `${config.STRAPI_URL}/graphql`,
    fetch,
    headers: getHeaders()
})

const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache({
        addTypename: true
    })
})

const apolloProvider = new VueApollo({
    defaultClient: client
})

export default apolloProvider
