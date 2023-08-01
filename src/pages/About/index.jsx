import '../../styles/About.scss'
import bannerImg from '../../assets/Image source 2.png'
import Collapsible from '../../components/Collapsible/Collapsible'

const About = () => {
    return (
        <main className="about_content">
            <div className="about__banner">
                <img
                    className="home__banner--image about__banner--image"
                    src={bannerImg}
                    alt="montagnes"
                />
            </div>
            <div className="about__collapsible">
                <Collapsible label="Fiabilité">
                    <p className="housing__description--p">
                        Les annonces postées sur Kasa garantissent une fiabilité
                        totale. Les photos sont confromes aux logements, et
                        toutes les informations sont régulièrement vérifiées par
                        nos équipes.
                    </p>
                </Collapsible>
            </div>
            <div className="about__collapsible">
                <Collapsible label="Respect">
                    <p className="housing__description--p">
                        La bienveillance fait partie des valeurs fondatrices de
                        Kasa. Tout comportement discriminatoire ou de
                        perturbation du voisinage entraînera une exclusion de
                        notre plateforme.
                    </p>
                </Collapsible>
            </div>
            <div className="about__collapsible">
                <Collapsible label="Service">
                    <p className="housing__description--p">
                        La bienveillance fait partie des valeurs fondatrices de
                        Kasa. Tout comportement discriminatoire ou de
                        perturbation du voisinage entraînera une exclusion de
                        notre plateforme.
                    </p>
                </Collapsible>
            </div>
            <div className="about__collapsible">
                <Collapsible label="Sécurité">
                    <p className="housing__description--p">
                        La sécurité est la priorité de Kasa. Aussi bien pour nos
                        hôtes que pour les voyageurs, chaque logement correspond
                        aux critères de sécurité par nos services. En laissant
                        une note aussi bien à l'hôte qu'au locateir, cela permet
                        à no équipes de vérifier que les standards sont bien
                        respectés. Nous organisons également des atelers sur la
                        sécurité domestiques pour nos hôtes.
                    </p>
                </Collapsible>
            </div>
        </main>
    )
}

export default About
