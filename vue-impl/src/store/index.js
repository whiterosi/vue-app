import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const modules = {

}

const store = new Vuex.Store({
  state: {

  },
  modules,
  mutations,
  actions,
  // getters
})

export default store