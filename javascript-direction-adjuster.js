/* Javascript direction adjuster 0.1
 * Last update: 2019-02-04
 * Ali Hardan
 *
 * https://ali0.ir/en/projects/javascript-direction-adjuster/
 * https://github.com/ali-hardan/javascript-direction-adjuster/
 */

function javascript_direction_adjuster(){ 
	var elements = document.body.querySelectorAll(":not(li):not(blockquote) > p,blockquote,ol,ul,h1,h2,h3,h4,h5,h6");
	for(i = 0;i < elements.length; i++) {
		elements[i].dir = "auto";
	}

	var elements = document.body.getElementsByTagName("table");
	for(i = 0;i < elements.length; i++) {
		var div = document.createElement("div");
		div.dir = "auto";
		elements[i].parentNode.insertBefore(div, elements[i]);
		div.appendChild(elements[i]);
	}
} 

window.addEventListener('DOMContentLoaded', function(){
	javascript_direction_adjuster();
});
