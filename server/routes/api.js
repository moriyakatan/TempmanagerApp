const express = require('express')
const request = require('request')
const router = express.Router()
const City = require('../models/City')
const apiKey = '7bad15bf1f44a14afe65eb7600e95146'



router.get('/city/:cityName', (req, res) => {
    const cityName = req.params.cityName
    request(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`,function(err, response, body){
        const data = JSON.parse(body)
        //console.log(data)
        res.send(data)
    })
    
})


router.get('/cities', async (req, res) => {
    let result = await City.find({}, function(){
        return result
    })
    res.send()
})


router.post('/city', (req, res) => {
    console.log(req.body)
    let city = new City({
        name: req.body.name,
        temperature: req.body.temperature,
        condition: req.body.condition,
        conditionPic: req.body.conditionPic
    })
    city.save()
    res.send("successfully update")
})


router.delete('/city:/cityName', (req, res) => {
    let cityName = req.params.cityName
    City.findOneAndDelete({name: cityName}, function(err){
        console.log("successfully")
    })
    res.send()
})


module.exports = router