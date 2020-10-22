import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import {app} from '../main'
import link from './link'
import langs from './langs'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tree_count: 0,
        co2_compensated: 0,
        reforest: 0,
    },

    mutations: {
        SET_FOREST_DETAILS(state, payload) {
            state.tree_count = payload.tree_count;
            state.co2_compensated = payload.co2_compensated;
            state.reforest = (parseInt(state.tree_count, 10) / 1000).toFixed(3).toLocaleString();
        },
        SET_LANG(state, payload) {
            app.$i18n.locale = payload
        }
    },
    actions: {
        getForestDetail({commit}) {
            commit("SET_FOREST_DETAILS", {tree_count: 0, co2_compensated: 0});
            axios
                .get("/forests/145764").then(({data}) => {
                commit("SET_FOREST_DETAILS", data);

            })
                .catch(() => {
                    commit("SET_FOREST_DETAILS", {tree_count: 0, co2_compensated: 0});
                })
        },
        setLang({commit}, payload) {
            commit('SET_LANG', payload)
        }
    },
    modules: {
        link,langs

    }
})
