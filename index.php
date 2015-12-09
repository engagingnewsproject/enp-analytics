
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
            </svg>
        <? // end svg ?>
        <header class="masthead">
            <h1>Engaging Button Data</h1>
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
