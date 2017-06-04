import { executeRequest } from '@/libs/api';
import { createTypes } from 'reduxsauce';
import { List, toJS }  from 'immutable';

export const types = createTypes(`
  ADD_CART_SUCCESS
  ADD_CART_FAILURE
  ADD_CART_PROCESSING
  REMOVE_CART_SUCCESS
`);

// initial state
// shape: [{ id, quantity }]
const state = {
  cartItems: List([]),
};

const getters = {
  getCartItems: state => (state.cartItems.toJS()),
  numberOfUniqueMerchandisesInCart: state => (state.cartItems.size), //immutablejs is use size as property not length
  numberOfMerchandisesInCart: (state) => {
    const result = state.cartItems.reduce((accum, item) => {
      return accum + item.buyAmount;
    }, 0);
    return result;
  },
};


// actions
const actions = {
  addCart(context, item) {
    context.commit(types.ADD_CART_SUCCESS, item);
  },
  removeCart(context, item) {
    context.commit(types.REMOVE_CART_SUCCESS, item);
  },
};

// mutations
const mutations = {
  [types.ADD_CART_SUCCESS](state, item) {
    //aggregate same item with unique item id
    const duplicateItem = state.cartItems.find(cartItem => (cartItem.id === item.id));
    if (duplicateItem) {
      duplicateItem.buyAmount += 1;
    } else {
      state.cartItems = state.cartItems.push(
        {
          id: item.id,
          imageUrl: item.imageUrl,
          name: item.title,
          price: item.price,
          unit: item.amountPerUnit,
          buyAmount: 1,
        },
      );
    }
  },
  [types.REMOVE_CART_SUCCESS](state, item) {
    state.cartItems = state.cartItems.filter(filterItem => (item.id !== filterItem.id));
  },
};


export default {
  state,
  actions,
  mutations,
  getters,
};
