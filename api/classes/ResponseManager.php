<?php


class ResponseManager{

    public function sendJSON($response){
        header('Content-type: application/json; charset=utf-8');
        echo json_encode($response);
    }

    public function sendHTML($response){
        header('Content-type: text/html; charset=utf-8');
        echo $response;
    }

    public function sendText($response){
        header('Content-type: text/plain; charset=utf-8');
        echo $response;
    }
}
