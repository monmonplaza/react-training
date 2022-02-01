<?php
    try {
        include_once("../../common/package.php");
        include_once("Users.php");
        include_once("functions-users.php"); 
        
        
        $body = file_get_contents("php://input");

       
        $data = json_decode($body, true);
               
        $connection = checkConnection();
        checkInputData($data);  


        $users = new Users($connection);
        $encrypt = new Encryption();
        $users->users_name  = filter_var($data["users_name"], FILTER_SANITIZE_STRING);
        $users->users_email  = filter_var($data["users_email"], FILTER_SANITIZE_STRING);
        
        $users->users_password = $encrypt->doPasswordHash($data["users_password"]);
        $users->users_key =  $encrypt->doHash(rand());

        $users->users_active = 1;
        $users->users_datetime = date("Y-m-d H:i:s");  

        $email = checkReadUsers($users);
        
        $result = checkCreate($users);

        Response::sendResponse(true, "New Users created", $data);
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");

    }

  