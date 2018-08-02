/**
 * Unrestrict XHR:
 */
/* if (__DEV__) {
  GLOBAL.XMLHttpRequest =
    GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
} */

import _ from 'lodash'
import qs from 'querystringify'

const DEFAULT_HEADERS = {
  'Cache-Control': 'no-cache'
}

export const baseUrl = 'https://sonixgvn.net/wp-json/wp/v2/'

const api = {
  get: (endpoint: string, params: Object) => {
    const options = {
      method: 'GET',
      headers: {
        ...DEFAULT_HEADERS,
        'Content-Type': 'application/json'
      }
    }

    const qsParams = qs.stringify({...params, _embed: true}, true)

    return fetch(baseUrl + endpoint + '/' + qsParams, options).then(result => {
      console.log(result)
      return result.json()
    })
  },

  postFormData: (endpoint: string, params: Object): Promise => {
    let formData = new FormData()
    _.forIn(params, (value, key) => {
      if (value !== null && value !== undefined) {
        formData.append(key, value)
      }
    })

    const options = {
      method: 'POST',
      body: formData,
      headers: {
        ...DEFAULT_HEADERS,
        Accept: 'multipart/form-data'
      }
    }

    return fetch(baseUrl + endpoint, options).then(result => {
      return result.json()
    })
  }
}

export { api }
