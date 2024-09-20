import axios from 'axios';

const GITHUB_SEARCH_API_URL = 'https://api.github.com/search/users';
const GITHUB_USER_API_URL = 'https://api.github.com/users'; 

export const searchUsers = async (username, location = '') => {
  const params = {
    q: `${username}${location ? `+location:${location}` : ''}`,
  };

  const response = await axios.get(GITHUB_SEARCH_API_URL, { params });
  return response.data.items; 
};
export const fetchUserData = async (username) => {
  const response = await axios.get(`${GITHUB_USER_API_URL}/${username}`);
  return response.data;
};
