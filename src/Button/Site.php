<?php
namespace Button;
use Button\Database as Database;

class Site
{
    protected $url = false,
    		  $db,
              $buttons = [],
              $posts = [];

    public function __construct($url, $db) {
    	$this->db = $db;
        $this->url = $url;
        $this->setButtons();
    }

    protected function setButtons() {

    	$buttons = $this->db->getSiteButtons($this->url);
    	$this->buttons = [];
       	// add in the totals
       	if($buttons) {
       		$i = 0;
       		foreach($buttons as $button) {
       			$clicks = $this->db->btnClickSum($this->url, $button['button'])[0]['SUM(clicks)'];
       			$this->buttons[$i] = [
       				'slug'	=> $button['button'],
       				'clicks' => (int) $clicks
       			];
       			$i++;
       		}
       	}
    }

    public function setPosts() {
    	$this->posts = $this->db->getPosts($this->url);
    }

    public function getURL() {
    	return $this->url;
    }

    public function getButtons() {
    	return $this->buttons;
    }

    public function getPosts() {
    	return $this->posts;
    }

    /**
     * Returns the object as an array for JSON usage
     */
    public function array($removeKeys = []) {
        $removeKeys = array_merge($removeKeys, ['db']);
        $return = [];
        // loop the properties to make it into an array
        foreach($this as $property => $val) {
            $return[$property] = $val;
        }
        // unset the DB property, and anything else
        foreach($removeKeys as $key) {
            unset($return[$key]);
        }

        return $return;
    }

}
