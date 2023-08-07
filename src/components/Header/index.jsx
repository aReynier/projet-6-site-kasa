import React from 'react'
import { Link } from 'react-router-dom'
import kasa_logo from '../../assets/kasa_logo.png'
import '../../styles/Header.scss'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()
    const { pathname } = location

    const splitLocation = pathname.split('/')

    return (
        <header className="header">
            <img src={kasa_logo} alt="logo de Kasa" className="header__image" />
            <nav className="header__navigation">
                <ul className="header__list">
                    <li className="header__list_element">
                        <Link
                            to="/"
                            className={
                                splitLocation[1] === ''
                                    ? 'header__link header__link--active'
                                    : 'header__link'
                            }
                        >
                            Accueil
                        </Link>
                    </li>
                    <li className="header__list_element">
                        <Link
                            to="/about"
                            className={
                                splitLocation[1] === 'about'
                                    ? 'header__link header__link--active'
                                    : 'header__link'
                            }
                        >
                            A propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
