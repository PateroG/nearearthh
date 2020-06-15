import React, { useState, useEffect }from "react";
import Cometa from "../../components/Cometa";
import { Link } from "react-router-dom";
import "./style.css";

const Main = () => {

    const key = process.env.REACT_APP_API_KEY;


    const [cometas, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-04-01&end_date=2020-04-01&api_key=${key}`);
           const response = await data.json();
           console.log(response.near_earth_objects["2020-04-01"]);
           const responseToday = response.near_earth_objects["2020-04-01"];
           setData(responseToday);
        }
        fetchData();

    }, [key]);


 

    return(
        <main>
            <div className="info">
                Asteroids and comets near Earth today.
            </div>
               {cometas.map((cometa, index) => (
                   <Link key={index} to={`cometas/${cometa.id}`}>
                   <Cometa name={cometa.name} hazardous={cometa.is_potentially_hazardous_asteroid === true ? "hazardous" : ""} km={cometa.close_approach_data[0]["miss_distance"]["kilometers"]}/>
                   </Link>
            ))}            
        </main>
    )
}

export default Main;