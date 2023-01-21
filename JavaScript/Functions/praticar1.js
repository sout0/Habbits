// Declarar variável de nome weight

let weight

// Que tipo de dado é a variável acima?

console.log(typeof weight)

/* Declare uma variável e atribua valores para cada um dos dados:
    *name: String
    * age: Number (integer / inteiro)
    * stars: Number (float)
    * isSubscribed: Boolean
*/
let student = {


    name: "Bryan",
    age: 24,
    weight: 74.8,
    isSubscribed: true
}

    console.log(student)
    console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

    // Declarar variável tipo Array vazia

    let students = []

    // Reatribuir valor para variável acima colocando ela dentro do obj student da questão com dados do student

    students = [
        student
    ]
    console.log(students)

    // Coloque no console o valor da posição zero do array acima

    console.log(students[0])

    // Crie um novo student e coloque na posição 1 do Array Students

    const john = {
        name: "John",
        age: 23,
        weight: 71.1,
        isSubscribed: true
    }

    students[1] = john // peguei a posição 1 e inseri o john nela.
    console.log(students[1])