import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Details() {

    const history = useHistory();
    const dispatch = useDispatch();
    const details = useSelector(state => state.details);

    useEffect(() => {
        dispatch({
            type: 'GET_DESCRIPTION',
            payload: 
        })
    }, [])

    const backButton = () => {
        history.push('/')
    }




    return (
        <>
            <h1> Movie Details </h1>
            <div>
                {details.map(detail => {
                    return (
                        <ul key={detail.id}>
                            <li>
                                {detail.title}
                                {detail.poster}
                                {detail.description}
                            </li>
                        </ul>
                    );
                })}
            </div>
            

            {/* The details page should have a `Back to List` button, which should bring the user to the Home/List Page */}
            <button text="submit" className="back_home" onClick={() => backButton()}> Back Home </button>
        </>
    )
}

export default Details;