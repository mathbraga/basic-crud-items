<?php


abstract class Assets{

    abstract protected function setId($id);

    abstract protected function setName($name);

    abstract protected function setPrice($price);

    abstract protected function setType($type);

    abstract protected function getId();

    abstract protected function getName();

    abstract protected function getPrice();

    abstract protected function getType();
}
