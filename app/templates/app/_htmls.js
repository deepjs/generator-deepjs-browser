if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}
define(["require","deepjs/deep", "deepjs/lib/view"], function (require, deep) {
 	return {
		myFirstView : deep.View({
			route : "/$",
			how:'<div>hello first page</div>',
			where:'dom.htmlOf::#content'
		}),
		mySecondView:deep.View({
			route:"/hello",
			how:'<div>hello second page. <div id="subcontent">No subcontent.</div></div>',
			where:'dom.htmlOf::#content',
			subs:{
				mySub:deep.View({
					route:"./world",
					//what:'test::e1',
					//how:'swig::/templates/simple2.html',
					how:'<span>my subcontent</span>',
					where:'dom.htmlOf::#subcontent',
				})
			}
		})
	}
});
