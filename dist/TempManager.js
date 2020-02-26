//import { template } from "handlebars"   --- ?

//=== MODEL ===
class TempManager {
    constructor(){
        this.cityData = []
    }
    
    
    async getDataFromDB(){
      this.cityData = await $.get('/cities')
    }


    async getCityData(cityName){
        let result = await $.get(`/city/${cityName}`)
        let city = result.city
        console.log(city)
        this.cityData.push({
            CityName: city.name,
            Temperature: city.temperature,
            Conditions: city.condition,
            ConditionIcon: city.conditionPic
        })
    }


    async saveCity(name){
        const result = cityData.find(c => c.name === name)
        await $.post('/city/:cityName', result)
        console.log(result)
    }


    removeCity(name){
        try {
            $.ajax({
                method: "DELETE",
                url: '/city/'+ name,
                success: () => {
                console.log('successfully delete city')
                },
            }) 
        } catch (err) {
            console.log("won't work")
        }
      
    }
}


