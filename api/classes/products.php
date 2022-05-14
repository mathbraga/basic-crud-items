<?php


class Products{
    private $channel;
    
    public function __construct($channel){
        $this->channel = $channel;
    }

    private function executeQuery($query){
        $channelReceiver = $this->channel->prepare($query);
        $channelReceiver->execute();
        $resultRows = $channelReceiver->fetchAll();
        return $resultRows;
    }

    public function getProductsList(){
        $query = "SELECT * from products_list";
        $rows = $this->executeQuery($query);
        return $rows;
    }
}
