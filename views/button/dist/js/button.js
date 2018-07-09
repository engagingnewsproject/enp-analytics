const buttonServer = axios.create({
  baseURL: window.location.origin + '/engaging-buttons',
  timeout: 5000
});

var app = new Vue({
  el: '#app',
  data: {
    errored: false,
    error: false,
    loading: true,
    page: currentPage,
    sites: sites,
    site: site,
    search: ''
  },
  mounted() {
    this.loading = false;
  },
  methods: {
    goToSite: function (site) {
      // set the site
      this.loading = true;
      encodedSiteURL = encodeURIComponent(site.url);

      buttonServer.get('/sites/' + encodedSiteURL + '?format=json').then(response => {
        this.page = 'site';
        // set the window location in the url
        window.history.pushState('', '', window.location.href + '/' + encodedSiteURL);
        this.site = response.data;
      }).catch(error => {
        console.error(error);
        this.errored = true;
        this.error = error;
      }).finally(() => {
        this.loading = false;
      });
    },
    goToSites: function () {
      // unset site variable
      this.loading = true;
      this.site = undefined;
      this.page = 'sites';
      this.site = undefined;
      // set our url back
      //window.history.pushState('', '', window.location.origin + '/sites';
      this.loading = false;
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
          return i;
        }
      }
      return undefined;
    }
  },
  computed: {
    filteredSites: function () {
      let search = this.search;
      // if it's empty return all sites
      if (search == '') {
        return this.sites;
      }

      return this.sites.filter(function (site) {
        return site.url.includes(search);
      });
    }
  }
});