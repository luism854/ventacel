function registrar(){

  var nombre = document.getElementById('nombre').value;
  var contra = document.getElementById('contra').value;

  localStorage.setItem('nombre', nombre);
  localStorage.setItem('contra', contra);

  window.location = "index.html";
}