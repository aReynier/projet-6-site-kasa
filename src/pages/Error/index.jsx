import { Link } from 'react-router-dom';
import "../../styles/Error.scss"

const Error = () => {
    return (
        <div className="error__container">
            <div className="error__title--container">
                <h1 className='error_h1'>404</h1>
            </div>
            <p className='error_p'>Oups! La page que vous demandez n'existe pas.</p>
            <div  className='error_a'>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
        </div>
    )
}
 
export default Error