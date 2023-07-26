import "../../styles/Home.scss"
import bannerImg from "../../assets/Image source 1.png"
import { useEffect, useState } from "react";
import Card from "./Card";
import dataFetch from "../utility/fetchHousing";

const Home = () => {
    const [data, setData] = useState([]);

    const fetchHousing = async () => {
        const result = await dataFetch();
        setData(result);
      };

      useEffect(() => {
        fetchHousing();
      }, []);

    return (
        <div>
            <div className="home__banner">
                <img className="home__banner--image" src={bannerImg} alt="plage avec rochers"/>
                <h1  className="home__banner--title">Chez vous, partout et ailleurs</h1>
            </div>
            <div className="card__container">
                <div className="card__container--flex">
                    {data.map((housing) => (
                        <Card  key={housing.id} title={housing.title} coverPicture={housing.cover}
                        direction={{pathname: "/housingSheet/"+housing.id}}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home