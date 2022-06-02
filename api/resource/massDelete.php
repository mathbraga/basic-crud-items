<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once '../classes/Managers/RequestManager.php';

$requestManager = new RequestManager();
$requestManager->deleteProducts();
