import React from 'react'
import Collapsible from '../../components/Collapsible/Collapsible'

const HousingMenuDescription = (props) => {
    const { data } = props

    return (
        <div className="housing__description">
            <div className="housing__description_container">
                <Collapsible label="Description">
                    {data.description ? (
                        <p className="housing__description_paragraph">
                            {data.description}
                        </p>
                    ) : (
                        'loading...'
                    )}
                </Collapsible>
            </div>
        </div>
    )
}

export default HousingMenuDescription
