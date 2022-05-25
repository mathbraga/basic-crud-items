<?php


include_once '../classes/Products.php';

$products = new Products();

$products->setNewId($_POST['sku']);
$products->setNewName($_POST['name']);
$products->setNewPrice($_POST['price']);
$products->setNewType($_POST['type']);
$products->setNewAttribute($_POST['attribute']);
$products->addNew();
