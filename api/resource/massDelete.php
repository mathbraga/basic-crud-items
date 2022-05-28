<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require '../classes/Products.php';

$products = new Products();
$data = $_POST['idList'];
$decoded = json_decode($data, true);
$products->deleteMultiple($decoded);
