<?php


require_once '../../../abstracts/classes/Assets.php';

class Product extends Assets{
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

    public function getId(){
        return $this->SKU;
    }

    public function getName(){
        return $this->name;
    }

    public function getPrice(){
        return $this->price;
    }

    public function getType(){
        return $this->type;
    }
}
