<?php


require_once '../Database/Database.php';

class ProductsManager{
    private $database;

    public function __construct(){
        $this->database = new Database();
    }

    public function getAll(){
        $query = 'SELECT * from products_list';
        $rows = $this->database->executeQuery($query);

        return $rows;
    }

    public function addNew(Product $product){
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
            'sku' => $product->getId(),
            'name' => $product->getName(),
            'price' => $product->getPrice(),
            'type_id' => $product->getType(),
            'type_attribute' => $product->getAttribute()
        ];
        $result = $this->database->executeQuery($query, $queryParams);
    }

    private function deleteById($id){
        $query = 'DELETE FROM products_list WHERE sku = :sku';
        $queryParams = [
            'sku' => $id
        ];
        $result = $this->database->executeQuery($query, $queryParams);
    }

    public function deleteMultiple($idList){
        foreach($idList as $id){
            $this->deleteById($id);
        }
    }
}
