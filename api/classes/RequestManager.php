<?php


require 'Products.php';
require 'ResponseManager.php';

class RequestManager{

    public function getAllProducts(){
        $products = new Products();
        $responseManager = new ResponseManager();

        $productsList = $products->getAll();
        $responseManager->sendJSON($productsList);
    }

    public function addNewProduct(){
        $products = new Products();

        $products->setId($_POST['sku']);
        $products->setName($_POST['name']);
        $products->setPrice($_POST['price']);
        $products->setType($_POST['productType']);
        $products->setAttribute($_POST['attribute']);
        $products->addNew();
    }

    public function deleteProducts(){
        $products = new Products();
        
        $data = $_POST['idList'];
        $decoded = json_decode($data, true);
        $products->deleteMultiple($decoded);
    }

}
