export const DELETE_MOVIE = "DELETE_MOVIE";
export const FAVORITE_MOVIE = 'FAVORITE_MOVIE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const HIDE_FAVORITES = 'HIDE_FAVORITES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const CHANGE = 'CHANGE';
export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload: id});
}
export const favoriteMovie = (newFav) => {
    return({type: FAVORITE_MOVIE, payload: newFav})
}
export const deleteFavorite = (id) => {
    return ({type: DELETE_FAVORITE, payload: id})
}
export const hideFavorites = () => {
    return ({type: HIDE_FAVORITES})
}
export const addMovie = (newMovie) => {
    return ({type: ADD_MOVIE, payload: newMovie})
}
export const onChange = (e) => {
    return ({type: CHANGE, payload: e})
}