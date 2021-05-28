const API_KEY = '21833579-dbfb00598a636f5e3a6a2045e';

export default class NewsApiService {
    constructor () {
this.searchQuery = '';
this.page=1;
    }
    fetchArticles() {
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12$key=${API_KEY}`;
       return fetch(url).then (r => r.json()).then (data => {
           this.page += 1;
       });

    }

    get query() {
        return this.query;
    }
    set query(newQuery){
        this.searchQuery = newQuery;
    }
}