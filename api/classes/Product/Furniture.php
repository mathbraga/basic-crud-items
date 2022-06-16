<?php


require_once '../abstracts/classes/Product.php';

class Furniture extends Product{
    private $dimensions;

    public function __construct(){
        $this->setType(3);
    }

    public function setAttribute($dimensions){
        $this->dimensions = $dimensions;
    }

    public function getAttribute(){
        return $this->dimensions;
    }
}
