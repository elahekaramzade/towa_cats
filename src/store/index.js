import Vue from "vue";
import Vuex from "vuex";
import instance from "../ApiCall"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    people: [],
    paginate: {},
    errorMsg: null
  },
  mutations: {
    setPeople(state, people) {
      state.people = people
    },
    setPaginate(state, paginate) {
      state.paginate = paginate
    },
    setErrorMsg(state, errorMsg) {
      state.errorMsg = errorMsg
    }
  },
  actions: {
    getPeople({ commit }, queryParam) {
      return instance.get('people', {
        params: queryParam
      }).then((data) => {
        commit('setPeople', data.data.results)
        commit('setPaginate', {
          next: data.data.next,
          prev: data.data.previous
        })
      }).catch(() => {
        commit('setErrorMsg', 'Something went wrong...:(')
      });
    }
  },
  modules: {},
});
