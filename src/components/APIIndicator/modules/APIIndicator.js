import * as types from './actionType';
import { PROGRESS_DONE, PROGRESS_START, PROGRESS_PROCESSING, PROGRESS_STOP } from './progressType';


const state = {
  progressType: PROGRESS_STOP,
};


// actions
const actions = {
  processing({ commit }) {
    commit(types.INDICATOR_PROCESSING);
  },
  done({ commit }) {
    commit(types.INDICATOR_DONE);
  },
  start({ commit }) {
    commit(types.INDICATOR_START);
  },
};

// mutations
const mutations = {
  [types.INDICATOR_START](state) {
    state.progressType = PROGRESS_START;
  },
  [types.INDICATOR_PROCESSING](state) {
    state.progressType = PROGRESS_PROCESSING;
  },
  [types.INDICATOR_DONE](state) {
    state.progressType = PROGRESS_DONE;
  },
};


export default {
  state,
  actions,
  mutations,
};
