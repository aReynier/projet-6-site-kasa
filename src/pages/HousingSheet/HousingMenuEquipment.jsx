import { useState } from 'react';
import Collapsible from '../../components/Collapsible';

const HousingMenuEquipment = (props) => {
    const { data } = props;
    const [dropDown, updateDropDown]=useState(false)

    const actionDropDown = () => {
        updateDropDown(!dropDown);
    }

    return (     
        <div onClick={actionDropDown} className="housing__equipment">
        <div className="housing__description--container">
            <Collapsible label="Équipement">
                <ul className="housing__equipment--content">
                    {data.equipments? data.equipments.map((equipment) => (
                    <li key={equipment} className="housing__equipment--p">{equipment}</li>
                    )) : "Loading..." }
                </ul>
            </Collapsible>
        </div>
    </div>)
}

export default HousingMenuEquipment