import { executeRequest } from '@/libs/api';
import { createTypes } from 'reduxsauce';

export const types = createTypes(`
  LOGIN_SUCCESS
  LOGIN_FAILURE
  LOGIN_PROCESSING
`);

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
  login(actionOptions, info) {
    return executeRequest(actionOptions, {
      types: [
        types.LOGIN_PROCESSING,
        types.LOGIN_SUCCESS,
        types.LOGIN_FAILURE],
      url: 'Auth/Login',
      body: {
        username: info.username,
        password: info.password,
        grant_type: info.grantType,
      },
      contentType: 'x-www-form-urlencoded',
      method: 'POST',
    });
  },
};

// mutations
const mutations = {
  [types.LOGIN_SUCCESS](state, result) {
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
