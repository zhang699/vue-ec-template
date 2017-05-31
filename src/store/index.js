import Vue from 'vue';
import Vuex from 'vuex';
import login from '../components/Login/modules/login';
import APIIndicator from '../components/container/APIIndicator/modules/APIIndicator';
import merchandiseDashboard from '../components/MerchandiseDashboard/modules/merchandiseDashboard';


import createLogger from 'vuex/dist/logger';
import monitorStateMiddleware from '../plugins/monitorStateMiddleware';


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
  modules: {
    login,
    APIIndicator,
    merchandiseDashboard,
  },
  strict: debug,
  plugins: debug ? [createLogger(), monitorStateMiddleware()] : [],
});
