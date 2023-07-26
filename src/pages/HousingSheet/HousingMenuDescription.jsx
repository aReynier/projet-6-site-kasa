import Collapsible from '../../components/Collapsible';

const HousingMenuDescription = (props) => {
    const { data } = props;

    return (             
        <div className="housing__description"> 
            <div className="housing__description--container">
                <Collapsible label="Description">
                    { data.description? <p className="housing__description--p">{data.description}</p> : "loading..."} 
            </Collapsible>
            </div>
        </div>)
}

export default HousingMenuDescription