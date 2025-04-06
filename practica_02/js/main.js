
    $( document ).ready(function(){
        $( "#loginForm").submit(function(event){
            event.preventDefault();

            const username = $("#username").val().trim();
            const password = $("#password").val().trim();

            if(username=="" || password==""){ 
                alert("Llene los campos ");
                return;
            }

            if(username=="velez" && password=="jonavz"){
                alert("Inicio de sesion exitoso")
                location.href = "timeLine.html"

            }else{
                alert("Usuario o contraseña incorrectos")
            }


        });
    });




$(document).ready(function () {
    $("#registroForm").submit(function (event) {
      event.preventDefault();
  
      const username = $("#regUsername").val().trim();
      const password = $("#regPassword").val().trim();
      const confirmPassword = $("#confirmPassword").val().trim();
      const email = $("#email").val().trim();
      const nombre = $("#nombre").val().trim();
      const genero = $("#genero").val();
      const otroGenero = $("#otroGenero").val().trim();
      const fechaNacimiento = $("#fechaNacimiento").val();
  
      if (
        username === "" ||
        password === "" ||
        confirmPassword === "" ||
        email === "" ||
        nombre === "" ||
        genero === "" ||
        fechaNacimiento === ""
      ) {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
      }
  
      if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un correo válido.");
        return;
      }
  
      if (genero === "Otro" && otroGenero === "") {
        alert("Por favor, especifica tu género.");
        return;
      }
  
      const fechaNacimientoObj = new Date(fechaNacimiento);
      const hoy = new Date();
      const edad = hoy.getFullYear() - fechaNacimientoObj.getFullYear();
      const mes = hoy.getMonth() - fechaNacimientoObj.getMonth();
      if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimientoObj.getDate())) {
        edad--;
      }
  
      if (edad < 18) {
        alert("Debes tener al menos 18 años para registrarte.");
        return;
      }
  
      alert("Registro exitoso ");
      location.href = "timeLine.html";
    });
  
    $("#genero").change(function () {
      if ($(this).val() === "Otro") {
        $("#otroGeneroContainer").removeClass("d-none");
      } else {
        $("#otroGeneroContainer").addClass("d-none");
        $("#otroGenero").val("");
      }
    });
  });
  





  $(document).ready(function () {
    $(".btn-like").click(function () {
      const liked = $(this).attr("data-liked") === "true";
      let text = $(this).text();
      let currentLikes = parseInt(text.match(/\d+/)[0]);
  
      if (liked) {
        currentLikes--;
        $(this).text(`❤ ${currentLikes} Likes`);
        $(this).removeClass("btn-danger").addClass("btn-outline-danger");
      } else {
        currentLikes++;
        $(this).text(`❤ ${currentLikes} Likes`);
        $(this).removeClass("btn-outline-danger").addClass("btn-danger");
      }
  
      $(this).attr("data-liked", !liked);
    });
  });