<script>
import axios from 'axios';
export default {
    name: 'Projects',
    methods: {
        getApi() {
            axios.get('http://127.0.0.1:8000/api/tutti-i-progetti').then(result => console.log(result.data, result.data.works.links)
            )
        }
    },
    mounted() {
        this.getApi()
    }
}
</script>

<template>
    <h2>Progetti</h2>
</template>

<style lang="scss" scoped></style>