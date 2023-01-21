//Control flow

//If...else
let temperature = 36.5

if(temperature >=37.5){
    console.log('Febre alta')
} else if (temperature < 37.5 && temperature >=37) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}
//outro exemplo da temperatura
let temperature1 = 36.9
let highTemperature = temperature1 >= 37.5
let mediumTemperature = temperature1 < 37.5 && temperature1 >=37

if (highTemperature){
    console.log('Febre alta')
} else if (mediumTemperature){
    console.log('Febre moderada')
} else{
    console.log('Saudável')
}

//-------------------- Switch

let expression_e = 'a'
switch (expression_e) {
    case 'a':
        //codigo
        console.log('a')
        break
    case 'b':
        //codigo
        console.log('b')
        break
    default:
        console.log('default')
        break
}
//-------------------- Try/Catch
/* São parte do controle de fluxo da aplicação.
Throw em inglês significa lançar, disparar, catch quer dizer pegar e try tentar.
Isso significa que vamos tentar executar um bloco de código, e se der algum erro,
será disparado e capturado na nossa aplicação. Suponhamos que haja uma função que
dispare um erro caso não seja passado um parâmetro dessa função.
*/

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }

    console.log(name)
}
/* Nesse caso, se o nome vier vazio, será disparada uma mensagem.
Precisamos agora usar o try/catch para capturarmos esse erro, caso
contrário, ele irá encerrar nossa aplicação, e nós o faremos da seguinte maneira: */

try {
    sayMyName()
} catch(e) {
    console.log(e)
}
console.log('após ao try/catch')
/*O try irá executar a função, enquanto o catch vai capturar o erro e atribuir à variável e,
que só existe dentro do catch. Após isso, mesmo com o erro, nossa aplicação não será interrompida por completo.
*/