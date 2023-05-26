function sendDataToServer() {

    var nombre = document.getElementById('nombreField').value;
    var apellidos = document.getElementById('apellidosField').value;
    var correo = document.getElementById('correoField').value;
    var telefono = document.getElementById('telefonoField').value;
    var contrasena = document.getElementById('contrasenaField').value;

    var dataWeb = new URLSearchParams();
    var accountCreated = false;
    dataWeb.append("ACTION", "REGISTER");
    dataWeb.append('nombre', nombre);
    dataWeb.append('apellidos', apellidos);
    dataWeb.append('correo', correo);
    dataWeb.append('telefono', telefono);
    dataWeb.append('contrasena', contrasena);

    $.ajax({
        url: 'http://localhost:8080/cafeteriaFinal/Controller',
        data: {
            ACTION: 'REGISTER',
            NAME: nombre,
            SURNAME: apellidos,
            MAIL: correo,
            PHONE: telefono,
            PASS: contrasena
        },
        dataType: 'json',
        async: false,
        success: function (response) {
            if (response.accountCreated) {
                accountCreated = true;
                alert("Account created successfully!");
                window.location.href = "http://localhost:8080/cafeteriaFinal/login/paginalogin.html";
            } else {
                // Account creation failed, display error message or take other action
                alert("Failed to create account. Please try again.");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    });



}
/*"http://localhost:8080/cafeteriaFinal/", {
 method: 'POST',
 headers: {
 'Content-Type': 'application/x-www-form-urlencoded'
 },
 body: data.toString()  
 })
 .then(response => {
 if (response.ok) {
 console.log('Data sent to the server successfully.');
 } else {
 // Handle error response
 console.error('Failed to send data to the server.');
 }
 })
 .catch(error => {
 // Handle any errors that occurred during the request
 console.error(error);
 });*/

/* function getPeliculas() {
 $.ajax({
 url: 'Controller',
 data: {
 ACTION: 'PELICULA.FIND_ALL'
 },
 dataType: 'json',
 success: function (responseText) {
 var divPeliculas = document.querySelector(".row");
 var cad = "";
 for (var contador in responseText) {
 var imagenPeli = responseText[contador].url;
 var cadenaBienFormada = "images/" + imagenPeli + ".jpg";
 var idP = responseText[contador].id;
 
 cad += "<div class='col'>";
 cad += "<img src='" + cadenaBienFormada + "'/>";
 cad += "<h2>" +  responseText[contador].titulo + "</h2>";
 
 cad += "<p>" +  responseText[contador].sinopsis + "</p>";
 cad += "</div>";
 }
 divPeliculas.innerHTML = cad;
 }
 });
 }
 */