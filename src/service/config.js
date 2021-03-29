class DataSource {
    static searchMovie(keyword) {
        return fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=cd407009724044ce2cea96866c895876&query=${keyword}`
            )
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            });
    }
}

export default DataSource;