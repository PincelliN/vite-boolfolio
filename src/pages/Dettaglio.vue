<script>
import { store } from "../store/store";
import axios from 'axios';
import { getType, getTechnologies, getLocalDate } from "../data/function";
export default {
    name: 'dettaglio',
    data() {
        return {
            work: {
                collaborators: '',
                created_at: '',
                description: '',
                end_date: '',
                id: '',
                original_name_img: '',
                path_img: '',
                post: '',
                slug: '',
                start_date: '',
                subject: '',
                technologies: '',
                title: '',
                type: '',
                type_id: '',
                updated_at: '',
            }
        }
    },
    computed: {
        getInfo() {
            const type = getType(this.work);
            const tecs = getTechnologies(this.work);
            const data = getLocalDate(this.work.created_at);
            return `Type: ${type}  | Technologies:${tecs} | Data: ${data}`
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
    <p>{{ getInfo }}</p>
</template>
<style></style>