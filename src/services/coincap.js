const BASE_URL = 'https://api.coincap.io/v2'

export function getAssets () {
  const url = `${BASE_URL}/assets`

  return fetch(url, { method: 'GET' })
    .then(res => {
      if (res.status !== 200) {
        throw res.statusText
      }

      return res.json()
    })
}
