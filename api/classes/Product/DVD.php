<?php


require_once '../abstracts/classes/Product.php';

class DVD extends Product{
    private $size;

    public function __construct(){
        $this->setType(1);
    }

    public function setAttribute($size){
        $this->size = $size;
    }

    public function getAttribute(){
        return $this->size;
    }
}
