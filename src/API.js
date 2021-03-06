// TMDb API

// Get all the configuration info here -
// https://api.themoviedb.org/3/configuration?api_key=df6f6314c5440cba12e1c99403e78dc3

// https://api.themoviedb.org/3/search/movie?api_key=df6f6314c5440cba12e1c99403e78dc3&query=

// https://api.themoviedb.org/3/movie/299534/credits?api_key=df6f6314c5440cba12e1c99403e78dc3

// https://api.themoviedb.org/3/movie/299534/images?api_key=df6f6314c5440cba12e1c99403e78dc3

// https://api.themoviedb.org/3/movie/299534?api_key=df6f6314c5440cba12e1c99403e78dc3

// https://api.themoviedb.org/3/person/585d55ce92514123b300c1f9?api_key=df6f6314c5440cba12e1c99403e78dc3

export const PERSON_URL = "https://api.themoviedb.org/3/person/";

export const POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=";
export const SEARCH_MOVIES_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=";

export const MOVIE_CREDITS_URL = "https://api.themoviedb.org/3/movie/";

export const APPEND_CREDITS = "/credits?api_key=";

export const SEARCH_QUERY = "&query=";

export const API_URL = "https://api.themoviedb.org/3/";
export const API_KEY = "df6f6314c5440cba12e1c99403e78dc3";
export const PAGE_NUM = "&page=";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/";
export const ORIGINAL_IMG_URL = "https://image.tmdb.org/t/p/original/";

// export const BACKDROP_SIZE = "w500";
export const BACKDROP_SIZE = "w1280";
// export const BACKDROP_SIZE_ORIGINAL = "original";
export const LOGO_SIZE = "w92";
// export const POSTER_SIZE = "w342";
// changed poster_size to w300 to fix audit properly size images issue
// if there are any problems, change it back to w342.
export const POSTER_SIZE = "w300";

// const configuration = {
//   images: {
//     base_url: "http://image.tmdb.org/t/p/",
//     secure_base_url: "https://image.tmdb.org/t/p/",
//     backdrop_sizes: ["w300", "w780", "w1280", "original"],
//     logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
//     poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
//     profile_sizes: ["w45", "w185", "h632", "original"],
//     still_sizes: ["w92", "w185", "w300", "original"]
//   }
// };
