
export const imageLazyLoad =[
    {
        path:"/imageLazyLoad",
        name:'imageLazyLoad',
        component:() =>import (
            /* webpackChunkName: "article" */ '../../views/demos/imageLazyLoad/index.vue'
        ),
        meta:{
            title:'图片懒加载'
        }
    }
]


export default imageLazyLoad