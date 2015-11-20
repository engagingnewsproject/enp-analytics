<?
require 'database/db_functions-004cf329-659d-40d4-9c7e-6c2dea495653.php';

function displayTable($findMatches) {

    $i = 0;
    $query_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    if(strpos($query_link,'?') === false) {
        $query_link .= '?'; // set it up for a query
    } else {

        // check to see if orderby and order parameters are there. If so, remove them.
        $query_link = preg_replace("/(orderby=)\w*(&)/", "", $query_link);
        $query_link = preg_replace("/(order=)((ASC)|(DESC))/", "", $query_link);
        $query_link = preg_replace("/(&&)/", "&", $query_link);
        $query_link = str_replace("?&", "?", $query_link);
        $query_link = trim($query_link, "&");// trim & if at end of string
    }
    foreach($findMatches as $row) {
        if($i === 0) {
            $table = '<h3 class="site-url"><a href="'.$row['site_url'].'">'.$row['site_url'].'</a></h3>
             <div class="site-data">
                 <table class="site-data-table">
                    <thead>
                        <th>Button <span class="order-wrap"><a href="'.$query_link.'&orderby=button&order=ASC" class="up"><svg class="icon-up"><use xlink:href="#icon-up"></use></svg></a><a href="'.$query_link.'&orderby=button&order=DESC" class="down"><svg class="icon-down"><use xlink:href="#icon-down"></use></svg></a></span></th>
                        <th>Type <span class="order-wrap"><a href="'.$query_link.'&orderby=post_type&order=ASC" class="up"><svg class="icon-up"><use xlink:href="#icon-up"></use></svg></a><a href="'.$query_link.'&orderby=post_type&order=DESC" class="down"><svg class="icon-down"><use xlink:href="#icon-down"></use></svg></a></span></th>
                        <th class="integer"><span class="order-wrap"><a href="'.$query_link.'&orderby=clicks&order=DESC" class="up"><svg class="icon-up"><use xlink:href="#icon-up"></use></svg></a><a href="'.$query_link.'&orderby=clicks&order=ASC" class="down"><svg class="icon-down"><use xlink:href="#icon-down"></use></svg></a></span> Clicks</th>
                    </thead>
                    <tbody>';
            $i++;
        }

        $table .= '<tr>
                    <td>'.$row['button'].'</td>
                    <td><a href="'.$row['button_url'].'">'.$row['post_type'].'</a></td>
                    <td class="integer">'.$row['clicks'].'</td>
                </tr>';


    }
    $table .= '</tbody>
            </table>
        </div>';

    return $table;
}


function queryTable($site_url) {
    $pdo = db_connect();

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

    $stm = $pdo->prepare("SELECT * FROM button_data
                                WHERE site_url = :site_url
                                ORDER BY $orderby $order
                    ");

    $params = array(':site_url'   => $site_url);
    $stm->execute($params);
    $findMatches = $stm->fetchAll();

    return $findMatches;
}

function btn_click_sum($site_url, $button) {
    $pdo = db_connect();

    $stm = $pdo->prepare("SELECT SUM(clicks) FROM button_data
                                WHERE site_url = :site_url
                                AND button = :button
                    ");

    $params = array(':site_url'   => $site_url,
                    ':button'   => $button);

    $stm->execute($params);
    $findMatches = $stm->fetchAll();

    return $findMatches[0][0];
}


function getUniqueSites() {
    $pdo = db_connect();
    $stm = $pdo->prepare("SELECT DISTINCT site_url FROM button_data");
    $params = array();
    $stm->execute($params);
    $sites = $stm->fetchAll();

    return $sites;
}


function get_site_slugs($site_url) {
    $pdo = db_connect();

    $stm = $pdo->prepare("SELECT DISTINCT button FROM button_data
                            WHERE site_url = :site_url
                ");

    $params = array(':site_url'   => $site_url);
    $stm->execute($params);
    $slugs = $stm->fetchAll();

    return $slugs;
}

function overview_table($site_url) {
    $site_btn_slugs = get_site_slugs($site_url);

    $table = '<div class="flex-item">
        <h3 class="site-url"><a href="?site_url='.$site_url.'">'.$site_url.'</a></h3>
         <div class="site-overview">
             <table class="data-overview">
                <thead>
                    <th>Button</th>
                    <th class="integer">Total Clicks</a>
                </thead>
                <tbody>';

    foreach($site_btn_slugs as $slug) {
        $get_sum = btn_click_sum($site_url, $slug['button']);
        if($get_sum) {
            $table .= '<tr>
                            <td>'.$slug['button'].'</td>
                            <td class="integer">'.$get_sum.'</td>
                        </tr>';
        } else {
            $table .= '<tr>
                            <td>'.$slug['button'].'</td>
                            <td class="integer">0</td>
                        </tr>';
        }
    }

    $table .= '</tbody>
            </table>
        </div>
    </div>';

    return $table;
}
?>
