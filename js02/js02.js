console.log("Sesion JS02");

//----------- Funcion declarada------------
// function declaration, function statement
// Una caracteristica es que las funciones declaradas tienen hoisting

/* console.log("EL resutltado de 5*10 es igual: " multi(5*10)); */
multi(10,5);
multi(8,8);
multi(-4,2);

function multi(a,b){
    const resultado= a*b;
    console.log("El resultado es: " + resultado);
}

function divide(a,b){
    return a/b;

}

console.log(divide(5,2));
console.log(divide(5,`2`));
console.log(divide(`50`,`2`));
console.log(divide("5 0","2"));

//----------------Funciones expresadas--------------------------
// Function Expresions
// Son declaradas dentro de la asignacion de una variable 
// Estas funciones pueden ser anonimas (sin nombre)
// Las funciones expresadas no tienen hoisting, por que no se carga
// en memoria hasta que se utilizav

const sum = function suma(a,b){
    return a+b;
} // esta no

const resta = function( a,b){
    return a-b;
}

console.log(sum(9,9));
console.log(resta(80,10));

//-----------Funciones autoinvocadas-----------------
// self-invoking functions
// Se autinvocan, se pueden definir con funciones anonimas

(function(){
    console.log("Me autoinvoco en la funcion");
}) ();

//---------------Funciones Flecha------------------------
// Arrow Function
// Son fnuncones similares a las funciones declaradas
// No requiere la palabra function
// Si tiene una sola instruccion no requiere llaves { }
// Si la instruccion es el retorno, no requiere la palabra return

const areaR = function(a,b){
    return a*b;
}
 console.log(areaR(8,9));
 
 const areaRec = (a,b) => a*b;
 console.log("Area del rectangulo: " + areaRec(5,3));

 //----------------- Parametros default---------------------
/**
 * 
 * @param {number} a base del triangulo
 * @param {number} b añtura del triangulo
 * @returns area del rectangulo
 */

 const areaTriangulo = (a=1,b=1) => a*b/2

 console.log("Area del triangulo:" + areaTriangulo(5,10));
 console.log("Area del triangulo:" + areaTriangulo(8));

 //-------------------Parametros rest----------------------------
// Rest parameters
// Nos permite representar una setie de valores indefinidos en los argumentos
// Estos se representan como array
// Debe esta al final de la lita de parametros

function sumatoria(a,b, ...restoDatos ){
    let suma;
    suma = a+b;
    for (let i = 0; i<restoDatos.length; i++){
        suma+= restoDatos[i]; 
    }
    return suma;
}

console.log("Sumatoria se varios numeros: " + sumatoria(4,5,1,50));
console.log("Sumatoria se varios numeros: " + sumatoria(4,5,1,50,100));
console.log("Sumatoria se varios numeros: " + sumatoria(4,5,1,50,100,200));

//------------------------Funciones de callback-------------------------------
// Funcion que se pasa a otra funcion como argumento
// luego se invoca para completar algún top de rutina o accion
// 3 funciones, una que imprima consola, alert, Dom h1.
// 1 parametro de entrada
// no tiene return 

// Función que imprime un mensaje en la consola
function printToConsole(mensaje) {
    console.log(mensaje);
  }
  
  // Función que muestra una alerta en la pantalla
  function showAlert(mensaje) {
    alert(mensaje);
  }
  
  // Función que agrega un encabezado h1 al DOM
  function addH1ToDOM(mensaje) {
    const h1 = document.createElement("h1");
    h1.innerText = mensaje;
    document.body.appendChild(h1);
  }

 /*  const addH1 = (mensaje) =>{
    document.querySelector("#div").innerHTML = `<h1>${mensaje}</h1>`
}; */

function getname(){
    const name = prompt("Dime tu nombre");
    const text = `Hola ${name} espero tengas un gran dia`;
    printToConsole(text);
}

function getNamePrintToConsole(   ){
    const name = prompt("Dime tu nombre");
    const text = `Hola ${name}, espero tengas un gran día`;
    printToConsole(text);
}
function getNamePrintToDOM(   ){
    const name = prompt("Dime tu nombre");
    const text = `Hola ${name}, espero tengas un gran día`;
    addH1ToDOM(text);
}

function getNameAndPrint( funcionimpr   ){ // Esta es la buena
    const name = prompt("Dime tu nombre");
    const text = `Hola ${name}, espero tengas un gran día`;
    funcionimpr(text);
}
//etNameAndPrint(addH1ToDOM);

