import axios from 'axios'

const loadCart = () => {
  return new Promise((resolve, reject) => {
    axios.get('/cart')
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export default loadCart
