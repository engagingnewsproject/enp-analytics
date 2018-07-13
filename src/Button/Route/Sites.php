<?php
namespace Button\Route;
use Button\Site as Site;
use Button\Database as Database;

class Sites extends Route
{
    protected $app,
              $siteURL = false,
              $site,
              $sites = [];

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

        $this->site->setPosts();

        return $this->return($this->site->array(), $response);
    }

    public function getAll($request, $response) {
        // init data
        $this->init($request);

        // check for a search query
        $search = $request->getQueryParam('s');

        if($search) {
            $siteURLs = $this->db->searchSites($search);
        } else {
            $siteURLs = $this->db->getUniqueSites();
        }

        $this->returnSites($siteURLs, $request, $response);
    }

    public function returnSites($siteURLs = [], $request, $response) {
        $sites = [];
        foreach($siteURLs as $url) {
            $site = new Site($url['site_url'], $this->db);
            $sites[] = $site->array();
        }
        $this->return($sites, $response);
    }

}
