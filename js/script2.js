// Función de inicio de sesión
function iniciarSesion() {

  let nombre1, contra1;
  nombre1 = document.getElementById('nombre1').value
  contra1 = document.getElementById('contra1').value

  if((nombre1 == localStorage.getItem("nombre")) && (contra1 == localStorage.getItem("contra"))){
    alert("Bienvenido "+ nombre1)
    window.location="paginaprincipal.html"
  }else{
    alert("Datos invalidos")
    alert ("si no tienes una cuenta puedes registrarte abajo")
  }
}