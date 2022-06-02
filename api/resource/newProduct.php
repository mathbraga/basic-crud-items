<?php


require_once '../classes/Managers/RequestManager.php';
require_once '../classes/Managers/ProductMediator.php';

$mediator = new ProductMediator();
$newProduct = $mediator->createNewProduct();

$requestManager = new RequestManager();
$requestManager->addNewProduct($newProduct);
