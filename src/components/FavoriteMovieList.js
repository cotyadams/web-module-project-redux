import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteFavorite } from '../actions/movieActions';

const FavoriteMovieList = (props) => {
    if (!props.hiddenFavorites) {
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favoriteMovieList.map((movie, i)=>{
                return <div key={i}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span className="material-icons" onClick={() => props.deleteFavorite(movie.id)}>remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
    } else {
        return (<></>)
    }
    
}

const mapStateToProps = (state) => {
    return {
        favoriteMovieList: state.favoriteMovieList,
        hiddenFavorites: state.hiddenFavorites
    }
}
export default connect(mapStateToProps, {deleteFavorite})(FavoriteMovieList);