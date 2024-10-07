import { fetchImages } from './js/pixabay-api.js';
import {
  hideLoader,
  renderGallery,
  renderLoader,
  renderToastOnError,
  renderToastOnSearchEmpty, showLastPageMessage, toggleButtonVisibility,
} from './js/render-functions.js';

const form = document.querySelector('form');
const submitButton = form.querySelector('button[type="submit"]');
const input = document.querySelector('input');
const searchResultContainer = document.querySelector('.search-result');
const searchLoaderContainer = document.querySelector('.search-loader-container');
const lastMessageContainer = document.querySelector('.last-message-container');
const loadMoreButton = document.querySelector('.search-load-more');

const perPage = 15;
let currentPage = 1;
let lastSearchValue = '';

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  currentPage = 1;
  searchResultContainer.innerHTML = '';
  lastMessageContainer.innerHTML = '';
  loadAndRenderImages(input.value.trim());
});

loadMoreButton.addEventListener('click', () => {
  loadAndRenderImages(lastSearchValue, true);
});

const loadAndRenderImages = async (searchInput, needToScrollWindow = false) => {
  if (searchInput.length === 0) {
    toggleButtonVisibility(loadMoreButton, false);
    currentPage = 1;
    renderToastOnSearchEmpty(searchResultContainer);
    return;
  }

  toggleButtonVisibility(loadMoreButton, false);
  renderLoader(searchLoaderContainer);
  submitButton.disabled = true;

  try {
    if (lastSearchValue !== searchInput) {
      currentPage = 1;
    }
    lastSearchValue = searchInput;
    const response = await fetchImages(searchInput, currentPage, perPage);

    if (response.data.hits.length === 0) {
      renderToastOnSearchEmpty(searchResultContainer);
    } else {
      renderGallery(searchResultContainer, response.data.hits);
      const showedItems = currentPage * perPage;

      const isLastPage = response.data.totalHits - showedItems < 0;

      if (!isLastPage) {
        toggleButtonVisibility(loadMoreButton, true);
      } else {
        showLastPageMessage(lastMessageContainer);
      }

      if (needToScrollWindow) {
        const card = document.querySelector('li.search-result-item')
        const cardRect = card.getBoundingClientRect();
        const rowGap = 24;

        window.scrollBy({behavior: 'smooth' ,top: 3 * (cardRect.height + rowGap)})
      }

      currentPage++;
    }
  } catch (e) {
    renderToastOnError(searchLoaderContainer);
  } finally {
    hideLoader(searchLoaderContainer);
    submitButton.disabled = false;
  }
};

