$(document).ready(function () {

  // Mostrar solo la sección de inicio al cargar
  $(".seccion").hide();
  $("#inicio").show();

  // --- Menú de navegación ---
  $("#btn-inicio").click(function () {
    $(".seccion").hide();
    $("#inicio").show();
  });

  $("#btn-proyectos").click(function () {
    $(".seccion").hide();
    $("#proyectos").show();
  });

  $("#btn-eventos").click(function () {
    $(".seccion").hide();
    $("#eventos").show();
  });

  $("#btn-contacto").click(function () {
    $(".seccion").hide();
    $("#contacto").show();
  });

  // --- Botón "Ver más" en los proyectos ---
  $(".btn-detalle").click(function () {
    // Busca el párrafo de descripción dentro de la misma tarjeta
    var descripcion = $(this).siblings(".descripcion");
    if (descripcion.is(":visible")) {
      descripcion.hide();
    } else {
      descripcion.show();
    }
  });

  // --- Buscador de proyectos ---
  $("#buscador").on("keyup", function () {
    var texto = $(this).val().toLowerCase();

    $(".proyecto").each(function () {
      var contenido = $(this).text().toLowerCase();
      if (contenido.indexOf(texto) > -1) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  // --- Validación del formulario ---
  $("#formContacto").submit(function (evento) {
    evento.preventDefault(); // Evita recargar la página

    var email = $("#email").val();
    var patron = /^[^@\s]+@[^@\s]+\.[^@\s]+$/; // Patrón básico para email

    if (patron.test(email)) {
      $("#modalConfirmacion").modal("show");
      $("#formContacto")[0].reset();
    } else {
      alert("Por favor, introduce un correo electrónico válido.");
    }
  });

});
