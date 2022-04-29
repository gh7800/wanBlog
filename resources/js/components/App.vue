<template>
    <div class="">
        <!--        <router-view></router-view>-->
        <ElForm>
            <el-table>
                <tr>
                    <td>用户名</td>
                    <td><input type="text" name="username"></td>
                </tr>
                <tr>
                    <td>密码</td>
                    <td><input type="password" name="password"></td>
                </tr>
                <tr>
                    <td></td>
                    <td><el-input type="submit" value="提交" onclick="login()"/></td>
                </tr>

            </el-table>
        </ElForm>
    </div>
</template>

<script>
export default {
    name: 'App',
    methods : {
        login() {
            console.log('----')
            this.$router.replace('home')
        }
    }
}
</script>
