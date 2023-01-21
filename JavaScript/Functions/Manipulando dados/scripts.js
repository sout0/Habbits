/*
    Prototype

    *prototype-based language
    *prototype chain
    *__proto__

*/

 // Manipulando Strings e Números
 //Transformar String em um número, e número em string

 let string = "123"
 console.log(Number(string))
 let number0 = 321
 console.log(String(number0))

 //Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
 let word = "Paralelepipedo"
 console.log(word.length)
 let number1 = 1234
 console.log(String(number1).length)

 //Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
 let number = 234.23423423
 console.log(number.toFixed(2).replace(".",","))   // toFixed é quantas casas decimais quero ver // replace para substituir o ponto por vírgula, neste caso.


 //Transformar letras minúsculas em maiúsculas. Fazer o contrário também.
 let word1 = "Programar é muito bacana!"
 console.log (word1.toUpperCase()) // tudo maiúsculo
 console.log (word1.toLowerCase()) // tudo minúsculo

//Separar texto que tem espaços em novo array, onde cada texto é uma posição do array. Dps disso, transformar o array em um texto e onde eram espaços colocar _ underscore.
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ") // Separando cada array por espaços
let phraseWithUnderscore = myArray.join("_")
console.log(myArray)
console.log(phraseWithUnderscore)

//Verificar se o texto contém uma palavra, neste caso Amor.
let phrase1 = "Eu quero viver!"
console.log(phrase1.includes("Amor")) // includes verificará se possui a palavra, neste caso, amor.
//ele é Case sensitive, então até letras maiúsculas ou minúsculas influemciam.

//Criar Array com construtor
let myArray1 = new Array ('a', 'b', 'c')
console.log (myArray1)

//Contar elementos de um array
console.log(["a", "b", "c"].length)

 //Transformar uma cadeia de caracteres em elementos de um array

 let word2 = "manipulação"
 console.log(Array.from(word2))