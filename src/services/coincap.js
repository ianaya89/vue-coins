const coincapUrl = {
  baseUrl: 'https://api.coincap.io/v2'
}

coincapUrl.getAssets = function () {

  const url = `${this.baseUrl}/assets`
  return fetch(url, { method: 'GET' })
    .then(res => {

      if (res.status !== 200) {
        throw res.statusText
      }

      return res.json()
    })
}

export default coincapUrl
