// function scope

let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject)

// function hoisting

sayMyName();

function sayMyName (){
    console.log('Bryan')
}

// ARROW FUNCTION

const MyName = () => {
    console.log('Bryan Arrow')
}
MyName()

 // ----- Callback function (chamar de volta)

function SayName (name){
    console.log('antes de executar a funcao callback')
    name()
    console.log('depois de executar a funcao callback')
}
SayName(
    () => {
        console.log('estou em uma callback')
    }
)

 /*
    Function Constructor
    *