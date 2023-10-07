import {createRouter, createWebHashHistory} from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import FormPage from "@/pages/FormPage.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: "/", component: <MainPage/>},
        {path: "/form", component: <FormPage/>},
    ]
})