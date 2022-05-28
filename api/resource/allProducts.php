<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require '../classes/Products.php';
require '../classes/ResponseManager.php';

$products = new Products();
$response = new ResponseManager();

$productsList = $products->getAll();
$response->sendJSON($productsList);
