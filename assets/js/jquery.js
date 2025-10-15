$(document).ready(function () {
  $(".seccion").hide();
  $("#inicio").show();

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

  $(".btn-detalle").click(function () {
    var descripcion = $(this).siblings(".descripcion");
    if (descripcion.is(":visible")) {
      descripcion.hide();
    } else {
      descripcion.show();
    }
  });

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

  $("#formContacto").submit(function (evento) {
    evento.preventDefault();

    var email = $("#email").val();
    var patron = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if (patron.test(email)) {
      $("#modalConfirmacion").modal("show");
      $("#formContacto")[0].reset();
    } else {
      alert("Por favor, introduce un correo electrónico válido.");
    }
  });
$(".btn-precio").click(function () {
  $(this).siblings(".precio").slideToggle();
});

});
