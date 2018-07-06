<?php
namespace Quiz\Route;
use Quiz\Database as Database;

class Sites extends Route
{
    protected $app,
              $siteID = false,
              $site = false;

    public function __construct($app = false) {
        $this->app = $app;
    }

    public function init($request) {
        // build the parent init
        parent::init($request);

    }

    public function site($request, $response) {
        // init data
        $this->init($request);

        $view = $this->app->get('view');
        $view->render($response, "quiz/site.php", [
            'site' => $this->db->getSite($siteID)
        ]);
    }

}
