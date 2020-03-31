
let kelvin = prompt("Quelle est la température en Kelvin aujourd'hui")


let celsius = function (temperature){
     let celsiusConvert = temperature - 273
    return celsiusConvert
}

let fahrenheit= function(temperature){
    let fahrenConvert = temperature * (9/5) + 32
    return fahrenConvert

}


console.log(celsius(kelvin));
console.log(Math.floor(fahrenheit(celsius(kelvin))));



