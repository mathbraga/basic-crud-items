<?php


include_once '../classes/Products.php';

$products = new Products();
$products->deleteMultiple($_POST['idList']);
