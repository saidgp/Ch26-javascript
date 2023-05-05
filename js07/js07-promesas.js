console.log("js07 promesas");

/* 
  una promesa (promise) es un obejeto que representa la terminacion o fracaso
  de una operacion asincrona.
  para crear una promesa se usa el constructor new promise();
    
*/

const pinkiPromise = new Promise(  (fncCallBackResolve, fncCallBackRject   ) =>{
    const menorEdad= true;

    if(menorEdad)
    fncCallBackResolve("Hay que estar siempre juntos");
    
    else
    fncCallBackRject("Ni te topo");
});
//consumir las promesas
// usando los metodos then, cath y finally

console.log( "Antes de consumir la promesa " );

pinkiPromise
.then( (si)=> console.log("Promesa Resuelta " + si))
.catch((no) => console.log("Tu promesa fue rechazada " + no));

console.log( "Despues de consumir la promesa" );

//Una promesa que reciba dos numeros y los divida en caso de que b sea 0 
//envie un rechazo diciendo que no se puede realizar la division
const dividir =(a,b)=>{
    const divPromise = new Promise(  (resolve, reject) =>{

    if(b>=1)
    resolve(a/b);
    
    else
    reject("No se puede dividir entre 0");
  });

  return divPromise;
}

dividir(10,2)
  .then((si)=> {
    console.log( si)
    return si+10})
  .then((mas10)=> console.log(mas10))
  .catch((no) => console.log("Tu promesa fue rechazada " + no))
  .finally(()=> console.log("Se realizo la division"));

dividir(10,0)
  .then((si)=> console.log("la respuesta es: " + si))
  .catch((no) => console.log("Tu promesa fue rechazada " + no));

  //---------Consumir las promesas con async y await

  console.log("--------Reolviendo divisiones-----------");

  const divSincrona= async () =>{
    const resultado = await dividir(20,2);
    console.log(resultado);
    console.log(resultado+100);
    console.log("-------Terminando divisiones------------");
  };

  divSincrona()

  console.log("-------Terminando dicisiones------------");

  // ---------------- Manejo de exepciones con try y catch

const manejoDeExepciones = async () =>{
    console.log("----Resolviendo divisiones usando try y catch---->");   
    try {
        const resultadoErroneo = await dividir(20,20) ;
        console.log( resultadoErroneo)
    } catch (error) {
        console.log("Asyn-Await " + error);
        
    }
    console.log("----Terminando divisiones usando try y catch-----");
};

manejoDeExepciones();


const promesaRapida = Promise.resolve(123);

//------------------Resolver con then-----------------------
const consumirThen =() => {
promesaRapida.then((Response)=>console.log("Promesa resuelta con then " + Response));
console.log("456");
}
//---------------- Resolver con try y catch-----------------

const resolucion =async ()=>{
  console.log("Conumir con await "+ await promesaRapida);
  console.log("789");
}