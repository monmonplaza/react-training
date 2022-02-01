<?php
    try {
        include_once("../../common/package.php");
        include_once("Users.php");
        include_once("functions-users.php"); 
        $body = file_get_contents("php://input");       
        $data = json_decode($body, true);
        $connection = checkConnection();
        $users = new Users($connection);
        $result = checkReadAll($users);
        $data = getResultData($result);
         Response::sendResponse(true, "Users data found", $data);
    } catch (Error $e) {
        Response::sendResponse(false, "Requests interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");

    }

  