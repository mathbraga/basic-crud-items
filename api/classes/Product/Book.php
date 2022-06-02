<?php


require_once 'Superclasses/Product.php';
require_once '../../abstracts/traits/Attribute.php';

class Book extends Product{
    use Attribute;
    private $weight;

    public function setAttribute($weight){
        $this->weight = $weight;
    }

    public function getAttribute(){
        return $this->weight;
    }
}
