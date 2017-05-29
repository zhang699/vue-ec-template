import { INDICATOR_PROCESSING, INDICATOR_DONE, INDICATOR_START } from '../components/APIIndicator/modules/actionType';

const DEFAULT_TEST_PROCESSING_TIMEOUT = 5000;

export function executeRequest({ commit, state, dispatch }, options){
  return new Promise((resolve, reject) => {
    const [PROCESSING, SUCCESS, FAILURE] = options.types;
    commit(INDICATOR_START);
    commit(PROCESSING);
    setImmediate(() => {
      commit(INDICATOR_PROCESSING);
    });
  
    setTimeout(() => {
      commit(SUCCESS);
      commit(INDICATOR_DONE);
      resolve();
    }, DEFAULT_TEST_PROCESSING_TIMEOUT);
  });

};
