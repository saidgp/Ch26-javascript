console.log("Js05");

//-----------------------Operadores aritmeticos---------------------
// Adicion +
// Multiplicacion *
// Substraccion -
// Division /
// Exponencial **
// Resto %

// Ejemplo

let dinero = 20 + 20 ;

//------------------- Operadores de asignacion ---------------------------------
// Asigna el valar del lado derecho al del lado izquierdo
// Asignacion =
// Asignacion de adicion +=
dinero += 15;
// Multiplicacion *=
// Substraccion -=
// Division /=
// Exponencial **=
// Rest0 %=

//-------------------------- Operadoers Unarios----------------------------------
// Un operador unario realiza una operacion en un solo operando
// Negacion -
dinero = -3 // -3      // -=3 -> dinero = dinero -3
dinero = - 3

// Conversion a númerico +
dinero = -dinero // dtill -3
dinero = + "200"// 200 number
 
// typeof
//operador logico not

let valorBooleano = !true;
console.log(valorBooleano);

// Operadores de incremento y decremento 
// Operadores de pre-incremento y pre-decremento
// pre-incremento ++valor
// pre-decremento --valor

// Operador de post-incremento y post-decremento
// post-incremento valor++
// post-decremento valor--

let x =3;
let y = ++x;
++x;

console.log(`x= ${x}, y=${y}`);

//-----------------------Operadores logicos AND && y OR ||--------------------------------
const a = true;
const b = false;
const c = true;
console.log( a || b && c);

//Operadores de corto circuito
// Cuando los operadores logicos AND y OR actuan sobre operandos  diferentes booleanos

// OP1 && OP2 si OP1 es verdadero se reaiza el resultado de OP2

console.log( a && "Hola");
console.log( b && "Valor");
console.log( NaN && "El valor es un numero que se puede procesar");
console.log("false" && "El valor es false" );
console.log("" && "No hay dato")

// OP1||OP2 si OP1 es verdadero, se realiza OP1

console.log( a || "Hola");
console.log( b || "Valor");
console.log( NaN || "El valor es un numero que se puede procesar");
console.log("false" || "El valor es false" );
console.log("" || "No hay dato");

// Quiero imprimit "Estas Autorizado" si la variable isOnline y isActive son true
const isOnline = true;
const isActive = true;
if( isOnline)
    if(isActive)
    console.log("Estas Autorizado");

    if(isOnline && isActive)
    console.log("Estas Autorizado");

console.log( isOnline && isActive ? "Estas Autorizado" : "No estas autorizado");

console.log(isOnline && isActive && "Estas autorizado");


//------------------------------ Operandos relacionales --------------------------

/*Un operador de comparación compara sus operandos y devuelve un valor lógico en función
 de si la comparación es verdadera (true) o falsa (false). Los operandos pueden ser valores numéricos,
 de cadena, lógicos u objetos. Las cadenas se comparan según el orden lexicográfico estándar, 
 utilizando valores Unicode. En la mayoría de los casos, si los dos operandos no son del mismo tipo,
 JavaScript intenta convertirlos a un tipo apropiado para la comparación. Este comportamiento generalmente 
 resulta en comparar los operandos numéricamente.
   
   < menor que
   > mayor que
   <= menor o igual que
   >= mayor o igual que
   == igual que

   */

console.log(true == "true");
console.log( 23 < "40");
console.log( "b" < "A");
console.log( "HOLA" < "Hola");
console.log("Hola"<"123");
console.log("Hola"<"Hola"+1000);
console.log( "23" == 23);

//----------------------------------- Comparacion estricta-----------------------------
/* 
 === estrictamente igual
 !== Estrictamente diferente

*/
console.log( "23" === 23); //false;
console.log( "true" === true);//false;
console.log( "45" !== 45);// true;

// OPerador de asignacacion =
const myNumber = 34;

//Desestructuración (Desestructuring)
/* 
Es una expresion de JS que hace posible extraer datos de arreglso u objetos y 
nos ayuda a realizar asignaciones mas complejas */

let dataA = 10;
let dataB = 20;
console.log(`a: ${dataA}, b:${dataB}`);
// Quiero cambiar los datos
/*
let temporal;

temporal = dataA;
dataA = dataB;
dataB = temporal; 
*/
[dataA, dataB] = [dataB, dataA];
console.log(`a: ${dataA}, b:${dataB}`);

const calificaciones = [50, 80, 100, 30, 70 ];
// dataA = calificaciones[0]; // 50
// dataB = calificaciones[1]; // 80
[ dataA, ,dataB, ...resto  ] = calificaciones;
console.log(`a: ${dataA} , b:${dataB} `);
console.log(resto);

const primeroA = {
    dataA: "43 alumnos",
    dataB: "50 alumnos",
    dataC: "20 alumnos"
};
({dataB, dataA}= primeroA);

console.log(`a: ${dataA}, b: ${dataB}`);

const auto = {
    model: "Chevrolet",
    year: "2023",
    color: "red",
    motor: "2.0"
}

console.log("Modelo: " + auto["model"]); 

//console.log("Modelo: " + model);

// Asignando el calor model del objeto auto e la contante model
// inicializar con un valor por default
//const{model, color auto = "Pistache"} = auto;
//Asignar un nuevo nombre al atributo
const {model, color: colorauto} =auto;
console.log("Modelos: " + model, ",Color: " + colorauto);

//--------------------- ejercicio -------------------------------
/* Hacer una funcion que realice la division de dos numeros
    y me entregue (return) en entero el cociente y residuo*/

    const division = (a, b) =>{
       const div={
        cociente: parseInt(a/b),
        residuo : a%b
       }
        return div;
       //console.log("Cociente: "+ cociente , "Residuo " + residuo  );
        
    };

    const{cociente, residuo} =  division(22,3);
    console.log("Cociente: "+ cociente , "Residuo " + residuo  );


