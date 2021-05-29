import './sass/main.scss';
import apiService from './js/apiService';

import { error } from '../node_modules/@pnotify/core';
import '../node_modules/@pnotify/core/dist/PNotify.css';
import '../node_modules/@pnotify/core/dist/BrightTheme.css';
import * as Confirm from '../node_modules/@pnotify/confirm';
import '../node_modules/@pnotify/confirm/dist/PNotifyConfirm.css';

// const newsApiService = new NewsApiService();
import hitsTpl from './templates/articles.hbs'

// const debounce = require('lodash.debounce');

const refs = {
    searchForm: document.querySelector('.search-form'),
    galleryContainer: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]')
};
// const API_KEY = '21833579-dbfb00598a636f5e3a6a2045e';

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

// let searchQuery='';

function onSearch(e) {
    e.preventDefault();
    clearContainer();

    apiService.query = e.currentTarget.elements.query.value;
    apiService.resetPage();
    // apiService.fetchImages().then(appendImgMarkup);
    apiService.fetchImages().then(appendImgMarkup).catch(onError);


    // const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12$key=${API_KEY}`;
    // fetch (url)
    // .then (r => r.json())
    // .then (console.log);
}

function onLoadMore() {
    apiService.fetchImages().then(appendImgMarkup);

    // const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12$key=${API_KEY}`;
    // fetch (url)
    // .then (r => r.json())
    // .then (console.log);
}
function appendImgMarkup (hits){
    refs.galleryContainer.insertAdjacentHTML ('beforeend',hitsTpl(hits));
}

function clearContainer(){
    refs.galleryContainer.innerHTML = '';
}
function onError() {
    error({
        text: 'No such country! Try again!',
        modules: new Map([
            [Confirm,
                {
                    confirm: true,
                    buttons: [{
                        text: "Ok",
                        primary: true,
                        click: notice => {
                            notice.close();
                        }
                }]}]
        ])
    })
}
