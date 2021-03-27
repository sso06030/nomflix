import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "5446b4c3a9663fc988cc1667d3f21b7a",
    language: "en-US"
  }
});

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: id => 
        api.get(`movie/${id}`,{
            params: {
                append_to_response: "videos"
            }
        }),
    search: term => 
        api.get("search/movie",{
            params: {
                query: encodeURIComponent(term)
            }
        })
};

export const tvApi = {
    topRated: () => api.get("movie/top_rated"),
    popular: () => api.get("movie/popular"),
    airingToday: () => api.get("movie/airing_today"),
    showDetail: id =>
        api.get(`tv/${id}`,{
            params: {
                append_to_response: "videos",
            }
        }),
    search: term =>
        api.get("search/tv",{
            params:{
                query: encodeURIComponent(term)
            }
        })
};