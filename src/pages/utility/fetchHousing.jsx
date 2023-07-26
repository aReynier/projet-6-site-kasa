const dataFetch = async () => {
    try { 
        const responseHousing = await fetch("/logements.json");
        const data = await responseHousing.json();
        return data;
    } catch(error){
        console.log(error);
        return [];
    }
}

export default dataFetch;