<?php 
namespace Button;
use PDO;
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
/**
* Extremely bare wrapper based on
* http://codereview.stackexchange.com/questions/52414/my-simple-pdo-wrapper-class
* & http://stackoverflow.com/questions/20664450/is-a-pdo-wrapper-really-overkill
* to make opening PDO connections and preparing, binding, and executing connections
* faster.
*
**/

class DB extends PDO {
    public $errors = [];

    public function __construct($user) {
        // check if a connection already exists
        try {
            // set options for PDO connection
            $options = array(
                PDO::ATTR_PERSISTENT => true,
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
            );

            // Load configuration as an array. Use the actual location of your configuration file
            $config = parse_ini_file('config.ini');
            $host = $config['buttonhost'];
            $name = $config['buttondbname'];
            $user = $config['buttonusername'];
            $password = $config['buttonpassword'];
            // create the new connection
            parent::__construct('mysql:host='.$host.';dbname='.$name,
                                $user,
                                $password,
                                $options);
        } catch (\Exception $e) {
            global $log;
            $log->error('Could not connect to database: '.$e->getMessage());
            $this->errors = $e->getMessage();
        }
    }

    public function query($sql, $params = null) {
        $stmt = $this->prepare($sql);
        $stmt->execute($params);
        return $stmt;
    }

    public function fetchOne($sql, $params = []) {
        $stmt = $this->query($sql, $params);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function fetchAll($sql, $params = []) {
        $stmt = $this->query($sql, $params);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function fetchAllColumn($sql, $params = []) {
        $stmt = $this->query($sql, $params);
        return $stmt->fetchAll(PDO::FETCH_COLUMN);
    }

    public function getPosts($siteURL) {

        if(isset($_GET['orderby'])) {
            $orderby = $_GET['orderby'];
        } else {
            $orderby = 'clicks';
        }

        if(isset($_GET['order'])) {
            $order = $_GET['order'];
        } else {
            $order = 'DESC';
        }

        $sql = "SELECT * FROM button_data
                        WHERE site_url = :site_url
                        ORDER BY $orderby $order
                            ";
        $params = array(':site_url'   => $siteURL);

        return $this->fetchAll($sql, $params);
    }

    public function searchSites($siteURL) {

            // we're searching. do LIKE
        $sql = "SELECT DISTINCT site_url
                                     FROM button_data
                                     WHERE  site_url
                                     LIKE concat('%', :site_url, '%')
                        ";
        $params = array(':site_url'   => $siteURL);

        return $this->fetchAll($sql, $params);
    }

    public function btnClickSum($siteURL, $button) {

        $sql = "SELECT SUM(clicks) FROM button_data
                                    WHERE site_url = :site_url
                                    AND button = :button
                        ";
        $params = array(':site_url'   => $siteURL,
                        ':button'   => $button);

        return $this->fetchAll($sql, $params);
    }


    public function getUniqueSites() {
        $sql = "SELECT DISTINCT site_url FROM button_data";
        
        return $this->fetchAll($sql);
    }


    public function getSiteButtons($siteURL) {

        $sql = "SELECT DISTINCT button FROM button_data
                                WHERE site_url = :site_url
                    ";

        $params = array(':site_url'   => $siteURL);
        
        return $this->fetchAll($sql, $params);
    }
}
