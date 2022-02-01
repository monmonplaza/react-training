<?php
    class Projects {
        public $project_aid  ;
        public $project_id  ;
        public $project_active ;
        public $project_name ;
        public $project_description ;
        public $project_amount ;
        public $project_photo ;
        public $project_created ;
        public $project_datetime ;

        public $connection ;
        public $tblProject;

        public function __construct($db) {
            $this->connection = $db;
            $this->tblProject = "fca_projects";
        }


        public function readAll() {
            $sql = "select * from {$this->tblProject} ";
            $sql .= "where project_active = 1 ";
            $sql .= "order by project_aid  desc ";
            $result = $this->connection->query($sql);

            return $result;
        }

        public function delete() {
            $sql = "delete from {$this->tblProject} "; 
            $sql .= "where project_id  = '{$this->project_id}' ";
            $result = $this->connection->query($sql);
            return $result;
        }

        public function archive() {
            $sql = "update {$this->tblProject} set ";
            $sql .= "project_active = '0', ";
            $sql .= "project_datetime = '{$this->project_datetime}' ";
            $sql .= "where project_id  = '{$this->project_id}' ";
            
            $result = $this->connection->query($sql);
            $c_affected = $this->connection->affected_rows;

            if($c_affected > 0){
                return true;
            }else {
                return false;
            }
        }
        
        public function update() {
            $sql = "update {$this->tblProject} set ";
            $sql .= "project_name = '{$this->project_name}', ";
            $sql .= "project_description = '{$this->project_description}', ";
            $sql .= "project_amount = '{$this->project_amount}', ";
            $sql .= "project_photo = '{$this->project_photo}', ";
            $sql .= "project_datetime = '{$this->project_datetime}' ";
            $sql .= "where project_id  = '{$this->project_id }' ";
            
            $result = $this->connection->query($sql);
            $c_affected = $this->connection->affected_rows;

            if($c_affected > 0){
                return true;
            }else {
                return false;
            }
        }

        public function create() {
            $sql = "insert into {$this->tblProject} ";
            $sql .= "( project_id, ";        
            $sql .= "project_name, "; 
            $sql .= "project_description, "; 
            $sql .= "project_amount, "; 
            $sql .= "project_photo, "; 
            $sql .= "project_active, "; 
            $sql .= "project_created, "; 
            $sql .= "project_datetime ) values ( ";
            $sql .= "'{$this->project_id}', ";
            $sql .= "'{$this->project_name}', ";
            $sql .= "'{$this->project_description}', ";
            $sql .= "'{$this->project_amount}', ";
            $sql .= "'{$this->project_photo}', ";
            $sql .= "'{$this->project_active}', ";
            $sql .= "'{$this->project_created}', ";
            $sql .= "'{$this->project_datetime}' ) ";
            
            $result = $this->connection->query($sql);
            return $result;
        }

    }