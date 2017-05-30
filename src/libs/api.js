import { INDICATOR_PROCESSING, INDICATOR_DONE, INDICATOR_START } from '../components/APIIndicator/modules/actionType';

const API_HOST = process.env.API_HOST;

class RequestError {
  constructor(detail) {
    this.detail = detail;
    this.message = `${this.detail.statusText}, ${this.detail.status}`;
  }
}

RequestError.prototype = Error.prototype;


function request(options) {
  const { url, method = 'GET' } = options;
  const headers = new Headers({
    ...options.headers,
    ...DEFAULT_HEADER,
  });

  let fetchPromise = null;
  if (method === 'GET') {
    fetchPromise = fetch(`${API_HOST}${url}?${getQueryString(options.qs)}`, {
      method: 'GET',
      headers,
    });
  } else {
    fetchPromise = fetch(`${API_HOST}${url}`, {
      method,
      headers,
      body: {
        ...options.body,
      },
    });
  }

  return fetchPromise.then((response) => {
    if (!response.ok) {
      throw new RequestError({
        statusText: response.statusText,
        status: response.status,
      });
    } else {
      return response.json();
    }
  });
}



export function executeRequest({ commit, state, dispatch }, options) {
  return new Promise((resolve, reject) => {
    const { showAPIIndicator = true } = options;
    const [PROCESSING, SUCCESS, FAILURE] = options.types;
    if (showAPIIndicator){
      commit(INDICATOR_START);
    }

    commit(PROCESSING);
    setImmediate(() => {
      commit(INDICATOR_PROCESSING);
    });

    request(options).then((responseJSON) => {
      commit(SUCCESS, responseJSON);
     
      if (showAPIIndicator) {
        commit(INDICATOR_DONE);
      }
      resolve(responseJSON);
    }).catch((err) => {
      commit(FAILURE, err);
      if (showAPIIndicator) {
        commit(INDICATOR_DONE);
      }
      reject(err);
    });
  });
}

function getQueryString(params = {}) {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .map(k => `${esc(k)}=${esc(params[k])}`)
    .join('&');
}

const DEFAULT_HEADER = {
  'Content-Type': 'application/json',
};




