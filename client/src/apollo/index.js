import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

import config from '@/config'

Vue.use(VueApollo)

const apolloClient = new ApolloClient({
    uri: `${config.STRAPI_URL}/graphql`
})

const apolloProvider = new VueApollo({
    defaultClient: apolloClient
})

export default apolloProvider
