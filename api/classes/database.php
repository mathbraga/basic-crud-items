<?php


class Database{
    private $hostname = 'localhost';
    private $dbname = 'devdb';
    // private $dbname = 'id18948548_scandi';
    private $port = '3306';
    private $username = 'root';
    // private $username;
    private $password = '1234';
    // private $password;
    private $channel;
    private $channelReceiver;

    public function __construct(){
        $this->prepareChannel();
    }

    private function prepareChannel(){
        $dbParameter = "mysql:host={$this->hostname};port={$this->port};dbname={$this->dbname}";
        // $dbParameter = "mysql:host={$this->hostname};dbname={$this->dbname}";
        // $this->username = $_SERVER['username'];
        // $this->password = $_SERVER['password'];

        try{
            $this->channel = new PDO(
                $dbParameter,
                $this->username,
                $this->password
            );
        }catch(PDOException $exception){
            echo "Database Error: $exception->getMessage()";
        }
    }

    // $binds param is needed for queries containing external variables
    public function executeQuery($query, $binds = []){
        $this->channelReceiver = $this->channel->prepare($query);

        $this->channelReceiver->execute($binds);
        $result = $this->channelReceiver->fetchAll(PDO::FETCH_OBJ);

        if($this->channelReceiver->errorInfo()[2]){
            http_response_code(500);
            exit();
        }

        return $result;
    }
}
