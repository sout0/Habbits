// Operadores de comparação

//Irá comparar valores e retornar um Boolean como resposta.

let one = 1
let two = 2

// == igual a
console.log ( two == 1)
console.log ( one == 1)

// != diferente de
console.log (one != two)
console.log (one != 1)
console.log (one != 2)

 // === estritamente igual
 console.log (one === "1") // "1" string - aqui 1+1 é 11
 console.log (one === 1) // 1 number - aqui 1+1 é 2

 // !== estritamente diferente
 console.log ( two !== "2") // diferente no valor e no tipo - true
 console.log ( two !== 2 ) // não é diferente no valor e tipo - false

 // OPERADORES DE ATRIBUIÇÃO (ASSIGNMENT)
 let x

 //assignment
 x=1
 console.log(x)

 //addition assignment
 x += 2  //adiciona 2 ao X
// pode fazer isso pra multiplicação, divisão, exponencial, etc...


// Operadores lógicos (logical operators)
// -2 valores booleanos, quando verificados, resultará em vdd ou falso

let pao = true
let queijo = true
// AND &&
console.log(pao && queijo) // os dois, true

// OR ||
console.log(pao || queijo) //um ou outro, true

// NOT !
console.log(!pao) //negar o valor

//-----------------------------

//Operador Condicional
// Dependendo da condição, nós receberemos valores diferentes
//Condição então valor 1 se não valor 2
//Condition ? value1 : value2

// Exemplos
//Café da manhã top
let pao1 = true
let queijo1 = true

const niceBreakfast = pao1 && queijo1 ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)

//Maior de 18
let age = 16
const canDrive = age>=18 ? 'Pode' : 'Não pode'
console.log(canDrive)
//-----------------------------

// FALSY é quando um valor é considerado falso em contextos que onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:
/*
	Todos os valores abaixo seriam representados como false em um boolean.
		false
    0
    -0
    ""
    null
    undefined
    NaN
*/
console.log( NaN ? 'verdadeiro' : 'falso' )

//TRUTHY é o oposto, quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:
/* 
	Todos os valores abaixo seriam representados como false em um boolean.
		true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log( Infinity ? 'verdadeiro' : 'falso' )

// De cima para baixo, do mais importante ao menos importante.
/*
* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= 
*/