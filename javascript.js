$(document).ready(function() {
   horloge(); //Hora
   xplanet();
   ifstat();
   meteo();
});

/* meteo */

var meteo_timeout;

function meteo ()
{
  $.ajax({
    async : false,
    type: "GET",
    url: "./ajax.php",
    data: "block=meteo",
    success: function(html){
      $("#meteo").html(html);
    }
  });

  meteo_timeout = setTimeout("meteo()", 3600000);
}

/* horloge */

var horloge_timeout;

function horloge()
{
  dows  = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  mois  = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  now          = new Date;
  heure        = now.getHours();
  min          = now.getMinutes();
  sec          = now.getSeconds();
  jour_semaine = dows[now.getDay()];
  jour         = now.getDate();
  mois         = mois[now.getMonth()];
  annee        = now.getFullYear();

  if (sec < 10){sec0 = "0";}else{sec0 = "";}
  if (min < 10){min0 = "0";}else{min0 = "";}
  if (heure < 10){heure0 = "0";}else{heure0 = "";}

  horloge_heure   = heure + ":" + min0 + min;
  horloge_date    = "<span class='horloge_grey'>" + jour_semaine + "</span> " + jour + " " + mois + " <span class='horloge_grey'>" + annee + "</span>";
  horloge_content = "<div class='horloge_heure'>" + horloge_heure + "</div><div class='horloge_date'>" + horloge_date + "</div>";

  $("#horloge").html(horloge_content);

  horloge_timeout = setTimeout("horloge()", 1000);
}

/* TS3 */


/* PING */


/* VPN */


/* xplanet */

var xplanet_timeout;

function xplanet () {

  var now       = new Date().getTime();
  var img_earth = $("<img />").attr("src", "xplanet/img/xplanet_earth.png?"+now);
  var img_mon   = $("<img />").attr("src", "xplanet/img/xplanet_moon.png?"+now);

  $("#img_earth").attr("src", "xplanet/img/xplanet_earth.png?"+now);
  $("#img_moon").attr("src", "xplanet/img/xplanet_moon.png?"+now);

  xplanet_timeout = setTimeout("xplanet()", 600000);
}

/* ifstat */



