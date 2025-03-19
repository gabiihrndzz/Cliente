<?php
header('Content-Type: application/json');

// Simulación de datos de estadísticas
$estadisticas = [
    "media_lenta" => 110,
    "min_lenta" => 90,
    "max_lenta" => 130
];

echo json_encode($estadisticas);
?>
