<template>
    <div class="">
        <div class="">vue info</div>

    </div>
</template>

<script>
export default {
    name: 'AuthUserInfo',
    data () {
        return {
            phone: ''
        }
    },
    mounted () {
        this.getResult()
    },
    methods: {
        getResult () {
            var phone = this.$route.params.phone
            axios.post('/api/authuserinfo').then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)

            })
        }
    }
}
</script>
