import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);
const store=new Vuex.Store({
  state:{
    userInfo:{
      username:"",
      phone:"",
      type:"",
      email:""
    },
    selectedBar:"0"
  },
  mutations: {
    INTUSERINFO(state,payload)
    {
      this.state.userInfo=payload;
    },
    CHANGETITLE(state,payload)
    {
      this.state.selectedBar=payload;
    }
  },
  plugins:[createPersistedState({
      storage: {
        getItem: key => sessionStorage.getItem(key),
        setItem: (key, value) =>
          sessionStorage.setItem(key, value),
        removeItem: key =>sessionStorage.removeItem(key),
      },
    }
  )]
});
export  default store;
