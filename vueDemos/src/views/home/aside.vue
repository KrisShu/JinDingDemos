<template>
    <div class="aside-wrap">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            
            <template v-for="(item, index) in contentRouter" >
                <el-submenu  v-if="item.children" :index="item.name" :key="index">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{item.meta.title}}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item  v-for="(sub,index2) in item.children" :key="index2" :index="sub.name">
                                <router-link :to="sub.path">
                                    {{sub.meta.title}}
                                </router-link>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-menu-item v-else :index="item.name" :key="index">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script>
import contentRouter from '../../router/content';
export default {
    data(){
        return{
            contentRouter:contentRouter
        }
    },
    mounted(){
        console.log("contentRouter",contentRouter)
    },
    methods:{
        handleOpen(){

        },
        handleClose(){

        }
    }
}
</script>

<style lang="scss">
.aside-wrap{
    width: 200px;
}
</style>