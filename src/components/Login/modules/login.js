import api from '../api/Login';
import * as types from './actionType';
import { executeRequest } from '../../../libs/api';

// initial state
// shape: [{ id, quantity }]
const state = {
  username: [],
};

// getters
const getters = {
  username: state => state.username,
};

// actions
const actions = {
  login(actionOptions, products) {
    return executeRequest(actionOptions, {
      types: [
        types.LOGIN_PROCESSING,
        types.LOGIN_SUCCESS,
        types.LOGIN_FAILURE],
      url: 'www.google.com',
      method: 'GET',
    });
  },
};

// mutations
const mutations = {
  [types.LOGIN_SUCCESS](state) {
  },
  [types.LOGIN_FAILURE](state) {
  
  },
  [types.LOGIN_PROCESSING](state) {

  },
};


export default {
  state,
  getters,
  actions,
  mutations,
};
