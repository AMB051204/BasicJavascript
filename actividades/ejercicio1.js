
const nombres = require ("prompt-sync")({sigint: true})

const nombre = nombres("¿Cuál es tu nombre? =>");
console.log ("\nTu nombre es " + nombre)

const edades = require ("prompt-sync")({sigint: true})

const edad = edades("¿Cuál es tu edad? =>");
console.log ("\nTu edad es " + edad)

if (edad < 18) {
    console.log("No puedes conducir")
} else{
    console.log("Puedes conducir")
}