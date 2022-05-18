<?php


include_once '../classes/Products.php';
include_once '../classes/ResponseManager.php';

$products = new Products();
$response = new ResponseManager();

$productsList = $products->getAll();
$response->sendJSON($productsList);
