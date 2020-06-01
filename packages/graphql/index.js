// lib
import { GraphQLClient } from 'graphql-request'

export default {
    data() {
        return {
            graphqlEndpoint: 'http://localhost/graphql',
            graphqlHeaders: {},
            graphqlLoading: false,
            graphqlData: null,
            graphqlError: null,
            graphqlClient: null,
        }
    },

    methods: {
        graphqlInit(endpoint, headers = {}) {
            this.graphqlEndpoint = endpoint
            this.graphqlHeaders = headers
            return this
        },
        graphqlRequest(query, variables = {}, loadingListenner = null) {
            this.graphqlClient = new GraphQLClient(this.graphqlEndpoint, {
                headers: this.graphqlHeaders,
            })
            return new Promise((resolve, reject) => {
                this.graphqlLoading = true
                if (typeof loadingListenner == 'function') {
                    loadingListenner(this.graphqlLoading)
                }
                this.graphqlClient
                    .request(query, variables)
                    .then((data) => {
                        this.graphqlData = data
                        resolve(this.graphqlData)
                    })
                    .catch((error) => {
                        this.graphqlError = error.toString()
                        reject(this.graphqlError)
                    })
                    .finally(() => {
                        this.graphqlLoading = false
                        if (typeof loadingListenner == 'function') {
                            loadingListenner(this.graphqlLoading)
                        }
                    })
            })
        },
    },
}
