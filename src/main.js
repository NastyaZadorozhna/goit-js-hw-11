import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import {fetchPhotos} from './js/pixabay-api';
import {createGalleryCardTemplate} from './js/render-functions';


const searchFormEl = document.querySelector('.js-search-form');
/*const searchBtn =document.querySelector('.search-btn');*/
const galleryEl = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');


const onSearchFormSubmit = event => {
    event.preventDefault();
  
    const searchedValue = searchFormEl.elements.user_query.value;
  

    function showLoader() {
        loader.classList.remove('is-hidden');
      }
      function hideLoader() {
        loader.classList.add('is-hidden');
      }
    
      showLoader();
      setTimeout(hideLoader, 300);

    fetchPhotos(searchedValue)
      .then(data => {
        if (!data.hits.length) {
          iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'center',
          });
  
          galleryEl.innerHTML = '';
          searchFormEl.reset();
  
          return;
        }
  
        const galleryCardsTemplate = data.hits.map(imgDetails => createGalleryCardTemplate(imgDetails))
        .join('');
    
        galleryEl.innerHTML = galleryCardsTemplate;
    
        let imageGallery = new SimpleLightbox('.gallery a', {
            navText:  ['<','>'],
            captionsData: 'alt',
            captionDelay: 250,
            enableKeyboard: true,
        });
        imageGallery.refresh();
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  searchFormEl.addEventListener('submit', onSearchFormSubmit);