import kasa_logo_white from '../../assets/kasa_logo_white.png'
import '../../styles/Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <img
                src={kasa_logo_white}
                alt="logo de Kasa"
                className="footer__image"
            />
            <p className="footer__paragraph">
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    )
}

export default Footer
