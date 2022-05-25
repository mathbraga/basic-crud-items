<?php


abstract class Assets{

    abstract public function setId($id);

    abstract public function setName($name);

    abstract public function setPrice($price);

    abstract public function setType($type);

    abstract public function setAttribute($attribute);

    abstract public function getAll();

    abstract public function addNew();

    abstract public function deleteById();

    abstract public function deleteMultiple($idList);
}
