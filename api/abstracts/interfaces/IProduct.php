<?php


interface IProduct{
    function setId(string $id);

    function setName(string $name);

    function setPrice(string $price);

    function setType(int $type);

    function getId() : string;

    function getName() : string;

    function getPrice() : string;

    function getType() : int;
}