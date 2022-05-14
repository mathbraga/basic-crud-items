<?php
class Products{
    private $channel;
    
    function __construct($channel){
        $this->channel = $channel;
    }

    private function executeQuery($query){
        $channelReceiver = $this->channel->prepare($query);
        $channelReceiver->execute();
        $resultRows = $channelReceiver->fetchAll();
        return $resultRows;
    }

    function getProductsList(){
        $query = "SELECT * from products_list";
        $rows = $this->executeQuery($query);
        return $rows;
    }
}
