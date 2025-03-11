<?php
header('Access-Control-Allow-Origin: *');
header("Content-Type: application/xml; charset=UTF-8");
$esquema = filter_input(INPUT_GET, 'esquema', FILTER_VALIDATE_INT);
if ($esquema === null) {
http_response_code(400);
die("No se ha proporcionado un esquema");
}
switch ($esquema) {
case 1:
$opciones = ['red', 'green', 'blue'];
break;
case 2:
$opciones = ['black', 'white', 'orange'];
break;
default:
http_response_code(400);
die("El esquema proporcionado no es válido");
}
$xml = new SimpleXMLElement('<opciones/>');
foreach ($opciones as $opcion)
$xml->addChild('opcion', htmlspecialchars($opcion));
echo $xml->asXML();
?>