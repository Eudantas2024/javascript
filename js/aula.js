let nome = "Dantas"
// alert(nome)

//console é uma propriedade js com varias funcçoes
console.log(nome);

const x = 13;

// array
// const lista = [1,2,3];

const lista = ["a", "b", "c"];

//objeto
const objeto = { name: "Dantas", age: 36 };  //JSON

console.log(x);
console.log(typeof x);
console.log('---------------------')
console.log(lista);
console.log(typeof lista);
console.log('---------------------')
console.log(objeto);
console.log(typeof objeto);
console.log(objeto.name);
console.log(lista[2]);

// variavel boolean (true of false)
let opcao = true;

// if :  condicional

if (2 > 1){
    console.log("2 é maior que 1")
} else {
    console.log("2 não é maior que 1")
}



//  Estrutura de repetição
const arr = ["amora", "banana", "caju", "damasco", "uva"]
for (let i = 0; i < arr.length; i++ ){

    //  concactenação uso antigo clássico
    // console.log('o valor da repetição é ' + arr[i])
   



 // novo modelo, usuo atual, template literal, é o uso da crase `
    console.log(`o valor da repetição é ${arr[i]}`)

}

//  i++  é a mesma coisa de de fazer i = i + 1,    

//  Estrutura de repetição

// const arr = ["amora", "banana", "caju", "damasco"]
// for (let i = 0; i < 4; i++ ){
//     console.log('o valor da repetição é ' + arr[i])
// }



// const arr = ["amora", "banana", "caju", "damasco"]
// for (let i = 3; i < 4; i++ ){
//     console.log('o valor da repetição é ' + arr[i])


// }

// função 
function soma(){
    console.log(22+11);
}
soma();


function calcula(a,b){
    console.log(a*b)
}
calcula(12,12);


