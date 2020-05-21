// Datos de Hotel



  $(function(){
  $("#Datosdehotel").click(function(){
  var url = "DatosHotelInput.php"; 
  $('#respuestap').html("<center><div class='preloader centrado'><img src='../../img/iconoloading.png' style='width: 60px; height: auto'></div><p class='centrado'>Espere un Momento...</p></center>");
  $.ajax({
  type: "POST",
  url: url,
  data: $("#formulario").serialize(), 
  success: function(data)
  {
   $("#respuestap").html(data);   }
  });
  return false; 
  });
  });


// Cambiar Contraseña
$(function(){
  $("#cambiocontrasena").click(function(){
  var url = "cambiarpassword.php";
$('#respuestap').html("<center><div class='preloader centrado'><img src='../../img/iconoloading.png' style='width: 60px; height: auto'></div><p class='centrado'>Espere un Momento...</p></center>");
  $.ajax({
  type: "POST",
  url: url,
  data: $("#formulario").serialize(), 
  success: function(data)
  {
   $("#respuestap").html(data); 
  }
  });
  return false; 
  });
  });

// Ayuda
$(function(){
  $("#mesadeayuda").click(function(){
  var url = "ayuda.php";
$('#respuestap').html("<center><div class='preloader centrado'><img src='../../img/iconoloading.png' style='width: 60px; height: auto'></div><p class='centrado'>Espere un Momento...</p></center>");
  $.ajax({
  type: "POST",
  url: url,
  data: $("#formulario").serialize(), 
  success: function(data)
  {
   $("#respuestap").html(data); 
  }
  });
  return false; 
  });
  });

//Habitaciones

 $(function(){
  $("#CrearHabitacion").click(function(){
  var url = "CrearHabitacionInput.php"; 
  $('#respuestap').html("<center><div class='preloader centrado'><img src='../../img/iconoloading.png' style='width: 60px; height: auto'></div><p class='centrado'>Espere un Momento...</p></center>");
  $.ajax({
  type: "POST",
  url: url,
  data: $("#formulario").serialize(), 
  success: function(data)
  {
   $("#respuestap").html(data);   }
  });
  return false; 
  });
  });


//Ofertas

 $(function(){
  $("#CrearOfertas").click(function(){
  var url = "CrearOfertaInput.php"; 
  $('#respuestap').html("<center><div class='preloader centrado'><img src='../../img/iconoloading.png' style='width: 60px; height: auto'></div><p class='centrado'>Espere un Momento...</p></center>");
  $.ajax({
  type: "POST",
  url: url,
  data: $("#formulario").serialize(), 
  success: function(data)
  {
   $("#respuestap").html(data);   }
  });
  return false; 
  });
  });

//Stock

 $(function(){
  $("#CrearStock").click(function(){
  var url = "CrearstockInput.php"; 
  $('#respuestap').html("<center><div class='preloader centrado'><img src='../../img/iconoloading.png' style='width: 60px; height: auto'></div><p class='centrado'>Espere un Momento...</p></center>");
  $.ajax({
  type: "POST",
  url: url,
  data: $("#formulario").serialize(), 
  success: function(data)
  {
   $("#respuestap").html(data);   }
  });
  return false; 
  });
  });

//Mis Pagos

 $(function(){
  $("#CrearMisPagos").click(function(){
  var url = "CrearmispagosInput.php"; 
  $('#respuestap').html("<center><div class='preloader centrado'><img src='../../img/iconoloading.png' style='width: 60px; height: auto'></div><p class='centrado'>Espere un Momento...</p></center>");
  $.ajax({
  type: "POST",
  url: url,
  data: $("#formulario").serialize(), 
  success: function(data)
  {
   $("#respuestap").html(data);   }
  });
  return false; 
  });
  });


//Notificaciones

 $(function(){
  $("#CrearNotificaciones").click(function(){
  var url = "CrearNotificacionesInput.php"; 
  $('#respuestap').html("<center><div class='preloader centrado'><img src='../../img/iconoloading.png' style='width: 60px; height: auto'></div><p class='centrado'>Espere un Momento...</p></center>");
  $.ajax({
  type: "POST",
  url: url,
  data: $("#formulario").serialize(), 
  success: function(data)
  {
   $("#respuestap").html(data);   }
  });
  return false; 
  });
  });



//Notificaciones

 $(function(){
  $("#CrearMensajes").click(function(){
  var url = "CrearMensajesInput.php"; 
  $('#respuestap').html("<center><div class='preloader centrado'><img src='../../img/iconoloading.png' style='width: 60px; height: auto'></div><p class='centrado'>Espere un Momento...</p></center>");
  $.ajax({
  type: "POST",
  url: url,
  data: $("#formulario").serialize(), 
  success: function(data)
  {
   $("#respuestap").html(data);   }
  });
  return false; 
  });
  });

//Crear Puja

 $(function(){
  $("#CrearPuja").click(function(){
  var url = "CrearPujaInput.php"; 
  $('#respuestap').html("<center><div class='preloader centrado'><img src='../../img/iconoloading.png' style='width: 60px; height: auto'></div><p class='centrado'>Espere un Momento...</p></center>");
  $.ajax({
  type: "POST",
  url: url,
  data: $("#formulario").serialize(), 
  success: function(data)
  {
   $("#respuestap").html(data);   }
  });
  return false; 
  });
  });
