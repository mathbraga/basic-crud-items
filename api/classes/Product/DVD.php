<?php


require_once 'Superclasses/Product.php';
require_once '../abstracts/traits/Attribute.php';

class DVD extends Product{
    use Attribute;
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
