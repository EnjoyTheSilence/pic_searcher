import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 751108f46428a3fa5ee68c209a26b237f467cc3085ab8219ba1748814f99a075'
  }
})
//creates an instance of the axios client with default properties
