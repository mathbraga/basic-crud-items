<?php


require '../abstracts/Assets.php';
require 'Database.php';

class Products extends Assets{
    private $database;
    private $SKU;
    private $name;
    private $price;
    private $type;
    private $attribute;

    public function __construct(){
        $this->database = new Database();
    }

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

    public function setAttribute($attribute){
        $this->attribute = $attribute;
    }

    public function getAll(){
        $query = 'SELECT * from products_list';
        $rows = $this->database->executeQuery($query);

        return $rows;
    }

    public function addNew(){
        $query = 'INSERT into products_list
                    (sku, name, price, type_id, type_attribute)
                    values(
                        :sku,
                        :name,
                        :price,
                        :type_id,
                        :type_attribute
                    )';
        $queryParams = [
            'sku' => $this->SKU,
            'name' => $this->name,
            'price' => $this->price,
            'type_id' => $this->type,
            'type_attribute' => $this->attribute
        ];
        $result = $this->database->executeQuery($query, $queryParams);
    }

    public function deleteById(){
        $query = 'DELETE FROM products_list WHERE sku = :sku';
        $queryParams = [
            'sku' => $this->SKU
        ];
        $result = $this->database->executeQuery($query, $queryParams);
    }

    public function deleteMultiple($idList){
        foreach($idList as $id){
            $this->setId($id);
            $this->deleteById();
        }
    }
}
