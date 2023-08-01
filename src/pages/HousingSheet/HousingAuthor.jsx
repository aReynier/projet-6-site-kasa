import StarsLoading from './StarsLoading'

const HousingAuthor = (props) => {
    const { data } = props

    return (
        <div className="housing__author--container">
            <div className="housing__author">
                <div>
                    <div>
                        {data.host &&
                            data.host.name.split(' ').map((name) => (
                                <p className="housing__author--p" key={name}>
                                    {name}
                                </p>
                            ))}
                    </div>
                </div>
                <div className="housing__author--frame">
                    <img
                        className="housing__author--image"
                        src={data.host?.picture}
                        alt="propriétaire du logement"
                    />
                </div>
            </div>
            <div className="housing__author--stars">
                <StarsLoading data={data} />
            </div>
        </div>
    )
}

export default HousingAuthor
