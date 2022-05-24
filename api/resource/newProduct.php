<?php


include_once '../classes/Products.php';
include_once '../classes/ResponseManager.php';

$products = new Products();
$response = new ResponseManager();

$products->setNewId($_POST['sku']);
$products->setNewName($_POST['name']);
$products->setNewPrice($_POST['price']);
$products->setNewType($_POST['type']);
$products->setNewAttribute($_POST['attribute']);
$products->addNew();
