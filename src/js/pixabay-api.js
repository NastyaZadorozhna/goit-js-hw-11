const BASE_URL = 'https://pixabay.com/api';

export const fetchPhotos = searchedQuery => {
    const urlParams = new URLSearchParams({
        key: '45695124-2521d690be74d3f32382c65dc',
        q: searchedQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    return fetch(`${BASE_URL}/?${urlParams}`).then(response =>{
        if (!response.ok) {
            throw new Error(response.status);
          }

          return response.json();
    });

};