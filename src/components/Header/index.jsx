import { Link } from 'react-router-dom';
import kasa_logo from '../../assets/kasa_logo.png'
import '../../styles/Header.scss'

const Header = () => {
    return (
        <header>
            <img src={kasa_logo} alt="logo de Kasa"/>
            <nav>
                <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about">A propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}
 
export default Header