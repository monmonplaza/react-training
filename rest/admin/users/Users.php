<?php
class Users {
    public $users_aid  ;
    public $users_name ;
    public $users_email ;
    public $users_datetime ;
    public $users_key ;
    public $users_password ;
    public $users_active ;

    public $connection ;
    public $tblUsers;

    public function __construct($db) {
        $this->connection = $db;
        $this->tblUsers = "fca_users";
    }


    public function readAll() {
        $sql = "select * from {$this->tblUsers} ";
        $sql .= "where users_active = 1 ";
        $sql .= "order by users_aid  desc ";
        $result = $this->connection->query($sql);

        return $result;
    }

    public function delete() {
        $sql = "delete from {$this->tblUsers} "; 
        $sql .= "where users_aid  = '{$this->users_aid }' ";
        $result = $this->connection->query($sql);
        return $result;
    }

    public function archive() {
        $sql = "update {$this->tblUsers} set ";
        $sql .= "users_active = '0', ";
        $sql .= "users_datetime = '{$this->users_datetime}' ";
        $sql .= "where users_aid  = '{$this->users_aid}' ";
        
        $result = $this->connection->query($sql);
        $c_affected = $this->connection->affected_rows;

        if($c_affected > 0){
            return true;
        }else {
            return false;
        }
    }


    public function checkDuplicate() {
        $sql = "select * from {$this->tblUsers} ";
        $sql .= "where users_email = '{$this->users_email}' ";
        $result = $this->connection->query($sql);
        return $result;
    }  

    
    public function update() {
        $sql = "update {$this->tblUsers} set ";
        $sql .= "users_name = '{$this->users_name}', ";
        $sql .= "users_datetime = '{$this->users_datetime}', ";
        $sql .= "users_email = '{$this->users_email}' ";
        $sql .= "where users_aid  = '{$this->users_aid }' ";
        
        $result = $this->connection->query($sql);
        $c_affected = $this->connection->affected_rows;

        if($c_affected > 0){
            return true;
        }else {
            return false;
        }
    }


    public function create() {
        $sql = "insert into {$this->tblUsers} ";
        $sql .= "( users_name, ";        
        $sql .= "users_email, "; 
        $sql .= "users_password, "; 
        $sql .= "users_key, "; 
        $sql .= "users_active, "; 
        $sql .= "users_datetime ) values ( ";
        $sql .= "'{$this->users_name}', ";
        $sql .= "'{$this->users_email}', ";
        $sql .= "'{$this->users_password}', ";
        $sql .= "'{$this->users_key}', ";
        $sql .= "'{$this->users_active}', ";
        $sql .= "'{$this->users_datetime}' ) ";
        
        $result = $this->connection->query($sql);
        return $result;
    }

    
    // public function UpdateSetDefaultPassword() {
    //     $sql = "update {$this->tblSettingUsers} set ";
    //     //$sql .= "employee_account_reset_key = '{$this->employee_account_reset_key}', ";

    //     $sql .= "users_password = '{$this->users_password}', ";
    //     $sql .= "users_email = '{$this->users_email}', ";
    //     $sql .= "users_key = '{$this->users_key}', ";

    //     $sql .= "users_datetime = '{$this->users_datetime}' ";
    //     $sql .= "where users_aid = '{$this->users_aid}' ";

    //     $result = $this->connection->query($sql);
    //     $affected = $this->connection->affected_rows;
    //     return $affected;
    // }

}