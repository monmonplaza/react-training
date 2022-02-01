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
        
        $child->child_id  = filter_var($data["product_id"], FILTER_SANITIZE_STRING);
        $child->child_name  = filter_var($data["product_name"], FILTER_SANITIZE_STRING);
        $child->child_description  = filter_var($data["product_description"], FILTER_SANITIZE_STRING);
        $child->child_amount  = filter_var($data["product_amount"], FILTER_SANITIZE_STRING);
        $child->child_photo  = filter_var($data["product_photo"], FILTER_SANITIZE_STRING);

        $child->child_active  = 1;
        $child->child_created = date("Y-m-d");  
        $child->child_datetime = date("Y-m-d H:i:s");  
        
        $result = checkCreate($child);
        Response::sendResponse(true, "Create child success.",  $result);
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");

    }

  