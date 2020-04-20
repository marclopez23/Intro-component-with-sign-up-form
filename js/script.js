let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let email=false;

var form = document.getElementById("form");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);




function isEmail(){
  let correo =document.forms["form"]["correo"].value;
  if(correo.match(pattern)){
    email=true;
  }
  console.log(email);
}

function isEmpty(){
  let nombre =document.forms["form"]["nombre"].value;
  let apellido =document.forms["form"]["apellido"].value;
  let contrasena =document.forms["form"]["contrasena"].value
  console.log(nombre);
  isEmail();
  if((email) && (nombre != "" && nombre != "First Name") && (apellido != "" && apellido != "Last Name") && (contrasena != "" && contrasena != "Password") ){
    console.log("ok");
  }else{
    console.log("no");
  }
}
