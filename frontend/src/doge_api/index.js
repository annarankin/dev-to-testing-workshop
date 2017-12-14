import axios from 'axios'

const DOGES_ENDPOINT = 'http://localhost:3000/doges'
const AJAX_CONFIG = {
  withCredentials: true
}

class DogeService {
  state = []
  fetchAll = (callback) => {
    axios.get(DOGES_ENDPOINT, AJAX_CONFIG)
    .then((response) => {
      this.state = response.data
      callback(response.data)
    })
  }
}

export default new DogeService()
