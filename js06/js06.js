console.log("Js06");

const findElementById = (nameDeveloper) =>{
    const titulo=document.getElementById("titulo");
    titulo.innerHTML += nameDeveloper;
};

findElementById( " Said");

const changeSubtittleById = (newTxt) =>{
    const subtitle = document.getElementById("subtitulo");
    subtitle.innerHTML = `${subtitle.innerHTML}, <em>${newTxt}</em>`;
};

changeSubtittleById("Viernes de cholos");

//--------------- Encontrar elementos por su tag ---------------------------
// getElementByTagName()

const changeEmphasis = (newtxt, url) =>{
    const emphasisRef = document.getElementsByTagName("em");
    for (element of emphasisRef){
         element.innerHTML = `<a href="${url}" target="_blank">${newtxt}</a>`;
     }
    };
    
    changeEmphasis("Viernes friki","https://frikishop.com.mx/");

//-------------------------Selector universal------------------
// querySelector


const findElementByQuerySelector =() =>{
    const refElements = document.querySelector("p em");
    refElements.innerHTML= `La Ch 26 es la <strong>chida</strong> y les gusat el 11:11`;
}
    findElementByQuerySelector()

//------------------------ Crear nuevo elemento ------------------------------------
// appendChild

const newElement =() =>{
    const newElementRef = document.createElement("p");
   
    newElementRef.innerHTML = ` A la Ch26 le gusta:
    <ul>  
        <li>Pan de muerto</li>
        <li>El chismesito</li>
        <li>El pozole</li>
        <li>Pizza</li>
        <li>El pulque</li>
    </ul>
    `
    const articleRef= document.querySelector("article");
    articleRef.appendChild(newElementRef);

    //clonar anterior
    //const nodoClonado = articleRef.cloneNode(true);
    //document.querySelector("#second").appendChild(nodoClonado);

}
newElement();

//--------------------- Cambiar color--------------------------

const changeColor= (color) =>{
    const refIntro = document.getElementById("noticias");
    refIntro.style.color = color;
}
 changeColor("red");

 // Agregar a un elemento un border
// .style.border 
// .style.border = "thick solid #0000FF";


const changeBorder= (border) =>{
    const refIntro = document.getElementById("noticias");
    refIntro.style.border  = (`thick solid ${border}`);
}
 changeBorder("gray");

 //------------------------Propiedades de visualizacion (desaparecer elementos)----------------------------
// display: none (Quitar el elmenento del DOM)
// visibility: hidden (Ocultar el elemento).
const quitarBoton= (status) =>{
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.display=status;
}
const ocultarBoton= (status) =>{
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.visibility=status;
}
const reestablecerBoton = () =>{
    quitarBoton(`inline`);
    ocultarBoton(`visible`);

};