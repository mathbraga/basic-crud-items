<?php


include_once '../abstracts/Assets.php';
include_once 'Database.php';

class Products extends Assets{
    private $database;
    private $newSKU;
    private $newName;
    private $newPrice;
    private $newType;
    private $newAttribute;

    public function __construct(){
        $this->database = new Database();
    }

    public function setNewId($newId){
        $this->newSKU = $newId;
    }

    public function setNewName($newName){
        $this->newName = $newName;
    }

    public function setNewPrice($newPrice){
        $this->newPrice = $newPrice;
    }

    public function setNewType($newType){
        $this->newType = $newType;
    }

    public function setNewAttribute($newAttribute){
        $this->newAttribute = $newAttribute;
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
            'sku' => $this->newSKU,
            'name' => $this->newName,
            'price' => $this->newPrice,
            'type_id' => $this->newType,
            'type_attribute' => $this->newAttribute
        ];
        $result = $this->database->executeQuery($query, $queryParams);
    }
}
