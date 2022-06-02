<?php


require_once 'Superclasses/Product.php';
require_once '../../abstracts/traits/Attribute.php';

class DVD extends Product{
    use Attribute;
    private $size;

    public function setAttribute($size){
        $this->size = $size;
    }

    public function getAttribute(){
        return $this->size;
    }
}
