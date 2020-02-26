//CONTROLER
//===instance declaration==
const tempManager = new TempManager
const render = new Renderer


const loadPage = async () => {
    await tempManager.getDataFromDB()
    render.renderCities(tempManager.cityData)
}


const handleSearch = async () => {
    try {
        let input = $('#city-input').val()
        await tempManager.getCityData(input)
    } catch(err){
        console.log('error')
    }
    loadPage()
}




