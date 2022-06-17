import {  createWebHistory,createRouter } from "vue-router";
import App from "../App.vue";
import ST from"../view/ST.vue"

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: "/",
            name:"home",
            component: App
        },
        {
            path:"/st",
            name: "st",
            component: ST
        },
    ],
});

export default router;