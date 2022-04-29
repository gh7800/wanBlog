
<template>
    <div class="">
        <ElForm>
            <table>
                <tr>
                    <td>用户名</td>
                    <td><input type="text" name="username"></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" value="提交"></td>
                </tr>

            </table>
        </ElForm>
    </div>
</template>

<script>
export default {
    name:'Home',
    // methods: {
    //     cs() {
    //         axios.post("../index").then(function (response) {
    //             console.log(response);
    //         }).catch(function (error) {
    //             console.log(error);
    //         })
    //     }
    // },
    // mounted() {
    //     this.cs();
    // }
}

</script>
<style scoped></style>
