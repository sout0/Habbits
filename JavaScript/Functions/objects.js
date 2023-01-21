// Object

const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
}
console.log(person) // mostra tudo
console.log(person.age) // mostra idade
console.log(person.weight) // mostra peso
console.log(`${person.name} tem ${person.age} anos`) // mostra em frase

// Array

const animals = [
    'Lion', // posição do arrey = 0
    'Monkey', // posição 1
    { 
    name: 'Cat', // posição 2
    age: 3
    }
//acessar valores
console.log(animals[0])  // Lion
console.log(animals[1])  // Monkey
console.log(animals[2])  // Cat
console.log(animals[2].name) // Cat name ou Cat age
]

