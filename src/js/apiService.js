const MY_KEY = '21833579-dbfb00598a636f5e3a6a2045e';

export default {
    searchQuery: '',
    page: 1,
    fetchImages() {
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${MY_KEY}`;

        return fetch(url)
        .then (r => r.json())
        .then(data => {
            this.incrementPage();
            return data.hits;
        })

    },
        incrementPage() {
        this.page += 1;
    },
    resetPage() {
                this.page = 1;
            },
        
            get query() {
                return this.searchQuery;
            },
            set query(newQuery){
                this.searchQuery = newQuery;
            }
        }

    
    //     constructor () {
//         this.searchQuery ='',
//         this.page=1
//     }
//     async fetchArticles() {
//         const MY_URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12$key=${API_KEY}`;
        
       
//         const response = await fetch (MY_URL);
//         const images = await response.json();
//         this.incrementPage();

//         return images; 

//     }
//     incrementPage() {
//         this.page += 1;
//     }
//     resetPage() {
//         this.page = 1;
//     }

//     get query() {
//         return this.searchQuery;
//     }
//     set query(newQuery){
//         this.searchQuery = newQuery;
//     }
// }
// export default {
//     searchQuery: '',
//     page: 1,

//     async fetchImages() {
//         const BASE_LINK = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${MY_KEY}`;

//         const response = await fetch(BASE_LINK);
//         const images = await response.json();
//         this.incrementPage();

//         return images;
//     },

//     incrementPage() {
//         this.page += 1;
//     },

//     resetPage() {
//         this.page = 1;
//     },

//     get query() {
//         return this.searchQuery;
//     },

//     set query(newQuery) {
//         this.searchQuery = newQuery;
//     },
// }
