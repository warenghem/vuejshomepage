import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import i18n from './i18n'
import './assets/scss/app.scss'
import './assets/scss/home.scss'

Vue.config.productionTip = false;

new Vue({
    el:'#app',
    vuetify,
    router,
    store,
    i18n,

    render: h => h(App),
    data(){
      return{
          currentId:''
      }
    },
    methods: {

        scrollToElement(divId) {
            this.$nextTick(() => {
                const el = document.getElementById(divId);
                if (el) {
                    const y = el.getBoundingClientRect().top + window.pageYOffset-50;
                    window.scrollTo({top: y, behavior: 'smooth'});
                }
            })
        },
    },


}).$mount('#app')
