function sendDataToServer() {

    var correo = document.getElementById('correoField').value;
    var contrasena = document.getElementById('contrasenaField').value;

    var dataWeb = new URLSearchParams();
    dataWeb.append("ACTION", "LOGIN");
    dataWeb.append('correo', correo);
    dataWeb.append('contrasena', contrasena);
    $.ajax({
        url: 'http://localhost:8080/cafeteriaFinal/Controller',
        data: {
            ACTION: 'LOGIN',
            EMAIL: correo,
            PASS: contrasena
        },
        dataType: 'json',
        async: false,
        success: function (response) {
            if (response.isEmployee){
                isEmployee = true;
                window.location.href = "http://localhost:8080/cafeteriaFinal/intranet/intranet.html";
            }
            if (response.accountLogged) {
                accountCreated = true;
                alert("Account logged successfully!");
                sessionStorage.setItem('email', correo);
                window.location.href = "http://localhost:8080/cafeteriaFinal/mainpage/index.html";
                //window.location.href = "http://localhost:8080/cafeteriaFinal/login/paginalogin.html";
            } else {
                alert("Failed to log account. Please try again.");
            }
        }
    }
    );
}