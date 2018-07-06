<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <title>Engaging Buttons - Sites</title>
    <link rel="stylesheet" href="/views/button/dist/css/style.min.css"/>
</head>
<body>

<div class="visually-hidden" style="position: absolute; width: 0; height: 0;">
	<!-- svg -->
</div>
<div 
	id="app"
	class="app"
    v-bind:class="{
      'app--error': errored,
      'app--loading': loading,
      'app--page': page
    }">

  <section v-if="errored">
    <p>{{ error.message }}</p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>
    <main class="main" v-else>
    	<div class="filter">
    		<label>Search
    			<input v-model="search" v-on:change="filterSites()" class="filter__input" type="text" />
    		</label>
    	</div>
	    <section class="sites">
	    	<div class="site" v-for="(site, index) in filterSites(sites)">
	    		<h3 class="site__url"><a v-bind:href="site.url" class="site__link">{{ site.url }}</a></h3>
	    		<div class="site__buttons">
	    			<table class="site__button">
	    				<thead>
	    					<th>Button</th>
	    					<th>Clicks</th>
	    				</thead>
	    				<tbody>
		    				<tr v-for="(button, index) in site.buttons">
		    					<td>{{ button.slug }}</td>
		    					<td>{{ button.clicks }}</td>
		    				</tr>
		    			</tbody>
	    			</table>
	    		</div>
	    	</div>
		</section>
	</main>
</div>
<!-- development version, includes helpful console warnings -->
<script src="/views/button/dist/js/vue.js"></script>
<script type="text/javascript">
// set the sites var
var sites = <?php echo json_encode($sites);?>
</script>
<script type="text/javascript" src="/views/button/dist/js/button.js"></script>
</body>
</html>
