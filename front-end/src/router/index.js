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
                component: Home,
                meta: {
                    title: 'Home Page',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'The home page of our example app.'
                        },
                        {
                            property: 'og:description',
                            content: 'The home page of our example app.'
                        }
                    ]
                }
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

    if (!['en', 'fr'].includes(lang)) {
        return next(i18n.locale + '/');
    }

    if (i18n.locale !== lang) {
        i18n.locale = lang;
    }
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
    // const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
    if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
    if (!nearestWithMeta) return next();
    nearestWithMeta.meta.metaTags.map(tagDef => {
        const tag = document.createElement('meta');
        Object.keys(tagDef).forEach(key => {
            tag.setAttribute(key, tagDef[key]);
        });
        tag.setAttribute('data-vue-router-controlled', '');
        return tag;
    }).forEach(tag => document.head.appendChild(tag));

    return next();
});
export default router
