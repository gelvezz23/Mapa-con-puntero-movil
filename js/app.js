//Login Con Google+
var provider = new firebase.auth.GoogleAuthProvider();

$('#loginG').click(function(){

  firebase.auth().signInWithPopup(provider).then(function(result){
console.log(result.user);
GuardarDatos(result.user);
    var usuario = result.user.displayName;
    var correo = result.user.email;
    var foto = result.user.photoURL;

 $('#correo').append("value ='"+correo+"'");
 $('#imgLog').append("<img style='width:100px;height:100px' src='"+foto+"'/>");
 $('#nombreUsu').append("<h1>usuario : '"+usuario+"' <br> correo : '"+correo+"' </h1>")

$('#correo').val(correo);
$('#nombre').val(usuario);

  });

});


//Login Facebook
var provider2 = new firebase.auth.FacebookAuthProvider();
provider2.addScope('public_profile');
$('#loginF').click(function(){


  firebase.auth().signInWithPopup(provider2).then(function(result) {
  console.log(result.user);
        var usuario = result.user.displayName;
        var correo = result.user.email;
        var foto = result.user.photoURL;

     $('#correo').append("value ='"+correo+"'");
     $('#imgLog').append("<img style='width:100px;height:100px' src='"+foto+"'/>");
     $('#nombreUsu').append("<h1>usuario : '"+usuario+"' <br> correo : '"+correo+"' </h1>")

    $('#correo').val(correo);
    $('#nombre').val(usuario);
});

});


//Login Twitter
var provider3 = new firebase.auth.TwitterAuthProvider();
//provider3.addScope('public_profile');
$('#loginT').click(function(){


  firebase.auth().signInWithPopup(provider3).then(function(result) {
  console.log(result.user);
        var usuario = result.user.displayName;
        var correo = result.user.email;
        var foto = result.user.photoURL;
        var numero = result.user.phoneNumber;


     $('#correo').append("value ='"+correo+"'");
     $('#imgLog').append("<img style='width:100px;height:100px' src='"+foto+"'/>");
     $('#nombreUsu').append("<h1>usuario : '"+usuario+"' <br> correo : '"+correo+"' </h1>")

    $('#correo').val(correo);
    $('#nombre').val(usuario);
});

});




//Guardar en la base de datos

function GuardarDatos(user){

  var usuario =  {
    uid:user.uid,
    nombre:user.displayName,
    correo:user.email,
    foto:user.photoURL
  }

  firebase.database().ref("heyhotel/"+ user.uid).set(usuario)
}
/*Leer de La base de datos
firebase.database().ref("heyhotel").on("child_added", function(s){
var user = s.val();
$('#imgLog').append("<img style='width:100px;height:100px' src='"+user.foto+"'/>");



});*/
