import { ADD_MOVIE, DELETE_MOVIE, FAVORITE_MOVIE, DELETE_FAVORITE, HIDE_FAVORITES, CHANGE} from '../actions/movieActions.js';
import movies from './../data.js';
const initialState = {
    favoriteMovieList: [],
    movies: movies,
    appTitle: "IMDB Movie Database",
    hiddenFavorites: false,
    newMovie: {
        title: '',
        id: undefined,
        genre: '',
        director: '',
        metascore: undefined,
        description: ''
    }
}

const movieReducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
        case FAVORITE_MOVIE:
            if (state.favoriteMovieList.includes(action.payload)) {
                return {...state}
            }
            return {
                ...state,
                favoriteMovieList: [...state.favoriteMovieList, ...state.movies.filter(item => (action.payload.id === item.id))]
            }
        case DELETE_FAVORITE:
            return {
                ...state,
                favoriteMovieList: [...state.favoriteMovieList.filter(movie => movie.id != action.payload)]
            }
        case HIDE_FAVORITES:
            return {
                ...state,
                hiddenFavorites: !state.hiddenFavorites
            }
        case ADD_MOVIE: 
            
            return {
                ...state,
                movies: [...state.movies, {...state.newMovie, id: state.movies.length}]
            }
        case CHANGE:
            return {
                ...state,
                newMovie: {
                    ...state.newMovie,
                    [action.payload.target.name]: action.payload.target.value
                }
            }
        default:
            return state;
    }
}

export default movieReducer;