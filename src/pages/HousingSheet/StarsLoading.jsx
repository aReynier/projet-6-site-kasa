const StarsLoading = (props) => {
    const { data } = props

    const stars = []
    for (let i = 0; i < data.rating; i++) {
        stars.push(
            <i
                key={data.rating + data.id + i + 2}
                className="fa-solid fa-star fa-star-granted"
            ></i>
        )
    }
    for (let i = data.rating; i < 5; i++) {
        stars.push(
            <i key={data.rating + data.id + i} className="fa-solid fa-star"></i>
        )
    }
    return stars
}

export default StarsLoading
