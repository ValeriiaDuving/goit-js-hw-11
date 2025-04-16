import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '49761325-2d6c711c31334dde327695ca9'; // або інший робочий
const API_URL = 'https://pixabay.com/api/';

export async function getGallery(keywords) {
  const params = {
    key: API_KEY,
    q: keywords,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    const response = await axios.get(API_URL, { params });
    return response.data;
  } catch (error) {
    console.error('Pixabay API Error:', error);
    throw error;
  }
}
