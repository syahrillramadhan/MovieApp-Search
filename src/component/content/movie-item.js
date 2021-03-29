import "bootstrap/dist/css/bootstrap.min.css";

class MovieItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        const data = this._movie;
        this.shadowDOM.innerHTML = `
           <style>
               * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }
               :host {
                   display: block;
                   margin-top: 50px;
                   margin-bottom: 18px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   border-radius: 10px;
                   overflow: hidden;
               }
              
               .img-movie {
                   width: 100%;
                   max-height: 300px;
                   object-fit: cover;
                   object-position: center;
               }
              
               .movie-info {
                   padding: 24px;
               }
              
               .movie-info > h2 {
                   font-weight: bold;
               }
              
               .movie-info > p {
                   margin-top: 10px;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 10; /* number of lines to show */
               }
           </style>
           <img class="img-movie" src="https://image.tmdb.org/t/p/w780/${data.poster_path}" alt="Image-${data.title}">
           <div class="movie-info">
               <h2>${data.title}</h2>
               <p>${data.overview}</p>
           </div>`;
    }
}

customElements.define("movie-item", MovieItem);