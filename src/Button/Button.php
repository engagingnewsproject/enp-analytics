<?php
namespace Button;
use Button\Database as Database;

class Button
{
    protected $db,
              $slug = '',
              $name = '',
              $data = [],
              $clicks = [];

    public function __construct($slug, $db) {
    	$this->db = $db;
      $this->slug = $slug;
      $this->name = ucfirst($this->slug);
      $this->setData();
    }

    public function setData() {
      $this->data = [
        [
          'key' => 'Sites',
          'long_key' => 'Total Sites',
          'description' => 'Total sites that have embedded this button',
          'value' => $this->db->getUniqueButtonSitesTotal($this->slug)['total_sites']
        ],
        [
          'key' => 'Pages',
          'long_key' => 'Total Pages',
          'description' => 'Total pages that have embedded this button',
          'value' => $this->db->getUniqueButtonPagesTotal($this->slug)['total_pages']
        ],
        [
          'key' => 'Clicks',
          'long_key' => 'Total Clicks',
          'description' => 'Total of times this button has been clicked',
          'value' => $this->db->getButtonClickSum($this->slug)['clicks']
        ]
      ];
    }

    public function setClicks() {
      $this->clicks = $this->db->getButtonClicks($this->slug);
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
