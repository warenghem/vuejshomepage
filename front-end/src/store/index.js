import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tree_count: 0,
        co2_compensated: 0,
        reforest: 0
    },
    mutations: {
        SET_FOREST_DETAILS(state, payload) {
            state.tree_count = payload.tree_count;
            state.co2_compensated = payload.co2_compensated;
            state.reforest = (parseInt(state.tree_count, 10) / 999).toFixed(3).toLocaleString();
        },
    },
    actions: {
        getForestDetail({commit}) {
            commit("SET_FOREST_DETAILS", {tree_count: 0, co2_compensated: 0});
            axios
                .get("/1").then(({data}) => {
                commit("SET_FOREST_DETAILS", data);

            })
                .catch(() => {
                    commit("SET_FOREST_DETAILS", {tree_count: 0, co2_compensated: 0});
                })

        },
    },
    modules: {}
})
