import { React, useEffect, useState } from 'react'
import '../../styles/About.scss'
import bannerImg from '../../assets/Image source 2.png'
import Collapsible from '../../components/Collapsible/Collapsible'
import dataAbout from './fetchAbout'

const About = () => {
    const [data, setData] = useState([])

    const fetchAbout = async () => {
        const result = await dataAbout()
        setData(result)
    }

    useEffect(() => {
        fetchAbout()
    }, [])

    return (
        <main className="about_content">
            <div className="about__banner">
                <img
                    className="home__banner_image"
                    src={bannerImg}
                    alt="montagnes"
                />
            </div>
            {data.map((about) => (
                <div className="about__collapsible" key={about.id}>
                    <Collapsible label={about.label}>
                        <p className="about__paragraph">{about.paragraph}</p>
                    </Collapsible>
                </div>
            ))}
        </main>
    )
}

export default About
