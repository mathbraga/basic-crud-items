<?php


require_once '../classes/Product/DVD.php';
require_once '../classes/Product/Book.php';
require_once '../classes/Product/Furniture.php';

class ProductMediator{
    private $productType;
    private $typesList;

    public function __construct(){
        $this->productType = $_POST['productType'];
        $this->createProductsTypeList();
    }

    private function createProductsTypeList(){
        $this->typesList = [
            1 => new DVD(),
            2 => new Book(),
            3 => new Furniture
        ];
    }

    public function createNewProduct(){
        return $this->typesList[$this->productType];
    }
}
