<?php
    class GenDonation {
        public $gen_donation_aid  ;
        public $gen_donation_id  ;
        public $gen_donation_active ;
        public $gen_donation_name ;
        public $gen_donation_description ;
        public $gen_donation_amount ;
        public $gen_donation_photo ;
        public $gen_donation_created ;
        public $gen_donation_datetime ;

        public $connection ;
        public $tblGenDonation;

        public function __construct($db) {
            $this->connection = $db;
            $this->tblGenDonation = "fca_gendonation";
        }


        public function readAll() {
            $sql = "select * from {$this->tblGenDonation} ";
            $sql .= "where gen_donation_active = 1 ";
            $sql .= "order by gen_donation_aid  desc ";
            $result = $this->connection->query($sql);

            return $result;
        }

        public function delete() {
            $sql = "delete from {$this->tblGenDonation} "; 
            $sql .= "where gen_donation_id  = '{$this->gen_donation_id}' ";
            $result = $this->connection->query($sql);
            return $result;
        }

        public function archive() {
            $sql = "update {$this->tblGenDonation} set ";
            $sql .= "gen_donation_active = '0', ";
            $sql .= "gen_donation_datetime = '{$this->gen_donation_datetime}' ";
            $sql .= "where gen_donation_id  = '{$this->gen_donation_id}' ";
            
            $result = $this->connection->query($sql);
            $c_affected = $this->connection->affected_rows;

            if($c_affected > 0){
                return true;
            }else {
                return false;
            }
        }
        
        public function update() {
            $sql = "update {$this->tblGenDonation} set ";
            $sql .= "gen_donation_name = '{$this->gen_donation_name}', ";
            $sql .= "gen_donation_description = '{$this->gen_donation_description}', ";
            $sql .= "gen_donation_amount = '{$this->gen_donation_amount}', ";
            $sql .= "gen_donation_photo = '{$this->gen_donation_photo}', ";
            $sql .= "gen_donation_created = '{$this->gen_donation_created}' ";
            $sql .= "where gen_donation_id  = '{$this->gen_donation_id }' ";
            
            $result = $this->connection->query($sql);
            $c_affected = $this->connection->affected_rows;

            if($c_affected > 0){
                return true;
            }else {
                return false;
            }
        }

        public function create() {
            $sql = "insert into {$this->tblGenDonation} ";
            $sql .= "( gen_donation_id, ";        
            $sql .= "gen_donation_name, "; 
            $sql .= "gen_donation_description, "; 
            $sql .= "gen_donation_amount, "; 
            $sql .= "gen_donation_photo, "; 
            $sql .= "gen_donation_active, "; 
            $sql .= "gen_donation_created, "; 
            $sql .= "gen_donation_datetime ) values ( ";
            $sql .= "'{$this->gen_donation_id}', ";
            $sql .= "'{$this->gen_donation_name}', ";
            $sql .= "'{$this->gen_donation_description}', ";
            $sql .= "'{$this->gen_donation_amount}', ";
            $sql .= "'{$this->gen_donation_photo}', ";
            $sql .= "'{$this->gen_donation_active}', ";
            $sql .= "'{$this->gen_donation_created}', ";
            $sql .= "'{$this->gen_donation_datetime}' ) ";
            
            $result = $this->connection->query($sql);
            return $result;
        }

    }