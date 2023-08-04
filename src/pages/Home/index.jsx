import '../../styles/Home.scss'
import bannerImg from '../../assets/Image source 1.png'
import { React, useEffect, useState } from 'react'
import Card from './Card'
import dataHousing from '../../utility/fetchHousing'

const Home = () => {
    const [data, setData] = useState([])

    const fetchHousing = async () => {
        const result = await dataHousing()
        setData(result)
    }

    useEffect(() => {
        fetchHousing()
    }, [])

    return (
        <main>
            <div className="home__banner">
                <img
                    className="home__banner_image"
                    src={bannerImg}
                    alt="plage avec rochers"
                />
                <h1 className="home__banner_title">
                    Chez vous, partout et ailleurs
                </h1>
            </div>
            <div className="card__container">
                <div className="card__sub_container">
                    {data.map((housing) => (
                        <Card
                            key={housing.id}
                            title={housing.title}
                            coverPicture={housing.cover}
                            link={{ pathname: '/housingSheet/' + housing.id }}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Home
