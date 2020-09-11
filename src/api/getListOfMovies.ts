import API_KEY from "./apiKey";

interface MovieItem {
    Title: string;
    imdbID: string;
}

interface ResponseData {
    Search: MovieItem[];
}

const getListOfMovies = async (filter: string) => {
    if (filter.length === 0) {
        return [];
    }

    return fetch(`http://omdbapi.com/?apikey=${API_KEY}&s=${filter}`).then((data) => {
        return data.json();
    }).then((data: ResponseData) => {
        return (data?.Search ?? []).map((item) => ({
            id: item.imdbID,
            name: item.Title
        }));
    }).catch(() => {
        return [];
    });
}

export default getListOfMovies;
