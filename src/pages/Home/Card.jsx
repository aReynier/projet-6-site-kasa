import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    const { title, coverPicture, link } = props

    return (
        <div className="card">
            <Link className="card__link" to={link}>
                <div className="card__global_container">
                    <img
                        className="card__image"
                        src={coverPicture}
                        alt={'aperçu du logement ' + title}
                    />
                    <div className="card__title_container">
                        <p className="card__title">{title}</p>
                        <div className="card__grandient"></div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card
