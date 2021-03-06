<?php


require_once '../classes/Managers/ResponseManager.php';

class Database{
    private $hostname = 'localhost';
    private $dbname;
    private $username;
    private $password;
    private $channel;
    private $channelReceiver;

    public function __construct(){
        $this->prepareChannel();
    }

    private function prepareChannel(){
        $this->dbname = $_SERVER['dbname'];
        $this->username = $_SERVER['username'];
        $this->password = $_SERVER['password'];
        $dbParameter = "mysql:host={$this->hostname};dbname={$this->dbname}";

        try{
            $this->channel = new PDO(
                $dbParameter,
                $this->username,
                $this->password
            );
        }catch(PDOException $exception){
            http_response_code(500);
            echo "Database Error: $exception->getMessage()";
            exit();
        }
    }

    // $binds is needed to associate variables to specific strings in query string
    public function executeQuery($query, $binds = []){
        $this->channelReceiver = $this->channel->prepare($query);

        $this->channelReceiver->execute($binds);
        $result = $this->channelReceiver->fetchAll(PDO::FETCH_OBJ);

        if($this->channelReceiver->errorInfo()[2]){
            $response = new ResponseManager();
            http_response_code(500);
            $response->sendJSON(['errorCode' => $this->channelReceiver->errorInfo()[1]]);
            exit();
        }

        return $result;
    }
}
