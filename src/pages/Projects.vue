<script>
import axios from "axios";
import { store } from "../store/store";
import Loader from "../components/partials/Loader.vue";
import { getType, getTechnologies, getLocalDate } from "../data/function";
export default {
    name: "Projects",
    components: {
        Loader,
    },
    data() {
        return {
            works: [],
            types: [],
            technologies: [],
            loaderState: true,
            paginatorData: {
                currentpage: 1,
                links: [],
            },
            getType,
            getTechnologies,
            getLocalDate
        };
    },
    methods: {
        getApi(apiUrl, element = 'works') {
            this.loaderState = true;
            axios.get(apiUrl)
                .then((result) => {

                    if (element === 'works') {

                        this[element] = result.data.works.data;
                        this.paginatorData.currentpage = result.data.works.current_page;
                        this.paginatorData.links = result.data.works.links;
                        this.loaderState = false;
                        console.log(this[element]);
                    } else {
                        console.log(element);
                        this[element] = result.data.result

                    }

                })
                .catch((error) => console.error());
        }
    },
    mounted() {
        this.getApi(store.apiUrl + 'works', 'works')
        this.getApi(store.apiUrl + 'types', 'types')
        this.getApi(store.apiUrl + 'technologies', 'technologies')
    },
};

</script>

<template>
    <h2>Progetti</h2>


    <div v-if="loaderState">
        <Loader></Loader>
    </div>
    <div v-else>

        <div>
            <p>Type</p><br>
            <button v-for="type in types"><router-link :to="{ name: 'typeproject', params: { slug: type.slug } }">{{
                type.name
                    }}</router-link></button>

        </div>
        <div>
            <p>Technologies</p>
            <button v-for="technology in technologies"><router-link
                    :to="{ name: 'tecprojects', params: { slug: technology.slug } }">{{
                        technology.name }}</router-link></button>
        </div>

        <ul>
            <li v-for="work in works" :key="work.id">
                <router-link :to="{ name: 'dettaglio', params: { slug: work.slug } }">{{ work.title }}<br>
                </router-link>
                <small>Type: {{ getType(work) }} | Technologies:{{ getTechnologies(work) }} |
                    Data:{{ getLocalDate(work.created_at) }}</small>
            </li>
        </ul>
        <div class=" paginator">
            <button v-for="(link, index) in paginatorData.links" :key="index" v-html="link.label"
                :disabled="link.active || link.url == null" @click="getApi(link.url, 'works')"></button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
h2 {
    text-align: center;

}

ul {
    list-style: circle;

}

.paginator {
    display: flex;
    justify-content: center;

    button {
        margin: 5px;
    }
}
</style>
