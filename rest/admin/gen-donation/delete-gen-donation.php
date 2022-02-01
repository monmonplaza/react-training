<?php
    try {
        include_once("../../common/package.php");
        include_once("GenDonation.php");
        include_once("functions-gen-donation.php");       
        
        $body = file_get_contents("php://input");       
        $data = json_decode($body, true);               
        $connection = checkConnection();
        checkInputData($data);  
        $genDonation = new GenDonation($connection);
        
        $genDonation->gen_donation_id  = filter_var($data["id"], FILTER_SANITIZE_STRING);
          
        $result = checkDelete($genDonation);
        Response::sendResponse(true, "Delete general donation success.",  $result);
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");

    }

  