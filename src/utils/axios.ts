import Axios from 'axios'

const axios = Axios.create({
    // baseURL: 'https://animus.ge:4000/',
    baseURL: 'http://localhost:4000/'
})

axios.interceptors.request.use((req) => {
    req.headers['Authorization'] = `Bearer ${localStorage.getItem('customer-token')}`
    return req
}, (e) => {
    return Promise.reject(e)
})

export default axios