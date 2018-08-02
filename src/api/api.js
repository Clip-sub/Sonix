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

    return fetch(baseUrl + endpoint, options).then(result => result.json())
  }
}

export { api }
