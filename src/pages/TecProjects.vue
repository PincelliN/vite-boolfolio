<script>
import { store } from "../store/store";
import axios from 'axios';
import { getType, getLocalDate } from "../data/function";

export default {
    name: 'tecprojects',
    data() {
        return {
            techprojects: [],
            techname: '',
            getType,
            getLocalDate

        }
    },
    methods: {
        getApi(slug) {
            axios.get(store.apiUrl + 'Tutti-i progetti-per-Tecnologie/' + slug).then(res => {
                console.log('1', res.data.result[0].name)
                if (res.data.success) {
                    this.techname = res.data.result[0].name
                    this.techprojects = (res.data.result[0].works)
                    console.log('2', this.techprojects);
                } else {
                    this.$router.push({ name: 'NotFound' })
                }

            })
        }
    },
    mounted() {

        const slug = this.$route.params.slug
        this.getApi(slug)
    }
}
</script>
<template>
    <h2>{{ techname }}</h2>
    <ul>
        <li v-for="techpro in techprojects"><router-link :to="{ name: 'dettaglio', params: { slug: techpro.slug } }">{{
                techpro.title }}</router-link>
            <br>
            <small>Type: {{ getType(techpro) }} | Data:{{ getLocalDate(techpro.created_at) }}</small>
        </li>
    </ul>
</template>
<style lang="scss" scoped></style>