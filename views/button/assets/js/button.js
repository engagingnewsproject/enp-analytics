
var app = new Vue({
  el: '#app',
  data: {
    errored: false,
    error: false,
    loading: true,
    page: 'sites',
    sites: sites,
    site: null,
    search: ''
  },
  mounted() {
    this.loading = false
  },
  methods: {
    filterSites: function() {
    	let search = this.search
    	// if it's empty return all sites
    	if(search == '') {
    		return this.sites
    	}

    	return this.sites.filter(function (site) {
	      return site.url.includes(search)
	    })
    },
    /**
     * Powers most all of the retrieval of data from the tree
     * Searches an array for a key that equals a certain value
     *
     * @param objArray (ARRAY of OBJECTS)
     * @param name (STRING) of the key you're wanting to find the matching value of
     * @param value (MIXED) the value you want to find a match for
     * @return INT of the index that matches or UNDEFINED if not found
     */
    getIndexBy: function (objArray, name, value) {
      for (let i = 0; i < objArray.length; i++) {
        if (objArray[i][name] == value) {
          return i
        }
      }
      return undefined
    }
  }
})
