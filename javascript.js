/* Inicializar las funciones de todos los modulos a cargar la pagina */
$(Document) ready(function () {
  fonction_nom_du_module_1();
  fonction_nom_du_module_2();

});

 /* Inicializar las variables de tiempo de espera para cada modulo */
 //timeout_nom_du_module_1 var ; 
 //timeout_nom_du_module_2 var ;


/* Definicion de la funcion para la nom_du_module_1 modulo */

function nom_du_module_1() {
  $.ajax({
    async: falso,
    type: "GET",
    url: "./ajax.php",
    data: "bloque = nom_du_module_1",
    success: function (html) {
      $("# Nom_du_module_1"), HTML(HTML);
    }
  });

  g = setTimeout("nom_du_module_1 ()", 10000);
}


function horloge() {
  dows = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  now = new Date;
  heure = now.getHours();
  min = now.getMinutes();
  sec = now.getSeconds();
  jour_semaine = dows[now.getDay()];
  jour = now.getDate();
  mois = mois[now.getMonth()];
  annee = now.getFullYear();

  if (sec < 10) { sec0 = "0"; } else { sec0 = ""; }
  if (min < 10) { min0 = "0"; } else { min0 = ""; }
  if (heure < 10) { heure0 = "0"; } else { heure0 = ""; }

  horloge_heure = heure + ":" + min0 + min;
  horloge_date = "<span class='horloge_grey'>" + jour_semaine + "</span> " + jour + " " + mois + " <span class='horloge_grey'>" + annee + "</span>";
  horloge_content = "<div class='horloge_heure'>" + horloge_heure + "</div><div class='horloge_date'>" + horloge_date + "</div>";

  $("#horloge").html(horloge_content);

  horloge_timeout = setTimeout("horloge()", 1000);
}


