import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import home from '@/components/home.vue';
import my from '@/components/my.vue';

const router = new VueRouter({
    routes: [
        {
            path: '/',
			component: home,
        },
        {
            path: '/my',
			component: my,
        }
    ]
})
export default router;