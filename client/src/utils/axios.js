import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://proerty-hub-6nu2.vercel.app/api',
})
export default instance