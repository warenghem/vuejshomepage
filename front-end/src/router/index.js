import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import i18n from '../i18n'
Vue.use(VueRouter);

const routes = [
    {
        path: '/:lang',
        component: {
        render: h => h('router-view')
      },
        children: [
            {
                path: '',
                name: 'home',
                component: Home
            }
        ]
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return {x: 0, y: 0}
    },
});
router.beforeEach((to, from, next) => {
  const lang = to.params.lang;

  if ( !['en','fr'].includes(lang) ) {
    return next('fr/');
  }

  if ( i18n.locale !== lang ) {
    i18n.locale = lang;
  }

  return next();
});
export default router
