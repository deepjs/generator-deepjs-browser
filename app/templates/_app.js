/**
 * @author Gilles Coomans <gilles.coomans@gmail.com> 
 * @contributors Philippe Delabye <phil@chemicalrules.net>
 */
require.config({
	baseUrl: "./libs",
	catchError: true
});

define([
	"require"
	,"./libs/jquery/dist/jquery.min.js"
	,"./libs/swig/dist/swig.min.js"
	,"./libs/jStorage/jstorage.min.js"
	,"deep-browser/index"
	,"deep-swig/index"
	,"deep-jquery/ajax/json"
	// ,"deep-local-storage/index"
], function(require, jq, sw, jst, deep) {

	deep.jquery.set($);
	//deep.client.Swig.create(); 
	//deep.jquery.JSON.create();
	//deep.store.jstorage.Object.create("appdata")

	deep.route.deepLink({ /* config */ });

	var routes = {
		myFirstView : deep.View({
			route : "/$",
			how:'<div>hello first page</div>',
			where:'dom.htmlOf::#content'
		})
	};

	deep.route(routes)
	.done(function (routes) {
		routes.init();
	});
});