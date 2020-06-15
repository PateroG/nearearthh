import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Cometa = ({ match }) => {

    const id = match.params.id;
    console.log(id);
    const key = process.env.REACT_APP_API_KEY;

    const [cometa, setData] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            const data = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${key}`);
            const response = await data.json();
            console.log(response.estimated_diameter.kilometers.estimated_diameter_max);
            setData(response);
        }

        fetchData();
    }, [id, key])


    let hazardous;

    if(cometa.is_potentially_hazardous_asteroid === true) {
        hazardous = true;
    } else {
        hazardous = false;
    }


    return(
        <main id="cometa">
        <article className={`cometa detalhe ${ hazardous ? "hazardous" : ""}`}>
            <div class="cometa-circulo">

            </div>
        <h2>{cometa.name}</h2>
        <div className="cometa-info">
            <h3>estimated diameter min</h3>
            <p>{cometa.estimated_diameter ? cometa.estimated_diameter.kilometers.estimated_diameter_min : null} km</p>
        </div>

        <div className="cometa-info">
            <h3>estimated diameter max</h3>
            <p>{cometa.estimated_diameter ? cometa.estimated_diameter.kilometers.estimated_diameter_max : null} km</p>
        </div>

        <div className="cometa-info">
            <h3>last observation date</h3>
            <p>{cometa.orbital_data ? cometa.orbital_data.last_observation_date : null}</p>
        </div>

        {hazardous &&
           <div className="cometa-hazardous">it is a potentially hazardous asteroid!</div>     
        }
        </article>

        <Link to="/">
        <div className="btn-home">
            all asteroids and comets
        </div>
        </Link>

        </main>

    )

}

export default Cometa;