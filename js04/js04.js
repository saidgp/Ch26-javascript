console.log("js04 Arreglos y ciclos");

// Declarar un array;

const nombresCh26 = ["Sofi", "Alejandro", "Ixchel", "Said"]
// Constructor de arreglo
const apellidosCh26 = new Array("Montellano", "Torres", "Vazquez");

const numCajones = new Array(4); //[ , , , ]

// Agregar un nuevo apellid al final del arreglo 
apellidosCh26.push("Ruiz");
console.log(apellidosCh26);


// Matrices (arreglos de 2 dimensiones)
// Arrays anidados
// [ [] , [] , [] ]

const  matriz = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "i", "j", "k"],
    ["x", "y", "z"]
];

console.log("Matriz segundo renglon: " + matriz[1].join(", "))

const personasEnCohortes = [ 
    /*ch26*/    ["Arath"    , "José"  , "Karen"     , "Sofi"  ], 
    /*ch27*/    ["Manuel"   , "María" , "Francisco" , "Pablo", "Pepe" ], 
    /*ch28*/    ["Doris" , "Brendan"   , "Lucas" ] 
    ];
    
    personasEnCohortes[1][3] = "Juan";
    console.log("personas de la ch27: " + personasEnCohortes[1].join(", "));

   /*  for (let i = 0; i < personasEnCohortes.length; i++) {
        console.log(`Indice ${i}: ${personasEnCohortes[i]}`);

        for (let j = 0; j < personasEnCohortes[i].length; j++) {
            console.log(`Indice ${i},${j}: ${personasEnCohortes[i][j]}`);
        }
        
    } */
// Foreach
//    personasEnCohortes.forEach(fila => fila.forEach(columna => console.log(columna)));

// For of
// Ejecura sentencias por cada elemento de un objeto iterable (array, string, objetos)

/* for (let fila of personasEnCohortes){
    for (let columna of fila){
        console.log(columna);
    }
} */

//-----------------------Consideraciones para el ciclo for----------------------
// no es necesario indicar el inicio, la comparacion y la expresion final

//----------------------Ejercicio--------------------------
// iterar y mostrar a las perdonas en cohorte y deter cuando se encuentr a maria
// se una un label para indicar en el break hacia que ciclo romperé.
/* personas:
for ( fila of personasEnCohortes){
    for ( columna of fila){
        if( columna =="María") break personas;
        console.log(columna);
}
if( columna =="María") break personas;
}
 */


//Continue
/*
Termina la ejecucion de la sentencia en la iteracion actual y continua la ejecucion del ciclo
col la proxima iteracion  (o en el label que se indique).
*/

personas:
for (let fila of personasEnCohortes){
    for (let columna of fila){
        if (columna === "María") continue;


            const concatenacion = "Persona " + columna
            console.log(concatenacion);
    
}
}

//---------------------------------------- Ciclo While-----------------------------
/* 
Crea un bucle que ejecuta una sentencia mientras la condicion especifica sea verdadera

Sintaxix:

while( condicion)
    sentencia;
*/

/* let counter = 0;
while(confirm("¿Quieres continuar?")){
    console.log(`Has continuado ${++counter} ${counter>1? "veces":"vez"}`);
} */

/* const number = [9,5,6,7,8];
let i =0;
while(i<number.length){
    console.log(number[i],)
    i++;
} */
// --------------------- Ciclo do while---------------------------------
/* 
Crea un cuble que ejecute una sentencia hasta que la comprobacion se evalue falsa
Y la condicion se evalua despues de ejecutar la sentencia, por lo que la sentencia 
se ejecuta al menos una vez


do{
    sentencia;
} while(comprobacion);
*/

let iteracion =0;
do{
    iteracion++
    console.log("N. de iteracions do-while "+iteracion);
} while(iteracion<10);

/*
FIFO: First Input, First Output
LIFO: Last Input, First Output
*/

const alimentos = [];

// Usar FIFO
alimentos.push("Manzanas del lunes");
alimentos.push("Manzanas del miercoles");
alimentos.push("Manzanas de hoy");

//Sacar las manzana 
console.log(alimentos);
console.log("sacando las manzanas antiguas "+alimentos.shift());
console.log(alimentos);

//Usar LIFO

const producto=[];
//Temporada navideña
producto.push("Desarmadores");
producto.push("Martillo");
producto.push("Luces de colores");
console.log(producto);
console.log("Sacando el producto mas reciente "+ producto.pop());