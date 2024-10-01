<script>
import axios from "axios";
import { store } from "../store/store";
import Loader from "../components/partials/Loader.vue";
export default {
    name: "Projects",
    components: {
        Loader,
    },
    data() {
        return {
            works: [],
            types: [],
            technologis: [],
            loaderState: true,
            paginatorData: {
                currentpage: 1,
                links: [],
            },
            typeFilter: '',
            technologiesFilter: ''
        };
    },
    methods: {
        getApi(apiUrl, element = 'works') {
            this.loaderState = true;
            axios.get(apiUrl)
                .then((result) => {

                    if (element === 'works') {
                        console.log(element);
                        this[element] = result.data.works.data;
                        this.paginatorData.currentpage = result.data.works.current_page;
                        this.paginatorData.links = result.data.works.links;
                        this.loaderState = false;
                    } else {
                        console.log(element);
                        this[element] = result.data.result
                        console.log(this[element]);
                    }

                })
                .catch((error) => console.error());
        },
    },
    mounted() {
        this.getApi(store.apiUrl + 'works', 'works')
        this.getApi(store.apiUrl + 'types', 'types')
        this.getApi(store.apiUrl + 'technologis', 'technologis')
    },
};
</script>

<template>
    <h2>Progetti</h2>


    <div v-if="loaderState">
        <Loader></Loader>
    </div>
    <div v-else>
        <div class="select-box">
            <div>
                <label for="type">Type</label><br>
                <select id="type" v-model="typeFilter">
                    <option value="">scegli il Type</option>
                    <option v-for="type in types" :value="type.slug">{{ type.name }}</option>
                </select>
            </div>
            <div>
                <label for="technology">Technology</label><br>
                <select id="technology" v-model="technologiesFilter">
                    <option value="">scegli la Technology</option>
                    <option v-for="technology in technologis" :value="technology.slug">{{ technology.name }}</option>
                </select>
            </div>
        </div>
        <ul>
            <li v-for="work in works" :key="work.id">{{ work.title }}</li>
        </ul>
        <div class="paginator">
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.paginator {
    display: flex;
    justify-content: center;

    button {
        margin: 5px;
    }
}

.select-box {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
}
</style>
