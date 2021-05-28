import './sass/main.scss';
import NewsApiService from './js/news-service';

const newsApiService = new NewsApiService();

const refs = {
    searchForm: document.querySelector('.search-form'),
    galleryContainer: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]')
};
// const API_KEY = '21833579-dbfb00598a636f5e3a6a2045e';

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click',onLoadMore);

// let searchQuery='';

function onSearch (e) {
    e.preventDefault();

    newsApiService.query = e.currentTarget.elements.query.value;

    newsApiService.fetchArticles();

    // const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12$key=${API_KEY}`;
    // fetch (url)
    // .then (r => r.json())
    // .then (console.log);
}

function onLoadMore () {
    newsApiService.fetchArticles();

    // const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12$key=${API_KEY}`;
    // fetch (url)
    // .then (r => r.json())
    // .then (console.log);
}

