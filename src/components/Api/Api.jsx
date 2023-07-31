import axios from 'axios';

const API_KEY = '37376459-60d6298d1e87a90b85928e997';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 12;

const api = {
  fetchImages: async (query, page = 1) => {
    try {
      const response = await axios.get(
        `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
      );

      return response.data.hits;
    } catch (error) {
      throw error;
    }
  },
};

export default api;
