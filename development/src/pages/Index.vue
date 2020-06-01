<template>
    <Layout>
        <h4>Modules</h4>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th style="width: 40%;">Module</th>
                    <th>Version</th>
                    <th>Doc</th>
                    <th>Test</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in packages" :key="item.id">
                    <td>
                        <span>{{ item.id }}</span>
                        <br />
                        <small>{{ item.description }}</small>
                    </td>
                    <td>
                        <a :href="`https://www.npmjs.com/package/${item.name}`">
                            {{ item.name }}
                        </a>
                        <br />
                        <small>On Npm</small>
                    </td>
                    <td>
                        <span>{{ item.version }}</span>
                        <br />
                        <small>Current</small>
                    </td>
                    <td>
                        <a
                            :href="
                                `https://github.com/dalirnet/vue-mixin/tree/master/packages/${
                                    item.id
                                }/README.md`
                            "
                        >
                            <span>Readme</span>
                        </a>
                        <br />
                        <small>On Github</small>
                    </td>
                    <td>
                        <g-link :to="`/${item.id}`">Page</g-link>
                        <br />
                        <small>{{
                            item.id == 'graphql' ? 'Local only' : 'Client Side'
                        }}</small>
                    </td>
                </tr>
            </tbody>
        </table>

        <h4>License</h4>
        <p>MIT License</p>
        <p><small>Copyright (c) 2020 Amir Reza Dalir</small></p>
        <div class="keywords">
            <g-link to="/" v-for="(keyword, index) in keywords" :key="index">{{
                keyword
            }}</g-link>
        </div>
    </Layout>
</template>

<script>
const pack = require.context(
    '../../../packages/',
    true,
    /\/[a-zA-Z]+\/package\.json$/
)

export default {
    metaInfo: {
        title: 'Modules'
    },
    data() {
        return {
            packages: [],
            keywords: []
        }
    },
    created() {
        pack.keys().forEach(key => {
            this.packages.push({
                id: pack(key).name.replace('@vue-mixin/', ''),
                name: pack(key).name,
                description: pack(key).description,
                version: pack(key).version
            })
            this.keywords = [...this.keywords, ...pack(key).keywords].filter(
                (value, index, self) => {
                    return self.indexOf(value) === index
                }
            )
        })
    }
}
</script>

<style lang="scss">
.keywords {
    margin: 0 -5px;

    a {
        margin: 5px;
    }
}
</style>