/*
    Ejercicio 2
    Escribe una función que tome un arreglo de números,
    duplique el valor de cada número del arreglo,
    e imprima el nuevo arreglo actualizado.
    [5, 10, 15, 20, 25] -> [10, 20, 30, 40, 50]
*/

function double(arr) {
    const doubleNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      const duplicate = arr[i] * 2;
      doubleNumbers.push(duplicate);
    }
   return doubleNumbers;
}

const duplicate = (number) => number*2

function doubleWithMap(array){
    const duplicate = array.map(duplicate);

}

function doubleWithMap(array){
    const duplicate = array.map(function(number){
        return number *2 ;
        }  
    );
    return duplicate;
}
const numbers = [5, 10, 15, 20, 25]; 
const numbers1 = [10, 20, 30, 40, 50]; 
//console.log(double(numbers));
console.log(doubleWithMap(numbers));
console.log(doubleWithMap(numbers1));


// Si hay dos cursos en comun imprimirmo el la consola

let student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];;
let student2Courses = ["Geography", "Spanish", "Programming", "Music"];
let student3Courses = ["Music"];

    function clasesComunes(clases1, clases2){
       let comun = [];
        for(let i=0; i < clases1.length; i++){
        
        for(let j=0; j <clases2.length; j++){

            if (clases1[i] === clases2[j]){
                comun.push(clases1[i]);
            }
        }
    }
    return `Cursos en comun ${comun}`;
}
function clasesComunes2(clas1, clas2, clas3){

    let filtro = clas1.filter(clases => clas2.includes(clases)&&clas3.includes(clases)) ;
    return filtro;
}
/* function clasesComunes2(clas1, clas2){

    let filtro = clas1.filter(function clases(clas1, clas2) {
        return clas2.includes(clas1);}) ;
    return filtro;
} */

console.log(clasesComunes(student1Courses, student2Courses));
console.log(clasesComunes2(student1Courses, student2Courses,student3Courses));

// ------------------- Contar la cantidad de caracteres de una frase -----------
// pepe pecas pica papas con un pico y una pala
// la cantidad de letras 'p': 8
// resolverlo usando arrow function
 let mes = "pepe pecas pica papas con un pico y una pala";
 let pes = (k) => {
    let l = 0;
    for (i=0; i<=k.length; i++){
    if (k[i] == "p"){
    
    l++
    };
};
   return l;
};
console.log(pes(mes)); 

const contadorDeLetras= (frase, letra) => {
    let contador = 0;
    for (let index = 0; index < frase.length; index++) {
        if (frase[index] === letra.toLowerCase() || frase[index] === letra.toUpperCase()) {
            contador++;
        };
    };
    return contador;
};

phrase = 'Pepe Pecas Pica Papas Con Un Pico y Una Pala'
const countChar = (p, phrase) => phrase.toLowerCase().split("").filter(c => c == p).length;
console.log("Cantidad de letras 'p':", countChar('p', phrase))


//--------------------Funciones Recursivas--------------------------
// Es una tecnica de pregramaion donde la funcion de llama asi misma.

/*
function funcionRecursiva( valor) {
    if(condiion de paro){

    }
    else {
        llamada recursiva
    }
}
*/
const factorialConCicloFor = ( numero ) => {
    let total=1;
    for(i=1; i<=numero; i++){
    total= total*i;
    }
    return total; 
}
    function factorialRecursivo (num){
        if(num === 1)
            return 1;
            return num * factorialRecursivo( num- 1);

        }

       
 const factorial = number => (number === 2) ? number : number * factorial(number - 1);

 function saludo (num){
    if(num < 1){
        
        return;
  
    }
        else{
        
         
        saludo (num- 1);
        
        } 
        console.log(`hola ${num}`);
    }

/*     const saludar = ( numero ) => {
        if( numero === 1){
            console.log("Saludo " + numero);
        }else{
            saludar(numero - 1)
            console.log("Saludo " + numero);
        };
    };
    
    saludar(10);


    function saludo(cantidad){
      if(cantidad == 0){
    return;
     }
     else{
        saludo(cantidad-1);
    }
     console.log(`Saludo ${cantidad}`);
}



    function saludo(numero) {
        if (numero > 1) {
          saludo(numero - 1);
        }
        console.log("Saludo " + numero);
      }
      
      saludo(10); 
      
      */
    
console.log("Factorial de 5: " + factorialConCicloFor(5));
console.log("Factorial de 5: " + factorialRecursivo(5));
saludo(10);

