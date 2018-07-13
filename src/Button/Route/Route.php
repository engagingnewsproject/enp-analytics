<?php
namespace Button\Route;
use Button\DB as DB;

class Route
{
    protected $app,
              $db = false,
              $data = [], // the passed data in the request
              $user = false,
              $errors = [];

    public function __construct($app) {
        $this->app = $app;
    }

    public function init($request) {
         // set the user, if any
        $this->user = $request->getAttribute('user');

        // pass the user to the database. If the user is false, it will connect but all POST/PUT/DELETE requests will be disabled
        $this->db = new DB($this->user);

        // set the data, if any
        $data = $request->getParsedBody();
        if($data) {
            $this->data = $request->getParsedBody();
        }

    }

    public function addError($string) {
        throw new \Error($string);
    }

    public function getErrors() {
        return $this->errors;
    }

    /**
     * Util function for returning a response but checking for errors first
     *
     * @param $return MIXED whatever you want to be JSON encoded for the return
     * @param $response SLIM Response object
     * @return SLIM response
     */
    public function return($return, $response) {

        if($this->getErrors()) {
            $response->getBody()->write(json_encode($this->getErrors()));
        } else {
            $response->getBody()->write(json_encode($return, JSON_NUMERIC_CHECK));
        }
        return $response;
    }

}
