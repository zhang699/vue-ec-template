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
  login(actionOptions, products) {
    return executeRequest(actionOptions, {
      types: [
        types.LOGIN_PROCESSING,
        types.LOGIN_SUCCESS,
        types.LOGIN_FAILURE],
      url: 'posts',
      body: {
        test: 1,
        test2: 2,
      },
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
