<script>
import { store } from "../store/store";
import axios from 'axios';
import { getTechnologies, getLocalDate } from "../data/function";
export default {
    name: 'typeproject',
    data() {
        return {
            typeprojects: [],
            typename: '',

            getTechnologies,
            getLocalDate
        }
    },
    methods: {
        getApi(slug) {
            axios.get(store.apiUrl + 'Tutti-i-progetti-per-tipo/' + slug).then(res => {
                console.log(res.data.result[0].name)
                if (res.data.success) {
                    this.typename = res.data.result[0].name
                    this.typeprojects = (res.data.result[0].works)
                    console.log('qui', this.typeprojects[0]);
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
    <h2>{{ typename }}</h2>
    <ul>
        <li v-for="typro in typeprojects"><router-link :to="{ name: 'dettaglio', params: { slug: typro.slug } }">{{
            typro.title }}</router-link><br>

            <small> Technologies:{{ getTechnologies(typro) }} |
                Data:{{ getLocalDate(typro.created_at) }}</small>
        </li>
    </ul>
</template>
<style lang="scss" scoped></style>