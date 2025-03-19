<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "diabetesdb";
$conn = new mysqli($servername, $username, $password, $dbname, 3306);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $sql = "SELECT nombre_usuario, nombre, apellidos, fecha_nacimiento FROM usuarios";
    $result = $conn->query($sql);
    $users = [];
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
    echo json_encode($users);
}
// Similar para POST (crear), PUT (actualizar), DELETE (eliminar)
?>

