import {createStore} from 'vuex'
import axios from "axios";

export default createStore({
    state: {
        sidebarVisible: '',
        sidebarUnfoldable: false,
        user: {}
    },
    getters: {
        user: state => state.user,
    },
    mutations: {
        toggleSidebar(state) {
            state.sidebarVisible = !state.sidebarVisible
        },
        toggleUnfoldable(state) {
            state.sidebarUnfoldable = !state.sidebarUnfoldable
        },
        updateSidebarVisible(state, payload) {
            state.sidebarVisible = payload.value
        },
        setUser(state, user) {
            state.user = user;
        },
    },
    actions: {
        getGlobalVariables({commit}) {
            return new Promise((resolve, reject) => {
                axios.get('/getUser')
                    .then(result => {
                        commit('setUser', result.data);
                        resolve();
                    })
                    .catch(error => {
                        reject(error.response && error.response.data.message || 'Error.');
                    });
            });
        }
    },
    modules: {},
})
