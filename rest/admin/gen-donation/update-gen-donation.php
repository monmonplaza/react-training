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
        
        $genDonation->gen_donation_id  = filter_var($data["product_id"], FILTER_SANITIZE_STRING);
        $genDonation->gen_donation_name  = filter_var($data["product_name"], FILTER_SANITIZE_STRING);
        $genDonation->gen_donation_description  = filter_var($data["product_description"], FILTER_SANITIZE_STRING);
        $genDonation->gen_donation_amount  = filter_var($data["product_amount"], FILTER_SANITIZE_STRING);
        $genDonation->gen_donation_photo  = filter_var($data["product_photo"], FILTER_SANITIZE_STRING);

        $genDonation->gen_donation_datetime = date("Y-m-d H:i:s");  
        
        $result = checkUpdate($genDonation);
        Response::sendResponse(true, "Update general donation success.",  $result);
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");

    }

  