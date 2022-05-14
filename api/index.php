<?php
include_once 'classes/database.php';
include_once 'classes/products.php';
// $user = $_SERVER['dbuser'];
// $password = $_SERVER['dbpass'];

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

$database = new Database();
$dbChannel = $database->getChannel();
$products = new Products($dbChannel);
$productsList = $products->getProductsList();

$response = array();
$index = 0;
foreach($productsList as $productEntry){
    $newEntry = [
        'sku' => $productEntry['sku'],
        'name' => $productEntry['name'],
        'price' => $productEntry['price'],
        'type_id' => $productEntry['type_id'],
        'type_attribute' => $productEntry['type_attribute']
    ];
    array_push($response, $newEntry);
}

header('Content-type: application/json;');
echo json_encode($response);
