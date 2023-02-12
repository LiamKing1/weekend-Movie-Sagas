import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Details() {

    const history = useHistory();
    const details = useSelector(state => state.details);

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
                            <li></li>

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