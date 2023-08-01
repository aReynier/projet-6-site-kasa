import Collapsible from '../../components/Collapsible/Collapsible'

const HousingMenuEquipment = (props) => {
    const { data } = props

    return (
        <div className="housing__equipment">
            <div className="housing__description--container">
                <Collapsible label="Équipement">
                    <ul className="housing__equipment--content">
                        {data.equipments
                            ? data.equipments.map((equipment) => (
                                  <li
                                      key={equipment}
                                      className="housing__equipment--p"
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
