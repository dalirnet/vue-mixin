# @vue-mixin/graphql

Graphql mixin for vue

---

##### Install

```bash
npm install @vue-mixin/graphql --save
```

---

##### Import

```javascript
import graphqlMixin from "@vue-mixin/graphql"

export default {
    mixins: [graphqlMixin],
}
```

##### Request

```javascript
const endpoint = "http://localhost/graphql"
const query = "query { metadata { siteName } }"

export default {
    created() {
        /* 
            graphqlInit(endpoint, headers)
            return this
        */
        this.graphqlInit(endpoint)

        /* 
            graphqlRequest(query, variables, loadingListenner)
            return promise
        */
        this.graphqlRequest(query)
            .then((data) => {})
            .catch((error) => {})
    },
}

// or

export default {
    data() {
        return {
            data: {},
            error: {},
        }
    },
    watch: {
        graphqlData(data) {
            this.data = data
        },
        graphqlError(error) {
            this.error = error
        },
    },
    created() {
        this.graphqlInit(endpoint).graphqlRequest(query)
    },
}
```

##### Loading

```javascript
export default {
    data() {
        return {
            loading: false,
        }
    },
    created() {
        this.graphqlInit(endpoint)
            .graphqlRequest(query, {}, (loadingStatus) => {
                this.loading = loadingStatus
            })
            .then((data) => {})
            .catch((error) => {})
    },
}

// or

export default {
    data() {
        return {
            loading: false,
        }
    },
    watch: {
        graphqlLoading(status) {
            this.loading = status
        },
    },
    created() {
        this.graphqlInit(endpoint)
            .graphqlRequest(query)
            .then((data) => {})
            .catch((error) => {})
    },
}
```
