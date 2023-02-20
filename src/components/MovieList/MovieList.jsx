import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // When a movie poster is clicked, a user should be brought to the `/details` view for that movie.
    const onPosterClick = (movie) => {
        dispatch({
            type: 'SET_DETAILS',
            payload: movie,
        })
        dispatch({
            type: 'FETCH_GENRE',
            payload: movie,
        });
        history.push(`/description`);
    };

    return (
        <main>
            <h1> Top Picks </h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} onClick={() => onPosterClick(movie)}>
                            <h3> {movie.title} </h3>
                            <img src={movie.poster} alt={movie.title} />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;