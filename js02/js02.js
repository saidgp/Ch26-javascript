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

 const areaTriangulo = (a=1,b=1) => a*b/2

 console.log("Area del triangulo:" + areaTriangulo(5,10));
 console.log("Area del triangulo:" + areaTriangulo(8));
