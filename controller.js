import { appState } from "./app.js";
console.log(appState);

function _drawCars() {
    let car = appState.cars
    let template = ''

    car.forEach(car => template += car.template);

    document.getElementById('1').innerHTML = template

}

_drawCars()