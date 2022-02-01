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
        
        $project->project_id  = filter_var($data["id"], FILTER_SANITIZE_STRING);
        $project->project_datetime = date("Y-m-d H:i:s");  
        
        $result = checkArhive($project);
        Response::sendResponse(true, "Archive project success.",  $result);
    }catch (Error $e) {
        Response::sendResponse(false, "Request interrupted becuase a system error occured, please contact patrick.reyes@frontlinebusiness.com.ph", "finally");

    }

  