import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Error.scss'

const Error = () => {
    return (
        <main className="error__container">
            <div className="error__title_container">
                <h1 className="error__title">404</h1>
            </div>
            <p className="error__paragraph">
                Oups! La page que vous demandez n&apos;existe pas.
            </p>
            <div className="error__link_container">
                <Link className="error__link" to="/">
                    Retourner sur la page d&apos;accueil
                </Link>
            </div>
        </main>
    )
}

export default Error
