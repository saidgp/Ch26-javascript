console.log ("Sesion JS01");

// son 7 Datos primitivos.
// 1.- String: "Hola."
console.log("Tipo de dato String:", "Hola");

// Numbre: 12, -45, 367.12, + Infinity, -Infinity, NaN.
// Los Numericos usan 64 bits para almacenar, pero solo 53 bits para representar el numero.
console.log("Tipo de dato Number:",  12, -45, 367.12, 45/0, -56/0, 56*"hola");
console.log("Valor maximo:", Number.MAX_VALUE);
console.log("MAX_SAFE_INTEGER :", Number.MAX_SAFE_INTEGER);
console.log("MAX_SAFE_INTEGER  + 1:", Number.MAX_SAFE_INTEGER +1);  
console.log("MAX_SAFE_INTEGER  + 2:", Number.MAX_SAFE_INTEGER +2);  
// BigInt
// Sirven para representar valores numericos enteros, de los que el tipo number 
// no puede representar o no es seguro.
let myBigInt= 9007199254740991n; //se agrega n al final
console.log("Valor de dato BigInt:", myBigInt);
console.log("MAX_SAFE_INTEGER + 1n", myBigInt +1n);
console.log("MAX_SAFE_INTEGER + 2n", myBigInt +2n);

// Boolean
// Tenemos solo 2 estados: trye/false
console.log("Tipo de dato boolean: ", true);
console.log("Tipo de dato boolean: ", false);

// Undefined
// Un dato que es declarado, pero no definifo en el tipo
let myVar;
console.log("Tipo de dato Undefined: ", myVar);

// null
// Intensionalmere se borra el tipo de dat
let myVarNull;// Solo se declara
console.log("Tipo de dato myVarNull: ", typeof(myVarNull));
myVarNull = "Saludos cordiales";
console.log("Tipo de dato myVarNull: ", typeof(myVarNull));
myVarNull = null;
console.log("Tipo de dato myVarNull: ", typeof(myVarNull));

// Symbol
// Crea propiedades privadas en los objetos.
//------------------------------------------------

// Tipos de datos Object
// Object:
const misDatos = {
    // Clave: valor
    name: "Said",
    lastname: "Garcia",
    age: 26,
    isBelicoso: false,
    music: {
        rock: "Enemy",
        otro: "Thunder"

    },
    fullName: function namename(){
        return misDatos.name +" "+ misDatos.lastname;
    }

}

console.log("Mis datos son: ", misDatos);
console.log("Mi edad: ",misDatos.age );
console.log("Musica: ", misDatos.music);
console.log("Nombre completo: ", misDatos.fullName());

// Array
// Almacena diferentes tipos de dados, su primer elemento e indice 0

const arreglo = [ 
     1,
     2,
     3,
     4,
     {
        2020: 5,
        2021: 2,
        2022: 3,
        total: 10
    }
];

console.log("Primer elemento: ", arreglo[0]);
console.log("Elemento del segundo año", arreglo[4][2021]);
console.log("Elemento del segundo año", arreglo[4].total);
console.log("Elemento del segundo año", arreglo[4]["total"]);
console.log("Elemento del segundo año", arreglo[4]["2021"]);

console.log("Conrtiene el num 4", arreglo.indexOf(4)>-1);

//-----------------------------------------------------------
// Conversion de datos

const myNumber = 420;
console.log("Num. minutos de la sesion " + myNumber);
// toString
const myNumberTxt = String(myNumber);
console.log("Num. minutos de la sesion " + myNumberTxt);

// toNumber
const myString = "420";
const suma = 80 + Number(myString);
console.log("Resultado de suma: " + suma);

// toParseInt
const myStringInt = "420 020";
const sumaInt = 80 + parseInt(myStringInt)
console.log("Resultado de suma int: " + sumaInt);

// toParseFloat
