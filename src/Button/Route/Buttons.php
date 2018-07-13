<?php
namespace Button\Route;
use Button\Button as Button;
use Button\Database as Database;

class Buttons extends Route
{
    protected $app,
              $buttonSlug = false,
              $button;

    public function __construct($app = false) {
        $this->app = $app;
    }

    public function init($request) {
        // build the parent init
        parent::init($request);

        // set button
        $this->buttonSlug = $request->getAttribute('buttonSlug');
        if($this->buttonSlug) {
            $this->button = new Button($this->buttonSlug, $this->db);
        }
        
    }

    public function get($request, $response) {
        // init data
        $this->init($request);

        $this->button->setClicks();

        return $this->return($this->button->array(), $response);
    }

    public function getAll($request, $response) {
        // init data
        $this->init($request);

        $buttonSlugs = $this->db->getUniqueButtons();

        $this->returnButtons($buttonSlugs, $request, $response);
    }

    public function returnButtons($buttonSlugs = [], $request, $response) {
        $buttons = [];
        foreach($buttonSlugs as $slug) {
            $button = new Button($slug, $this->db);
            $buttons[] = $button->array();
        }
        $this->return($buttons, $response);
    }

}
