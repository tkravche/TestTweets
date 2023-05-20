import axios from 'axios';

axios.defaults.baseURL = 'https://6464714f043c103502b99774.mockapi.io';

export async function fetchTweets() {
  const { data } = await axios.get('/users');
  return data;
}
