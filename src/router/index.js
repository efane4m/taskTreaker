import * as VueRouter from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import Faq from '../pages/Faq.vue'
import Profile from '../pages/Profile.vue'
import MyTasks from '../pages/MyTasks.vue'

export default VueRouter.createRouter({
    history:VueRouter.createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'mainPage',
            component:MainPage
        },
        {
            path:'/faq',
            name:'Faq',
            component:Faq
        },
        {
            path:'/profile',
            name:'Profile',
            component:Profile
        },
        {
            path:'/my-tasks',
            name:'My tasks',
            component:MyTasks
        },
    ]
})