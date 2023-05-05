console.log("Incioo de la asincronia");

//---------------------- Desarrollo sincronico------------------------
const primerPaso = () =>{
    console.log("01- Inicio de mi programa js07");
}
const segundoPaso = () =>{
    console.log("0s- Desarrollo de mi programa js07");
}
const TercerPaso = () =>{
    console.log("03- Fin de mi programa js07");
}
primerPaso();
segundoPaso();
TercerPaso();

//-----------------------Programacion Asincrona--------------------------
// setTimeout()
// Estabece un teporalizador que ejecuta una funcion
// una vez que ezpire el temporalizador

 const dasarrolloAsincrono = ( saludo ) =>{
    console.log("02- Hola " + saludo)
};
const segundoPasoAsincrono = (saludo ) =>{

    setTimeout( dasarrolloAsincrono, 4000, saludo)
    setTimeout((saludoRef) => console.log("Hola "+ saludoRef), 4000, saludo)
    setTimeout(()=>console.log("Hola "+ saludo), 4000,)
}
console.log("------------------------------")
primerPaso();
segundoPasoAsincrono("Ch 26 con 4 s. de delay")
TercerPaso();

//----------------------------------- setInterval --------------------------------
// Ejecuta una funcion de maner reiterada con un tiempo de retardo fijo entre cada llamada.

/* const segundoPasoIntervalo =(saludo) =>{
    setInterval( ()=>console.log("la banda malandra es " + saludo, 2000 ))
}

console.log("----------------setInterval--------------");
primerPaso();
segundoPasoIntervalo("ch26 wu, wu");
TercerPaso(); */

// --------------- Iniciar y Detener----------------------

const refStart=document.getElementById("iniciar");
const refStop=document.getElementById("detener");
const refDate=document.getElementById("fecha");
let idInterval;
refStop.disabled=true;

const disableStart =()=>{
    refStart.disabled =true;
    refStop.disabled = false;
}
const enableStart =()=>{
    refStart.disabled =false;
    refStop.disabled = true;
}

 refStart.addEventListener(`click`, ()=>{
    console.log("Se pulsó iniciar");
    idInterval= setInterval(() => {
        refDate.innerHTML = new Date().toLocaleString();
    }, 1000);
    disableStart();
      });
      


refStop.addEventListener(`click`, ()=>{
    console.log("Se pulsó detener");
    clearInterval(idInterval);
    enableStart ();

})
