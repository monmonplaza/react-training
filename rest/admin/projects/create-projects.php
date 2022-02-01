<?php
    try {
        include_once("../../common/package.php");
        include_once("Projects.php");
        include_once("functions-projects.php");       
        
        $body = file_get_contents("php://input");       
        $data = json_decode($body, true);               
        $connection = checkConnection();
        checkInputData($data);  
        $project = new Projects($connection);
        
        $project->project_id  = filter_var($data["product_id"], FILTER_SANITIZE_STRING);
        $project->project_name  = filter_var($data["product_name"], FILTER_SANITIZE_STRING);
        $project->project_description  = filter_var($data["product_description"], FILTER_SANITIZE_STRING);
        $project->project_amount  = filter_var($data["product_amount"], FILTER_SANITIZE_STRING);
        $project->project_photo  = filter_var($data["product_photo"], FILTER_SANITIZE_STRING);

        $project->project_active  = 1;
        $project->project_created = date("Y-m-d");  
        $project->project_datetime = date("Y-m-d H:i:s");  
        
        $result = checkCreate($project);
        Response::sendResponse(true, "Create project success.",  $result);
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");

    }

  