import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Detail() {

    const history = useHistory();
    const details = useSelector(state => state.details);
    const genres = useSelector(state => state.genres);

    const backButton = () => {
        history.push('/')
    }

    return (
        <>
            <h1> Movie Details </h1>
            <h2>{details.title}</h2>
            <div className='edit' key={details.id}>
                <img src={details.poster} alt={details.title} />
                <h3>{details.description}</h3>
            </div>
            <div>
                <h2> Movie Genre: {genres.name} </h2>
            </div>

            <button text="submit" className="back_home" onClick={() => backButton()}> Back Home </button>
        </>
    )
}

export default Detail;