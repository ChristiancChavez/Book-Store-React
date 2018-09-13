import axios from 'axios';

const bookStore = axios.create({
  baseURL: 'https://www.anapioficeandfire.com/api/',
});

bookStore.interceptors.request.use(config => (
  configBearerToken(config)
));

function configBearerToken(config) {
  return {
    ...config,
    headers: {
      ...config.headers,
      'Content-Type': 'application/json',
    }
  };
}

export {
  bookStore,
};