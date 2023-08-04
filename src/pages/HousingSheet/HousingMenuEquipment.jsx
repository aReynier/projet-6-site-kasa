import React from 'react'
import Collapsible from '../../components/Collapsible/Collapsible'

const HousingMenuEquipment = (props) => {
    const { data } = props

    return (
        <div className="housing__equipment">
            <div className="housing__description_container">
                <Collapsible label="Équipements">
                    <ul className="housing__equipment_content">
                        {data.equipments
                            ? data.equipments.map((equipment) => (
                                  <li
                                      key={equipment}
                                      className="housing__equipment_paragraph"
                                  >
                                      {equipment}
                                  </li>
                              ))
                            : 'Loading...'}
                    </ul>
                </Collapsible>
            </div>
        </div>
    )
}

export default HousingMenuEquipment
