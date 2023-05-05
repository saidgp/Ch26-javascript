console.log("sesion js06-formulario");

const refForm =document.forms["registro"];



refForm.addEventListener(`submit`, (event)=>{
    event.preventDefault();
    //console.log(event);
    const email =refForm.elements["inputEmail4"];
    console.log(email.value);

    let user=refForm.elements["inputEmail4"].value + refForm.elements["inputPassword4"].value +refForm.elements["inputAddress"].value;    //console.log(`Email : ${user.value[1]}, Paswword:  ${user.value[2]}, Direccion: ${user.value[3]} `);
    console.log(user);
});
