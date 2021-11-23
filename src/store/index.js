import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoggedIn: false,
    isModalOpen: false,
    elfchen: {
      line1: '',
      line2: '',
      line3: '',
      line4: '',
      line5: '',
    }
  },
  mutations: {
    setLoggedIn(state) {
      state.isLoggedIn = true;
    },
    setLoggedOut(state) {
      state.isLoggedIn = false;
    },
    setModalOpen(state) {
      state.isModalOpen = true;
    },
    setModalClosed(state) {
      state.isModalOpen = false;
    },
    setElfchen(state, payload) {
      state.elfchen = {...state.elfchen, ...payload}
    },
    resetElfchen(state) {
      state.elfchen = {
        line1: '',
        line2: '',
        line3: '',
        line4: '',
        line5: '',
      }
    }
  },
  actions: {
    setLoggedIn({commit}) {
      commit('setLoggedIn');
    },
    setLoggedOut({commit}) {
      commit('setLoggedOut');
    },
    setModalOpen({commit}) {
      commit('setModalOpen');
    },
    setModalClosed({commit}) {
      commit('setModalClosed')
    },
    setElfchen({commit}, payload) {
      commit('setElfchen', payload)
    },
    resetElfchen({commit}) {
      commit('resetElfchen')
    },
  },
  modules: {
  }
})
