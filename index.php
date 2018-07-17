<?php
// allow all sites to access this file
header('Access-Control-Allow-Origin: *');

require 'vendor/autoload.php';

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$config = [];
$config['displayErrorDetails'] = true;

$config['addContentLengthHeader'] = false;

$app = new \Slim\App(["settings" => $config]);

// Start Laxy CORS //
$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
});
// END Laxy CORS //

// register views
$c = $app->getContainer();

// anytime a throw new Error happens, it'll run through this.

$c['phpErrorHandler'] = function ($c) {
    return function ($request, $response, $error) use ($c) {
        $return = [
            'status'  => 'error',
            'message' => $error->getMessage(),
            'file'  => $error->getFile(),
            'line'  => $error->getLine()
        ];
        return $c['response']
            ->withStatus(500)
            ->withHeader('Content-Type', 'application/json')
            ->write(json_encode($return));
    };
};

// An authentication layer for validating users before passing them through to the route
// $app->add(new \Cme\Authentication());

$app->group('/quiz-creator/api/v1', function() {
    // start a DB connection to the quiz DB
    //$db = new 
    // Individual quiz
    $this->get('/quizzes', '\Quiz\Route\Quizzes:getAll');
    // Individual quiz
    $this->get('/quizzes/{quizID}', '\Quiz\Route\Quizzes:get');
    // Embeds by Quiz - All Quizzes
    $this->get('/embeds', '\Quiz\Route\Embeds:getAll');
    // Embeds by Quiz - One Quiz
    $this->get('/embeds/{quizID}', '\Quiz\Route\Embeds:get');
    // Sites that have embedded quizzes
    $this->get('/sites', '\Quiz\Route\Sites:getAll');
    // Individual Site
    $this->get('/sites/{siteID}', '\Quiz\Route\Sites:get');
});

$app->group('/engaging-buttons/api/v1', function() {
    $this->get('/clicks', '\Button\Route\Clicks:getAll');
    $this->get('/buttons', '\Button\Route\Buttons:getAll');
    // start a DB connection to the button DB
    $this->get('/buttons/{buttonSlug}', '\Button\Route\Buttons:get');

    $this->get('/sites', '\Button\Route\Sites:getAll');
    $this->get('/sites/{siteURL}', '\Button\Route\Sites:get');
});


$app->run();


/*

<html lang="en-US">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name='robots' content='noindex,nofollow' />
        <?  // turn error reporting on
             ini_set('display_errors', 1);
            ini_set('display_startup_errors', 1);
            error_reporting(E_ALL);
            require 'functions.php';
            ?>

        <link rel='stylesheet' href='style.css' type='text/css' media='all' />
    </head>
    <body>
        <? // svg icons ?>
            <svg style="display: none;">
                <symbol id="icon-up" viewBox="0 0 1024 1024">
                    <path d="M495.488 398.464c-13.952 14.272-33.376 15.392-50.432 0l-125.056-119.904-125.056 119.904c-17.056 15.392-36.512 14.272-50.368 0-13.952-14.24-13.056-38.304 0-51.68 12.992-13.376 150.24-144.064 150.24-144.064 6.944-7.136 16.064-10.72 25.184-10.72s18.24 3.584 25.248 10.72c0 0 137.184 130.688 150.24 144.064 13.088 13.376 13.952 37.44 0 51.68z"></path>
                </symbol>
                <symbol id="icon-down" viewBox="0 0 1024 1024">
                    <path d="M144.512 241.536c13.952-14.272 33.376-15.392 50.432 0l125.056 119.904 125.056-119.904c17.056-15.392 36.512-14.272 50.368 0 13.952 14.24 13.056 38.304 0 51.68-12.992 13.376-150.24 144.064-150.24 144.064-6.944 7.136-16.064 10.72-25.184 10.72s-18.24-3.584-25.248-10.72c0 0-137.184-130.688-150.24-144.064-13.088-13.376-13.952-37.44 0-51.68z"></path>
                </symbol>
            
                <symbol id="icon-open" viewBox="0 0 1024 1024">
                	<path class="path1" d="M598 128h298v298h-86v-152l-418 418-60-60 418-418h-152v-86zM810 810v-298h86v298q0 34-26 60t-60 26h-596q-36 0-61-26t-25-60v-596q0-34 25-60t61-26h298v86h-298v596h596z"></path>
                </symbol>
            </svg>
        <? // end svg ?>
        <header class="masthead">
            <h1><a href="<? echo strtok($_SERVER["REQUEST_URI"],'?');?>">Engaging Button Data</a></h1>
            <form action="<? echo strtok($_SERVER["REQUEST_URI"],'?');?>">
                <input type="search" name="s" placeholder="Search by site URL" />
                <button>Search</button>
            </form>
            <? if( isset($_GET['site_url']) || isset($_GET['s']) ) {
                echo '<p class="hint"><a href="'.strtok($_SERVER["REQUEST_URI"],'?').'"><span class="chevron">&lsaquo;</span> Back to All Sites</a></p>';
            }?>
        </header>


        <?
        $main_classes = '';
        if(!isset($_GET['order']) && !isset($_GET['orderby'])) {
            $main_classes = ' main--onload-animate';
        }?>
        <main class="main<? echo $main_classes;?>">

            <?
            if(isset($_GET['s']) || isset($_GET['site_url'])) {
                if(isset($_GET['s'])) {
                    // run a search LIKE query
                    echo '<h2><span class="hint">Results for your search:</span> '. $_GET['s'].'</h2>';
                    $findMatches = searchQuery($_GET['s']);

                    if($findMatches) {
                        echo siteCards($findMatches);
                    }
                } else {
                    // INDIVIDUAL SITE DATA
                    $findMatches = queryTable($_GET['site_url']);

                    if($findMatches) {
                        echo displayTable($findMatches);
                    }
                }

                if(!$findMatches) {
                    echo 'no results found :(';
                }
            } else {

                // HOMEPAGE OVERVIEW
                // Get all site URLs
                $sites = getUniqueSites();
                if($sites) {
                    echo siteCards($sites);
                } else {
                    echo 'No sites found :(';
                }
            }
            ?>
        </main>
    </body>
</html>



*/

?>