import axios from 'axios';

const GITHUB_SEARCH_API_URL = 'https://api.github.com/search/users';

export const fetchUser = async (username) => {
  const response = await axios.get(`${GITHUB_API_URL}/${username}`);
  return response.data;
};
