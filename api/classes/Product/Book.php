<?php


require_once '../abstracts/classes/Product.php';

class Book extends Product{
    private $weight;

    public function __construct(){
        $this->setType(2);
    }

    public function setAttribute($weight){
        $this->weight = $weight;
    }

    public function getAttribute(){
        return $this->weight;
    }
}
