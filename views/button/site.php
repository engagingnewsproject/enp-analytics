<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <title>Engaging Buttons - <?php echo $site->getURL();?></title>
    <link rel="stylesheet" href="/views/button/dist/css/style.min.css"/>
</head>
<body>

<div class="visually-hidden" style="position: absolute; width: 0; height: 0;">
    <!-- svgs -->
</div>
<main 
	id="app"
	class="app"
    v-bind:class="{
      'app--error': errored,
      'app--loading': loading
    }">

  <section v-if="errored">
    <p>{{error.message}}</p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>


    <div v-else class="sites" v-for="(site, index) in sites">
    	{{ site.url }}
    </div>
</main>
<!-- development version, includes helpful console warnings -->
<script src="/views/button/dist/js/vue.js"></script>
<script type="text/javascript">
// set the sites var
var site = <?php echo json_encode($site);?>
</script>
<script type="text/javascript" src="/views/button/dist/js/button.js"></script>
</body>
</html>