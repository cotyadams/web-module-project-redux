import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMovie, onChange} from './../actions/movieActions';
import { Link, useHistory } from 'react-router-dom';

const AddMovieForm = (props) => {
    const { push } = useHistory();
    const onSubmit = (e) => {
        e.preventDefault();
        props.addMovie(props.newMovie);
        push('/movies')
    }

    const { title, director, genre, metascore, description } = props.newMovie;
    return(<div className="col">
        <div className="modal-dialog">
            <div className="modal-content">
                <form onSubmit={onSubmit}>
                    <div className="modal-header">						
                        <h4 className="modal-title">Add Movie</h4>
                    </div>

                    <div className="modal-body">					
                        <div className="form-group">
                            <label>Title</label>
                            <input value={title} onChange={props.onChange} name="title" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Director</label>
                            <input value={director} onChange={props.onChange} name="director" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Genre</label>
                            <input value={genre} onChange={props.onChange} name="genre" type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Metascore</label>
                            <input value={metascore} onChange={props.onChange} name="metascore" type="number" className="form-control"/>
                        </div>		
                        <div className="form-group">
                            <label>Description</label>
                            <textarea value={description} onChange={props.onChange} name="description" className="form-control"></textarea>
                        </div>
                        			
                    </div>
                    <div className="modal-footer">
                        <input type="submit" className="btn btn-success" value="Add" />
                        <Link to={`/movies`}>
                            <input type="button" className="btn btn-default" value="Cancel" />
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>);
}

const mapStateToProps = (state) => {
    return {
        newMovie: state.newMovie
    }
}
export default connect(mapStateToProps, {addMovie, onChange})(AddMovieForm);