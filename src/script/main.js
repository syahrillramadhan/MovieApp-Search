import "../component/content/movie-list.js";
import "../component/navbar/app-bar.js";
import DataSource from "../service/config.js";

const main = () => {
    const searchElement = document.querySelector("app-bar");
    const movieListElement = document.querySelector("movie-list");

    const onButtonSearchClicked = () => {
        DataSource.searchMovie(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult);
    };

    const renderResult = (results) => {
        movieListElement.movies = results;
    };

    const fallbackResult = (message) => {
        movieListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;