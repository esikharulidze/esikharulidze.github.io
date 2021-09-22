import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://animus.ge:4000/'
})

export default axios