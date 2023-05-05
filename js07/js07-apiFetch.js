console.log("js07 apiFetch");

//La api Fetch ayuda a acceder y manipular peticiones HTTP
//Poporciona una forma y facil de obtener recursos de la red de anera ASINCRONA

/* 
Sintaxis:
solicitud get

fetch( url)
.then()
.catch()
*/

const url ="https://fakestoreapi.com/products";

const getProducts = ( httpUrl ) =>{    

    fetch( httpUrl )
        .then( result => {
            console.log("Respuesta: " + result.status );
            return result.json(); // Conversión de JSON a objeto
        })
        .then ( (productsObj)=> {
            console.log(productsObj);

            productsObj.forEach(element => console.log("titulo: " + element.title));


        })
        .catch( error=> console.log(error)  );

};

//getProducts( url );

const getProductsAwair = async (httpUrl) =>{
    const productsJson = await fetch(httpUrl); 
    const products = await productsJson.json();
    console.log(products);

    products.forEach(element => console.log("titulo: " + element.title));
   
};
//getProductsAwair(url);


const getProducstAsync = async ( url ) =>{
    try {
        const response = await fetch(url);
        const productsObj = await response.json();
        console.log(productsObj)
        productsObj.map( (product) => { console.log( product.title )})
    } catch (error) {
        console.log(error)
    }
};
//getProducstAsync(url);

//------------------Realizar una solicitud POST-----------------

const postUSer = (url, userData) => {

    fetch( url, {
        method: `POST`, //PUT o DELETE
        body:JSON.stringify(userData) , //Los datosdel ususario, conversion de objeto a json
        headers : { "Content-Type" : "application/json"}    
    
    })
    .then((response)=>response.json() )
    .then((register)=> console.log(register ))
    .catch((error)=>{console.log(error)});
};

const user ={
    name: "Cochi",
    job: "Loco"
};
const urlPOST = "https://reqres.in/api/users";

postUSer(urlPOST, user);
