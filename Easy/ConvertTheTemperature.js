var convertTemperature = function(celsius) {
    let kelvin=celsius+273.15
    let Fahrenheit=(celsius*9/5)+32
    return [kelvin,Fahrenheit]
};