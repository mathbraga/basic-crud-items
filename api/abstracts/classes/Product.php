<?php


require_once '../abstracts/interfaces/IProduct.php';

abstract class Product implements IProduct{
    protected $SKU;
    protected $name;
    protected $price;
    protected $type;

    public function setId($id){
        $this->SKU = $id;
    }

    public function setName($name){
        $this->name = $name;
    }

    public function setPrice($price){
        $this->price = $price;
    }

    public function setType($type){
        $this->type = $type;
    }

    public function getId() : string{
        return $this->SKU;
    }

    public function getName()  : string{
        return $this->name;
    }

    public function getPrice() : string{
        return $this->price;
    }

    public function getType() : int{
        return $this->type;
    }
}
