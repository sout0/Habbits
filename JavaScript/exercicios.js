//Exercícios JS

/*----- EX1) Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
*/

let nota = 60
let A = nota >= 90
let B = nota >= 80 && nota < 90
let C = nota >= 70 && nota < 80
let D = nota >= 60 && nota < 70
let F = nota < 60

if (A){
    console.log('A')
} else if (B){
    console.log('B')
} else if (C){
    console.log('C')
} else if (D){
    console.log('D')
} else if (F){
    console.log('F')
}

/*----- EX2) Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

let família = {
    ganhos: [2500, 3200, 250.43, 360.45],
    gastos: [320.34, 128,45, 176.87, 1450.00]
}
function sum(array){
    let total =0;
    
    for(let value of array){
        total += value
    }
    return total
}
function calculateBalance(){
    const calculateganhos = sum(família.ganhos)
    const calculategastos = sum(família.gastos)

    const total = calculateganhos - calculategastos

    const itsOk = total >=0
    
    let balanceText = "negativo "

    if (itsOk){
        balanceText = "Positivo"
    }
    console.log(`Seu saldo é ${balanceText}: ${total}`)
}

calculateBalance()

/*----- EX3) Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

function transformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //fluxo de erro
    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não identificado')
    }
    //fluxo ideal, F -> C
        let updatedDegree = (degree.toUpperCase().replace("F", ""));
        let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
        let degreeSign = 'C'

    //fluxo alternativo, C -> F
    if(celsiusExists){
        updatedDegree = (degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}
    try{
        console.log(transformDegree('10C'))
        console.log(transformDegree('50F'))
        // transformDegree('50Z')
    } catch (error){
        console.log(error.message)
    }

/*----- EX4)  ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/
const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length
console.log(totalCategories);

for(let category of booksByCategory){
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", authors.length)
}

countAuthors();

function booksOfAuthor(author){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")} `)
}
booksOfAuthor('Augusto Cury');