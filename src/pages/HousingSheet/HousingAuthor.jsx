import React from 'react'
import StarsLoading from './StarsLoading'

const HousingAuthor = (props) => {
    const { data } = props

    return (
        <div className="housing__author_container">
            <div className="housing__author">
                <div>
                    <div>
                        {data.host &&
                            data.host.name.split(' ').map((name) => (
                                <p
                                    className="housing__author_paragraph"
                                    key={name}
                                >
                                    {name}
                                </p>
                            ))}
                    </div>
                </div>
                <div className="housing__author_frame">
                    <img
                        className="housing__author_image"
                        src={data.host?.picture}
                        alt="propriétaire du logement"
                    />
                </div>
            </div>
            <div className="housing__author_stars">
                <StarsLoading data={data} />
            </div>
        </div>
    )
}

export default HousingAuthor
