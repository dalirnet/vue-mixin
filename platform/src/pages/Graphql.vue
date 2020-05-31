<template>
    <Layout>
        <h1>Graphql</h1>
        <p>{{ siteName }}</p>
    </Layout>
</template>

<script>
// mixin
import graphqlMixin from '@vue-mixin/graphql'

export default {
    mixins: [graphqlMixin],

    metaInfo: {
        title: 'graphql'
    },

    data() {
        return {
            siteName: null
        }
    },

    created() {
        this.graphqlInit('http://localhost:8080/___graphql')
            .graphqlRequest(
                `query {
                    metadata {
                        siteName
                    }
                }`
            )
            .then(({ metadata }) => {
                console.log('data', metadata)
                this.siteName = metadata.siteName
            })
            .catch(error => {
                console.log('error', error)
            })
    }
}
</script>
