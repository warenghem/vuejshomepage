import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import './assets/scss/app.scss'
import './assets/scss/home.scss'
import Axios from "axios";
import i18n from './i18n'
import './assets/fonts/font.css'

Vue.prototype.$http = Axios;
Axios.defaults.baseURL = 'https://tree-nation.com/api/';

Vue.config.productionTip = false;

export const app = new Vue({
    el: '#app',
    vuetify,
    router,
    store,
    render: h => h(App),

    data() {
        return {
            currentId: '',
        }
    },

    created() {
        window.scrollTop = 0;
    },

    methods: {

        scrollToElement(divId) {
            this.$nextTick(() => {
                const el = document.getElementById(divId);
                if (divId === 'formSection' && el.offsetTop < 1 ) {
                    const y = document.getElementById('formSection2').getBoundingClientRect().top + window.pageYOffset - 50;
                        window.scrollTo({top: y, behavior: 'smooth'});
                }
                else if (el) {
                    const y = el.getBoundingClientRect().top + window.pageYOffset - 50;
                    window.scrollTo({top: y, behavior: 'smooth'});
                }
            })
        },
    },
    i18n,

}).$mount('#app');
