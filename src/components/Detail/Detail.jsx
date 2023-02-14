import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Detail() {

    const history = useHistory();
    const details = useSelector(state => state.details);

    const backButton = () => {
        history.push('/')
    }

    return (
        <>
            <h1> Movie Details </h1>
            <div key={details.id}>
                <li>
                    <h2>{details.title}</h2>
                    <img src={details.poster} alt={details.title} />
                    <h3>{details.description}</h3>
                </li>
            </div>

            <button text="submit" className="back_home" onClick={() => backButton()}> Back Home </button>
        </>
    )
}

export default Detail;