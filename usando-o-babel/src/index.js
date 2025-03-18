// Função da Média Aritmética

const media = (...numbers) => {
    let sum = 0
    numbers.forEach(function(item){
        sum+=item
    })
    return sum / numbers.length
}

console.log(`Média Aritmética Simples: ${media(10,20,30)}`)

const weightedAverage = (...entries) => {
    const sum = entries.reduce((accum, { number, weight }) => accum + (number * (weight ?? 1)), 0)
    const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
    return sum / weightSum
}

console.log(`Média ponderada: ${weightedAverage(
    {number: 9, weight: 3},
    {number: 7},
    {number: 10, weight: 1},
)}`)

const median = (...entries) => {
    let sequence = [...entries].sort((a,b) => a - b)
    if (sequence.length % 2 === 0){

        let aux = sequence.length/2
        return media(sequence[aux-1], sequence[aux])

    } else {

        let aux = (sequence.length/2) + 0.5
        return sequence[aux-1]
    }
}

console.log(`Mediana da sequência '2, 4, 5, 7, 42, 99' : ${median(2, 5, 4, 42, 7, 99)}`)
console.log(`Mediana da sequência '15, 14, 8, 7, 3' : ${median(15, 14, 8, 7, 3)}`)

const mode = (...numbers) => {
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])
    quantities.sort((a,b) => b[1] - a[1])
    return quantities[0][0]
}

console.log(`Moda: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)