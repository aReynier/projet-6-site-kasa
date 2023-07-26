import { Link } from 'react-router-dom';

const Card = (props) => {
    const {title, coverPicture, direction} = props;

    return (
        <div className="card">
            <Link className="card__link" to={direction}>
                <div className="card__global--container" >
                    <img className="card__image" src={coverPicture} alt="aperçu du logement"/>
                    <div className="card__title--container">
                        <p className="card__title">{title}</p>
                        <div className="card__grandient"></div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card