import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import "../../styles/HousingSheet.scss";
import HousingMenuDescription from "./HousingMenuDescription";
import HousingMenuEquipment from "./HousingMenuEquipment";
import LoadingComponent from "./LoadingComponent";
import dataFetch from "../utility/fetchHousing";
import CarouselBanner from "./CarouselBanner";
import HousingTitleAndTag from "./HousingTitleAndTag";
import HousingAuthor from "./HousingAuthor";

const HousingSheet = () => { 
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    let { id } = useParams();

    useEffect(() => {
    const filterHousing = async () => {
        try {
        const result = await dataFetch();
        const findHousing = result.find((housing) => {
            return housing.id === id;
        })
        setLoading(true);
        setData(findHousing);
        setLoading(false);
    } catch (error) {
        console.log(error);
        setData([]); 
        };
    }

    filterHousing();
    }, [id]);

    return loading ? (
        <LoadingComponent/>
     ) : (
        <div>
            { data.pictures && <CarouselBanner data={data}/> }
            <div className="housing__informations">
                <HousingTitleAndTag data={data}/>
                <HousingAuthor data={data}/>
            </div>
            <div className="housing__details"> 
                <HousingMenuDescription data={data} />
                <HousingMenuEquipment data={data} />
            </div>
        </div>
    ) 
}
  
export default HousingSheet