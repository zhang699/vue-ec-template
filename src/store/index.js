import Vue from 'vue';
import Vuex from 'vuex';
import Login from '../components/Login/modules/login';
import APIIndicator from '../components/APIIndicator/modules/APIIndicator';

import createLogger from 'vuex/dist/logger';
import monitorStateMiddleware from '../plugins/monitorStateMiddleware';


Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
  modules: {
    Login,
    APIIndicator,
  },
  strict: debug,
  plugins: debug ? [createLogger(), monitorStateMiddleware()] : [],
});
