import './sass/main.scss';
import apiService from './js/apiService';

import { error } from '../node_modules/@pnotify/core';
import '../node_modules/@pnotify/core/dist/PNotify.css';
import '../node_modules/@pnotify/core/dist/BrightTheme.css';
import * as Confirm from '../node_modules/@pnotify/confirm';
import '../node_modules/@pnotify/confirm/dist/PNotifyConfirm.css';

import * as basicLightbox from 'basiclightbox';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';



import hitsTpl from './templates/articles.hbs'


const refs = {
    searchForm: document.querySelector('.search-form'),
    galleryContainer: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]')

}

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);


function onSearch(e) {
    e.preventDefault();
    clearContainer();

    apiService.query = e.currentTarget.elements.query.value;
    apiService.resetPage();
    apiService.fetchImages().then(appendImgMarkup).catch(onError)
}

function onLoadMore() {
    apiService.fetchImages().then(appendImgMarkup);
    galleryContainer.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
    })
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

refs.galleryContainer.addEventListener('click', onImageClick);

function onImageClick(event) {
    const isImage = event.target.classList.contains('gallery-img');

    if (!isImage) {
        return;
    }

    const largeImageURL = event.target.getAttribute('data-source');
    const instance = basicLightbox.create(`<img src="${largeImageURL}" width="800" height="600">`)
    instance.show()
}