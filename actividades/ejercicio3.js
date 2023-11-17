const prompt = require ("prompt-sync")({sigint: true})


let numImput = prompt("Introduce numeros -> ")
let num
let suma = 0

while (numImput!="cancelar") {
    if (Number(numImput)){
    num = Number(numImput)
    suma += num

    } else {
        console.log ("Introduce numero valido")
    } 
    numImput=prompt("Introduce numeros -> ")

}

console.log("La suma es " + suma);