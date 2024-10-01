<script>
export default {
    name: 'Navbar'
}
</script>

<template>
    <nav>
        <ul>
            <li><router-link :to="{ name: 'home' }">Home</router-link></li>
            <li><router-link :to="{ name: 'projects' }">Progetti</router-link></li>
            <li><router-link :to="{ name: 'contacts' }">Contatti</router-link></li>
        </ul>
    </nav>

</template>

<style lang="scss" scoped>
ul {
    display: flex;
    justify-content: center;
    list-style: none;

    li {
        margin: 5px;
        padding: 3px;
        border: 1px solid white;
        border-radius: 5px;

        a {
            text-decoration: none;
            color: currentColor;

            &:hover,
            &.active {
                text-decoration: underline;
                color: black;
            }
        }
    }
}
</style>