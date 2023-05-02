const getSuma=() => {
    let a= document.getElementById(`numer1`).value;
    let b= document.getElementById(`numer2`).value;
    
    a=parseInt(a,10)
    b=parseInt(b,10)
    
    let mj =a+b;
  
    const h1 = document.createElement("col");
    h1.innerText = mj;
    document.body.appendChild(h1);
  }
const getResta=() => {
    let a= document.getElementById(`numer1`).value;
    let b= document.getElementById(`numer2`).value;
    
    a=parseInt(a,10)
    b=parseInt(b,10)
    
    let mj =a-b;
  
    const h1 = document.createElement("h3");
    h1.innerText = mj;
    document.body.appendChild(h1);
  }
const getMulti=() => {
    let a= document.getElementById(`numer1`).value;
    let b= document.getElementById(`numer2`).value;
    
    a=parseInt(a,10)
    b=parseInt(b,10)
    
    let mj =a*b;
  
    const h1 = document.createElement("h3");
    h1.innerText = mj;
    document.body.appendChild(h1);
  }
const getDiv=() => {
    let a= document.getElementById(`numer1`).value;
    let b= document.getElementById(`numer2`).value;
    
    a=parseInt(a,10)
    b=parseInt(b,10)
    
    let mj =a/b;
  
    const h1 = document.createElement("h3");
    h1.innerText = mj;
    document.body.appendChild(h1);
  }