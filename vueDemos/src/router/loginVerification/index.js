export const loginVerification =[
    {
        path:"/loginVerification",
        name:'loginVerification',
        component:() =>import (
            /* webpackChunkName: "article" */ '../../views/demos/loginVerification/index.vue'
        ),
        redirect:'/loginVerification/loginVerification1',
        meta:{
            title:'登录验证模块'
        },
        children:[
            {
                path:'loginVerification1',
                name:'loginVerification1',
                component:()=> import(
                    /* webpackChunkName: "article" */ '../../views/demos/loginVerification/loginVerification1.vue'
                ),
                meta: {
                    title: "登录验证1",
                    keepAlive:true
                }
            },
            {
                path:'loginVerification2',
                name:'loginVerification2',
                component:()=> import(
                    /* webpackChunkName: "article" */ '../../views/demos/loginVerification/loginVerification2.vue'
                ),
                meta: {
                    title: "登录验证2"
                }
            }
        ]
    }
] 

export default loginVerification