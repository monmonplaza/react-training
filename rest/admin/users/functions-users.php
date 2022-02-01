<?php 

function checkConnection() {
        $db = new Database();
        $connection = $db->getConnection();
        if($connection == null) {
            Response::sendResponse(false, "Database connection error.", $connection);
            exit();
        }
        return $connection;
    }

function checkReadAll($object) {
    $result = $object->readAll();
    if($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records.", []);
        exit();
    }
    return $result;
}

function checkReadLimit($object, $start, $total) {
    $result = $object->readLimit($start, $total);
    if($result->num_rows == 0) {
        Response::sendResponse(true, "Empty records.", []);
        exit();
    }
    return $result;
}

function checkReadById($object) {
    $result = $object->readById();
    if($result->num_rows == 0) {
        Response::sendResponse(true, "Empty Records.", []);
        exit();
    }
    return $result;
}


function checkInputData($data) {
    if(empty($data)) {
        Response::sendResponse(false, "404: Data not found.", []);
        exit();
    }
}

function checkArchive($object) {
    $result = $object->archive();
    if(!$result) {
        Response::sendResponse(false, "There's a problem processing your request.", []);
        exit();
    }
    return $result;
}

function checkCreate($object) {
    $result = $object->create();
    if(!$result) {
        Response::sendResponse(false, "Please check your sql query.", []);
        exit();
    }
    return $result;
}
    
function checkDelete($object) {
    $result = $object->delete();
    if(!$result) {
        Response::sendResponse(false, "Please check your sql query.", []);
        exit();
    }
    return $result;
}


function checkReadUsers($object) {
    $result = $object->checkDuplicate();
    if($result->num_rows > 0) {
        Response::sendResponse(false, "Email already exist", []);
        exit();
    }
    return $result;
}



function checkUpdate($object) {
    $result = $object->update();
    if(!$result) {
        Response::sendResponse(false, "There's a problem processing your request.", []);
        exit();
    }
    return $result;
}

function getResultData($result) {
    $data = [];
    while($row = $result->fetch_assoc()) {
        extract($row);
        $list = [
            "users_aid" => $users_aid,
            "users_name" => $users_name,
            "users_email" => $users_email,
            "users_key" => $users_key,
            "users_password" => $users_password,
            "users_active" => $users_active,
            "users_datetime" => $users_datetime,
            "users_email_old" => $users_email,
        ];
        array_push($data, $list);
    }
    return $data;
}

