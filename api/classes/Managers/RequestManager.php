<?php


require_once 'ProductsManager.php';
require_once 'ResponseManager.php';

class RequestManager{

    public function getAllProducts(){
        $productsManager = new ProductsManager();
        $responseManager = new ResponseManager();

        $productsList = $productsManager->getAll();
        $responseManager->sendJSON($productsList);
    }

    public function addNewProduct(Product $product){
        $productsManager = new ProductsManager();

        $product->setId($_POST['sku']);
        $product->setName($_POST['name']);
        $product->setPrice($_POST['price']);
        $product->setAttribute($_POST['attribute']);
        $productsManager->addNew($product);
    }

    public function deleteProducts(){
        $productsManager = new ProductsManager();
        
        $data = $_POST['idList'];
        $decoded = json_decode($data, true);
        $productsManager->deleteMultiple($decoded);
    }

}
