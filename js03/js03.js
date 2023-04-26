console.log("Sesion Js03");

// ----- Declaración de bloque --------------------

{
    /*
    Las variables declaradas con let y const
    solo tendrán alcance(scope) dentro del bloque
    o bloques anidados.
    */
 let nombre = "Sergio";
 const apellido = "Torres";
 let edadSergio = 39, edadLuis = 25; 
 // let edadSergio = 39;
 // let edadLuis = 25;
 let numCohorteSergio = numCohorteLuis = 26;

   {
    /*
     bloque anidado
     Si una variable local tiene el mismo nombre de
     una varible global o de bloque superior, la varible
     local oculta las otras variables, para que la variable
     local sea usada.
     */
    let nombre = "Luis";
    const apellido = "SP";  
    console.log(`Me llamo ${nombre} ${apellido}`);
    console.log(`Sergio: ${edadSergio} años`); // 39
    console.log(`Luis ${edadLuis} años`) // 25
    console.log(`Sergio cohorte: ${numCohorteSergio} `); // 26
    console.log(`Luis cohorte ${numCohorteLuis} `) // 26

}
console.log(`Me llamo ${nombre} ${apellido}`);
console.log(`Sergio: ${edadSergio} años`); // 39
console.log(`Luis ${edadLuis} años`) // 25
console.log(`Sergio cohorte: ${numCohorteSergio} `); // 26
console.log(`Luis cohorte ${numCohorteLuis} `) // 26
}
//console.log(`Me llamo ${nombre} ${apellido}`); Las variables no estaán definidas
//console.log(`Sergio: ${edadSergio} años`); // Las variables no estaán definidas
//console.log(`Luis ${edadLuis} años`) // Las variables no estaán definidas
/* console.log(`Luis cohorte ${numCohorteLuis} `) // 
console.log(`Sergio cohorte: ${numCohorteSergio} `); // */

//------------------if else-------------------

const temp = 21;
let mensaje;

if (temp == 21) { mensaje = `Temperatura ideal ${temp}`; }
else if( temp>21) { 
  mensaje = `Temperatura de ${temp} grados es caliente`;
} 
else if( temp>40) { 
  mensaje = `Temperatura de ${temp} grados es demasiado caliente caliente`;
} 
else if( temp<21) { 
  mensaje = `Temperatura de ${temp} grados es fría`;
}
else 
  mensaje = `Temperatura de ${temp} grados no existe`;

  console.log(mensaje);
// --------------------- Ejercicio -----------------------------------------
/*
 Preguntar por el númer de mes, del 1 al 12 (prompt o DOM)
 de acuerdo al mes desplegar en un Alert (o en el DOM) la estación del año.

 mes 12, 1, 2 = invierno
 mes 3, 4, 5 = Primavera
 mes 6, 7, 8 = Verano
 mes 9, 10, 11 = Otoño

 Usar if-else
*/
let estacion;

const getEstacion=() => {
 let mes= document.getElementById(`mes`).value;
 
 
  if (mes<3 || mes==12 ){
  estacion= "Invierno";
  }
else if (mes>2 && mes<6){
  estacion= "Primavera";
}
else if (mes>5 && mes<9){
  estacion="Verano";
}
else if (mes>8 && mes<12){
  estacion="Otoño";
}
alert(estacion);
}


//---------------------switch---------------------



const velVentilador= ( velocidad) => {
  let msj;
  switch (velocidad){
    case 0:
      msj = "Apagado";
      break;
    case 1: case 5:
      msj = "Velocidad baja";
      break;
    case 2:
      msj = "Velocidad media";
      break;
      case 3: 
      msj = "Velocidad alta"
    case 4:
      msj = "Velocidad super alta";
      break;
    default:
      msj = "el nivel no existe";
      break;
  }
  return msj;
}
console.log(`La velocidad del ventilador esta en ${velVentilador(5)}`)


//-----------------practctica--------------



const getEst=() => {
  let mes= document.getElementById(`mes1`).value;
  mes=parseInt(mes,10)
  let mj;
 switch (mes){
  case 1: case 2: case 12:
    mj = "La estacion del año es invierno";
    break;
  case 3: case 3: case 5:
    mj = "La estacion del año es Primavera";
    break;
  case 6: case 7: case 8:
    mj = "La estacion del año es Verano";
    break;
    case 9: case 10: case 11:
    mj = "La estacion del año es Otoño"
    break;
  default:
    mj = "Esa estacion no existe";
    break;
}
  const h1 = document.createElement("h3");
  h1.innerText = mj;
  document.body.appendChild(h1);
}

//-------------------------Operador codicional ternario----------------------
// Es el unico operador de JS que tiene tres operandos
// Generalmente se unsa como opcion a la sentecia if else.
// Sintaxis:
// condicion ? expresionSiConcionEsVerdadera : expresionSiCondicionEsFalsa;

const subtotal = 1_000;
const pagoTarjetaCredito = true;
/* let msj;
if(pagoTarjetaCredito) msj = subtotal*1.025
else msj = subtotal*1; */

console.log(`La cuentaes de ${pagoTarjetaCredito ? subtotal*1.025 : subtotal*1} pesos`);

const edad = 15;

//se permite el acceso al americas?

console.log(`Acceso ${edad>=18 ? "permitido" : "Denegado"}`);

/* function saludo(numero) {
  if (numero > 1) {
    saludo(numero - 1);
  }
  console.log("Saludo " + numero);
}

saludo(10); */




const printGreetings = number => {
  let result = (number > 1) ? printGreetings(number-1) : number;
  console.log("Greeting", result);
  return number+1;
};
printGreetings(2);

const saludar = (numero) => {
  numero === 1 ? console.log("Saludo " + numero) : (saludar(numero - 1), console.log("Saludo " + numero));
};

saludar(2);

