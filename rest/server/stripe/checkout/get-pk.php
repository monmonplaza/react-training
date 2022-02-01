<?php
    try {        
        include_once("../../../common/package.php");
        include_once("../../config.php");
        include_once("../functions.php");  

         // GET SOURCE OBJECT
         $body = file_get_contents('php://input');
         checkSourceData($body);        	
 
         // DECODE BODY
         $data = json_decode($body);
         $session = $data->session;
            
    
        echo json_encode(["pk" => STRIPE_PK_LIVE]);
        // echo json_encode(["pk" => STRIPE_PK_TEST]);
    }catch (Error $e) {
        response("Code error", "There is an error on your code.");   
    }
