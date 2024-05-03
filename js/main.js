// function saludo1 (name) {
//     console.log(`Hola ${name}`)
// }

// saludo( "Ana" )




// function saludo2 (name) {
//     let result = `Hola ${name}`
//     return result 
// }

// console.log(saludo( "Ana" ))




// const saludo = () => {
//     console.log("hswihdeuhduhru")
// }

// saludo ()

// //Hallar el area de un rectangulo

// const areaderectangulo = ( base , altura ) =>{
//     let result = base * altura
//     return result 
// }

// console.log(areaderectangulo( 3, 5))

// const parOimpar = ( num ) => {
//     num = prompt("Ingrese un numero.....")
//     if( num % 2 === 0 ){
//         console.log(`el numero que ${num} es par`)
//     }else{
//         console.log(`el numero que ${num} no es par`)
//     }
// }

// const totalDeVocales = ( vocales ) =>{
//     vocales = prompt("Ingrese palabra")
//     let result = vocales.match(/[aeiou]/gi).length
//     return result
// }

// console.log(totalDeVocales())

palabraReves ()

function palabraReves ( word ) {
    word = prompt("Ingrese palabra")
    let result = word.split("").reverse().join("")
    console.log(result)
} 