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
    async getPeople({ commit }, queryParam) {
      const data = await instance.get('people', {
        params: queryParam
      });
      if (data.status == 200) {
        commit('setPeople', data.data.results)
        commit('setPaginate', {
          next: data.data.next,
          prev: data.data.previous
        })
      }
      else {
        commit('setErrorMsg', 'Something went wrong...:(')
      }
    }
  },
  modules: {},
});
