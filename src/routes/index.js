import PageOne from '../components/VueRouter/PageOne.vue'
import PageTwo from '../components/VueRouter/PageTwo.vue'
import Home from '../components/VueRouter/Home.vue'

const routes = [
    { path: '/', component: Home}, // for the rest will come to home
    { path: '/page-one/:id', component: PageOne },
    { path: '/new-page', component: PageTwo },
];

export default routes;