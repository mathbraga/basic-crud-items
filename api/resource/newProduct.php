<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include_once '../classes/Products.php';

$products = new Products();

$products->setId($_POST['sku']);
$products->setName($_POST['name']);
$products->setPrice($_POST['price']);
$products->setType($_POST['productType']);
$products->setAttribute($_POST['attribute']);
$products->addNew();
