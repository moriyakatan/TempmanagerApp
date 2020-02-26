//import { template } from "handlebars"

//=== View ===
class Renderer {
    renderCities(city) {
        const source = $('#WeatherApp-template').html();
        const template = Handlebars.compile(source);
        let newHtml = template({city});
        $('#WeatherApp').empty().append(newHtml)
    }
}

