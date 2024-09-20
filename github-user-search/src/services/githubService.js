import axios from 'axios';

const GITHUB_SEARCH_API_URL = "https://api.github.com/search/users?q";

export const searchUsers = async (username, location = '', minRepos = 0) => {
  const params = {
    q: `${username}${location ? `+location:${location}` : ''}`,
  };

  const response = await axios.get(GITHUB_SEARCH_API_URL, { params });
  return response.data.items; // Return the array of user objects
};
