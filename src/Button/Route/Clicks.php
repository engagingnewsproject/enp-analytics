<?php
namespace Button\Route;
use Button\Database as Database;

class Clicks extends Route
{
    protected $app,
              $clicks;

    public function __construct($app = false) {
        $this->app = $app;
    }

    public function init($request) {
        // build the parent init
        parent::init($request);

        
            
    }


    public function getAll($request, $response) {
        // init data
        $this->init($request);
       
        $page = ( $request->getQueryParam('page') ? $request->getQueryParam('page') : 0);
        $count = ( $request->getQueryParam('count') ? $request->getQueryParam('count') : 100);

        $clicks = $this->db->getClicks($page, $count);

        $this->return($clicks, $response);
    }

}
