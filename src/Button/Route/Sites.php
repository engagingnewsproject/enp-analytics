<?php
namespace Button\Route;
use Button\Site as Site;
use Button\Database as Database;

class Sites extends Route
{
    protected $app,
              $siteURL = false,
              $site;

    public function __construct($app = false) {
        $this->app = $app;
    }

    public function init($request) {
        // build the parent init
        parent::init($request);

        // set site
        $this->siteURL = $request->getAttribute('siteURL');
        if($this->siteURL) {
            $this->site = new Site(urldecode($this->siteURL), $this->db);
        }
        
    }

    public function get($request, $response) {
        // init data
        $this->init($request);

        $view = $this->app->get('view');
        $this->site->setPosts();
        $view->render($response, "button/site.php", [
            'site' => $this->site
        ]);
    }

    public function getAll($request, $response) {
        // init data
        $this->init($request);
        $siteURLs = $this->db->getUniqueSites();

        $this->renderSites($request, $response, $siteURLs);
    }

    public function search($request, $response) {
        $this->init($request);
        $search = $request->getQueryParam('s');

        $sites = $this->db->searchSites($search);

        return $this->renderSites($request, $response, $sites);
    }

    public function renderSites($request, $response, $siteURLs = []) {
        $sites = [];
        foreach($siteURLs as $url) {
            $site = new Site($url['site_url'], $this->db);
            $sites[] = $site->array();
        }
        $view = $this->app->get('view');
        $view->render($response, "button/sites.php", [
            'sites' => $sites
        ]);
    }

}
