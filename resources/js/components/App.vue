<template>
    <div class="">
        <div class="">vue demo</div>
        <!--        <router-view></router-view>-->
        <table>
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
                <td><input type="submit" value="提交"></td>
            </tr>

        </table>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>
