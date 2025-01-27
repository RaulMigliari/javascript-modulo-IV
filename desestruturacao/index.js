const person = {
    name: "Luke",
    job: "Farmer",
    parents: ["Anakin", "Padme"]
}

const name = person.name

const { job, parents } = person

console.log(name,job,parents)

const [father, mother] = parents
console.log(father,mother)

function createUser(person) {
    const id = Math.floor(Math.random() * 9999) // retorna um número aleatório arrendo de 0 a 9999
    return {
        id,
        name: person.name,
        job: person.job,
        parents: person.parents
    }
}

function createUser1({ name, job, parents}) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name,
        job,
        parents
    }
}

const luke = createUser(person)
const luke1 = createUser1(person)
console.log(luke1)