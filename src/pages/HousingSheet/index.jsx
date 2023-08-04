import { useParams, useNavigate } from 'react-router-dom'
import { React, useEffect, useState } from 'react'
import '../../styles/HousingSheet.scss'
import HousingMenuDescription from './HousingMenuDescription'
import HousingMenuEquipment from './HousingMenuEquipment'
import LoadingComponent from './LoadingComponent'
import dataHousing from '../../utility/fetchHousing'
import CarouselBanner from './CarouselBanner'
import HousingTitleAndTag from './HousingTitleAndTag'
import HousingAuthor from './HousingAuthor'

const HousingSheet = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    let { id } = useParams()

    useEffect(() => {
        const filterHousing = async () => {
            try {
                const result = await dataHousing()
                const findHousing = result.find((housing) => {
                    return housing.id === id
                })
                if (!findHousing) {
                    navigate('/404')
                }

                setLoading(true)
                setData(findHousing)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setData([])
            }
        }

        filterHousing()
    }, [id, navigate])

    return loading ? (
        <LoadingComponent />
    ) : (
        <main>
            {data.pictures && <CarouselBanner data={data} />}
            <div className="housing__informations">
                <HousingTitleAndTag data={data} />
                <HousingAuthor data={data} />
            </div>
            <div className="housing__details">
                <HousingMenuDescription data={data} />
                <HousingMenuEquipment data={data} />
            </div>
        </main>
    )
}

export default HousingSheet
