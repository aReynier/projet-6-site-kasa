const fetchAbout = async () => {
    try {
        const responseAbout = await fetch('/about.json')
        const dataAbout = await responseAbout.json()
        return dataAbout
    } catch (error) {
        console.log(error)
        return []
    }
}

export default fetchAbout
