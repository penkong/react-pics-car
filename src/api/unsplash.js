import axios from 'axios';

// make axios with some default
export default axios.create({
  baseURL : 'https://api.unsplash.com',
  headers : {
    Authorization : 'Client-ID 8389e980fb4dfabbbddcb4749923f0dcac9a74684870e2d6a9de513a083ad649'
  }
})