<?php
    try {
        include_once("../../common/package.php");
        include_once("Children.php");
        include_once("functions-children.php");       
        
        $body = file_get_contents("php://input");       
        $data = json_decode($body, true);               
        $connection = checkConnection();
        checkInputData($data);  
        $child = new Children($connection);
        
        $child->child_id  = filter_var($data["id"], FILTER_SANITIZE_STRING);
        $child->child_datetime = date("Y-m-d H:i:s");  
        
        $result = checkArhive($child);
        Response::sendResponse(true, "Archive child success.",  $result);
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");

    }

  