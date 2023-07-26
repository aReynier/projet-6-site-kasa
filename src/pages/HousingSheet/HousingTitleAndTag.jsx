const HousingTitleAndTag = (props) => {
    const { data } = props;

    return (<div className="housing__informations--container">
        <h1 className="housing__informations--title">{data.title}</h1>
        <h2 className="housing__informations--location">{data.location}</h2>
        <div className="housing__tags">
        { data.tags &&
            data.tags.map((housing) => (
            <p className="housing__tags--p"key={housing} >{housing}</p>
            ))}
        </div>
        </div>)}

export default HousingTitleAndTag
