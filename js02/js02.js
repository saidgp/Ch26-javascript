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