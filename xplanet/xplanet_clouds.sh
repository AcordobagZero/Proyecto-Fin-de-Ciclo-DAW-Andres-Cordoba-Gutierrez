#!/bin/sh

$pat=/var/www/html/xplanet/img  # destino de la imagen descargada
$tmp=$pat"tmp_clouds_2048.jpg"  # "tmp_clouds_2048.jpg"
$img=$pat"clouds_2048.jpg"  # nombre del archivo final

rm $tmp   # borrar el archivo temporal de edad

wget -O $tmp http://xplanet.sourceforge.net/clouds/clouds_2048.jpg

if [ -f $tmp ] ; then   # si el archivo se ha descargado ...
  mogrify -resize 2000x1000 $tmp  # redimenssionne la imagen descargada de manera que sea la misma resolucion que el mapa "dia"
  if [ -f $img ] ; then
    rm $img
  fi
  mv $tmp $img  # sustituye a la antigua imagen con el nuevo
  chown -R jarvis:www-data $pat && chmod -R 775 $pat  # cambia los permisos en el archivo
fi

