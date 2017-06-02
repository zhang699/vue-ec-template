import { INDICATOR_PROCESSING, INDICATOR_DONE, INDICATOR_START } from '../components/container/APIIndicator/modules/actionType';

import humps from 'humps';

const API_HOST = process.env.API_HOST;

class RequestError {
  constructor(detail) {
    this.detail = detail;
    this.message = `${this.detail.statusText}, ${this.detail.status}`;
  }
}

RequestError.prototype = Error.prototype;

const DEFAULT_HEADER = {
  //'Content-Type': 'application/json',
  'Content-Type': 'application/json;charset=UTF-8',
  'NationID': 'MY',
};

function request(options) {
  const { url, method = 'GET' } = options;
  /*const headers = new Headers({
    ...options.headers,
    ...DEFAULT_HEADER,
  });*/
  const headers = {
    ...options.headers,
    ...DEFAULT_HEADER,
  };

  let fetchPromise = null;
  if (method === 'GET') {
    fetchPromise = fetch(`${API_HOST}${url}?${getQueryString(options.qs)}`, {
      method: 'GET',
      headers,
    });
  } else {
    // login 
    let body = options.body;
    if (options.contentType === 'x-www-form-urlencoded') {
      headers['Content-Type'] = options.contentType;
      const urlEncodedrequest = [];
      for (const key in body) {
        urlEncodedrequest.push(`${key}=${body[key]}`);
      }
      const requestForm = urlEncodedrequest.reduce((pre, cur) => `${pre}&${cur}`);
      body = requestForm;
    }
    fetchPromise = fetch(`${API_HOST}${url}`, {
      method,
      headers,
      body,
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
  }).then((responseJSON) => {
    return humps.camelizeKeys(responseJSON);
  });
}



export function executeRequest({ commit, state, dispatch }, options) {
  return new Promise((resolve, reject) => {
    const { showAPIIndicator = true, dotAnnotation = '' } = options;
    const [PROCESSING, SUCCESS, FAILURE] = options.types;
    if (showAPIIndicator){
      commit(INDICATOR_START);
    }

    commit(PROCESSING);
    setImmediate(() => {
      commit(INDICATOR_PROCESSING);
    });

    request(options).then((responseJSONInCamelcase) => {
      const wantedResponseResult = dotAnnotation.split('.').reduce((a, b) => (a[b]), responseJSONInCamelcase) || responseJSONInCamelcase;
      
      commit(SUCCESS, wantedResponseResult);
     
      if (showAPIIndicator) {
        commit(INDICATOR_DONE);
      }
      resolve(wantedResponseResult);
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






