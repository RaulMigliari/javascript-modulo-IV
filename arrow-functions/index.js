function normalSum (a,b) {
    return a+b
}

console.log(`Soma normal: ${normalSum(2,2)}`)

const anonymousSun = function(a,b) {
    return a+b
}

console.log(`Soma anônima: ${anonymousSun(4,4)}`)

const arrowSun = (a,b) => {
    return a+b
}

console.log(`Soma arrow function: ${arrowSun(8,8)}`)

const arrowSubtract = (a,b) => a-b

console.log(`Subtração arrow function: ${arrowSubtract(8,4)}`)

const double = n => `O dobro de ${n} é ${n*2}`
const number = 21

console.log(double(number))

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startWithP = towns.filter(town => town[0] === "P")

console.log(startWithP)