import API_KEY from "./apiKey";

interface MovieItem {
    Title: string;
    imdbID: string;
}

interface ResponseData {
    Search: MovieItem[];
    totalResults: number;
}

const getListOfMovies = async (id: string) => {
    return fetch(`http://omdbapi.com/?apikey=${API_KEY}&i=${id}`).then((data) => {
        return data.json();
    }).catch(() => {
        return {};
    });
}

export default getListOfMovies;
