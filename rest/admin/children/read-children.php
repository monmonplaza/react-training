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

        $result = checkReadAll($child);
        $data = getResultData($result);
         Response::sendResponse(true, "Children data found", $data);
    } catch (Error $e) {
        Response::sendResponse(false, "Requests interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");

    }

  