<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('HTTP/1.1 204 No Content');
    exit;
}
// Ruta del archivo JSON donde se almacenan las notas
$filePath = 'notas.json';
// Lee todas las notas existentes del fichero
function getAllNotas($filePath)
{
    if (file_exists($filePath)) {
        $data = file_get_contents($filePath);
        // Se decodifica el JSON en un array asociativo
        $retValue = json_decode($data, true);
        // Por si acaso, se verifica que retValue es un array y que no está vacío
        if (is_array($retValue) && !empty($retValue)) {
            // Ahora se ordena por id
            usort($retValue, function ($a, $b) {
                return $a['id'] <=> $b['id']; // Operador de comparación espaciada (<=>)
            });
        }
        // Se devuelve el array ordenado
        return $retValue;
    }
    // Si el archivo no existe o está vacío, se devuelve un array vacío
    return [];
}
// Obtiene una nota por su ID.
function getNotaById($id, $filePath)
{
    $notas = getAllNotas($filePath);
    // Se usa array_filter con una expresión lambda para filtrar la nota por ID
    $notaFiltrada = array_filter($notas, function ($nota) use ($id) {
        return $nota['id'] == $id;
    });
    // Si se encontró la nota, se devuelve el primer (y único) elemento del array resultante
    return !empty($notaFiltrada) ? array_values($notaFiltrada)[0] : null;
}
//Crea una nueva nota y la guarda en el archivo JSON.
function createNota($texto, $importancia, $filePath)
{
    $notas = getAllNotas($filePath);
    // Genera un nuevo ID único
    $id = isset($notas[count($notas) - 1]['id']) ? $notas[count($notas) - 1]['id'] +
        1 : 1;
    // Crea la nueva nota
    $nuevaNota = [
        'id' => $id,
        'texto' => $texto,
        'importancia' => $importancia
    ];
    // Agrega la nueva nota al array de notas
    $notas[] = $nuevaNota;
    // Guardar las notas actualizadas en el archivo JSON
    file_put_contents($filePath, json_encode($notas, JSON_PRETTY_PRINT));
    return $nuevaNota;
}
// Actualiza una nota existente por su ID.
function updateNotaById($id, $texto, $importancia, $filePath)
{
    $notas = getAllNotas($filePath);
    // Se usa array_map con una expresión lambda para actualizar la nota si coincide con el ID
    $notasActualizadas = array_map(function ($nota) use ($id, $texto, $importancia) {
        if ($nota['id'] == $id) {
            // Actualizamos los campos de la nota
            return [
                'id' => $id,
                'texto' => $texto,
                'importancia' => $importancia
            ];
        }
        return $nota; // Si no coincide el ID, se deja la nota sin cambios
    }, $notas);
    // Guarda las notas actualizadas en el archivo JSON
    file_put_contents($filePath, json_encode($notasActualizadas, JSON_PRETTY_PRINT));
    return getNotaById($id, $filePath);
}
// Elimina una nota por su ID.
function deleteNotaById($id, $filePath)
{
    $notas = getAllNotas($filePath);
    // Deja todas las notas excepto la del ID dado
    $notasFiltradas = array_filter($notas, function ($nota) use ($id) {
        return $nota['id'] != $id;
    });
    // Guarda las notas actualizadas en el archivo JSON
    file_put_contents($filePath, json_encode(
        array_values($notasFiltradas),
        JSON_PRETTY_PRINT
    ));
    return ['message' => "Nota con ID $id eliminada correctamente."];
}
// Procesa las solicitudes según el método HTTP
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        if (isset($_GET['id'])) {
            $id = intval($_GET['id']);
            $nota = getNotaById($id, $filePath);
            echo json_encode($nota ?: ['error' => "No se encontró ninguna nota con ID
$id."]);
        } else {
            $notas = getAllNotas($filePath);
            echo json_encode($notas);
        }
        break;
    case 'POST':
        $input = json_decode(file_get_contents('php://input'), true);
        if (isset($input['texto']) && isset($input['importancia'])) {
            $nuevaNota = createNota(
                $input['texto'],
                $input['importancia'],
                $filePath
            );
            http_response_code(201); // Código de creación exitosa
            echo json_encode($nuevaNota);
        } else {
            http_response_code(400); // Código de error: solicitud incorrecta
            echo json_encode(['error' => 'Datos incompletos para crear la nota.']);
        }
        break;
    case 'PUT':
        $input = json_decode(file_get_contents('php://input'), true);
        if (
            isset($input['id']) && isset($input['texto']) &&
            isset($input['importancia'])
        ) {
            $actualizada = updateNotaById(
                $input['id'],
                $input['texto'],
                $input['importancia'],
                $filePath
            );
            echo json_encode($actualizada);
        } else {
            http_response_code(400); // Código de error: solicitud incorrecta
            echo json_encode(['error' => 'Datos incompletos para actualizar la
nota.']);
        }
        break;
    case 'DELETE':
        $input = json_decode(file_get_contents('php://input'), true);
        if (isset($input['id'])) {
            $resultado = deleteNotaById($input['id'], $filePath);
            echo json_encode($resultado);
        } else {
            http_response_code(400); // Código de error: solicitud incorrecta
            echo json_encode(['error' => 'ID de nota no proporcionado para
eliminar.']);
        }
        break;
    default:
        http_response_code(405); // Método no permitido
        echo json_encode(['error' => 'Método no permitido.']);
}
