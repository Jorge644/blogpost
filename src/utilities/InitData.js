const API = "http://localhost:3000/data"

const getInitData = async () => {
    try{
        const response = await fetch(API);
        const data = await response.json();
        return data
    } catch(error){
        console.log("Fetch error ", error)
    }
}

export default getInitData;
