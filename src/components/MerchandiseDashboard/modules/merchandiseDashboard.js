
import { executeRequest } from '@/libs/api';
import { createTypes } from 'reduxsauce';

export const types = createTypes(`
  GET_MERCHANDISE_PROCESSING
  GET_MERCHANDISE_SUCCESS
  GET_MERCHANDISE_FAILURE
`);

const state = {
  ecProducts: [],
  ecProductsWaiting: false,
};

// actions
const actions = {
  getMerchandise(actionOptions, merchandiseType) {
    return executeRequest(actionOptions, {
      types: [
        types.GET_MERCHANDISE_PROCESSING,
        types.GET_MERCHANDISE_SUCCESS,
        types.GET_MERCHANDISE_FAILURE],
      url: 'ec-products',
      method: 'GET',
      showAPIIndicator: false,
    });
  },
};

// mutations
const mutations = {
  [types.GET_MERCHANDISE_SUCCESS](state, result) {
    state.ecProducts = result;
    state.ecProductsWaiting = false;
  },
  [types.GET_MERCHANDISE_FAILURE](state) {

  },
  [types.GET_MERCHANDISE_PROCESSING](state) {
    state.ecProductsWaiting = true;
    state.ecProducts = [];
  },
};


export default {
  state,
  actions,
  mutations,
};
