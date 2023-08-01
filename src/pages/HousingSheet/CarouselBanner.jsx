import { useState } from 'react'

const CarouselBanner = (props) => {
    const [count, updateCount] = useState(1)
    const { data } = props

    return (
        <div className="housing__banner">
            <img
                className="housing__banner--image"
                src={data.pictures[count - 1]}
                alt={'aperçu de ' + data.title}
            />
            <div className="housing__banner--div">
                {data.pictures.length > 1 && (
                    <i
                        onClick={() =>
                            updateCount(
                                count === 1
                                    ? data.pictures && data.pictures.length
                                    : count - 1
                            )
                        }
                        className="housing__banner--arrow fa-solid fa-angle-left"
                    ></i>
                )}
                {data.pictures.length > 1 && (
                    <p className="housing__banner--counter">
                        {' '}
                        {count}/{data.pictures.length}{' '}
                    </p>
                )}
                {data.pictures.length > 1 && (
                    <i
                        onClick={() =>
                            updateCount(
                                count === data.pictures.length ? 1 : count + 1
                            )
                        }
                        className="housing__banner--arrow fa-solid fa-angle-right"
                    ></i>
                )}
            </div>
        </div>
    )
}

export default CarouselBanner
