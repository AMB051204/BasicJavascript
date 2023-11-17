const pt = require ("prompt-sync")({sigint: true})

const nota = pt("¿Cuál es tu nota? =>");
console.log ("\nTu nota es " + nota)

if (nota >= 0 && nota < 3) {
    console.log("Tu nota es muy deficiente")
}
else if (nota >= 3 && nota < 5){
    console.log("Tu nota es insuficiente")
    
}
else if (nota >= 5 && nota < 6){
    console.log("Tu nota es suficiente")
}
else if (nota >= 6 && nota < 7){
    console.log("Tu nota es un bien")
}
else if (nota >= 7 && nota < 9){
    console.log("Tu nota es notable")
}
else if (nota >= 9 && nota <= 10){
    console.log("Tu nota es sobresaliente")
}

