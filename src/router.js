import {createRouter, createWebHashHistory} from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import FormPage from "@/pages/FormPage.vue";
import FormEditPage from "@/pages/FormEditPage.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: "/", component: <MainPage/>},
        {path: "/form", component: <FormPage/>},
        {path: "/form/:id", component: <FormEditPage/>},
    ]
})