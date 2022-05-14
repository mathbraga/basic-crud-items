<?php


$database = new Database();
$dbChannel = $database->getChannel();
$products = new Products($dbChannel);
$productsList = $products->getProductsList();

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Content-type: application/json;');
echo json_encode($productsList);
