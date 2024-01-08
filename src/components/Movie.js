import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import movies from '../data';
import { connect } from 'react-redux';
import { favoriteMovie, deleteFavorite, deleteMovie } from '../actions/movieActions.js'
import { Route } from 'react-router-dom';
import MovieList from './MovieList'
const Movie = (props) => {
    const { id } = useParams();
    const movies = props.movies
    const movie = movies.find(movie => movie.id === Number(id));
    if (movie) {
        return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            <span className="m-2 btn btn-dark" onClick={() => {props.favoriteMovie(movie)}}>Favorite</span>
                            <span className="delete"><input type="button" className="m-2 btn btn-danger" value="Delete" onClick={() => props.deleteMovie(movie.id)} /></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
    } else {
        window.history.back();
        return (
            <Route path="/movies">
              <MovieList/>
            </Route>
        )
    }
    
}
const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }  
}
export default connect(mapStateToProps, {favoriteMovie, deleteFavorite, deleteMovie})(Movie);