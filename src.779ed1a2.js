parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/demo.jpg":[["demo.090c7c6d.jpg","nKR3"],"nKR3"]}],"IuX0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e="21833579-dbfb00598a636f5e3a6a2045e";class t{constructor(){this.searchQuery="",this.page=1}fetchArticles(){const t=`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12$key=${e}`;return fetch(t).then(e=>e.json()).then(e=>{this.page+=1})}get query(){return this.query}set query(e){this.searchQuery=e}}exports.default=t;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var e=r(require("./js/news-service"));function r(e){return e&&e.__esModule?e:{default:e}}const t=new e.default,n={searchForm:document.querySelector(".search-form"),galleryContainer:document.querySelector(".gallery"),loadMoreBtn:document.querySelector('[data-action="load-more"]')};function c(e){e.preventDefault(),t.query=e.currentTarget.elements.query.value,t.fetchArticles()}function a(){t.fetchArticles()}n.searchForm.addEventListener("submit",c),n.loadMoreBtn.addEventListener("click",a);
},{"./sass/main.scss":"clu1","./js/news-service":"IuX0"}]},{},["Focm"], null)
//# sourceMappingURL=/parcel-project-template/src.779ed1a2.js.map