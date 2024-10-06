import axios from 'axios';

export const fetchImages = async (searchValue, pageNumber, perPage) => {
  const params = new URLSearchParams({
    key: '46368026-ceb8dba76cba5a0f9c417db4a',
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: perPage,
    page: pageNumber,
  });
  return axios.get(`https://pixabay.com/api/?${params.toString()}`);
};