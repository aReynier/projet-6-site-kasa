import React from 'react'
import '../../styles/About.scss'
import bannerImg from '../../assets/Image source 2.png'
import Collapsible from '../../components/Collapsible/Collapsible'

const About = () => {
    return (
        <main className="about_content">
            <div className="about__banner">
                <img
                    className="home__banner_image"
                    src={bannerImg}
                    alt="montagnes"
                />
            </div>
            <div className="about__collapsible">
                <Collapsible label="Fiabilité">
                    <p className="about__paragraph">
                        Les annonces postées sur Kasa garantissent une fiabilité
                        totale. Les photos sont confromes aux logements, et
                        toutes les informations sont régulièrement vérifiées par
                        nos équipes.
                    </p>
                </Collapsible>
            </div>
            <div className="about__collapsible">
                <Collapsible label="Respect">
                    <p className="about__paragraph">
                        La bienveillance fait partie des valeurs fondatrices de
                        Kasa. Tout comportement discriminatoire ou de
                        perturbation du voisinage entraînera une exclusion de
                        notre plateforme.
                    </p>
                </Collapsible>
            </div>
            <div className="about__collapsible">
                <Collapsible label="Service">
                    <p className="about__paragraph">
                        La bienveillance fait partie des valeurs fondatrices de
                        Kasa. Tout comportement discriminatoire ou de
                        perturbation du voisinage entraînera une exclusion de
                        notre plateforme.
                    </p>
                </Collapsible>
            </div>
            <div className="about__collapsible">
                <Collapsible label="Sécurité">
                    <p className="about__paragraph">
                        La sécurité est la priorité de Kasa. Aussi bien pour nos
                        hôtes que pour les voyageurs, chaque logement correspond
                        aux critères de sécurité établis par nos services. En
                        laissant une note aussi bien à l&apos;hôte qu&apos;au
                        locataire, cela permet à nos équipes de vérifier que les
                        standards sont bien respectés. Nous organisons également
                        des ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                </Collapsible>
            </div>
        </main>
    )
}

export default About
