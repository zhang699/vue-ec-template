import { executeRequest } from '@/libs/api';
import { createTypes } from 'reduxsauce';

export const types = createTypes(`
  ADD_CART_SUCCESS
  ADD_CART_FAILURE
  ADD_CART_PROCESSING
`);

// initial state
// shape: [{ id, quantity }]
const state = {
  numberOfMerchandiseToCart: 0,
};

// getters
const getters = {
  username: state => state.username,
};

// actions
const actions = {
  addCart(context, item) {
    context.commit(types.ADD_CART_SUCCESS, item);
  },
};

// mutations
const mutations = {
  [types.ADD_CART_SUCCESS](state, item) {
    state.numberOfMerchandiseToCart += 1;
  },
};


export default {
  state,
  getters,
  actions,
  mutations,
};
