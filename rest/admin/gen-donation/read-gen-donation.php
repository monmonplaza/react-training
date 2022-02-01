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

        $result = checkReadAll($genDonation);
        $data = getResultData($result);
         Response::sendResponse(true, "General Donation data found", $data);
    } catch (Error $e) {
        Response::sendResponse(false, "Requests interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");

    }

  