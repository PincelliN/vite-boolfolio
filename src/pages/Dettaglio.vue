<script>
import { store } from "../store/store";
import axios from 'axios'
export default {
    name: 'dettaglio',
    data() {
        return {
            work: {}
        }
    },
    methods: {
        getApi(slug) {
            console.log(slug)
            axios.get(store.apiUrl + 'dettaglio/' + slug).then(res => {
                console.log(res.data.work)
                if (res.data.success) {
                    this.work = res.data.work;
                } else {
                    this.$router.push({ name: 'NotFound' })
                }

            })


        }
    },
    mounted() {
        const slug = this.$route.params.slug
        this.getApi(slug)
        console.log(this.$route.params.slug);
    }
}
</script>
<template>
    <h1>{{ work.title }}</h1>
</template>
<style></style>