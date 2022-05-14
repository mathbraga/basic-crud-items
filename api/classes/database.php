<?php
class Database{
    private $hostname = 'localhost';
    private $dbname = 'devdb';
    private $port = '3306';
    private $username = 'root';
    private $password = '1234';
    private $channel;

    public function getChannel(){
        $dbParameter = "mysql:host={$this->hostname};port={$this->port};dbname={$this->dbname}";

        try{
            $this->channel = new PDO(
                $dbParameter,
                $this->username,
                $this->password
            );
        }catch(PDOException $exception){
            echo "Database Error: $exception->getMessage()";
        }

        return $this->channel;
    }
}