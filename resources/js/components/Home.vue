<!--<template>

</template>

<script>
export default {
    name: "Home"
}
</script>

<style scoped>

</style>-->

<template>
    <p>home</p>
</template>

<script>
export default {
    name:'Home',
    methods: {
        cs() {
            axios.post("../index").then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            })
        }
    },
    mounted() {
        this.cs();
    }
}

</script>
<style scoped></style>
