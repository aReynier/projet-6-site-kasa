const fetchHousing = async () => {
    try {
        const responseHousing = await fetch('/logements.json')
        const dataHousing = await responseHousing.json()
        return dataHousing
    } catch (error) {
        console.log(error)
        return []
    }
}

export default fetchHousing
