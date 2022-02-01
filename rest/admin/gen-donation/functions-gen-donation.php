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

    function checkUpdate($object) {
        $result = $object->update();
        if(!$result) {
            Response::sendResponse(false, "There's a problem processing your request.", []);
            exit();
        }
        return $result;
    }

    function checkArhive($object) {
        $result = $object->archive();
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
                "gen_donation_aid" => $gen_donation_aid,
                "gen_donation_id" => $gen_donation_id,
                "gen_donation_active" => $gen_donation_active,
                "gen_donation_name" => $gen_donation_name,
                "gen_donation_description" => $gen_donation_description,
                "gen_donation_amount" => $gen_donation_amount,
                "gen_donation_photo" => $gen_donation_photo,
                "gen_donation_created" => $gen_donation_created,
                "gen_donation_datetime" => $gen_donation_datetime,
            ];
            array_push($data, $list);
        }
        return $data;
    }

