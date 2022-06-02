<?php


require_once 'Superclasses/Product.php';
require_once '../abstracts/traits/Attribute.php';

class Furniture extends Product{
    use Attribute;
    private $dimensions;

    public function setAttribute($dimensions){
        $this->dimensions = $dimensions;
    }

    public function getAttribute(){
        return $this->dimensions;
    }
}
