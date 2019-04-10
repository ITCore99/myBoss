import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store=new Vuex.Store({
  state:{
    userInfo:{
      username:"",
      phone:"",
    }
  },
  mutations: {
    INTUSERINFO(state,payload)
    {
      this.state.userInfo=payload;
    }
  }
});
export  default store;
