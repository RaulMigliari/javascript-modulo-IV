/**

const a = 0 //! Javascript considera 0 como false
const b = null //! Javascript considera null como false
const c = "Teste" //*Conteúdo de uma string é considerado true

console.log(a || b || c) // Retorna Teste

console.log(a ?? b ?? c) // Retorna 0

console.log(b ?? a) // Retorna 0 também, já que null (b) é false

*/

let a = 0

let b = a || 42
console.log({a,b}) // Nesse caso, b retorna 42

b = a ?? 42
console.log({a,b}) // Nesse caso, b retorna 0 

let c = false ?? 42
console.log({c}) // Retorna False