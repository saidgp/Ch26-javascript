console.log("Sesion 03");

// ----- Declaración de bloque --------------------

{

    let edadSergio = 39, edadLuis = 25;

    /*
    Las variables declaradas con let y const
    solo tendrán alcance(scope) dentro del bloque
    o bloques anidados.

    */
   {
    /*
     bloque anidado
     Si una variable local tiene el mismo nombre de
     una varible global o de bloque superior, la varible
     local oculta las otras variables, para que la variable
     local sea usada.
     */
    
   }

   console.log(`Sergio: ${edadSergio} años`);
    console.log(`Luis ${edadLuis} años`)

}