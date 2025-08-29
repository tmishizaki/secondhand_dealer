import {createRouter, createWebHashHistory} from 'vue-router';
import AdminTop from './components/AdminTop.vue';
import Detail from './components/Detail.vue';

const routes = [
    {path: '/', name: 'admintop', component: AdminTop},
    {path: '/detail/:id', name: 'itemdetail', component: Detail}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;

