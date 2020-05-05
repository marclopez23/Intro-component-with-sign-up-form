let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let email=false;

var form = document.getElementById("form");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);



let correo =document.forms["form"]["correo"].value;
function isEmail(){
  if(correo.match(pattern)){
    email=true;
  } else{
    document.getElementById("er-email").innerHTML = "Looks like this is not an email";
  }
  console.log(email);
}

function isEmpty(){
  let nombre =document.forms["form"]["nombre"].value;
  let apellido =document.forms["form"]["apellido"].value;
  let contrasena =document.forms["form"]["contrasena"].value
  console.log(nombre);
  isEmail();
  if(correo.length != 0 && nombre.length != 0 && apellido.length != 0 && contrasena.length != 0){
    alert("ok");
  }else{
    if(correo.length === 0){
      document.getElementById("er-email").innerHTML = "Email cannot be empty";
    }
    if(nombre.length === 0){
      document.getElementById("er-nombre").innerHTML = "First Name cannot be empty";
    }
    if(apellido.length === 0){
      document.getElementById("er-apellido").innerHTML = "Last Name cannot be empty";
    }
    if(contrasena.length === 0){
      document.getElementById("er-contra").innerHTML = "Password cannot be empty";
    }


  }
}
