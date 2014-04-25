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
	,"deep-swig/index"
	,"jStorage/jstorage.min"
	,"deep-browser/index"
	,"deep-jquery/ajax/json"
	,'deepjs/lib/stores/collection',
	,'./app/htmls.js'
	// ,"deep-local-storage/index"
], function(require, deep, jq, sw, jst) {

	deep.jquery.set($);
	deep.Swig(); 
	//deep.jquery.JSON.create();
	//deep.store.jstorage.Object.create("appdata")
	
	deep.route.deepLink({ /* config */ });

	var routes = require("./app/htmls.js");

	/*
	deep.Collection("test", [{ id:"e1", label:"hello" }, { id:"e2", label:"world" }], { 
		properties:{ 
			label:{ type:"string", required:true } 
		},
		additionalProperties:false
	});
	*/

	deep.route(routes)
	.done(function (routes) {
		routes.init();
	});
});