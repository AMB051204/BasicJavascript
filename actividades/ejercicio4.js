
const prompt = require("prompt-sync")({ sigint: true })

let num
let numImput 
let cadenas = "";
let texto = prompt("Introduce una cadena o cancelar para salir:");

while (texto != "cancelar") {
    if (Number(numImput)){
        num = Number(numImput) 
        suma += num
    }
    else{
        texto = prompt("Introduce cadena -> ")
        cadenas = cadenas + '-' + texto;
    }
}

console.log(cadenas);

