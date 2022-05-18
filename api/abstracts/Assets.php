<?php


abstract class Assets{

    abstract public function setNewId($newId);

    abstract public function setNewName($newName);

    abstract public function setNewPrice($newPrice);

    abstract public function setNewType($newType);

    abstract public function setNewAttribute($newAttribute);

    abstract public function getAll();

    abstract public function addNew();
}
