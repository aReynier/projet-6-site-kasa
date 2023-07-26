import kasa_logo_white from '../../assets/kasa_logo_white.png'
import '../../styles/Footer.scss'

const Footer = () => {
    return (
        <footer>
            <img src={kasa_logo_white} alt="logo de Kasa"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
 
export default Footer