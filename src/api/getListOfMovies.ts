import API_KEY from "./apiKey";

interface MovieItem {
    Title: string;
    imdbID: string;
}

interface ResponseData {
    Search: MovieItem[];
    totalResults: number;
}

const DEFAULT_ITEMS_PER_PAGE = 10

const getListOfMovies = async (filter: string, page: number) => {
    if (filter.length === 0) {
        return [];
    }

    return fetch(`http://omdbapi.com/?apikey=${API_KEY}&s=${filter}&page=${page}`).then((data) => {
        return data.json();
    }).then((data: ResponseData) => {
        const list = (data?.Search ?? []).map((item) => ({
            id: item.imdbID,
            name: item.Title
        }));
        return {
            list,
            totalCount: Math.ceil(data.totalResults / DEFAULT_ITEMS_PER_PAGE)
        };
    }).catch(() => {
        return {
            list: [],
            totalCount: 0
        };
    });
}

export default getListOfMovies;
