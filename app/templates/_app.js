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
	,"deepjs/deep"
	,"jquery/dist/jquery.min"
	,"deep-swig/lib/swig.min"
	,"deep-swig/index"
	,"jStorage/jstorage.min"
	,"deep-browser/index"
	,"deep-jquery/ajax/json"
	// ,"deep-local-storage/index"
], function(require, deep, jq, sw, jst) {

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