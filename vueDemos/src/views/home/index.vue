<template>
    <el-container class="home-wrap">
        <aside-menu></aside-menu>
        <el-container class="layout-wrapper">
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import AsideMenu from './aside.vue';
export default {
    components:{AsideMenu},

}
</script>

<style>

</style>