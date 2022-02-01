<?php
    class Children {
        public $child_aid  ;
        public $child_id  ;
        public $child_active ;
        public $child_name ;
        public $child_description ;
        public $child_amount ;
        public $child_photo ;
        public $child_created ;
        public $child_datetime ;

        public $connection ;
        public $tblChildren;

        public function __construct($db) {
            $this->connection = $db;
            $this->tblChildren = "fca_children";
        }


        public function readAll() {
            $sql = "select * from {$this->tblChildren} ";
            $sql .= "where child_active = 1 ";
            $sql .= "order by child_aid  desc ";
            $result = $this->connection->query($sql);

            return $result;
        }

        public function delete() {
            $sql = "delete from {$this->tblChildren} "; 
            $sql .= "where child_id  = '{$this->child_id}' ";
            $result = $this->connection->query($sql);
            return $result;
        }

        public function archive() {
            $sql = "update {$this->tblChildren} set ";
            $sql .= "child_active = '0', ";
            $sql .= "child_datetime = '{$this->child_datetime}' ";
            $sql .= "where child_id  = '{$this->child_id}' ";
            
            $result = $this->connection->query($sql);
            $c_affected = $this->connection->affected_rows;

            if($c_affected > 0){
                return true;
            }else {
                return false;
            }
        }
        
        public function update() {
            $sql = "update {$this->tblChildren} set ";
            $sql .= "child_name = '{$this->child_name}', ";
            $sql .= "child_description = '{$this->child_description}', ";
            $sql .= "child_amount = '{$this->child_amount}', ";
            $sql .= "child_photo = '{$this->child_photo}', ";
            $sql .= "child_datetime = '{$this->child_datetime}' ";
            $sql .= "where child_id  = '{$this->child_id }' ";
            
            $result = $this->connection->query($sql);
            $c_affected = $this->connection->affected_rows;

            if($c_affected > 0){
                return true;
            }else {
                return false;
            }
        }

        public function create() {
            $sql = "insert into {$this->tblChildren} ";
            $sql .= "( child_id, ";        
            $sql .= "child_name, "; 
            $sql .= "child_description, "; 
            $sql .= "child_amount, "; 
            $sql .= "child_photo, "; 
            $sql .= "child_active, "; 
            $sql .= "child_created, "; 
            $sql .= "child_datetime ) values ( ";
            $sql .= "'{$this->child_id}', ";
            $sql .= "'{$this->child_name}', ";
            $sql .= "'{$this->child_description}', ";
            $sql .= "'{$this->child_amount}', ";
            $sql .= "'{$this->child_photo}', ";
            $sql .= "'{$this->child_active}', ";
            $sql .= "'{$this->child_created}', ";
            $sql .= "'{$this->child_datetime}' ) ";
            
            $result = $this->connection->query($sql);
            return $result;
        }

    }