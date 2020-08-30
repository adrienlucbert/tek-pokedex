import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import store from '@/store'

import config from '@/config'

Vue.use(VueApollo)

const authMiddleware = new ApolloLink((operation, next) => {
    const token = store.state.user.jwt
    operation.setContext({
        headers: {
            authorization: token ? `Bearer ${ token }` : null
        }
    })
    return next(operation)
})

const link = new HttpLink({
    uri: `${config.STRAPI_URL}/graphql`,
    fetch
})

const client = new ApolloClient({
    link: authMiddleware.concat(link),
    cache: new InMemoryCache({
        addTypename: true
    })
})

const apolloProvider = new VueApollo({
    defaultClient: client
})

export default apolloProvider
