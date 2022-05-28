<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require '../classes/RequestManager.php';

$requestManager = new RequestManager();
$requestManager->deleteProducts();
