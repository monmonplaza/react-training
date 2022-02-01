<?php
try{
    include_once("../../common/package.php");
        include_once("Users.php");
        include_once("functions-users.php"); 

        $body = file_get_contents("php://input");
        $data = json_decode($body, true);
        $connection = checkConnection();
        checkInputData($data);  
        $users = new Users ($connection);
        $users->users_aid = filter_var($data["id"], FILTER_SANITIZE_STRING);  
        $result = checkDelete($users);
        Response::sendResponse(true, "users successfuly deleted.",[]);      
    } catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  