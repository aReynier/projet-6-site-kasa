import { Link } from 'react-router-dom'
import kasa_logo from '../../assets/kasa_logo.png'
import '../../styles/Header.scss'

const Header = () => {
    return (
        <header className="header">
            <img src={kasa_logo} alt="logo de Kasa" className="header__image" />
            <nav className="header__navigation">
                <ul className="header__list">
                    <li className="header__list--element">
                        <Link to="/" className="header__link">
                            Accueil
                        </Link>
                    </li>
                    <li className="header__list--element">
                        <Link to="/about" className="header__link">
                            A propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
