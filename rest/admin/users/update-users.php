<?php
    try {
        include_once("../../common/package.php");
        include_once("Users.php");
        include_once("functions-users.php"); 

        $body = file_get_contents("php://input");
        $data = json_decode($body, true);

        checkInputData($data);    

        $connection = checkConnection();
        $users = new Users ($connection);
        
        $users->users_aid = filter_var($data["users_aid"], FILTER_SANITIZE_STRING);
        $users->users_name = filter_var($data["users_name"], FILTER_SANITIZE_STRING);
        $users->users_email = filter_var($data["users_email"], FILTER_SANITIZE_STRING);

        $users->users_datetime = date("Y-m-d H:i:s");  
        $users_email_old = filter_var($data["users_email_old"], FILTER_SANITIZE_STRING);

        if($users_email_old != $users->users_email){
            $email = checkDuplicate($users);
        } 
        $result = checkUpdate($users);
        Response::sendResponse(true, "Users successfuly updated.", []);
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");
    }

  