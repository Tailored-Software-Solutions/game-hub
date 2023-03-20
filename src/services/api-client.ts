import axios, { CanceledError } from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '2e681081e5b746d29ff5e582f186bf8f', // Key will be added in the query string to each API call
  },
});

export { CanceledError };
