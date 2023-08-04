import React from 'react'
const HousingTitleAndTag = (props) => {
    const { data } = props

    return (
        <div className="housing__informations_container">
            <h1 className="housing__informations_title">{data.title}</h1>
            <h2 className="housing__informations_location">{data.location}</h2>
            <div className="housing__tags">
                {data.tags &&
                    data.tags.map((housing) => (
                        <p className="housing__tags_paragraph" key={housing}>
                            {housing}
                        </p>
                    ))}
            </div>
        </div>
    )
}

export default HousingTitleAndTag
