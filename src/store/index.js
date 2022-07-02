import Vue from 'vue';
import Vuex from 'vuex';
import { setCookie, getUserCookie, removeUserCookie } from '@/utils/userCookie';
Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    //用于切换菜单的闭合状态， false代表不闭合 true代表闭合
    collapsed: false,
    //用户信息
    user: getUserCookie(),
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state,userInfo) {
      state.user = userInfo;
    },
    logout(state){
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: ''
      };
    }
  },
  actions: {
    changeCollapsed({commit}) {
    commit('changeCollapsed');
    },
    setUserInfo({commit}, userInfo) {
      commit('setUserInfo', userInfo);
      setCookie(userInfo);
    },
    logout({commit}){
      commit('logout');
      removeUserCookie();
    }
  },
  modules: {
  },
});
